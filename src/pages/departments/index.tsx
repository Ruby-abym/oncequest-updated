import BreadCrumb from "@/Component/Common/BreadCrumb";
import DepartmentCard from "@/Component/Feature/Department/DepartmentCard";
import { ROUTE } from "@/Const/Route";
import Api from "@/redux/common/api";
import { SITE_URL, Url } from "@/redux/common/url";
import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import SubmitForm from "@/Component/Common/SubmitForm/SubmitForm";
import React, { useEffect, useState } from "react";

import { DoctorEnquiryform } from "@/Utils/Validation";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
interface MyPageProps {
  seoData: any;
}
const Departments: NextPage<MyPageProps> = ({ seoData }) => {
  const [initialRenderComplete, setInitialRenderComplete] = useState<boolean>(false);
  useEffect(() => {
    setInitialRenderComplete(true);
  }, []);
  const {t}  = useTranslation();
  const router = useRouter();
  
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
      <BreadCrumb page={t("department")} data={{ slug: "", path: "" }} />
      <section className="bg-white section overview-top pt-3">
        <div className="container" id="section2">
          <div className="row">
            <div className="col-md-12">
              <div className="overview-wrap">
                <div className="text-center">
                  <img
                    src={t("images.department_banner") || "no"}
                    style={{ borderRadius: "24px" }}
                    className="scale"
                    alt=""
                  />
                </div>
                <div className="headingmains text-center pb-3">
                  <h2 className="right aos-init pb-2 mt-3 mt-lg-5">
                    {t("our_department")}
                  </h2>
                </div>
                <p>{t("department_content1")}</p>
                <p>{t("department_content2")}</p>
                <p>{t("department_content3")}</p>
                <p>{t("department_content4")}</p>
                <p>{t("department_content5")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <DepartmentCard />
      <SubmitForm heading={t("reach_out-to_us")} des={""} PageSrc={"Department"} validationSchema={DoctorEnquiryform}/>
    </React.Fragment>
  );
};
export const getStaticProps= async ({ locale }:{locale: string}) => {
  // let Slug = ROUTE.DEPARTMENT?.replace("/", "");
  // const data: any = await Api.post(Url.seoDetail, { Slug: Slug });
  return {
    props: {
      // seoData: data?.Result?.Details || {},
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
export default Departments;
