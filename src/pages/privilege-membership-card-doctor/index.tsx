import { Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { onlyNumber } from '@/Utils/index';
import { validateGeneralEnquiry } from '@/Utils/Validation';
import { dashboardAction, submitAction } from '../../redux/action';
import { ROUTE } from '@/Const/Route';
import BreadCrumb from '@/Component/Common/BreadCrumb';
import { GetStaticPropsContext } from 'next';
import { useTranslation } from 'next-i18next';
import {NextPage } from 'next';
import Api from '@/redux/common/api';
import { SITE_URL, Url } from '@/redux/common/url';
import { NextSeo } from 'next-seo';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

interface MyPageProps {
    seoData:any;
  }
const initialValue = { Name: "", Email: "", Mobile: "", Message: "", CityId: "", Type: "2" };

const PrivilegeMembershipCardDoctor : NextPage<MyPageProps> = ({ seoData }) => {
    const [initialRenderComplete, setInitialRenderComplete] = useState<boolean>(false);
    useEffect(() => {
      setInitialRenderComplete(true);
    }, []);
    const  {t}  = useTranslation();
    const dispatch = useDispatch();
    const router = useRouter();
    const cityData = useSelector((state: any) => state.dashboard.city);



    const handleSubmit = (values: any) => {
        let val: any = { ...values };
        val.SourceUrl = router.pathname;
        dispatch(submitAction.prevMembershipFormAction(val, router));
    };

    if (!initialRenderComplete) return <></>;
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
            <BreadCrumb page={t("privilege_membership_card_doctor_bread")} data={{ slug: "", path: "" }} />
            <section className="clinical-trial-section padtp-20">
                <div className="container" id="section2">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="overview-wrap text-center ">
                                <img src="../assets/img/membership-doctor.png" className="scale round_img" alt="" />
                                <div className="headingmains text-center pb-3">
                                    <h1 className="right aos-init mt-3 mt-lg-5">Privilege Membership Card For Women Doctors - “Family Inner Fitness”</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="news_section pb-4">
                <div className="container">
                    <div className="row pt-lg-3 for-flex-direction">
                        <div className="col-md-6">
                            <div className='clinical-content part-headfont w-100'>
                                <h5>This card entitles you (and your family) the following:</h5>                              
                                <div className="privilege-Card-content w-100 float-left">
                                   <div className="sub-card-list">
                                    <ul>
                                        <li><strong>25% Off</strong> on Routine tests </li>
                                        <li><strong>15% Off</strong> on Specialised tests </li>
                                        <li>Free Home collection on bill value of Rs.1000 & above</li>
                                        <li>Offer cannot be clubbed with other discounts/offer</li>
                                        <li>This offer may not be applicable on select international/outsource tests</li>
                                    </ul>
                                   </div>
                                </div>                          
                            </div>
                        </div>
                        <div className="col-md-6">
                        <Formik
                                        initialValues={initialValue}
                                        enableReinitialize={true}
                                        validationSchema={validateGeneralEnquiry}
                                        onSubmit={(val: any) => {
                                            handleSubmit(val)
                                        }}
                                        render={({ values, handleChange, errors, touched, handleBlur, handleSubmit }) => (
                                            <form onSubmit={handleSubmit}>
                                                <div className="h-services m-top-13">
                                                    <div className="infobox_wrapper">
                                                        <h3 className="mr-10">{t("membership_enrolment_form")}</h3>
                                                        <div className="ln-1 mr-10">{t("neurology_form_note")}</div>
                                                        <div className="form-group">
                                                            <input type="text" name="Name" className="form-control" placeholder={t("name_doctor")} onChange={handleChange} onBlur={handleBlur} value={values?.Name} />
                                                            {touched?.Name && errors?.Name && <span className="error_message">{t(errors?.Name as any)}</span>}
                                                        </div>
                                                        <div className="form-group">
                                                            <input type="text" name="Mobile" className="form-control" placeholder={t("mobile_number")} onKeyPress={onlyNumber} onChange={handleChange} onBlur={handleBlur} value={values?.Mobile} />
                                                            {touched?.Mobile && errors?.Mobile && <span className="error_message">{t(errors?.Mobile as any)}</span>}
                                                        </div>
                                                        <div className="form-group">
                                                            <select className="form-control" name="CityId" id="CityId" onChange={handleChange} onBlur={handleBlur} value={values?.CityId} >
                                                                <option value="">{t("city")}*</option>
                                                                {cityData && cityData.length > 0 && cityData?.map((item: any, i: any) => (
                                                                    <option value={item?.Id} key={i} className="text-uppercase">{t(item?.Name)}</option>
                                                                ))}
                                                            </select>
                                                            {touched?.CityId && errors?.CityId && <span className="error_message">{t(errors?.CityId as any)}</span>}
                                                        </div>
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" placeholder={t("email")} name="Email" onChange={handleChange} onBlur={handleBlur} value={values?.Email} />
                                                            {touched?.Email && errors?.Email && <span className="error_message">{errors?.Email as any}</span>}
                                                        </div>
                                                        <div className="form-group">
                                                            <textarea className="form-control" placeholder={t("message")} name="Message" onChange={handleChange} onBlur={handleBlur} value={values?.Message}></textarea>
                                                            {touched?.Message && errors?.Message && <span className="error_message">{t(errors?.Message as any)}</span>}
                                                        </div>
                                                        <button type="submit" className="book--hexagon active" ><span>{t("submit_btn")}<i className="fa fa-long-arrow-right ml-20" aria-hidden="true"></i></span></button>
                                                    </div>
                                                </div>
                                            </form>
                                        )}
                                    />
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
export const getStaticProps = async ({ locale }:{locale: string}) => {
    let Slug = ROUTE.PRIVILEGEMEMBERSHIPDOCTOR?.replace("/en", "");
    const data: any = await Api.post(Url.seoDetail, { Slug: Slug});
    return {
      props: {
        seoData: data?.Result?.Details || {},
        ...(await serverSideTranslations(locale, ["common"])),
      },
    };
  };
export default PrivilegeMembershipCardDoctor