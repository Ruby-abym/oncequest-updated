import React, { useEffect, useState } from "react";

import { ROUTE } from "@/Const/Route";
import { useRouter } from "next/router";
import Api from "@/redux/common/api";
import { SITE_URL, Url } from "@/redux/common/url";
import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import WhyOncqSection from "@/Component/Common/Lab/WhyOncqSection";
import BreadCrumb from "@/Component/Common/BreadCrumb";
import DepartmentCard from "@/Component/Feature/Department/DepartmentCard";
import GurugramForm from "@/Component/Common/Lab/gurugramForm";
import Facility from "@/Component/Feature/Centres/Facility";
import Payment from "@/Component/Feature/Centres/Payment";
import DoctorList from "@/Component/Common/Lab/DoctorList";
import SendQueryModal from "@/Component/Feature/BookATest/SendQueryModal";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
interface MyPageProps {
    seoData: any;
  }
const KolakataLab : NextPage<MyPageProps> = ({seoData})=>{
  const  {t}  = useTranslation();
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
      handleModalOpen("Kolkata Lab");
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
      <BreadCrumb page={t("kolkata_lab")} data={{ slug: "", path: "" }} />
      <section className="bg-white section pt-3">
        <div className="container" id="section2">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <img
                  src={t("images.kol_lab.banner")}
                  className="scale"
                  alt=""
                />
              </div>
              <div className="headingmains text-center py-3">
                <h1 className="right aos-init pb-3 mt-sm-3 mt-lg-4">
                  {t("about_kolkata_lab")}
                </h1>
                <div className="row">
                  <div className="col-12 col-md-6">
                    <p className="text-center py-2">
                      {t("about_kolkata_lab_info1")}
                    </p>
                    <p className="text-center py-2">
                      {t("about_kolkata_lab_info2")}
                    </p>
                    <p className="text-center py-2">
                      {t("about_kolkata_lab_info3")}
                    </p>
                    <p className="text-center py-2">
                      {t("about_kolkata_lab_info4")}
                    </p>
                    <p className="text-center py-2">
                      {t("about_kolkata_lab_info5")}
                    </p>
                  </div>
                  <div className="col-12 col-md-6 d-flex align-items-start justify-content-end">
                    <div className="w-100">
                      <GurugramForm pageSource="Kolkata Lab" />
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
                <a className="text" target="_blank" href="tel: 03325704141">
                  <img src="/assets/img/call.png" width="20px" height="20px" />
                  <span style={{ marginLeft: "10px" }}>033- 25704141, </span>
                </a>
                <a
                  href={`https://wa.me/+916291432087`}
                  target="_blank"
                  style={{ marginLeft: "10px" }}
                >
                  <img
                    src="/assets/img/whatsapp.png"
                    width="20px"
                    height="20px"
                  />
                  <span style={{ marginLeft: "10px" }}>+91 6291432087</span>
                </a>
              </div>
              {/* <h3 className="right aos-init py-2 mt-3">
                                {t("laboratory_reference")}
                            </h3> */}
              <p className="text-center py-2 text_light">{t("company_name")}</p>
              <div className="text-center py-2">{t("address_kolkata_lab")}</div>
              <div className="py-2">
                <a
                  href="https://goo.gl/maps/nn2LMQJfuyW6RDvg9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="viewMapLink"
                >
                  <span>View Map</span>
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
export const getStaticProps = async ({locale}:{locale:string}) => {
    // let Slug = ROUTE.KOLKATALAB?.replace("/", "");
    // const data: any = await Api.post(Url.seoDetail, { Slug: Slug });
    return {
      props: {
        // seoData: data?.Result?.Details || {},
      ...(await serverSideTranslations(locale, ["common"])),
      },
    };
  };
export default KolakataLab;
