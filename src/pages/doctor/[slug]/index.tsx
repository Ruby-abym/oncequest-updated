import { Formik } from 'formik';
import React, {useEffect,useState} from 'react'
import ReactPlayer from 'react-player';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import ImgPlaceHolder from '@/Utils/imgPlaceholder';
import { onlyNumber } from '@/Utils/index';
import { DoctorEnquiryform } from '@/Utils/Validation';
import { doctorAction, submitAction } from '@/redux/action';
import { ROUTE } from '@/Const/Route';
import BreadCrumb from '@/Component/Common/BreadCrumb';
import WaitScreen from '@/Component/Common/LodingScreen/WaitScreen';

import { useTranslation } from "next-i18next";
import {NextPage } from 'next';
import Api from '@/redux/common/api';
import { SITE_URL, Url } from '@/redux/common/url';
import { NextSeo } from 'next-seo';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const initialValue={Name: "",Email: "",Mobile: "",Message: ""};
interface MyPageProps {
    seoData:any;
  }

const DoctorDetails: NextPage<MyPageProps> = ({ seoData }) => {
    const { t } = useTranslation();

    const dispatch = useDispatch();
    const router=useRouter();
    const {slug}:any = router.query;
    const [imgUri, setImgUri] = useState<string>("");
    const [videoUri, setVideoUri] = useState<string>("");
    const [doctor, setDoctor] = useState<any>({});
    const doctorData = useSelector((state:any) => state.doctor.selected ? state.doctor.selected : {});

    useEffect(() => {
        window?.scrollTo(0, 0);
        dispatch(doctorAction.getDoctorDetailAction({DoctorCode:slug}));
        return () => {};
    }, []);

    useEffect(() => {
        if(doctorData){
            setImgUri(doctorData?.DoctorImageBaseUrl);
            setVideoUri(doctorData?.DoctorVideosBaseUrl);
            setDoctor(doctorData?.DoctorDetails);
        }
        return () => {};
    }, [doctorData]);

    const handleSubmit = (values:any) => {
        let value:any={...values};
        value.DoctorId=doctor?.Id;
        value.SourceUrl = window.location.href;
        dispatch(submitAction.submitQueryAction(value,history));
    };

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
        
        {doctorData && Object.keys(doctorData)?.length < 1 && <WaitScreen/>}
            <BreadCrumb page={doctor?.Name} data={{slug: "", path: ""}}/> 
            {doctor && Object.keys(doctor)?.length > 0 &&
            <>
            <section className="about-section">
				<div className="container" id="section2">
                    <div className="row">
                        <div className="col-md-3">
                                <div className="infobox_wrapper">
                                    <div>
                                    <img src={doctor?.ProfileImage && doctor?.ProfileImage} onError={(e:any)=>ImgPlaceHolder(e, "/assets/img/dr.jpg")} className="scale round_img" alt="" />
                                    </div>
                                    <div className="mt-3">
                                        <h4 className="doct_title mb-2">{doctor?.Name}</h4>
                                        <div className="doct_post mb-2">{doctor?.Designation}</div>
                                        <div className="doct_lab mb-2">{doctor?.DepartmentName}</div>
                                    </div>
                                </div>
                                {doctor?.OtherVideos && doctor?.OtherVideos?.length> 0 && doctor?.OtherVideos?.map((item:any, i:any)=>(
                                <div className="infobox_wrapper my-5">
                                    <ReactPlayer className="scale" style={{border: "1px solid #707070"}} controls url={`${videoUri}${doctor?.item}`}/>
                                </div> 
                                ))}
                                <section className="bg-white px-3 px-md-0 my-5">
                                    <div className="container small_form">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="headingmains text-center mt-4">
                                                    <h4 className="right aos-init">{t("enquiry")}</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <Formik
                                        initialValues={initialValue}
                                        enableReinitialize={true}
                                        validationSchema={DoctorEnquiryform}
                                        onSubmit={(val:any) => {
                                            handleSubmit(val)
                                        }}
                                        render={({ values, handleChange, errors, touched, handleBlur, handleSubmit}) => (
                                        <form onSubmit={handleSubmit}>
                                        <div className="row justify-content-center">
                                            <div className="col-12 col-md-10 col-lg-9 col-xl-9">
                                                <div className="row align-items-center mt-4">
                                                <input type="text" name="Name" className="form-control" placeholder={t("name")} onChange={handleChange} onBlur={handleBlur} value={values?.Name}/>
                                                {touched?.Name && errors?.Name &&<span className="error_message">{t(errors?.Name as any)}</span>}
                                                </div>
                                                <div className="row align-items-center mt-4">
                                                <input type="text" name="Mobile" className="form-control" placeholder={t("mobile_number")} onKeyPress={onlyNumber} onChange={handleChange} onBlur={handleBlur} value={values?.Mobile}/>
                                                {touched?.Mobile && errors?.Mobile &&<span className="error_message">{t(errors?.Mobile as any)}</span>}
                                                </div>
                                                <div className="row align-items-center mt-4">
                                                <input type="text" className="form-control" placeholder={t("email")} name="Email" onChange={handleChange} onBlur={handleBlur} value={values?.Email}/>
                                                {touched?.Email && errors?.Email &&<span className="error_message">{t(errors?.Email as any)}</span>}
                                                </div>
                                                <div className="row align-items-center mt-4">
                                                <textarea  className="form-control" placeholder={t("message")} name="Message" onChange={handleChange} onBlur={handleBlur} value={values?.Message}></textarea>
                                                {touched?.Message && errors?.Message &&<span className="error_message">{t(errors?.Message as any)}</span>}
                                                </div>
                                                <div className="row my-2">
                                                    <button type="submit" className="book--hexagon active ml-0"><span>{t("submit_btn")}<i className="fa fa-long-arrow-right ml-20" aria-hidden="true"></i></span></button> 
                                                </div>
                                            </div>
                                        </div>
                                        </form>
                                        )}
                                      />
                                    </div>
                                </section>  
                        </div>
                        <div className="col-md-9">
                            <div className="h-services doc_info_box">
                                <div className="infobox_wrapper">
                                    {doctor?.Details && 
                                    <>
                                    <div className="box">
                                        <h5 className="doc_title">{"About "}{doctor?.Name}</h5>
                                        <div className="doc_content" dangerouslySetInnerHTML={{__html: doctor?.Details}}></div>
                                    </div>
                                    <hr className="hr"/>
                                    </>}
                                    {doctor?.Qualification && 
                                    <>
                                    <div className="box">
                                        <h5 className="doc_title">{t("qualifications")}</h5>
                                        <div className="infobox_list">
                                            <ul>
                                            {doctor?.Qualification && doctor?.Qualification?.split(",")?.map((item:any, i:any)=>(
                                                <li key={i} className="doc_content">{item}</li>
                                            ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <hr className="hr"/>
                                    </>}
                                    {doctor?.Expertise && 
                                    <>
                                    <div className="box">
                                        <h5 className="doc_title">{t("expertise")}</h5>
                                        <div className="infobox_list">
                                            <ul>
                                            {doctor?.Expertise && doctor?.Expertise?.split(",")?.map((item:any, i:any)=>(
                                                <li className="doc_content" key={i}>{item}</li>
                                            ))} 
                                            </ul>
                                        </div>
                                    </div>
                                    <hr className="hr"/>
                                    </>}
                                    {doctor?.AreaInterest && 
                                    <>
                                    <div className="box">
                                        <h5 className="doc_title">{t("area_of_interest")}</h5>
                                        <div className="infobox_list">
                                            <ul>
                                                <li className="doc_content">{doctor?.AreaInterest}</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <hr className="hr"/>
                                    </>}
                                    {doctor?.ResearchPublication && 
                                    <>
                                    <div className="box">
                                        <h5 className="doc_title">{t("research_and_publication")} </h5>
                                        <div className="infobox_list">
                                            <div className="doc_content" dangerouslySetInnerHTML={{__html: doctor?.ResearchPublication}}></div>
                                        </div>
                                    </div>
                                    <hr className="hr"/>
                                    </>}
                                    {doctor?.Awards && doctor?.Awards?.length >0 &&
                                    <>
                                    <div className="box">
                                        <h5 className="doc_title">{t("honours_awards")}</h5>
                                        <div className="infobox_list">
                                            <ul>
                                                {doctor && doctor?.Awards?.length >0 && doctor?.Awards?.map((item:any, index:any)=>(<li className="doc_content" key={index}>{item?.title}</li>))}
                                            </ul>
                                        </div>
                                    </div>
                                    </>}
                                    {doctor?.MainVideoYoutubeLink ?
                                    <>
                                    <hr className="hr"/>
                                    <div className="box" >
                                    <ReactPlayer className="scale" style={{border: "1px solid #707070"}} controls url={doctor?.MainVideoYoutubeLink}/>
                                    </div>
                                    </>
                                    : doctor?.MainVideo &&
                                    <>
                                    <hr className="hr"/>
                                    <div className="box">
                                    <ReactPlayer className="scale" style={{border: "1px solid #707070"}} controls url={`${videoUri}${doctor?.MainVideo}`}/>
                                    </div>
                                    </>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>          
                </div> 
			</section>
            </>}
        </React.Fragment>
    )
}
export const getServerSideProps = async ({ locale,params }:{locale: string,params:any}) => {
    let Slug = `${ROUTE.DOCTORDETAILS}/${params.slug}`?.replace("/", "");
   
    const data: any = await Api.post(Url.seoDetail, { Slug: Slug});
   
    return {
      props: {
        seoData: data?.Result?.Details || {},
        ...(await serverSideTranslations(locale, ["common"])),
      },
    };
  };
export default DoctorDetails

