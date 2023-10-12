import { ROUTE } from "@/Const/Route";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

import { useTranslation } from "next-i18next";
function getWindowDimensions() {
  if (typeof window !== "undefined") {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  } else {
    return {
      width: 0,
      height: 0,
    };
  }
}

function Footer(props: any) {
  const  {t} = useTranslation();
  const { cityData = [], setCity } = props;
  const router = useRouter();
  const {locale} = useRouter();
  const [opne, setOpne] = useState("");
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const RedirectCenter = async (e: any, Id: any) => {
    e.preventDefault();
    await setCity(Id);
    await localStorage.setItem("oq:city", Id || "");
    router.push(ROUTE.CENTER);
  };
  let year = new Date().getFullYear();

  return (
    <>
      <footer className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-md-4">
                <div
                  className={
                    locale === "ta"
                      ? "tamil-class-fo footer-widget footer-menu"
                      : "footer-widget footer-menu"
                  }
                >
                  <h2
                    className={
                      opne == "opne1"
                        ? "footer-title btnm on1"
                        : "footer-title btnm "
                    }
                    onClick={() => {
                      if (opne == "opne1") {
                        setOpne("");
                      } else {
                        setOpne("opne1");
                      }
                    }}
                  >
                    {t("comp")}
                  </h2>
                  <ul
                    className="footer-content"
                    style={
                      windowDimensions.width > 767
                        ? { display: "block" }
                        : opne == "opne1"
                        ? { display: "block" }
                        : { display: "none" }
                    }
                  >
                    <li>
                      <Link href={ROUTE.OVERVIEW}>{t("about_us")}</Link>
                    </li>
                    <li>
                      <Link href={ROUTE.DIRECTORMESSAGE}>
                        {t("director_message")}
                      </Link>
                    </li>
                    <li>
                      <Link href={ROUTE.ENDEVOUR}>{t("vision")}</Link>
                    </li>
                    <li>
                      <Link href={ROUTE.ACCREDATITION}>{t("arrd")}</Link>
                    </li>
                    <li>
                      <Link href={ROUTE.AWARD}>{t("award")}</Link>
                    </li>
                    <li>
                      <Link href={ROUTE.CENTER}>{t("our_network")}</Link>
                    </li>
                    <li>
                      <Link href={ROUTE.NEWSANDUPDATES}>{t("cme")}</Link>
                    </li>
                    <li>
                      <a
                        href="https://oncquestlabs.com/blog/"
                        target="_blank"
                        onClick={(e: any) => {
                          e.preventDefault();
                          window.open(
                            "https://oncquestlabs.com/blog/",
                            "_blank"
                          );
                        }}
                      >
                        {t("blog")}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-4">
                <div
                  className={
                    locale === "ta"
                      ? "tamil-class-fo footer-widget footer-menu"
                      : "footer-widget footer-menu"
                  }
                >
                  <h2
                    className={
                      opne == "opne2"
                        ? "footer-title btnm on1"
                        : "footer-title btnm "
                    }
                    onClick={() => {
                      if (opne == "opne2") {
                        setOpne("");
                      } else {
                        setOpne("opne2");
                      }
                    }}
                  >
                    {t("patients")}
                  </h2>
                  <ul
                    className="footer-content"
                    style={
                      windowDimensions.width > 767
                        ? { display: "block" }
                        : opne == "opne2"
                        ? { display: "block" }
                        : { display: "none" }
                    }
                  >
                    <li>
                      <Link
                        href={{
                          pathname: ROUTE.BOOKATEST,
                          query: {
                            tabs: "tests",
                          },
                        }}
                        as={ROUTE.BOOKATEST}
                      >
                        {t("test_book")}
                      </Link>
                    </li>
                    <li>
                      <Link href={ROUTE.OFFER}>{t("disc")}</Link>
                    </li>
                    <li>
                      <Link
                        href={{
                          pathname: ROUTE.CENTER,
                          query: { nearBy: true },
                        }}
                        as={ROUTE.CENTER}
                      >
                        {t("center")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={{
                          pathname: ROUTE.BOOKATEST,
                          query: {
                            tabs: "packages",
                           
                          },
                        }}
                        as={ROUTE.BOOKATEST}
                      >
                        {t("package")}
                      </Link>
                    </li>
                    <li>
                      <Link href={ROUTE.HOMECOLLECTION}>{t("query_form")}</Link>
                    </li>
                    <li>
                      <Link
                        href={{
                          pathname: ROUTE.TESTIMONIAL,
                          query: { type: 1 },
                        }}
                        as={ROUTE.TESTIMONIAL}
                      >
                        {t("testi")}
                      </Link>
                    </li>
                    <li>
                      <Link href={ROUTE.FAQ}>{t("faq")}</Link>
                    </li>
                    <li>
                      <Link href={ROUTE.QUICKLINKS}>{t("quick_link")}</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg col-md-4">
                <div
                  className={
                    locale === "ta"
                      ? "tamil-class-fo footer-widget footer-menu"
                      : "footer-widget footer-menu"
                  }
                >
                  <h2
                    className={
                      opne == "opne3"
                        ? "footer-title btnm on1"
                        : "footer-title btnm "
                    }
                    onClick={() => {
                      if (opne == "opne3") {
                        setOpne("");
                      } else {
                        setOpne("opne3");
                      }
                    }}
                  >
                    {t("doctors")}
                  </h2>
                  <ul
                    className="footer-content"
                    style={
                      windowDimensions.width > 767
                        ? { display: "block" }
                        : opne == "opne3"
                        ? { display: "block" }
                        : { display: "none" }
                    }
                  >
                    <li>
                      <Link href={ROUTE.DEPARTMENT} title="">
                        {t("department")}
                      </Link>
                    </li>
                    <li>
                      <Link href={ROUTE.BROCHURES} title="">
                        {t("brochures")}
                      </Link>
                    </li>
                    
                    <li>
                      <Link
                        href={{
                          pathname: ROUTE.TESTIMONIAL,
                          query: { type: 2 },
                        }}
                        as={ROUTE.TESTIMONIAL}
                      >
                        {t("testi")}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg col-md-3">
                <div
                  className={
                    locale === "ta"
                      ? "tamil-class-fo footer-widget footer-menu"
                      : "footer-widget footer-menu"
                  }
                >
                  <h2
                    className={
                      opne == "opne4"
                        ? "footer-title btnm on1"
                        : "footer-title btnm "
                    }
                    onClick={() => {
                      if (opne == "opne4") {
                        setOpne("");
                      } else {
                        setOpne("opne4");
                      }
                    }}
                  >
                    {t("contact")}
                  </h2>
                  <ul
                    className="footer-content"
                    style={
                      windowDimensions.width > 767
                        ? { display: "block" }
                        : opne == "opne4"
                        ? { display: "block" }
                        : { display: "none" }
                    }
                  >
                    <li>
                      <Link href={ROUTE.CORPORATEOFFICE} title="">
                        {t("office")}
                      </Link>
                    </li>
                    <li>
                      <Link href={ROUTE.GENERALENQUIRY} title="">
                        {t("enquiry")}
                      </Link>
                    </li>
                    <li>
                      <Link href={ROUTE.HEALTHENQUIRY} title="">
                        {t("corporate")}
                      </Link>
                    </li>
                    <li>
                      <Link href={ROUTE.CAREER} title="">
                        {t("career")}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg col-md-3">
                <div
                  className={
                    locale === "ta"
                      ? "tamil-class-fo footer-widget footer-menu"
                      : "footer-widget footer-menu"
                  }
                >
                  <h2
                    className={
                      opne == "opne5"
                        ? "footer-title btnm on1"
                        : "footer-title btnm "
                    }
                    onClick={() => {
                      if (opne == "opne5") {
                        setOpne("");
                      } else {
                        setOpne("opne5");
                      }
                    }}
                  >
                    {t("partner")}
                  </h2>
                  <ul
                    className="footer-content"
                    style={
                      windowDimensions.width > 767
                        ? { display: "block" }
                        : opne == "opne5"
                        ? { display: "block" }
                        : { display: "none" }
                    }
                  >
                    <li>
                      <Link href={ROUTE.BECOMWEPARTNER} title="">
                        {t("partner_page")}
                      </Link>
                    </li>
                    <li>
                      <Link href={ROUTE.CLINICALTRIAL} title="">
                        {t("clinical_trial")}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg col-md-3">
                <div
                  className={
                    locale === "ta"
                      ? "tamil-class-fo footer-widget footer-menu"
                      : "footer-widget footer-menu"
                  }
                >
                  {" "}
                  {/* nested_menu */}
                  <h2
                    className={
                      opne == "opne6"
                        ? "footer-title btnm on1"
                        : "footer-title btnm "
                    }
                    onClick={() => {
                      if (opne == "opne6") {
                        setOpne("");
                      } else {
                        setOpne("opne6");
                      }
                    }}
                  >
                    {t("logins")}
                  </h2>
                  <ul
                    className="footer-content"
                    style={
                      windowDimensions.width > 767
                        ? { display: "block" }
                        : opne == "opne6"
                        ? { display: "block" }
                        : { display: "none" }
                    }
                  >
                   
                    <li>
                      <a
                        href="https://itd.oncquest.net/Oncquest/Design/onlinelab/"
                        rel="noopener noreferrer"
                        target="_blank"
                        title=""
                      >
                        {t("report")}
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://admin.oncquestlabs.com/search-tests"
                        target="_blank"
                        rel="noopener noreferrer"
                        title=""
                      >
                        {t("range")}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg col-md-3">
                <div
                  className={
                    locale === "ta"
                      ? "tamil-class-fo footer-widget footer-menu widgetlast"
                      : "footer-widget footer-menu widgetlast"
                  }
                >
                  <h2 className="footer-title">{t("arrd")}</h2>
                  <div className="footer-about-content nabl-logo">
                    <img
                      src="/assets/img/nabl_logo.png"
                      alt=""
                      className="scale"
                    />
                  </div>
                  <h2 className="footer-title pt-3">{t("contact")}</h2>
                  <div className="footer-about-content">
                    <ul className="social">
                      <li>
                        <a
                          href="https://www.facebook.com/OncquestLaboratories/?ref=aymt_homepage_panel"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          title="facebook"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="/assets/img/fb.png"
                            alt=""
                            className="scale"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.instagram.com/oncquestlab/"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          title="instagram"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="/assets/img/insta.png"
                            alt=""
                            className="scale"
                          />{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://twitter.com/Oncquest1?t=U1pQPbKhT53oZSpBuqXDDw&s=09"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          title="twitter"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="/assets/img/twitter.png"
                            alt=""
                            className="scale"
                          />{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/company/oncquest-labs-ltd-?trk=tyah&trkInfo=clickedVertical%3Acompany%2CclickedEntityId%3A706323%2Cidx%3A1-1-1%2CtarId%3A1477484437069%2Ctas%3Aoncquest"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          title="linkedin"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="/assets/img/in.png"
                            alt=""
                            className="scale"
                          />{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.youtube.com/c/OncquestLaboratoriesLtd"
                          data-toggle="tooltip"
                          data-placement="bottom"
                          title="youtube"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="/assets/img/youtube.png"
                            alt=""
                            className="scale"
                          />{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="countrybx">
                  <h6>
                    {t("our_presence")}&nbsp;
                    <i className="fa fa-angle-down" aria-hidden="true"></i>
                  </h6>
                  <ul>
                    {cityData &&
                      cityData?.length > 0 &&
                      cityData?.map((item: any, i: any) => (
                        <li key={i}>
                          <a
                            href=""
                            title=""
                            onClick={(e: any) => RedirectCenter(e, item?.Id)}
                          >
                            {t(item?.Name)}
                          </a>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="copyright">
              <div className="row">
                <div className="col-md-12 col-lg-12">
                  <div className="copyright-text text-center">
                    <p className="mb-0">
                      {t("copyright")} © {year} Oncquest -{" "}
                      {t("all-rights-reserved")}{" "}
                      <a
                        href="https://abym.in/"
                        target="_blank"
                        className="font-weight-bolder"
                        rel="noopener noreferrer"
                      >
                        <b>AbyM Technology</b>
                      </a>
                      {t("design_dev")}
                    </p>
                    <ul>
                      <li>
                        <Link href={ROUTE.PRIVACY} className="px-1">
                          {t("privacy_policy")}
                        </Link>{" "}
                        |{" "}
                      </li>
                      <li>
                        <Link href={ROUTE.TERMSCONDITION} className="px-1">
                          {t("term_condition_footer")}
                        </Link>{" "}
                        |{" "}
                      </li>
                      <li>
                        <Link href={ROUTE.DISCLAIMER} className="px-1">
                          {t("declaimer")}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
