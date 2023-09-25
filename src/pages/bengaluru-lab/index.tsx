import React, { useEffect, useState } from "react";

import { ROUTE } from "@/Const/Route";
import BreadCrumb from "@/Component/Common/BreadCrumb";
import DepartmentCard from "@/Component/Feature/Department/DepartmentCard";
import GurugramForm from "@/Component/Common/Lab/gurugramForm";
import Facility from "@/Component/Feature/Centres/Facility";
import Payment from "@/Component/Feature/Centres/Payment";
import Api from "@/redux/common/api";
import { SITE_URL, Url } from "@/redux/common/url";
import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import DoctorList from "@/Component/Common/Lab/DoctorList";
import WhyOncqSection from "@/Component/Common/Lab/WhyOncqSection";
import SendQueryModal from "@/Component/Feature/BookATest/SendQueryModal";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
interface MyPageProps {
    seoData: any;
  }
const BengaluruLab : NextPage<MyPageProps> = ({seoData})=>{
  const {t}  = useTranslation();
  const router = useRouter();
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [code, setCode] = useState<any>("");
  const [initialRenderComplete, setInitialRenderComplete] = useState<boolean>(false);
  useEffect(() => {
    setInitialRenderComplete(true);
  }, []);
  useEffect(() => {
    window?.scrollTo(0, 0);
    let intervalId = setTimeout(() => {
      handleModalOpen("Bengaluru Lab");
    }, 2000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const handleModalOpen = (code: any) => {
    setCode(code);
    setModalIsOpen(true);
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
      <BreadCrumb page={t("bengaluru_lab")} data={{ slug: "", path: "" }} />
      <section className="bg-white section pt-3">
        <div className="container" id="section2">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <img src={t("images.bg_lab.banner")} className="scale" alt="" />
              </div>
              <div className="headingmains text-center py-3">
                <h1 className="right aos-init pb-3 mt-sm-3 mt-lg-4">
                  {t("about_bengaluru_lab")}
                </h1>
                <div className="row">
                  <div className="col-12 col-md-6">
                    <p className="text-center py-2">
                      {t("about_bengaluru_lab_info1")}
                    </p>
                    <p className="text-center py-2">
                      {t("about_bengaluru_lab_info2")}
                    </p>
                    <p className="text-center py-2">
                      {t("about_bengaluru_lab_info3")}
                    </p>
                    <p className="text-center py-2">
                      {t("about_bengaluru_lab_info4")}
                    </p>
                    <p className="text-center py-2">
                      {t("about_bengaluru_lab_info5")}
                    </p>
                  </div>
                  <div className="col-12 col-md-6 d-flex align-items-start justify-content-end">
                    <div className="w-100">
                      <GurugramForm pageSource="Bengaluru Lab" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="container">
          <div className="btm_overview">
            <WhyOncqSection />
          </div>
          <DepartmentCard />
          <div className="pb-4">
            <DoctorList />
          </div>
          <div className="pb-4 text-center headingmains">
            <div className="text-center py-3">
              <h3 className="right aos-init pb-3 mt-sm-3 mt-lg-4">
                {t("home_sample_collection")}
              </h3>
            </div>
            <div className="pb-3">
              <div className="calldt_lab">
                <a className="text" target="_blank" href="tel: +919663656262">
                  <img src="/assets/img/call.png" width="20px" height="20px" />
                  <span style={{ marginLeft: "10px" }}>+91 9663656262, </span>
                </a>
                <a
                  href={`https://wa.me/+918040917809`}
                  target="_blank"
                  style={{ marginLeft: "10px" }}
                >
                  <img
                    src="/assets/img/whatsapp.png"
                    width="20px"
                    height="20px"
                  />
                  <span style={{ marginLeft: "10px" }}>+91 8040917809</span>
                </a>
              </div>
              {/* <h3 className="right aos-init py-2 mt-3">
                                {t("laboratory_reference")}
                            </h3> */}
              <p className="text-center py-2 text_light">{t("company_name")}</p>
              <div className="text-center py-2">
                {t("address_bengaluru_lab")}
              </div>
              <div className="py-2">
                <a
                  href="https://goo.gl/maps/MSE3xYr77ZrGbQws9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="viewMapLink"
                >
                  <span>{t("view_map")}</span>
                </a>
              </div>
            </div>
          </div>
          <section className="row">
            <div className="col-md-7 col-12">
              <Facility />
            </div>
            <div className="col-md-5 col-12">
              <Payment />
            </div>
          </section>
        </div>
      </section>
      <SendQueryModal
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        test={false}
        code={code}
        lab={true}
      />
    </React.Fragment>
  );
};
export const getServerSideProps= async ({ locale }:{locale: string}) => {
    let Slug = ROUTE.BENGALURULAB?.replace("/", "");
    const data: any = await Api.post(Url.seoDetail, { Slug: Slug });
    return {
      props: {
        seoData: data?.Result?.Details || {},
      ...(await serverSideTranslations(locale, ["common"])),
      },
    };
  };
export default BengaluruLab;
