import moment from 'moment';
import DatePicker from "react-datepicker";
import { useParams } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { submitAction } from '../../../redux/action';
import { validateBookingEnquiry } from '@/Utils/Validation';
import { onlyNumber } from '@/Utils';

import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { Formik } from 'formik';


const initialValue = { Name: "", Mobile: "", Gender: "", DOB: null, Address: "" };
const BookingEnquiry = (props: any) => {
    const  {t} = useTranslation();
    const { centerId } = props;
    const { slug } :any = useParams();
    const dispatch = useDispatch();
    const router = useRouter();
    const datepickerRef = useRef(null);
    const [file, setFile] = useState<any[]>([]);
    const [filePath, setFilePath] = useState<any>("");
    const [fileErr, setFileErr] = useState("");
    const cityData = useSelector((state: any) => state.dashboard.city);
    const uploadData = useSelector((state: any) => state.submit.uploadAttachment ? state.submit.uploadAttachment : {});

    useEffect(() => {
        setFile([]);
        setFilePath("");
        dispatch(submitAction.blankAttachmentAction({}));
        return () => {
            dispatch(submitAction.blankAttachmentAction({}));
            setFile([]);
            setFilePath("");
        }
    }, [])

    const handleImgChange = (event: any) => {
        let file = event.target.files[0];
        if (!file) {
            /* setFileErr("file upload is required."); */
        } else if (!["application/pdf", "image/png", "image/jpg", "image/jpeg", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"].includes(file?.type)) {
            setFileErr("Document should be in .doc/.docx/.png/.pdf/.jpg/.jpeg format.");
        } else if (file?.size > 1024 * 1024 * 2) {
            setFileErr("Document size should be less than 2MB.");
        } else {
            setFileErr("");
            const formData: any = new FormData();
            formData.append("AttachmentFile", file);
            formData.append("AttachmentAction", "prescriptions");
            dispatch(submitAction.uploadAttachmentAction(formData));
        }
    }
    useEffect(() => {
        if (uploadData?.AttachmentFileName) {
            let fArr = [...file];
            fArr.push(uploadData?.AttachmentFileName);
            setFile(fArr);
            setFilePath(uploadData?.AttachmentPath);
        }
        return () => { }
    }, [uploadData?.AttachmentFileName])

    const RemoveImg = (img: any) => {
        let arr = [...file];
        const index = arr.indexOf(img);
        if (index > -1) {
            arr.splice(index, 1);
            setFile(arr);
        }
    }

    const handleSubmit = (values: any) => {
        if (centerId) {
            let data: any = { ...values };
            data.DOB = data.DOB && moment(data?.DOB).format("YYYY-MM-DD")
            /* if (file?.length > 0) { */
                data.UploadedPrescriptions = file;
                data.CentreId = centerId;
                data.SourceUrl = window.location.href;
                dispatch(submitAction.bookingEnquiryAction(data, history, slug));
                setFile([]);
                setFilePath("");
            /* } */
        }
    };
    function handleClickDatepickerIcon() {
        const datepickerElement: any = datepickerRef?.current;
        datepickerElement?.setFocus(true);
    }
    return (
        /*  <div className="h-services" style={{marginTop: "0px"}}> */
        <div className="bg_lab col-md-12 p-4 mb-4 infobox_wrapper small_form">
            <h5 className="mr-10">{t("booking_enquiry")}</h5>
            <Formik
                initialValues={initialValue}
                enableReinitialize={true}
                validationSchema={validateBookingEnquiry}
                onSubmit={(val: any) => {
                    handleSubmit(val);
                }}
                render={({ values, handleChange, errors, touched, handleBlur, handleSubmit, setFieldValue }) => (
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input type="text" name="Name" className="form-control" placeholder={t("name")} onChange={handleChange} onBlur={handleBlur} value={values?.Name} />
                            {touched?.Name && errors?.Name && <span className="error_message">{t(errors?.Name as any)}</span>}
                        </div>
                        <div className="form-group">
                            <input type="text" name="Mobile" className="form-control" placeholder={t("mobile_number")} onKeyPress={onlyNumber} onChange={handleChange} onBlur={handleBlur} value={values?.Mobile} />
                            {touched?.Mobile && errors?.Mobile && <span className="error_message">{t(errors?.Mobile as any)}</span>}
                        </div>
                        <div className="form-group row align-items-center">
                            <div className="col-12">
                                <label className="gen_label">{t("gender")}*</label>
                            </div>
                            <div className="col-12">
                                <div className="form-check-inline">
                                    <input className="form-check-input" type="radio" name="Gender" id="flexRadioDefault1" onChange={handleChange} onBlur={handleBlur} value="Male" />
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                    {t("male")}
                                    </label>
                                </div>
                                <div className="form-check-inline">
                                    <input className="form-check-input" type="radio" name="Gender" id="flexRadioDefault2" onChange={handleChange} onBlur={handleBlur} value="Female" />
                                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    {t("female")}
                                    </label>
                                </div>
                                <div className="form-check-inline">
                                    <input className="form-check-input" type="radio" name="Gender" id="flexRadioDefault2" onChange={handleChange} onBlur={handleBlur} value="Other" />
                                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    {t("other")}
                                    </label>
                                </div>
                            </div>
                            <div className="col-12"> {touched?.Gender && errors?.Gender && <span className="error_message">{t(errors?.Gender as any)}</span>}</div>
                        </div>
                        <div className="form-group">
                            <div className="dt_picker">
                                <DatePicker
                                    ref={datepickerRef}
                                    selected={values?.DOB}
                                    className="form-control"
                                    onChange={(value: any) => value && setFieldValue("DOB", value)}
                                    maxDate={new Date()}
                                    dateFormat="dd-MM-yyyy"
                                    showMonthDropdown
                                    showYearDropdown
                                    peekNextMonth
                                    dropdownMode="select"
                                    placeholderText={t("dob")}
                                    onChangeRaw={(e: any) => e.preventDefault()}
                                />
                                <span><img className="scale" src="/assets/img/age.png" alt="" onClick={() => handleClickDatepickerIcon()} /></span>
                            </div>
                            {touched?.DOB && errors?.DOB && <span className="error_message">{t(errors?.DOB as any)}</span>}
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder={t("address_asterisk")} name="Address" onChange={handleChange} onBlur={handleBlur} value={values?.Address} />
                            {touched?.Address && errors?.Address &&<span className="error_message">{t(errors?.Address as any)}</span>}
                        </div>
                        {/* <div className="form-group">
                            <label className="form-control"><div className="d-flex justify-content-between file_custom"><div>{t("upload_prescription_input")}</div><div><img className="scale_booknow" src="/assets/img/upload.png" alt="" style={{ maxHeight: "18px" }} /></div></div>
                                <input type="file" className="form-control" name="file" style={{ display: "none" }} onChange={(e: any) => handleImgChange(e)}
                                    accept="application/pdf,image/png, image/jpg, image/jpeg, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                                />
                            </label>
                            {fileErr && <span className="error_message">{fileErr}</span>}
                        </div>
                        <UploadFilePreview file={file} filePath={filePath} RemoveImg={RemoveImg} setFile={setFile} /> */}
                        <div className="f-10">{t("doc_size")}</div>
                        <button type="submit" className="book--hexagon active sm_form" /* onClick={() => { file?.length == 0 && setFileErr("file upload is required.") }} */ ><span>{t("submit_btn")}<i className="fa fa-long-arrow-right ml-20" aria-hidden="true"></i></span></button>
                    </form>
                )}
            />
        </div>
        /* /</div> */
    )
}

export default BookingEnquiry
