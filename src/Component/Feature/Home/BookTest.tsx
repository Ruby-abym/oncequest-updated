import React, { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import useWindowDimensions from "@/Assets/hooks/windowSize";
import { useRouter } from "next/router";
import { ImgPlaceHolder } from "@/Utils";
import Link from "next/link";
import { ROUTE } from "@/Const/Route";
import SectionLoader from "@/Component/Common/Loader/SectionLoader";

function BookTest(props: any) {
  const {t} = useTranslation();
  const { height, width } = useWindowDimensions();
  const { category } = props;
  const {locale} = useRouter();
  const [tab, settab] = useState("");

  const dashboard: any = useSelector(
    (state: any) => state.dashboard.dashboardData || null
  );

  const hendleTab = (e: any, value: any) => {
    e.preventDefault();
    settab(value);
  };
  useEffect(() => {
    if (category && category.length > 0) {
      settab(category && category[0]?.Id);
    }
    return () => {};
  }, [category]);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };
  return (
    <>
      <section className="sub-section bg-grey home-services">
        <div className="container">
          <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
              <div className="headingmains text-center pb-3">
                <h2
                  className={
                    locale === "ta"
                      ? "tamil-class-test_book right aos-init pb-2"
                      : "right aos-init pb-2"
                  }
                >
                  {t("test_book")}
                </h2>
                <p className="text-center pl-2 pr-2">
                  {t("book_a_test_content")}
                </p>
              </div>
            </div>
            <div className="col-2"></div>
          </div>
          {dashboard && Object.keys(dashboard)?.length > 0 ? (
            <>
              <ul className="nav nav-tabs">
                {category &&
                  category?.length > 0 &&
                  category?.map((item: any, index: any) => {
                    return (
                      <li key={index} onClick={(e) => hendleTab(e, item?.Id)}>
                        <a className={tab == item?.Id ? "active" : ""}>
                          {`${t("by_term")} ${t(item?.CategoryName)}`}
                        </a>
                      </li>
                    );
                  })}
              </ul>
              {category &&
                category.length > 0 &&
                category?.map((item: any, index: any) => (
                  <div className="tab-content" key={index}>
                    <div
                      id={item?.CategoryName}
                      className={
                        tab == item?.Id
                          ? "tab-pane fade in active show"
                          : "tab-pane fade in"
                      }
                    >
                      <div className="row">
                        {width > 767 ? (
                          <>
                            {item?.SubCategories &&
                              item?.SubCategories?.length > 0 &&
                              item?.SubCategories?.map(
                                (sub: any, i: any) =>
                                  i < 7 && (
                                    <div
                                      className="col-sm-12 col-md-6 col-lg-3"
                                      key={i}
                                    >
                                      <div className="h-services rem-marBokT">
                                        <div className="infobox_wrapper homeSubcategoryWrap">
                                          <div className="infobox_icon_container">
                                            <img
                                              className="scale"
                                              src={
                                                sub?.CategoryIcon &&
                                                sub?.CategoryIcon
                                              }
                                              onError={(e: any) =>
                                                ImgPlaceHolder(
                                                  e,
                                                  "/assets/img/s1.png"
                                                )
                                              }
                                              alt=""
                                            />
                                          </div>
                                          <h3 className="infobox_title">
                                            {t(sub?.CategoryName)}
                                          </h3>
                                          <div
                                            className="infobox_content"
                                            style={{
                                              height: "90px",
                                              overflowY: "hidden",
                                            }}
                                          >
                                            {sub?.ShortDescription}
                                          </div>
                                          <Link
                                            className="infobox_button button-read-more"
                                            passHref
                                            href={{
                                              pathname: ROUTE.BOOKATEST,
                                              query: {
                                                tabs: "tests",
                                                categoryId: sub.ParentId,
                                                subCategoryId: sub.Id,
                                              },
                                            }}
                                          >
                                            <img
                                              src="../assets/img/arrow-read.svg"
                                              className="scale"
                                            />
                                          </Link>
                                        </div>
                                      </div>
                                    </div>
                                  )
                              )}
                          </>
                        ) : (
                          <>
                            <div className="col-sm-12 col-md-6 col-lg-3 bg_lab_slide">
                              <Slider {...settings}>
                                {item?.SubCategories &&
                                  item?.SubCategories?.length > 0 &&
                                  item?.SubCategories?.map(
                                    (sub: any, i: any) =>
                                      i < 7 && (
                                        <div key={i}>
                                          <div className="h-services rem-marBokT">
                                            <div className="infobox_wrapper homeSubcategoryWrap">
                                              <div className="infobox_icon_container">
                                                <img
                                                  className="scale"
                                                  src={
                                                    sub?.CategoryIcon &&
                                                    sub?.CategoryIcon
                                                  }
                                                  onError={(e: any) =>
                                                    ImgPlaceHolder(
                                                      e,
                                                      "/assets/img/s1.png"
                                                    )
                                                  }
                                                  alt=""
                                                />
                                              </div>
                                              <h3 className="infobox_title">
                                                {t(sub?.CategoryName)}{" "}
                                              </h3>
                                              <div
                                                className="infobox_content"
                                                style={{
                                                  height: "90px",
                                                  overflowY: "hidden",
                                                }}
                                              >
                                                {sub?.ShortDescription}
                                              </div>
                                              <Link
                                                className="infobox_button button-read-more"
                                                passHref
                                                href={{
                                                  pathname: ROUTE.BOOKATEST,
                                                  query: {
                                                    tabs: "tests",
                                                    categoryId: sub.ParentId,
                                                    subCategoryId: sub.Id,
                                                  },
                                                }}
                                              >
                                                <img
                                                  src="a"
                                                  className="scale"
                                                />
                                              </Link>
                                            </div>
                                          </div>
                                        </div>
                                      )
                                  )}
                              </Slider>
                            </div>
                          </>
                        )}
                        <div className="col-sm-12 col-md-6 col-lg-3">
                          <div className="h-servicesbtn">
                            <Link
                              className="btn explorebtn"
                              passHref
                              href={{
                                pathname: ROUTE.BOOKATEST,
                                query: { tabs: "tests", categoryId: tab },
                              }}
                            >
                              <span>{t("explore_all")}</span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="41.403"
                                height="26.331"
                                viewBox="0 0 41.403 26.331"
                              >
                                <path
                                  id="Icon_material-arrow-forward"
                                  data-name="Icon material-arrow-forward"
                                  d="M16.768,6l-2.32,2.32,9.183,9.2h-35.1v3.291h35.1l-9.183,9.2,2.32,2.32L29.933,19.166Z"
                                  transform="translate(11.47 -6)"
                                  fill="#424242"
                                ></path>
                              </svg>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </>
          ) : (
            <SectionLoader />
          )}
        </div>
      </section>
    </>
  );
}

export default React.memo(BookTest);
