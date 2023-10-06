import moment from 'moment';
import DatePicker from "react-datepicker";
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { submitAction ,dashboardAction} from '@/redux/action';

import { validateJobApplyForm } from '@/Utils/Validation';
import { onlyNumber } from '@/Utils/index';
import { Formik } from 'formik';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

const CareerForm = (props: any) => {
    const  {t} = useTranslation();
    const { job } = props;
    const dispatch = useDispatch();
    const router = useRouter();
    const [Resume, setResume] = useState<any>("");
    const [fileErr, setFileErr] = useState("");
    const cityData = useSelector((state: any) => state.dashboard.city);
    const uploadData = useSelector((state: any) => state.submit.uploadAttachment);
    const initialValue = { Name: "", Mobile: "", JobId: "", Email: "", Experience: "", /* ExperienceOther: "", */ CityId: "", OtherInformation: "" };
    useEffect(() => {
        return () => {
            dispatch(submitAction.blankAttachmentAction({}));
            setResume("");
            setFileErr("");
        }
    }, [])

    const handleImgChange = (event: any) => {
        let file = event.target.files[0];
        if (!file) {
            setResume("");
            /* setFileErr("file upload is required."); */
            dispatch(submitAction.blankAttachmentAction({}));
        } else if (!["application/pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"].includes(file?.type)) {
            setResume("");
            dispatch(submitAction.blankAttachmentAction({}));
            setFileErr("Document should be in .doc/.docx/.pdf format.");
        } else if (file?.size > 1024 * 1024 * 2) {
            setResume("");
            dispatch(submitAction.blankAttachmentAction({}));
            setFileErr("Document size should be less than 2MB.");
        } else {
            setFileErr("");
            const formData: any = new FormData();
            formData.append("AttachmentFile", file);
            formData.append("AttachmentAction", "resume");
            dispatch(submitAction.uploadAttachmentAction(formData));
        }
    }
    useEffect(() => {
        if (uploadData?.AttachmentFileName && uploadData?.AttachmentPath) {
            setResume(`${uploadData?.AttachmentPath}${uploadData?.AttachmentFileName}`);
        }
        return () => { }
    }, [uploadData])

    const handleSubmit = (values: any) => {
        let data: any = { ...values };
        data.Resume = Resume;
        data.SourceUrl = window.location.href;
        /* if (data.Resume) { */
            dispatch(dashboardAction.jobApplyAction(data, history));
            setResume("");
        /* } */
    };
    return (
        /*  <div className="h-services" style={{marginTop: "0px"}}> */
        <div className="bg_lab col-md-12 p-4 mb-4 infobox_wrapper small_form">
            <h5 className="mr-10">{t("apply_now")}<span className="job_date normals"></span></h5>
            <p>{t("get_back_time")}</p>
            <Formik
                initialValues={initialValue}
                enableReinitialize={true}
                validationSchema={validateJobApplyForm}
                onSubmit={(val: any) => {
                    handleSubmit(val);
                }}
                render={({ values, handleChange, errors, touched, handleBlur, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <div className="row align-items-center mt-4">
                            <div className="col-sm">
                                <input type="text" name="Name" className="form-control" placeholder={t("name")} onChange={handleChange} onBlur={handleBlur} value={values?.Name} />
                                {touched?.Name && errors?.Name && <span className="error_message">{t(errors?.Name as any)}</span>}
                            </div>
                            <div className="col-sm mt-4 mt-sm-0">
                                <input type="text" name="Mobile" className="form-control" placeholder={t("mobile_number")} onKeyPress={onlyNumber} onChange={handleChange} onBlur={handleBlur} value={values?.Mobile} />
                                {touched?.Mobile && errors?.Mobile && <span className="error_message">{t(errors?.Mobile as any)}</span>}
                            </div>
                        </div>
                        <div className="row align-items-center mt-4">
                            <div className="col">
                                <input type="text" className="form-control" placeholder={`${t("email")}*`} name="Email" onChange={handleChange} onBlur={handleBlur} value={values?.Email} />
                                {touched?.Email && errors?.Email && <span className="error_message">{t(errors?.Email as any)}</span>}
                            </div>
                        </div>
                        <div className="row align-items-center mt-4">
                            <div className="col">
                                <select className="form-control" name="JobId" id="JobId" onChange={handleChange} onBlur={handleBlur} value={values.JobId}>
                                    <option value="">{`${t("position")}*`}</option>
                                    {job && job?.length > 0 && job?.map((item: any, i: any) => (
                                        <option className="text-uppercase" value={item?.Id} key={i}>{t(item?.JobTitle)}</option>
                                    ))}
                                </select>
                                {touched?.JobId && errors?.JobId && <span className="error_message">{t(errors?.JobId as any)}</span>}
                            </div>
                        </div>
                        <div className="row align-items-center mt-4">
                            <div className="col-sm">
                                <select className="form-control" name="Experience" id="Experience" onChange={handleChange} onBlur={handleBlur} value={values.Experience}>
                                    <option value="">{`${t("experience")}*`}</option>
                                    {Array.from(Array(31).keys())?.map((item: any, i: any) => (
                                        <option className="text-uppercase" value={`${item} ${t("years")}`} key={i}>{`${item} ${t("years")}`}</option>
                                    ))}
                                </select>
                                {touched?.Experience && errors?.Experience && <span className="error_message">{t(errors?.Experience as any)}</span>}
                            </div>
                            <div className="col-sm mt-4 mt-sm-0">
                                <select className="form-control" name="CityId" id="CityId" onChange={handleChange} onBlur={handleBlur} value={values.CityId}>
                                    <option value="">{`${t("city")}*`}</option>
                                    {cityData && cityData.length > 0 && cityData?.map((item: any, i: any) => (
                                        <option className="text-uppercase" value={item?.Id} key={i}>{t(item?.Name)}</option>
                                    ))}
                                </select>
                                {touched?.CityId && errors?.CityId && <span className="error_message">{t(errors?.CityId as any)}</span>}
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-12 mt-4">
                                <label className="form-control"><div className="d-flex justify-content-between up-pad file_custom"><div>{t("upload_resume")}</div><div><img className="scale_booknow" src="/assets/img/upload.png" alt="" /></div></div>
                                    <input type="file" className="form-control" name="file" style={{ display: "none" }} onChange={(e: any) => handleImgChange(e)}
                                        accept="application/pdf, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                                    />
                                </label>
                                {fileErr && <span className="error_message">{fileErr}</span>
                                }
                            </div>
                        </div>
                        <div >{uploadData && uploadData?.AttachmentFileName && <span>{uploadData?.AttachmentFileName}</span>}</div>
                        {/* <div className="row align-items-center">
                            <div className="col mt-4">
                                <textarea className="form-control" placeholder="Experience (Optional)" name="ExperienceOther" onChange={handleChange} onBlur={handleBlur} value={values?.ExperienceOther}></textarea>
                            </div>
                        </div> */}
                        <div className="row align-items-center">
                            <div className="col mt-4">
                                <textarea className="form-control" placeholder={t("other_information")} name="OtherInformation" onChange={handleChange} onBlur={handleBlur} value={values?.OtherInformation}></textarea>
                                {touched?.OtherInformation && errors?.OtherInformation && <span className="error_message">{errors?.OtherInformation as any}</span>}
                            </div>
                        </div>
                        <div className="row text-left my-3">
                            <div className="col">
                                <button type="submit" className="book--hexagon active" /* onClick={() => { Resume == "" && setFileErr("file upload is required.") }} */><span>{t("send_application")}<i className="fa fa-long-arrow-right ml-20" aria-hidden="true"></i></span></button>
                            </div>
                        </div>
                    </form>
                )}
            />
        </div>
        /* </div> */
    )
}

export default CareerForm
