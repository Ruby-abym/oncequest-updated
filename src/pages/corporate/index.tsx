import React, { useEffect } from 'react'
import { ROUTE } from '@/Const/Route'
import BreadCrumb from '@/Component/Common/BreadCrumb';
import Api from "@/redux/common/api";
import { useRouter } from 'next/router';
import { SITE_URL, Url } from "@/redux/common/url";
import {  NextPage } from "next";
import { NextSeo } from "next-seo";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
interface MyPageProps {
    seoData: any;
  }
const HealthEnquiry : NextPage<MyPageProps> = ({seoData})=>{
    const  {t}  = useTranslation();
    const router = useRouter();

    useEffect(() => {
        window?.scrollTo(0, 0);
        return () => {}
    }, [])
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
        <BreadCrumb page={t("corporate")} data={{slug: "", path: ""}}/>
        <section className="bg-color">
        <div className='text-center'><img className="scale" src={t("images.health_enquiry.banner")} alt=""/></div>
        <div className="container"> 
            <div className="img_over_box align-center">
                <div className="tab-content">
                    <div id="organs" className="tab-pane fade in active show">
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-12">
                                <div className="h-services cor-mt">
                                    <div className="infobox_wrapper">
                                        <h2 className="text-center mr-25">{t("corporate")}</h2>  
                                        <div className="text-center f-16">{t("corporate_text")}</div>
                                    </div> 
                                </div>
                            </div> 
                        </div>
                    </div> 
                </div>
            </div>
        </div>
        </section>
        <section className="sub-section bg-color">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="overview-wrap">
                            <div className="headingmains text-center pb-3">
                                <h3 className="right aos-init pb-2 mt-sm-4 mt-lg-5">{t("corporate_offering")}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 health_icon_box mb-3 cor-div-offer">
                        <div className="col rem-br-tag">
                            <img src={t("images.health_enquiry.che_logo1")} className="scale" alt=""/>
                            <h6>{t("corporate_offer1")} <br/>{t("corporate_offer2")}</h6>
                        </div>
                        <div className="col rem-br-tag">
                            <img  src={t("images.health_enquiry.che_logo2")} className="scale" alt=""/>
                            <h6>{t("corporate_offer3")} <br/>{t("corporate_offer4")}</h6>
                        </div>
                        <div className="col rem-br-tag">
                            <img src={t("images.health_enquiry.che_logo3")} className="scale" alt=""/>
                            <h6>{t("corporate_offer5")} <br/>{t("corporate_offer6")}</h6>
                        </div>
                        <div className="col rem-br-tag">
                            <img src={t("images.health_enquiry.che_logo4")} className="scale" alt=""/>
                            <h6>{t("corporate_offer7")} <br/>{t("corporate_offer8")}</h6>
                        </div>
                    </div> 
                    <div className="col-md-12">
                    <p className="text-center f-14 py-3">{t("corporate_text_")}</p>
                    </div> 
                </div>
                <div className="row mt-3 mb-0 mt-lg-5 mb-lg-3">
                    <div className="col-md-12">
                        <div className="overview-wrap">
                            <div className="headingmains text-center pb-3">
                                <h3 className="right pb-3">{t("corporate_work")}</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row text-center justify-content-between health_highlight mx-0 px-0">
                    <div className="col-md-4 col-sm-6">
                        <h6 className="text-center">{t("personalized_care")}</h6>
                        <p>{t("personalized_care_text")}</p>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <h6 className="text-center">{t("lifetime_cumulative_reports")}</h6>
                        <p>{t("lifetime_cumulative_reports_text")}</p>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <h6 className="text-center">{t("home_or_Office_collections")}</h6>
                        <p>{t("home_or_Office_collections_text")}</p>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <h6 className="text-center">{t("lightning_fast_reports")}</h6>
                        <p>{t("lightning_fast_reports_text")}</p>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <h6 className="text-center">{t("online_wellness_portal")} </h6>
                        <p>{t("online_wellness_portal_text")}</p>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <h6 className="text-center">{t("customized_wellness_program")}</h6>
                        <p>{t("customized_wellness_program_text")}</p>
                    </div> 
                </div>        
            </div>
        </section>
        </React.Fragment>
    )
}
export const getStaticProps = async ({ locale }:{locale: string}) => {
    let Slug = ROUTE.HEALTHENQUIRY?.replace("/", "");
    const data: any = await Api.post(Url.seoDetail, { Slug: Slug });
    return {
      props: {
        seoData: data?.Result?.Details || {},
      ...(await serverSideTranslations(locale, ["common"])),
      },
    };
  };
export default HealthEnquiry
