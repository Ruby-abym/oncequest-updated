import React, {useEffect,useState} from 'react'
import { ROUTE } from '@/Const/Route'
import BreadCrumb from '@/Component/Common/BreadCrumb';
import Api from "@/redux/common/api";
import { useRouter } from 'next/router';
import { SITE_URL, Url } from "@/redux/common/url";
import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
interface MyPageProps {
    seoData: any;
  }
const PillarsOfEndeavour: NextPage<MyPageProps> = ({seoData})=> {
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
            <BreadCrumb page={t("pillars_endeavour")} data={{slug: "", path: "#"}}/> 
            <section className="categories about-section pt-3">
				<div className="container mb-5" id="section2">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="overview-wrap text-center ">
                                <img src={t("images.endeavor.banner")} className="scale" alt=""/>
                                <div className="headingmains text-center pb-3">
                                    <h1 className="right aos-init pb-2 mt-3 mt-lg-5">{t("pillars_endeavour")}</h1>
                                </div>
                               {/*<p className="text-center dull_heading pb-3">{t("pillars_endeavour_text")}</p>*/}
                                <h4 className="text-center mt-0 mt-lg-3 pb-3">{t("pillars_endeavour_vision")}</h4>
                                <p className="f-16 text-center mb-3 end-text-width" style={{maxWidth: "85%", margin: "0 auto"}}>{t("pillars_endeavour_vision_text")}</p>
                            </div>                 
                    </div>
                </div>           
                <section className="sub-section overview_network mt-lg-5">
                    <div className="sub-section bg-gray home-services end-bg-pad">
                    <div className="container pt-md-4">
                        <div className="row">
                            <div className="col-md-6">
                                <img src={t("images.endeavor.mission1")} className="scale" alt=""/>
                            </div>
                            <div className="col-md-6 ">
                                <h4 className="text-left mb-0 py-3">{t("pillars_endeavour_mission")}</h4> 
                                <p>{t("pillars_endeavour_mission_text")}</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </section>

                <div className="row keybusiness">
                    <div className="col-12 mb-lg-5">
                        <h2 className="head2">{t("endeavour_value")}</h2>
                    </div>
                    <div className="col-12">
                        <div className="values-desk">
                            <img src={t("images.endeavor.value")} />
                        </div>
                        <div className="values-mob">
                            <img src={t("images.endeavor.value_mob")} />
                        </div> 
                    </div>
                </div>
                </div>
            </section>
        </React.Fragment>
    )
}
export const getServerSideProps= async ({ locale }:{locale: string}) => {
    let Slug = ROUTE.ENDEVOUR?.replace("/", "");
    const data: any = await Api.post(Url.seoDetail, { Slug: Slug });
    return {
      props: {
        seoData: data?.Result?.Details || {},
      ...(await serverSideTranslations(locale, ["common"])),
      },
    };
  };
export default PillarsOfEndeavour
