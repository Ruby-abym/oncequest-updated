import React, { useEffect } from 'react'
import Api from "@/redux/common/api";
import { SITE_URL, Url } from "@/redux/common/url";
import {  NextPage } from "next";
import { NextSeo } from "next-seo";
import { ROUTE } from '@/Const/Route';
import { useRouter } from 'next/router';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from 'next-i18next';
import BreadCrumb from '@/Component/Common/BreadCrumb';
interface MyPageProps {
    seoData: any;
  }
const Disclaimer: NextPage<MyPageProps> = ({seoData})=> {
    const  {t}  = useTranslation();
    const router = useRouter();
    
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
        <div className="content pb-0 pt-0 bg-gray">
            <BreadCrumb page={t("declaimer")} data={{slug: "", path: ""}}/> 
			<section className="about-section">
				<div className="container" id="section2">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="overview-wrap">
                                <div className="headingmains text-center pb-4">
                                    <h1 className="right">{t("declaimer")}</h1>
                                </div>
                                <ul className='policy'>
                                <li ><a href="https://oncquestlabs.com"  target="_blank">www.oncquestlabs.com</a> {t("declaimer_info1")}</li>
                                <li >{t("declaimer_info2")}</li>
                                <li >{t("declaimer_info3")}</li>
                                <li >{t("declaimer_info4")}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </React.Fragment>
    )
}
export const  getServerSideProps = async ({ locale }:{locale: string}) => {
  let Slug = ROUTE.DISCLAIMER?.replace("/", "");
  const data: any = await Api.post(Url.seoDetail, { Slug: Slug });
  return {
    props: {
      seoData: data?.Result?.Details || {},
    ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
export default Disclaimer
