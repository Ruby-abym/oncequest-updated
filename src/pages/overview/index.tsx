import React, { useEffect, useState } from "react";
import { ROUTE } from "@/Const/Route";
import BreadCrumb from "@/Component/Common/BreadCrumb";
import Api from "@/redux/common/api";
import { SITE_URL, Url } from "@/redux/common/url";
import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import DoctorTeams from "@/Component/Feature/Overview/doctorTeam";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
interface MyPageProps {
    seoData: any;
  }
const Overview: NextPage<MyPageProps> = ({seoData})=> {
  const {t}= useTranslation();
  const {locale} = useRouter()
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
      <BreadCrumb page={t("about_us")} data={{ slug: "", path: "#" }} />
      <section className="categories about-section pt-3">
        <div className="container" id="section2">
          <div className="row">
            <div className="col-md-12">
              <div className="overview-wrap about-usW100">
                <div className="text-center">
                  <img
                    src={t("images.overview_banner")}
                    className="scale"
                    alt=""
                  />
                </div>
                <div className="headingmains text-center pb-3">
                  <h2 className="right aos-init pb-2 mt-3 mt-lg-5">
                    {t("about_overview")}
                  </h2>
                </div>
                <p className="text-center dull_heading pb-3">
                  {t("about_note")}
                </p>
                <p
                  className="f-16 text-center mb-3"
                  style={{ maxWidth: "85%", margin: "0 auto" }}
                >
                  {t("about_desc")}
                </p>
                <p
                  className="f-16 text-center mb-3"
                  style={{ maxWidth: "85%", margin: "0 auto" }}
                >
                  {t("about_desc_")}
                </p>
                <p
                  className="f-16 text-center mb-3"
                  style={{ maxWidth: "85%", margin: "0 auto" }}
                >
                  {t("about__desc")}
                </p>
                <p
                  className="f-16 text-center mb-3"
                  style={{ maxWidth: "85%", margin: "0 auto" }}
                >
                  {t("about__desc_")}
                </p>
                <p
                  className="f-16 text-center mb-3"
                  style={{ maxWidth: "85%", margin: "0 auto" }}
                >
                  {t("about_desc__")}
                </p>
              </div>
            </div>
          </div>
          <div className="row keybusiness">
            <div className="col-12">
              <h4 className="head2">{t("about_key")}</h4>
            </div>
            <div className="col-12">
              <ul
                className={
                  locale === "ta"
                    ? "tamil-class-keyf keyflow"
                    : "keyflow"
                }
              >
                <li>
                  <h5>
                    {t("about_specialized")} <br /> {t("about_diagnostics")}
                  </h5>
                  <p>
                    {t("about_biology")}
                    <br /> {t("about_flow_cytometry")} <br />{" "}
                    {t("about_surgical")} <br />
                    {t("about_ihc")}
                    <br />
                    {t("about_cytogenetics")}
                  </p>
                </li>
                <li>
                  <h5>{t("about_rd")}</h5>
                  <p>
                    {t("about_pioneer")} <br /> {t("about_advanced")}
                    <br /> {t("about_market")}
                  </p>
                </li>
                <li>
                  <h5>
                    {t("about_hospital_lab")}
                    <br /> {t("about_mamangement")}
                  </h5>
                  <p>
                    {t("about_partner")} <br />
                    {t("about_hospital")}
                    <br /> {t("about_optimize")} <br /> {t("about_operation")}
                  </p>
                </li>
                <li>
                  <h5>{t("about_clinical_trials")}</h5>
                  <p>
                    {t("about_pharma")}
                    <br /> {t("about_cros")}
                    <br /> {t("about_support")}
                  </p>
                </li>
                <li>
                  <h5>
                    {t("about_routine")} <br /> {t("about_diagnostics")}
                  </h5>
                  <p>
                    {t("about_biochemistry")}
                    <br />
                    {t("about_microbiology")}
                    <br /> {t("about_immunoassays")}{" "}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="sub-section bg-grey home-services overview_highlight mt-md-0 mt-2 pad0-over-high">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ul>
                <li>
                  {" "}
                  <h4 className="head2">{t("partner_highlights")}</h4>
                </li>
                <li>
                  <h5>
                    {t("about_extensive")} <br />
                    {t("about_test_menu")}
                  </h5>
                  <p>{t("about_test_text")}</p>
                </li>
                <li>
                  <h5>
                    {t("about_footprints")}
                    <br /> {t("about_spans")}
                  </h5>
                  <p>{t("about_labs_count")}</p>
                </li>
                <li>
                  <h5>
                    {t("about_highly")} <br />
                    {t("about_trusted")}
                  </h5>
                  <p>{t("about_trust_text")}</p>
                </li>
                <li>
                  <h5>
                    {t("about_leader")} <br />
                    {t("about_testing")}
                  </h5>
                  <p>{t("about_leader_text")}</p>
                </li>
                <li>
                  <h5>
                    {t("about_laboratory")} <br /> {t("about_accreditations")}
                  </h5>
                  <p>{t("about_accreditations_text")}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <DoctorTeams />
      <section className="overview_network about-section mt-3 mt-lg-5">
        <div className="container">
        

          <div className="row network2">
            <div className="col-12">
              <h4 className="head2">{t("about_internation_network")}</h4>
              <h3 className="text-center">
                <span>{t("about_nepal")}</span> |{" "}
                <span>{t("about_bangladesh")}</span> |{" "}
                <span>{t("about_srilanka")}</span> |{" "}
                <span>{t("about_uzbekistan")}</span>
              </h3>
            </div>
          </div>
        </div>
      </section>


      
      
      <section className="overview-bottom about-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p>{t("about_description")}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="buniyad-bg def-about-pad">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="headingmains text-center pb-3">
                <h3 className="right aos-init pb-2 text-capitalize ">
                  Buniyaad
                </h3>
                <p className="text-center pl-2 pr-2">Our Journey so far</p>
              </div>
              <div className="about-sec-img text-center">
                <img
                  className="scale"
                  src="/assets/img/buniyad-img.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="jariya-bg def-about-pad">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="headingmains text-center pb-3">
                <h3 className="right aos-init pb-2 text-capitalize ">Jariya</h3>
                <p className="text-center pl-2 pr-2">
                  Technical Platform Update
                </p>
              </div>
              <div className="about-sec-img text-center">
                <img
                  className="scale"
                  src="../assets/img/jariya-img.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="buniyad-bg def-about-pad">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="headingmains text-center pb-3">
                <h3 className="right aos-init pb-2 text-capitalize ">
                  In-House R&D
                </h3>
              </div>
              <div className="about-sec-img text-center about-sec-width">
                <img
                  className="scale text-center"
                  src="/assets/img/in-house.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="jariya-bg def-about-pad">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="headingmains text-center pb-3">
                <h3 className="right aos-init pb-2 text-capitalize ">
                  Clinical Trials & Patient <br />
                  Support Programs
                </h3>
              </div>
              <div className="about-sec-img text-center about-sec-width">
                <img
                  className="scale"
                  src="/assets/img/clinical-trial.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="buniyad-bg def-about-pad">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="headingmains text-center pb-3">
                <h3 className="right aos-init pb-2 text-capitalize ">
                  4000 + Test Range Coveringspecialised <br /> & Retail Segment
                </h3>
              </div>
              <div className="about-sec-img text-center about-sec-width">
                <img
                  className="scale text-center"
                  src="/assets/img/retail-segment.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="core-strengths def-about-pad">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="headingmains text-center pb-3">
                <h3 className="right aos-init pb-2 text-capitalize ">
                  Our Core Strengths
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="about-sec-img text-center">
                <img
                  className="scale text-center for-radius"
                  src="/assets/img/core-stre-img.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-8">
              <div className="core-st-content">
                <ul>
                  <li>
                    <strong>Heritage:</strong> Oncquest is promoted by the
                    Burman family, the promoters of Dabur. It Inherits the
                    strong values, trust and commitment of Dabur.
                  </li>
                  <li>
                    <strong>Experience:</strong> Oncquest’s Combined Doctors’
                    experience exceeds 600+ years.
                  </li>
                  <li>
                    <strong>Quality:</strong> Oncquest follows stringent quality
                    norms and is NABL accredited.
                  </li>
                  <li>
                    <strong>Pioneers:</strong> Oncquest has brought many hi-end
                    International technologies in India.
                  </li>
                  <li>
                    <strong>Leader:</strong> Oncquest is leader in Oncology
                    testing.
                  </li>
                  <li>
                    <strong>Personalised:</strong> Service and commitment to
                    partners.
                  </li>
                  <li>
                    <strong>Final Diagnostics:</strong> Conclusive reports,
                    Reflex testing
                  </li>
                  <li>
                    <strong>Specialised phlebotomy:</strong> Trained for
                    Paediatrics & Senior Citizens.
                  </li>
                  <li>
                    <strong>Most accurate reports:</strong> Reports that inspire
                    Doctor confidence
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="india-network def-about-pad">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="headingmains text-center pb-3">
                <h3 className="right aos-init pb-2 text-capitalize ">
                Our Network
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <div className="core-st-content">
                <ul>
                  <li>
                    <strong>National Footprint:</strong><p>Spans 40+ Labs, 400+ Collection Centres & 
2500+ Service Associates.</p>
                  </li>
                  <li>
                    <strong>National Reference Laboratory:</strong><p>A-17 Info City-1, Sector 34, Gurugram, Haryana 122001.</p>
                  </li>
                  <li>
                    <strong>Regional Reference Labs:</strong><p>New Delhi, Bengaluru & Kolkata</p>
                  </li>
                  <li>
                    <strong>Satellite Labs:</strong><p>Bathinda, Barrackpore,
                    Bhubaneswar, Bhopal, Chhindwara, Cuttack, Delhi, Gurugram,
                    Guwahati, Hyderabad, Indore, Jalandhar, Jhansi, Kanpur,
                    Kolkata, Ludhiana, Lucknow, Mumbai, Nashik, Panchkula,
                    Patna, Pune, Rajamahendravaram, Raipur, Srinagar, Varanasi,
                    Warangal</p>
                  </li>
                  <li>
                    <strong>International Network:</strong><p>Nepal, Bangladesh,
                    Sri Lanka, Uzbekistan</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center">
                <img
                  className="scale text-center"
                  src="/assets/img/india-network.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
export const getStaticProps = async ({ locale }:{locale: string}) => {
    // let Slug = ROUTE.OVERVIEW?.replace("/", "");
    // const data: any = await Api.post(Url.seoDetail, { Slug: Slug });
    return {
      props: {
        // seoData: data?.Result?.Details || {},
      ...(await serverSideTranslations(locale, ["common"])),
      },
    };
  };
export default Overview;
