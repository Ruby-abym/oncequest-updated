import { Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { onlyNumber } from '@/Utils/index';
import { validateGeneralEnquiry } from '@/Utils/Validation';
import { dashboardAction, submitAction } from '../../redux/action';
import { ROUTE } from '@/Const/Route';
import BreadCrumb from '@/Component/Common/BreadCrumb';
import Api from "@/redux/common/api";
import { SITE_URL, Url } from "@/redux/common/url";
import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const initialValue = { Name: "", Email: "", Mobile: "", Message: "", CityId: "" };
interface MyPageProps {
    seoData: any;
  }
const GeneralEnquiry: NextPage<MyPageProps> = ({seoData})=>  {
    const [initialRenderComplete, setInitialRenderComplete] = useState<boolean>(false);
  useEffect(() => {
    setInitialRenderComplete(true);
  }, []);
    const  {t}  = useTranslation();
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
        dispatch(submitAction.submitEnquiryAction(val, router));
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
            <BreadCrumb page={t("enquiry")} />
            <section className="thank-section bg-color">
                <div className="container">
                <div className="tab-content bgFormImage" style={{backgroundImage: "url(/assets/img/general_query_banner.png)"}}>
                        <div id="organs" className="tab-pane fade in active show">
                            <div className="row prescription-card">
                            <div className="col-sm-12 col-md-7 col-xl-4 col-lg-6">
                                    <Formik
                                        initialValues={initialValue}
                                        enableReinitialize={true}
                                        validationSchema={validateGeneralEnquiry}
                                        onSubmit={(val: any) => {
                                            handleSubmit(val)
                                        }}
                                        render={({ values, handleChange, errors, touched, handleBlur, handleSubmit }) => (
                                            <form onSubmit={handleSubmit}>
                                                <div className="h-services gen-form-Pb">
                                                    <div className="infobox_wrapper">
                                                        <h3 className="mr-10">{t("enquiry")}</h3>
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
                                                            <textarea className="form-control" placeholder={`${t("message")}*`} name="Message" onChange={handleChange} onBlur={handleBlur} value={values?.Message}></textarea>
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
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
export const getServerSideProps= async ({ locale }:{locale: string}) => {
    let Slug = ROUTE.GENERALENQUIRY?.replace("/", "");
    const data: any = await Api.post(Url.seoDetail, { Slug: Slug });
 
    return {
      props: {
        seoData: data?.Result?.Details || {},
      ...(await serverSideTranslations(locale, ["common"])),
      },
    };
  };
export default GeneralEnquiry