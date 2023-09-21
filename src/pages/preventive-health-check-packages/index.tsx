import { t } from "i18next";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/router";

import ImgPlaceHolder from "@/Utils/imgPlaceholder";
import { dashboardAction, packageAction } from "../../redux/action";
import { ROUTE } from "@/Const/Route";
import BreadCrumb from "@/Component/Common/BreadCrumb";
import WaitScreen from "@/Component/Common/LodingScreen/WaitScreen";
import { pkjInfo } from "@/Component/Feature/PreventiveHealthPackage/array";
import Api from "@/redux/common/api";
import { SITE_URL, Url } from "@/redux/common/url";
import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import { useTranslation } from "next-i18next";
import { FDiscount } from "@/Utils/index";
import BookButton from "@/Component/Feature/BookATest/BookButton";

import SectionLoader from "@/Component/Common/Loader/SectionLoader";
import WhyOncqPre from "@/Component/Feature/PreventiveHealthPackage/WhyOncqPre";
import SendQueryModal from "@/Component/Feature/BookATest/SendQueryModal";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from "next/dynamic";
const GurugramForm =dynamic(() => import('@/Component/Common/GurugramLab/gurugramForm'), {
  ssr:false
})
// import SeoFooterContent from "../Seo/SeoFooterContent";
// import SeoHeaderContent from "../Seo/SeoHeaderContent";
interface MyPageProps {
    seoData: any;
  }
const PreventiveHealthPackage :NextPage<MyPageProps> = ({seoData})=> {
  const {t}  = useTranslation();
  const dispatch = useDispatch();
   const router = useRouter();
  const [details, setDetails] = useState<any[]>([]);
  const [packages, setPackages] = useState<any[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [code, setCode] = useState<any>("");
  const packageData = useSelector((state: any) =>
    state.package.list ? state.package.list : {}
  );
  useEffect(() => {
    window?.scrollTo(0, 0);
    if (pkjInfo) {
      setDetails(pkjInfo);
    }
    dispatch(
      packageAction.listPackageAction({
        SearchTerm: "",
        SubCategories: "",
        Offset: 0,
        Limit: 20,
      })
    );
    return () => {};
  }, [pkjInfo]);
  useEffect(() => {
    if (packageData?.Packages) {
      setPackages(packageData?.Packages);
    }
  }, [packageData?.Packages]);
  const handleModalOpen = (code: any) => {
    setCode(code);
    setModalIsOpen(true);
  };
  function GetPKGColorTitle1(title: any = "") {
    let _title: any[] = title?.split(" ");
    let len: number = _title?.length;
    let title1 = _title?.slice(Math.ceil(2))?.join(" ");
    let title2 = title.replace(title1, "");
    return (
      <>
        <span style={{ color: "#FFFFFF" }}>{title2}</span>
      </>
    );
  }
  function GetPKGColorTitle2(title: any = "") {
    let _title: any[] = title?.split(" ");
    let len: number = _title?.length;
    let title1 = _title?.slice(Math.ceil(2))?.join(" ");
    let title2 = title.replace(title1, "");
    return (
      <>
        <span style={{ color: "#f6821f" }}>{title1}</span>
      </>
    );
  }
  // const scrpt= `!function(px){function e(t,e,c){var n="",r="";try{""!=(n=function(t,e){try{var c={};e.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(t,e,n){c[e]=n});return c.hasOwnProperty(t)?c[t]:""}catch(t){return""}}(t,c))?function(t,e,c){try{var n,r;c?((n=new Date).setTime(n.getTime()+864e5),r="; expires="+n.toGMTString()):r="",document.cookie=t+"="+e+r+";Path=/"}catch(t){}}(e,n,1):n=function(t){try{var e=document.cookie.match(new RegExp("(^| )"+t+"=([^;]+)"));if(e)return e[2]}catch(t){}return null}(e),r=""!=n&&null!=n?"&"+t+"="+n:"&"+t+"="}catch(t){}return r}var c="",n="",r="";try{n=e("ad","acf",c=window.location.href),r=e("col_ci","col_ci",c)}catch(t){console.log(t)}var a="https://ade.clmbtech.com/cde/eventTracking.htm?pixelId="+px+"&_w=1&_t=2"+n+r+"&rd="+(new Date).getTime();(new Image).src=a}('14427');`
  //  const noscrpt =``
  return (
    <React.Fragment>
        
      <img
        height="1"
        width="1"
        src="https://ade.clmbtech.com/cde/eventTracking.htm?pixelId=14427&_w=1&_t=2"
        style={{ display: "none" }}
      />
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
      <BreadCrumb page={t("preventive_title")} data={{ slug: "", path: "#" }} />
      <section className="team-section">
        <div className="container">
          <div className="text-center">
            <img className="scale" src="/assets/img/php_banner.jpg" alt="" />
          </div>
          <section className="Seo-content">
            {/* <SeoHeaderContent /> */}
          </section>
          <div className="row mt-25">
            <div className="col-md-12 col-lg-5">
              <GurugramForm pageSource="Preventive Health Packages" />
            </div>
            <div className="col-md-12 col-lg-7">
              <div className="headingmains text-center heading-main-prev">
                <h1 className="right aos-init">
                  Preventive Health Check-up Packages
                </h1>
              </div>
              <div className="w-100 prev-helath-con">
                <p>
                  A full body check-up helps in evaluating the health of the
                  various organs of an individual like kidneys, lungs, or heart.
                  By this evaluation, through the Inner Fitness test it
                  determines future problems or complications and reduces the
                  impact.
                </p>
                <p>
                  The Inner Fitness tests help in Identifying diseases as well
                  as prevents the growth of any impending disease. By undergoing
                  these preventive health check tests regularly, individuals can
                  keep track of their vitals.
                </p>
              </div>
            </div>
          </div>
          <div className="row mt-25">
            <div className="col-md-12">
              <WhyOncqPre />
            </div>
          </div>
          <div className="tab-content">
            <div className="mt-25 text-center">
              <h2>{t("preventive_title")}</h2>
              <div className="mt-25">
                {/* <p className="text-center dull_heading pb-3">
              When the age of a person exceeds 50 years, it becomes very important to take care of one’s health as she enters the senior citizen age. With age, the metabolism and functioning of the body become slow.
              </p> */}
              </div>
            </div>
            {packageData && Object.keys(packageData)?.length > 0 ? (
              <>
                {packageData && Array.isArray(packageData?.Packages) && (
                  <div className="equal_clm h-services py-3">
                    {packages && (
                      <>
                        {packages && packages.length > 0 ? (
                          packages?.map((item: any, i: any) => (
                            <div
                              className="infobox_wrapper pkj_wrap_box"
                              key={i}
                            >
                              <div>
                                <div>
                                  {FDiscount(item?.MRP, item?.SellingPrice) ? (
                                    <div className="dis_icon text-center">
                                      <img
                                        src="/assets/img/discount.jpeg"
                                        className="scale"
                                      />
                                      <span className="img_text_center">
                                        {FDiscount(
                                          item?.MRP,
                                          item?.SellingPrice
                                        )}{" "}
                                        <br />
                                        OFF
                                      </span>
                                    </div>
                                  ) : (
                                    ""
                                  )}
                                  <div className="infobox_icon_container cust-health-pkg-head">
                                    <img
                                      src="/assets/img/pre-card-icon.png"
                                      className="scale circle_img"
                                    />
                                    <h3 className="infobox_title text-uppercase">
                                      {GetPKGColorTitle1(item?.PackageName)}
                                    </h3>
                                  </div>
                                  <h3 className="infobox_title text-uppercase">
                                    {GetPKGColorTitle2(item?.PackageName)}
                                  </h3>
                                  <div className="infobox_lines">
                                    {" "}
                                    <img
                                      src="/assets/img/info.png"
                                      className="scale_booknow"
                                    />
                                    {item?.Recommendation}
                                  </div>
                                  {item?.ComponentCount ? (
                                    <div className="infobox_lines">
                                      {" "}
                                      <img
                                        src="/assets/img/parameter.png"
                                        className="scale_booknow"
                                      />
                                      {item?.ComponentCount
                                        ? item?.ComponentCount
                                        : 0}
                                      {" Parameter(s) covered"}
                                    </div>
                                  ) : (
                                    ""
                                  )}
                                  <div className="infobox_lines">
                                    {" "}
                                    <img
                                      src="/assets/img/daily.png"
                                      className="scale_booknow"
                                    />
                                    {item?.ReportTAT}
                                  </div>
                                  {item?.SampleReport && (
                                    <a
                                      href={item?.SampleReport}
                                      target="_blank"
                                      className="infobox_lines"
                                    >
                                      {" "}
                                      <img
                                        src="/assets/img/report.png"
                                        className="scale_booknow"
                                      />
                                      {t("sample_report")}
                                    </a>
                                  )}
                                  <Link
                                   href={`${ROUTE.PACKAGEDETAILS}/${item?.Slug}`}
                                    className="moreButton"
                                  >
                                    {t("more_btn")}
                                  </Link>
                                  <div className="d-flex mb-3 justify-content-between align-items-baseline">
                                    <div>
                                      {item?.MRP !== item?.SellingPrice && (
                                        <span className="price-redtext">
                                          &#x20B9;{`${item?.MRP}`}
                                        </span>
                                      )}{" "}
                                      <span className="price-bluetext">
                                        &#x20B9;{`${item?.SellingPrice}`}
                                      </span>
                                    </div>
                                    <div>
                                      <span className="price-greentext">
                                        {t("save")} &#x20B9;
                                        {item?.MRP - item?.SellingPrice}
                                      </span>
                                    </div>
                                  </div>
                                  <BookButton type={"package"} data={item} />
                                  <a
                                    href={"#"}
                                    className="button--hexagon booknow mt-0"
                                    onClick={() =>
                                      handleModalOpen(item?.PackageName)
                                    }
                                  >
                                    <span>
                                      GET A CALL BACK
                                      <i
                                        className="fa fa-long-arrow-right ml-20"
                                        aria-hidden="true"
                                      ></i>
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          ))
                        ) : (
                          <div className="singl_clm text-center text-dark fs-20">
                            No Package Data Available
                          </div>
                        )}
                      </>
                    )}
                  </div>
                )}
              </>
            ) : (
              <SectionLoader />
            )}
            <div className="row">
              <div className="col-12">
                <div className="headingmains text-center pb-3">
                  <h3 className="right aos-init pb-2">
                    {t("articles_resources_well")}
                  </h3>
                  <div className="row">
                    <p className="text-center pl-2 pr-2">
                      {t("our_expert_advice")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row testimonial_list">
              {details &&
                details?.length > 0 &&
                details?.map((item: any, i: any) => (
                  <div className="col-sm-12 col-md-6 col-lg-3" key={i}>
                    <div className="h-services h-serMo-mt">
                      <div className="infobox_wrapper doctor_card">
                        <a
                          className="text-center"
                          target="__blank"
                          href={item?.slug}
                        >
                          <img className="scale" src={item?.listImg} alt="" />
                          <h6 className="pt-3 text-left">{item?.heading}</h6>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <section className="Seo-content">
              {/* <SeoFooterContent /> */}
            </section>
          </div>
        </div>
      </section>
      <SendQueryModal
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        test={false}
        code={code}
      />
    </React.Fragment>
  );
}
export const getStaticProps = async ({ locale }:{locale: string}) => {
    // let Slug = ROUTE.PREVENTIVEHEALTHPKJ?.replace("/", "");
    // const data: any = await Api.post(Url.seoDetail, { Slug: Slug });
    return {
      props: {
        // seoData: data?.Result?.Details || {},
      ...(await serverSideTranslations(locale, ["common"])),
      },
    };
  };
export default PreventiveHealthPackage;
