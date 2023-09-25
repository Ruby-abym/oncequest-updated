import React, { useEffect, useState } from 'react'
import { ROUTE } from '@/Const/Route'
import BreadCrumb from '@/Component/Common/BreadCrumb';
import Api from "@/redux/common/api";
import { SITE_URL, Url } from "@/redux/common/url";
import {  NextPage } from "next";
import { NextSeo } from "next-seo";
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
interface MyPageProps {
    seoData: any;
  }
const DirectorMessage : NextPage<MyPageProps> = ({seoData})=>  {
    const  {t}  = useTranslation();
    const router = useRouter();
    const [initialRenderComplete, setInitialRenderComplete] = useState<boolean>(false);
    useEffect(() => {
      setInitialRenderComplete(true);
    }, []);
    useEffect(() => {
        window?.scrollTo(0, 0);
        return () => { }
    }, [])
    if (!initialRenderComplete) return <></>;
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
            <BreadCrumb page={t("director_message")} data={{ slug: "", path: "#" }} />
            <section className='about-section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-3'></div>
                        <div className='col-md-9 dir_heading'>
                            <div className="headingmains text-md-left text-center dir-head">
                                <h1>{t("director_message")}</h1>
                            </div>
                        </div>
                    </div>
                    <div className='row align-items-center'>
                        <div className='col-md-12 row dir_about'>
                            <div className='col-md-3 dir_img'>
                                <img src={t("images.dir")} alt='' />
                            </div>
                            <div className='col-md-9 dir_info'>
                            <div className="dir-name-info">
                                <h4>{t("director_name")}</h4>
                                <span>{t("director_position")}</span>
                                <h6>{t("director_ownership")}</h6>
                                </div>
                            </div>
                        </div>
                        <div className='row mt-2'>
                            <div className='col-md-3'>
                            </div>
                            <div className='col-md-9 dir_msg'>
                                <p className='mb-3' dangerouslySetInnerHTML={{ __html: t("director_bold_text") }}></p>
                                <div className='dir-footer'>
                                    <h6 className='mb-3'>{t("faithfully")}</h6>
                                    <h4 className='mb-2'>{t("director_name")}</h4>
                                    <div className='mb-2'>{t("director_position")}</div>
                                    <h6>{t("director_ownership")}</h6>
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
    let Slug = ROUTE.DIRECTORMESSAGE?.replace("/", "");
    const data: any = await Api.post(Url.seoDetail, { Slug: Slug });
    return {
      props: {
        seoData: data?.Result?.Details || {},
      ...(await serverSideTranslations(locale, ["common"])),
      },
    };
  };
export default DirectorMessage


