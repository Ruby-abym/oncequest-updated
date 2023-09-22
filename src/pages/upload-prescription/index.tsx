import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { validateUploadPrescription } from '@/Utils/Validation';
import {submitAction } from '../../redux/action';
import { ROUTE } from '@/Const/Route';
import BreadCrumb from '@/Component/Common/BreadCrumb';
import moment from 'moment';
import { GetStaticPropsContext } from 'next';
import DatePicker from "react-datepicker";
import { onlyNumber } from '@/Utils/index';
import UploadFilePreview from '@/Component/Feature/UploadFilePreview/UploadFilePreview';
import { Formik } from 'formik';
import { useTranslation } from 'next-i18next';
import {NextPage } from 'next';
import Api from '@/redux/common/api';
import { SITE_URL, Url } from '@/redux/common/url';
import { NextSeo } from 'next-seo';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';


const initialValue = { FirstName: "", LastName: "", Mobile: "", Gender: "", EmailId: "", CityId: "", DOB: null, Address: "" };

interface MyPageProps {
    seoData:any;
  }
const UploadPrescription: NextPage<MyPageProps> = ({ seoData }) => {
    const  {t} = useTranslation();
    const router = useRouter();
    const dispatch = useDispatch();
    const datepickerRef = useRef(null);
    const [file, setFile] = useState<any[]>([]);
    const [filePath, setFilePath] = useState<any>("");
    const [fileErr, setFileErr] = useState("");
    const cityData = useSelector((state: any) => state.dashboard.city);
    const uploadData = useSelector((state: any) => state.submit.uploadAttachment ? state.submit.uploadAttachment : {});
    const [initialRenderComplete, setInitialRenderComplete] = useState<boolean>(false);
    useEffect(() => {
      setInitialRenderComplete(true);
    }, []);
    // useEffect(() => {
    //     const shouldRedirect = true;
    
    //     if (shouldRedirect) {
    //       window.location.href = 'https://oncquestlabs.com/';
    //     }
    //   });

    useEffect(() => {
        window?.scrollTo(0, 0);
        dispatch(submitAction.blankAttachmentAction({}));
        setFile([]);
        setFilePath("");
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
        } else if (file && !["application/pdf", "image/png", "image/jpg", "image/jpeg", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"].includes(file?.type)) {
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
            let data: any = { ...values };
            data.UploadedPrescriptions = file;
            delete data?.file;
            data.DOB = data?.DOB ? moment(data?.DOB).format("YYYY-MM-DD") : "";
            data.SourceUrl = window.location.href;
            dispatch(submitAction.uploadPrecriptionAction(data, router));
            setFile([]);
            setFilePath("");
    };
    function handleClickDatepickerIcon() {
        const datepickerElement: any = datepickerRef?.current;
        datepickerElement?.setFocus(true);
    }
    if(!initialRenderComplete) return<></>
    return (
        <React.Fragment>
          <NextSeo
       title={seoData?.SeoTitle}
       description={seoData?.SeoDescription}
       canonical={`${SITE_URL}${router.asPath}`}
       openGraph={{
         title:seoData?.SeoTitle,
         description:seoData?.SeoDescription,
         type: "website",
         locale: "en_IE",
         url: `${SITE_URL}${router.asPath}`,
         siteName: "oncquest-lab",
       }}
       twitter={{
         handle: "@handle",
         site: "@site",
         cardType: "summary_large_image",
       }}
       additionalMetaTags={[
         {
           property: "keywords",
           content:seoData?.SeoKeywords
         },
       ]}
    />
            <BreadCrumb page={t("bread_upload_prescription")} data={{ slug: "", path: "" }} />
            <section className="thank-section prescription-bottom">
                <div className="container">
                    <div className="tab-content bgFormImage" style={{backgroundImage: "url(/assets/img/prescription1.png)"}}>
                        <div id="organs" className="tab-pane fade in active show">
                            <div className="row prescription-card">
                                <div className="col-sm-12 col-md-7 col-xl-4 col-lg-6">
                                    <div className="h-services">
                                        <div className="infobox_wrapper">
                                            <h3 className="mr-10">{t("upload_prescription")}</h3>
                                            <div className="ln-1 mr-10">{t("prescription_note")}<br />
                                                {t("prescription_desc")}
                                            </div>
                                            <Formik
                                                initialValues={initialValue}
                                                enableReinitialize={true}
                                                validationSchema={validateUploadPrescription}
                                                onSubmit={(val: any) => {
                                                    handleSubmit(val);
                                                }}
                                                render={({ values, handleChange, errors, touched, handleBlur, handleSubmit, setFieldValue }) => (
                                                    <form onSubmit={handleSubmit}>
                                                        <div className="form-group">
                                                            <input type="text" name="FirstName" className="form-control" placeholder={t("first_name")} onChange={handleChange} onBlur={handleBlur} value={values?.FirstName} />
                                                            {touched?.FirstName && errors?.FirstName && <span className="error_message">{t(errors?.FirstName as any)}</span>}
                                                        </div>
                                                        <div className="form-group">
                                                            <input type="text" name="LastName" className="form-control" placeholder={t("last_name")} onChange={handleChange} onBlur={handleBlur} value={values?.LastName} />
                                                            {touched?.LastName && errors?.LastName && <span className="error_message">{errors?.LastName as any}</span>}
                                                        </div>
                                                        <div className="form-group">
                                                            <input type="text" name="Mobile" className="form-control" placeholder={t("mobile_number")} onKeyPress={onlyNumber} onChange={handleChange} onBlur={handleBlur} value={values?.Mobile} />
                                                            {touched?.Mobile && errors?.Mobile && <span className="error_message">{t(errors?.Mobile as any)}</span>}
                                                        </div>
                                                        <div className="form-group">
                                                            <input type="email" name="EmailId" className="form-control" placeholder={t("email")} onChange={handleChange} onBlur={handleBlur} value={values?.EmailId} />
                                                        </div>
                                                        <div className="form-group row align-items-center">
                                                            <div className="col-12">
                                                                <div className="form-check-inline">
                                                                    <label className="gen_label">{t("gender")}*</label>
                                                                </div>
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
                                                            <div className="col-12">{touched?.Gender && errors?.Gender && <span className="error_message">{t(errors?.Gender as any)}</span>}</div>
                                                        </div>
                                                        <div className="form-group dt_picker">
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
                                                        <div className="form-group">
                                                            <select className="form-control" name="CityId" id="CityId" onChange={handleChange} onBlur={handleBlur} value={values.CityId}>
                                                                <option value="">{t("city")}*</option>
                                                                {cityData && cityData.length > 0 && cityData?.map((item: any, i: any) => (
                                                                    <option className="text-uppercase" value={item?.Id} key={i}>{t(item?.Name)}</option>
                                                                ))}
                                                            </select>
                                                            {touched?.CityId && errors?.CityId && <span className="error_message">{t(errors?.CityId as any)}</span>}
                                                        </div>
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" placeholder={t("address")} name="Address" onChange={handleChange} onBlur={handleBlur} value={values?.Address} />
                                                            {/*  {touched?.Address && errors?.Address &&<span className="error_message">{errors?.Address}</span>} */}
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="form-control"><div className="d-flex justify-content-between file_custom"><div>{t("upload_prescription_input")}</div><div><img className="scale_booknow" src="/assets/img/upload.png" alt="" /></div></div>
                                                                <input type="file" className="form-control" name="file" style={{ display: "none" }} onChange={(e: any) => handleImgChange(e)}
                                                                    accept="application/pdf,image/png, image/jpg, image/jpeg, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                                                                />
                                                            </label>
                                                            {fileErr && <span className="error_message">{fileErr}</span>}
                                                        </div>
                                                        <UploadFilePreview file={file} filePath={filePath} RemoveImg={RemoveImg} setFile={setFile} />
                                                        <div className="f-10"> {t("doc_size")}</div>
                                                        <button type="submit" className="book--hexagon active" /* onClick={() => { file?.length < 1 && setFileErr("file upload is required.") }} */><span> {t("submit_btn")}<i className="fa fa-long-arrow-right ml-20" aria-hidden="true"></i></span></button>
                                                        <div className="f-10"> {t("prescription_desc1")}</div>
                                                    </form>
                                                )}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
export const getServerSideProps = async ({ locale }:{locale: string}) => {
    let Slug = ROUTE.UPLOADPRESCRIPTION?.replace("/", "");
    const data: any = await Api.post(Url.seoDetail, { Slug: Slug});
  
    return {
      props: {
        seoData: data?.Result?.Details || {},
        ...(await serverSideTranslations(locale, ["common"])),
      },
    };
  };
export default UploadPrescription