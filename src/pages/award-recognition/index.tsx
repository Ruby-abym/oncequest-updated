import React, { useEffect, useState } from "react";
import { ROUTE } from "@/Const/Route";
import BreadCrumb from "@/Component/Common/BreadCrumb";

import Api from "@/redux/common/api";
import { useRouter } from "next/router";
import { SITE_URL, Url } from "@/redux/common/url";
import {  NextPage } from "next";
import { NextSeo } from "next-seo";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
interface MyPageProps {
    seoData: any;
  }
const AwardRecognition: NextPage<MyPageProps> = ({seoData})=>  {
  const {t}  = useTranslation();
  const router = useRouter();
  useEffect(() => {
    window?.scrollTo(0, 0);
    return () => {};
  }, []);

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
      <BreadCrumb
        page={t("award_recognition")}
        data={{ slug: "", path: "#" }}
      />
        <section className="categories about-section pt-3">
        <div className="container" id="section2">
          <div className="row">
            <div className="col-md-12">
              <div className="overview-wrap text-center">
                <img src={t("images.award.banner")} className="scale" alt="" />
                <div className="headingmains text-center pb-3">
                  <h1 className="right aos-init pb-2 mt-3 mt-lg-5">
                    {t("awards_recognition")}
                  </h1>
                </div>
                <p className="text-center dull_heading pb-3">
                  {t("about_note")}
                </p>
              </div>
            </div>
          </div>
        
          <section className="sub-section">
            <div className="row">
              <div className="col-md-6">
                <div className="awards-content">
                  <ul>
                    <li>
                      <strong>2023:</strong> Awarded “Excellence in High-End
                      Diagnostics” by IHW, supported by Govt of Maharashtra &
                      Niti Aayog, Govt of India.
                    </li>
                    <li>
                      <strong>2023:</strong> Awarded “Excellence in Oncology
                      Testing” by Radio City, Delhi ICON 2023
                    </li>
                    <li>
                      <strong>2023:</strong> Awarded “Most Impactful Cancer
                      Awareness Campaign” at Cancer Care Summit 2023.
                    </li>
                    <li>
                      <strong>2021:</strong> Awarded “Excellence in Pathology
                      Services” by Dainik Jagran – Ayushman India 2021.
                    </li>
                    <li>
                      <strong>2018:</strong> Awarded “Outstanding Cancer
                      Diagnostic Laboratory” by ASSOCHAM India.
                    </li>
                    <li>
                      <strong>2017:</strong> Awarded “The Cancer Diagnostic
                      Testing Laboratory of the Year” under ASSOCHAM’s Women’s
                      Health Excellence Awards 2017.
                    </li>
                    <li>
                      <strong>2016:</strong> Awarded ‘The Diagnostic Service
                      Provider of the Year” by ASSOCHAM India.
                    </li>
                    <li>
                      <strong>2015:</strong> Awarded “Best Pathology Laboratory
                      in Delhi” by Worldwide Achievers – a global research
                      consultant.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div className="award-images">
                <img
                  src="/assets/img/awards-n.png"
                  className="scale"
                  alt=""
                />
                </div>
               
              </div>
            </div>
          </section>
        </div>
      </section>
    </React.Fragment>
  );
}
export const getStaticProps = async ({ locale }:{locale: string}) => {
    let Slug = ROUTE.AWARD?.replace("/", "");
    const data: any = await Api.post(Url.seoDetail, { Slug: Slug });
    return {
      props: {
        seoData: data?.Result?.Details || {},
      ...(await serverSideTranslations(locale, ["common"])),
      },
    };
  };
export default AwardRecognition;
