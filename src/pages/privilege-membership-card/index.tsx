import { Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from "next/router";
import { GetStaticProps, NextPage } from "next";
import { onlyNumber } from '../../Utils/index';
import { validateGeneralEnquiry } from '../../Utils/Validation';
import { useTranslation } from 'next-i18next';
import { dashboardAction, submitAction } from '../../redux/action';
import { NextSeo } from 'next-seo';
import { ROUTE } from '../../Const/Route';
import BreadCrumb from '../../Component/Common/BreadCrumb'
import { SITE_URL,Url } from '@/redux/common/url';
import Api from '@/redux/common/api';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

interface MyPageProps {
    seoData: any;
  }

const initialValue = { Name: "", Email: "", Mobile: "", Message: "", CityId: "", Type: "1" };

const PrivilegeMembershipCard :NextPage<MyPageProps> = ({seoData}) => {
    const [initialRenderComplete, setInitialRenderComplete] = useState<boolean>(false);
    useEffect(() => {
      setInitialRenderComplete(true);
    }, []);
    const {t}  = useTranslation();
    const dispatch = useDispatch();
    const router = useRouter();
    const cityData = useSelector((state: any) => state.dashboard.city);

    useEffect(() => {
        window?.scrollTo(0, 0);
        return () => { }
    }, [])


    const handleSubmit = (values: any) => {
        let val: any = { ...values };
        val.SourceUrl = window.location.href;
        dispatch(submitAction.prevMembershipFormAction(val, router));
    };

   if(!initialRenderComplete) return<></>
    return (
        <React.Fragment>
           
            <NextSeo
        title={seoData?.SeoTitle}
        description={seoData?.SeoDescription}
        canonical={`${SITE_URL}${router.asPath}`}
        openGraph={{
          title: seoData?.SeoTitle,
          description: seoData?.SeoDescription,
          type: "website",
          locale: "en_IE",
          url: `${SITE_URL}${router.asPath}`,
          siteName: "oncquest-lab",
          images: [
            {
              url: 'https://admin.oncquestlabs.com/public/en/uploads/packages/inner-fitness-advance1643629102.jpg',
              alt: 'Og Image Alt'
            }
          ],
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content: seoData?.SeoKeywords,
          },
        ]}
      />
            <BreadCrumb page={t("privilege_membership_card_bread")} data={{ slug: "", path: "" }} />
            <section className="clinical-trial-section padtp-20">
                <div className="container" id="section2">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="overview-wrap text-center">
                                <img src="../assets/img/membership-card-banner.png" className="scale round_img" alt="" />
                                <div className="headingmains text-center pb-3">
                                    <h1 className="right aos-init mt-3 mt-lg-5">Privilege Membership Card - “Family Inner Fitness”</h1>
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
                                <h5>Offers</h5>                              
                                <div className="privilege-Card-content w-100 float-left">
                                   <p><strong>Routine Tests</strong></p>
                                   <div className="sub-card-list">
                                    <ul>
                                        <li><strong>20% Discount for Senior Citizens</strong> (Age of person 60 years+)</li>
                                        <li><strong>15% Discount</strong> for other age groups.</li>
                                    </ul>
                                   </div>
                                   <p><strong>Preventive Health check Packages</strong> <span>(including Inner Fitness Packages)</span></p>
                                   <div className="sub-card-list">
                                    <ul>
                                        <li><strong>10% Discount</strong> for all age groups</li>
                                    </ul>
                                   </div>
                                   <p><strong>Routine Tests</strong> <span>(outsourced)</span></p>
                                   <div className="sub-card-list">
                                    <ul>
                                        <li><strong>10% Discount</strong> for all age groups</li>
                                    </ul>
                                   </div>
                                   <p><strong>Specialised Tests</strong> <span>(both In-house & Outsourced)</span></p>
                                   <div className="sub-card-list">
                                    <ul>
                                        <li><strong>10% Discount</strong> for all age groups</li>
                                    </ul>
                                   </div>
                                   <p><strong>Free Home Collection</strong> <span>on bill value of Rs 1000 and above.</span></p>
                                   <p><strong>Free Doctor consult on test report</strong> <span>with prior appointment.</span></p>

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
                                                        <h3 className="mr-10">{t("privilege_membership_form")}</h3>
                                                        <div className="ln-1 mr-10">{t("neurology_form_note")}</div>
                                                        <div className="form-group">
                                                            <input type="text" name="Name" className="form-control" placeholder={t("name")} onChange={handleChange} onBlur={handleBlur} value={values?.Name} />
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
                    <div className="row">
                    <div className="col-md-12">
                    <div className="pt-3 privilege-Card-content w-100 float-left">
                    <h5>Exceptions</h5>
                    <div className="sub-card-list">
                    <ul>
                        <li><strong>No discount</strong> will be given on <strong>Government-Capped tests</strong> and <strong>International send outs.</strong></li>
                        <li>The offer <strong>cannot be clubbed</strong> with any other discount or offer.</li>
                                   <li>Oncquest Laboratories Ltd. has the <strong>right to cancel, modify</strong> or extend the offer without any prior notice.</li>
                                   <li><strong>Home Collection</strong> facility will be given on the basis of <strong>availability of Phlebotomy slots.</strong> It may not be available at few locations.</li>
                                   <li><strong>Free Doctor consult</strong> will be given on prior appointment and will be limited to report consultation only. This facility may not be available at few locations.</li>
                                   </ul>
                                   </div>
                                   <h5>How to avail</h5>
                                   <div className="sub-card-list">
                                   <ul>
                                   <li><strong>Walk-ins:</strong> Customer will be required to show the Membership Card at the front desk (of Lab or Centre) before availing the test.</li>
                                   <li><strong>Home visit:</strong> Customer will call up the call centre to give test details and book an appointment. The customer will also pre-announce the loyalty card so that necessary discounts can be calculated by customer care and the final bill amount will be communicated to the customer. During home sample collection, customer will show the membership card to the visiting phlebotomist for confirmation.</li>
                                   </ul>
                                   </div>
                                   <h5>Validity</h5>
                                   <div className="sub-card-list">
                                   <ul>
                                   <li>The Card will be valid for 1 year from the date of issue.</li>
                                   <li>After one year the patient can still get a discount by showing his card. At the same time, a new card will be issued by Oncquest Laboratories Ltd.</li>
                                   </ul>
                                   </div>
                                   </div>
                    </div>
                    </div>

                    
                </div>
            </section>
        </React.Fragment>
    )
}
export const getStaticProps= async ({ locale }:{locale: string}) => {
    // let Slug = ROUTE.PRIVILEGEMEMBERSHIP?.replace("/", "");
    // const data: any = await Api.post(Url.seoDetail, { Slug: Slug });
    return {
      props: {
        // seoData: data?.Result?.Details || {},
      ...(await serverSideTranslations(locale, ["common"])),
      },
    };
  };

export default PrivilegeMembershipCard