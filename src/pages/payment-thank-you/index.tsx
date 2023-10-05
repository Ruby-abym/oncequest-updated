import React, { useEffect, useState } from "react";
import styles from '../../styles/paythank.module.css';
import { useDispatch } from "react-redux";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { ROUTE } from "@/Const/Route";
import BreadCrumb from "@/Component/Common/BreadCrumb";
import {GetStaticProps, NextPage } from "next";
import Api from "@/redux/common/api";
import { SITE_URL, Url } from "@/redux/common/url";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

interface MyPageProps {
  seoData:any;
}
const PaymentThankYou: NextPage<MyPageProps> = ({ seoData }) => {
  const  {t}  = useTranslation();
  const dispatch = useDispatch();
  const router = useRouter();

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
      <BreadCrumb page={"Thank You"} data={{ slug: "", path: "" }} />
      <section className={styles.background_box}>
        <div className="container text-center">
          <div className={styles.thankyou_box}>
            <div className="thank_container">
              <div>
                <img
                  src="/assets/img/my-profile/please.png"
                  className="scale"
                  style={{ maxWidth: "13%" }}
                />
              </div>
              <div>
                <img
                  src="/assets/img/my-profile/p_thank.png"
                  className="scale mt-4"
                  style={{ maxWidth: "60%" }}
                />
              </div>
            </div>
            <h2 className={styles.payment_done}>
              {" "}
              <img
                src="/assets/img/my-profile/ptick.png"
                width={24}
                height={24}
              />
              Payment Done Sucessfully
            </h2>
            <div className="mt-3" style={{ color: "#514E4E" }}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout
            </div>
            <div className="text-center mt-1">
              <Link href={ROUTE.HOME} className="book--hexagon active">
                <span className="text-capitalize">Back To Home</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
export const getServerSideProps = async ({ locale }:{locale: string}) => {
  let Slug = ROUTE?.PAYMENT_THANKYOU.replace("/","")
  const data: any = await Api.post(Url.seoDetail, { Slug: Slug});
  return {
    props: {
      seoData: data?.Result?.Details || {},
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
export default PaymentThankYou;
