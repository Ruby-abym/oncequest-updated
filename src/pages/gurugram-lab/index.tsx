import React, { useEffect, useState } from "react";

import WhyOncq from "@/Component/Feature/Home/WhyOncq";
import { ROUTE } from "@/Const/Route";
import BreadCrumb from "@/Component/Common/BreadCrumb";
import DepartmentCard from "@/Component/Feature/Department/DepartmentCard";
import Facility from "@/Component/Feature/Centres/Facility";
import Payment from "@/Component/Feature/Centres/Payment";
import DoctorTeams from "@/Component/Feature/Overview/doctorTeam";
import Api from "@/redux/common/api";
import { SITE_URL, Url } from "@/redux/common/url";
import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import GurugramForm from "@/Component/Common/Lab/gurugramForm";
import SendQueryModal from "@/Component/Feature/BookATest/SendQueryModal";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
interface MyPageProps {
    seoData: any;
  }
const GurugramLab : NextPage<MyPageProps> = ({seoData})=> {
  const  {t} = useTranslation();
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
      handleModalOpen("Gurugram Lab");
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
      <BreadCrumb page={t("gurugram_lab")} data={{ slug: "", path: "" }} />
      <section className="bg-white section pt-3">
        <div className="container" id="section2">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <img
                  src={t("images.gurugram_banner")}
                  className="scale"
                  alt=""
                />
              </div>
              <div className="headingmains text-center py-3">
                <h1 className="right aos-init pb-3 mt-sm-3 mt-lg-4">
                  {t("gurugram_laboratory")}
                </h1>
                <div className="row">
                  <div className="col-12 col-md-7">
                    <p className="text-center py-2">
                      {t("about_gurugram_laboratory1")}
                    </p>
                    <p className="text-center py-2">
                      {t("about_gurugram_laboratory2")}
                    </p>
                    <p className="text-center py-2">
                      {t("about_gurugram_laboratory3")}
                    </p>
                  </div>
                  <div className="col-12 col-md-5 d-flex align-items-center justify-content-end">
                    <div className="w-100">
                      <GurugramForm pageSource="Gurugram Lab" />
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
          <div
            className="btm_overview" /* className='bottom_pdng' style={{display: "flex", justifyContent: "center"}} */
          >
            <WhyOncq />
          </div>
          <DepartmentCard />
          <div className="pb-4">
            <DoctorTeams />
          </div>
          <div className="pb-4 text-center headingmains">
            <div className="text-center py-3">
              <h3 className="right aos-init pb-3 mt-sm-3 mt-lg-4">
                {t("home_sample_collection")}
              </h3>
            </div>
            <div className="pb-3">
              <div className="calldt_lab">
                <a className="text" target="_blank" href="tel: 0124 6650000">
                  <img src="/assets/img/call.png" width="20px" height="20px" />
                  <span style={{ marginLeft: "10px" }}>0124 6650000, </span>
                </a>
                <a
                  href={`https://wa.me/07065350350`}
                  target="_blank"
                  style={{ marginLeft: "10px" }}
                >
                  <img
                    src="/assets/img/whatsapp.png"
                    width="20px"
                    height="20px"
                  />
                  <span style={{ marginLeft: "10px" }}>07065350350</span>
                </a>
              </div>
              <h3 className="right aos-init py-2 mt-3">
                {t("laboratory_reference")}
              </h3>
              <p className="text-center py-2 text_light">{t("company_name")}</p>
              <div className="text-center py-2">
                A-17, Infocity 1, Sector-34 Gurugram, Haryana – 122001
              </div>
              <div className="py-2">
                <a
                  href="https://www.google.com/maps/place/Oncquest+Laboratories+Ltd./@28.4286048,76.9950706,16.25z/data=!4m5!3m4!1s0x390d180379b0cd83:0xf8776810c897da20!8m2!3d28.4294939!4d77.0154577"
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
export const getStaticProps = async ({ locale }:{locale: string}) => {
    // let Slug = ROUTE.GURUGRAMLAB?.replace("/", "");
    // const data: any = await Api.post(Url.seoDetail, { Slug: Slug });
    return {
      props: {
        // seoData: data?.Result?.Details || {},
      ...(await serverSideTranslations(locale, ["common"])),
      },
    };
  };
export default GurugramLab;
