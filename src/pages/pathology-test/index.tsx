import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/router";

import Slider from "react-slick";
import { packageAction, testAction } from "../../redux/action";
import { ROUTE } from "@/Const/Route";
import BreadCrumb from "@/Component/Common/BreadCrumb";
import ImgPlaceHolder from "@/Utils/imgPlaceholder";

import { FDiscount } from "@/Utils/index";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import BookButton from "@/Component/Feature/BookATest/BookButton";

import SectionLoader from "@/Component/Common/Loader/SectionLoader";
import SendQueryModal from "@/Component/Feature/BookATest/SendQueryModal";
// import SeoFooterContent from "../Seo/SeoFooterContent";
// import SeoHeaderContent from "../Seo/SeoHeaderContent";

import Api from "@/redux/common/api";
import { SITE_URL, Url } from "@/redux/common/url";
import {  NextPage } from "next";
import { NextSeo } from "next-seo";
import { useParams } from "next/navigation";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

interface MyPageProps {
    seoData: any;
  }
const PathlogyTest : NextPage<MyPageProps> = ({seoData})=>  {
  // const {slug}:any = useParams();
  const  {t} = useTranslation();
  const dispatch = useDispatch();
  const router = useRouter()
  const [tab, setTab] = useState<any>("");
  const [subCategory, setSubCategory] = useState<any>("");
  const [department, setDepartment] = useState<any>("");
  const [DepName, setDepName] = useState<any>("");
  const [category, setCategory] = useState<any>("");
  const [pricePSort, setPricePSort] = useState("low");
  const [priceTSort, setPriceTSort] = useState("low");
  const [tests, setTests] = useState<any[]>([]);
  const [packages, setPackages] = useState<any[]>([]);
  const [limit, setLimit] = useState(20);
  const [offsetT, setOffsetT] = useState(0);
  const [offsetP, setOffsetP] = useState(0);
  const [page, setPage] = useState(1);
  const [searchTermShow, setSearchTermShow] = useState<any>("");
  const [searchTerm, setSearchTerm] = useState<any>("");
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [code, setCode] = useState<any>("");
  const testData = useSelector((state: any) =>
    state.test.list ? state.test.list : {}
  );
  const packageData = useSelector((state: any) =>
    state.package.list ? state.package.list : {}
  );
  const subCategoryLoader = useSelector(
    (state: any) => state.package.subCategory
  );
  const subCategoryData = useSelector(
    (state: any) => state.package.subCategory?.Categories
  );
  const CityId: string = useSelector((state: any) =>
    state.dashboard.selectedCity ? state.dashboard.selectedCity : ""
  );
  const handleModalOpen = (code: any) => {
    setCode(code);
    setModalIsOpen(true);
  };


 
  useEffect(() => {
    if (router?.query?.tabs) {
      setTab(router?.query?.tabs);
    } else {
      setTab("tests");
    }
    if (router?.query?.subCategoryId) {
      setSubCategory(router?.query?.subCategoryId);
    }
    if (router?.query?.categoryId) {
      setCategory(router?.query?.categoryId);
    }
    if (router?.query?.depId) {
      setDepartment(router?.query?.depId);
    }
    if (router?.query?.depName) {
      setDepName(router?.query?.depName);
    }
    return () => {};
  }, [router?.query?.tabs, router?.query?.subCategoryId]);
  // const hendleTab = (e: any, value: string) => {
  //   e.preventDefault();
  //   setDepName("");
  //   setDepartment("");
  //   setSearchTerm("");
  //   setPage(1);
  //   setOffsetP(0);
  //   setOffsetT(0);
  //   setPricePSort("low");
  //   setPriceTSort("low");
  //   setSubCategory("");
  //   setTab(value);
  //   setSearchTermShow("");
  // };

  useEffect(() => {
    if (tab === "tests") {
     
      dispatch(
        testAction.listTestAction({
          SearchTerm: searchTerm,
          Offset: offsetT,
          Limit: limit,
          SubcategoryId: subCategory,
          DepartmentId: department,
          CityId: CityId,
        })
      );
    }
    
  }, [offsetT, searchTerm, tab, subCategory, CityId]);

  useEffect(() => {
    if (tab === "packages") {
      setDepName("");
      setDepartment("");
     
      dispatch(
        packageAction.listPackageAction({
          SearchTerm: searchTerm,
          SubCategories: subCategory,
          Offset: offsetP,
          Limit: limit,
          CityId: CityId,
        })
      );
    }
    return () => {};
  }, [subCategory, offsetP, searchTerm, tab, CityId]);

  useEffect(() => {
    Tsort();
    return () => {
      /* history?.replace({ state: undefined }) */
    };
  }, [testData?.Tests, priceTSort]);

  useEffect(() => {
    Psort();
  }, [packageData?.Packages, pricePSort]);

  useEffect(() => {
    dispatch(packageAction.getSubCategoryByIdAction(category));
    return () => {};
  }, [category]);

  const handlePricePackageSort = (e: any) => {
    setPricePSort(e.target.value);
  };
  const handlePriceTestSort = (e: any) => {
    setPriceTSort(e.target.value);
  };
  function Psort() {
    if (packageData?.Packages && packageData?.Packages?.length > 0) {
      let arr: any[] = packageData?.Packages;
      let newArr: any[] = [];
      if (pricePSort === "low") {
        newArr = [...arr]?.sort(
          (a: any, b: any) => a?.SellingPrice - b?.SellingPrice
        );
      } else if (pricePSort === "high") {
        newArr = [...arr]?.sort(
          (a: any, b: any) => b?.SellingPrice - a?.SellingPrice
        );
      } else if (pricePSort === "asc") {
        newArr = [...arr]?.sort((a: any, b: any) =>
          a?.PackageName?.localeCompare(b?.PackageName, "fr", {
            ignorePunctuation: true,
          })
        );
      }
      setPackages(newArr);
    } else {
      setPackages(packageData?.Packages);
    }
  }
  function Tsort() {
    if (testData?.Tests && testData?.Tests.length > 0) {
      let arr: any[] = testData?.Tests;
      let newArr: any[] = [];
      if (priceTSort === "low") {
        newArr = [...arr]?.sort(
          (a: any, b: any) => a?.SellingPrice - b?.SellingPrice
        );
      } else if (priceTSort === "high") {
        newArr = [...arr]?.sort(
          (a: any, b: any) => b?.SellingPrice - a?.SellingPrice
        );
      } else if (priceTSort === "asc") {
        newArr = [...arr]?.sort((a: any, b: any) =>
          a?.TestName?.localeCompare(b?.TestName, "fr", {
            ignorePunctuation: true,
          })
        );
      }
      setTests(newArr);
    } else {
      setTests(testData?.Tests);
    }
  }

  const handlePaginationP = (page: number) => {
    setOffsetP((page - 1) * limit);
    setPage(page);
  };
  const handlePaginationT = (page: number) => {
    setOffsetT((page - 1) * limit);
    setPage(page);
  };
  const handleSearch = (e: any) => {
    let val = e.target.value;
    setSearchTermShow(val);
    if ((val && val?.trim()?.length >= 3) || val?.length === 0) {
      setSearchTerm(val);
    }
  };
  const SubCatChange = (e: any, id: any) => {
    e.preventDefault();
    setPage(1);
    setOffsetT(0);
    setOffsetP(0);
    setSubCategory(id);
  };
  var settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: true,
        },
      },
      {
        breakpoint: 577,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
          arrows: true,
        },
      },
    ],
  };
  /* var price = 0; */
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
        page={t("pathlogy_tests_brud")}
        data={{ slug: "hello", path: ROUTE.PATHLOGYTEST }}
      />
     
      <section className="bg-white">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-md-6">
              <div className="input-group">
                <input
                  className="form-control rounded-pill py-2 pr-5 mr-1 bg-transparent"
                  type="search"
                  value={searchTermShow}
                  placeholder={t("search_teast_packages")}
                  id="example-search-input"
                  onChange={handleSearch}
                />
                <span className="input-group-append">
                  <div className="input-group-text border-0 bg-transparent ml-n5">
                    <i
                      className="fa fa-search"
                      style={{ color: "#114A82" }}
                    ></i>
                  </div>
                </span>
              </div>
            </div>
            <div
              className="col-md-6 packages tbs d-flex justify-content-end mt-4 mt-sm-0 mr-0"
              style={{ maxWidth: "380px" }}
            >
              <ul className="nav nav-tabs m-0 p-0">
              <li>
                  <Link href={ROUTE.BOOKAPACKAGE} className={tab == "packages" ? "active" : ""}>
                    {t("packages")}
                  </Link>
                </li>
                <li>
                  <Link href={ROUTE.PATHLOGYTEST} className={tab == "tests" ? "active" : ""}>{t("test")} </Link>
                </li>
              </ul>
            </div>
          </div>
          {Object.keys(subCategoryLoader)?.length > 0 ? (
            <>
              {subCategoryData && subCategoryData?.length > 0 && (
                <div className="container">
                  <div className="row justify-content-center align-items-center">
                    <div className="col pkj_slider packages">
                      <Slider {...settings}>
                        {subCategoryData &&
                          subCategoryData?.length > 0 &&
                          subCategoryData?.map((item: any, i: any) => (
                            <ul className="nav nav-tabs" key={i}>
                              <li
                                onClick={(e: any) => SubCatChange(e, item?.Id)}
                                className={
                                  subCategory === item?.Id
                                    ? "subCat active"
                                    : "subCat"
                                }
                              >
                                <a
                                  href="#"
                                  onClick={(e: any) => e.preventDefault()}
                                >
                                  <div className="d-flex flex-row justify-content-start align-items-center">
                                    <div>
                                      <img
                                        src={
                                          item?.CategoryIcon &&
                                          item?.CategoryIcon
                                        }
                                        onError={(e: any) =>
                                          ImgPlaceHolder(
                                            e,
                                            "/assets/img/s1.png"
                                          )
                                        }
                                        className="scale_subIcon"
                                        alt=""
                                        style={{ borderRadius: "50%" }}
                                      />
                                    </div>
                                    <div className="ml-0 ml-lg-2 text-capitalize">
                                      {t(item?.CategoryName)}
                                    </div>
                                  </div>
                                </a>
                              </li>
                            </ul>
                          ))}
                      </Slider>
                    </div>
                  </div>
                </div>
              )}
            </>
          ) : (
            <SectionLoader />
          )}
        </div>
      </section>
      {/* {((tab === "packages" && Object.keys(packageData)?.length > 0) || (tab === "tests" && Object.keys(testData)?.length > 0)) ? */}
      <section className="sub-section bg-white packageService">
        <div className="tab-content">
            <div className="container">
              <div className="d-flex flex-row flex-wrap justify-content-between">
                <div className="d-flex flex-row justify-content-start align-items-baseline">
                  <div className="headingmains text-left mr-3 mb-3">
                    <h2 className="right aos-init pb-2 text-capitalize">
                      {t("tests")}
                    </h2>
                  </div>
                  {tests?.length > 0 && (
                    <div className="ml-3 f-14">{`${t("Showing")}  ${
                      tests?.length === 0 ? 0 : offsetT + 1
                    } - ${offsetT + tests?.length} ${t("of")} ${
                      testData?.TotalTests
                    } ${t("result")}`}</div>
                  )}
                </div>
                <div>
                  {tests?.length > 0 && (
                    <div className="form-group d-flex flex-row justify-content-between align-items-center">
                      <div className="text-center f-14 mr-3">
                        {t("sort_by")}
                      </div>
                      <select
                        id="inputState"
                        className="form-control col-8 rounded-pill sort_select"
                        value={priceTSort}
                        onChange={handlePriceTestSort}
                      >
                        {/* <option value="">Sort By</option> */}
                        <option value="low">{t("price_lth")}</option>
                        <option value="high">{t("price_htl")}</option>
                        <option value="asc">{t("atz")}</option>
                      </select>
                    </div>
                  )}
                </div>
              </div>
              {tab === "tests" && Object.keys(testData)?.length > 0 ? (
                <>
                  {testData && Array.isArray(testData?.Tests) && (
                    <>
                      <div className="equal_clm h-services organslider">
                        {tests && tests.length > 0 ? (
                          tests?.map((item: any, i: any) => (
                            <div key={i}>
                              {" "}
                              <div
                                className="infobox_wrapper pkj_wrap_box"
                                key={i}
                              >
                                {/* {(()=> {
                                                    price = item?.SellingPrice;
                                                    if(CityId && item?.CitywisePrices && item?.CitywisePrices?.length > 0) {
                                                        item?.CitywisePrices.map((ele:any) => {
                                                            if(ele.availability == 1 && ele?.city_price && ele?.city_id == CityId) {
                                                                price = ele?.city_price;
                                                            }
                                                        })
                                                    }
                                                })()} */}
                                <div>
                                  <div>
                                    {FDiscount(
                                      item?.MRP,
                                      item?.SellingPrice
                                    ) ? (
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
                                          {t("off")}
                                        </span>
                                      </div>
                                    ) : (
                                      ""
                                    )}
                                    <div className="infobox_icon_container ">
                                      <img
                                        src="/assets/img/test_blood.png"
                                        className="scale circle_img"
                                      />
                                    </div>
                                    <h3 className="infobox_title text-uppercase">
                                      {item?.TestName}
                                    </h3>
                                    {item?.Recommendation ? (
                                      <div className="infobox_lines">
                                        {" "}
                                        <img
                                          src="/assets/img/info.png"
                                          className="scale_booknow"
                                        />
                                        {item?.Recommendation}
                                      </div>
                                    ) : (
                                      ""
                                    )}
                                    {item?.Components?.length > 0 ? (
                                      <div className="infobox_lines">
                                        {" "}
                                        <img
                                          src="/assets/img/parameter.png"
                                          className="scale_booknow"
                                        />
                                        {item?.Components?.length}
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
                                      href={`${ROUTE.TESTDETAILS}/${item?.Slug}`}
                                      className="moreButton"
                                    >
                                      {t("plus_more")}
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
                                      {item?.MRP - item?.SellingPrice > 0 ? (
                                        <div>
                                          <span className="price-greentext">
                                            {t("save")} &#x20B9;
                                            {item?.MRP - item?.SellingPrice}
                                          </span>
                                        </div>
                                      ) : (
                                        ""
                                      )}
                                    </div>
                                    <BookButton type={"test"} data={item} />
                                    <a
                                      href={"#"}
                                      className="button--hexagon booknow mt-0"
                                      onClick={() =>
                                        handleModalOpen(item?.TestName)
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
                            </div>
                          ))
                        ) : (
                          <div className="singl_clm text-center text-dark fs-20">
                            No Test Data Available
                          </div>
                        )}
                      </div>
                      {tests?.length > 0 && (
                        <div className="row justify-content-between my-3">
                          <div className="col-md-3"></div>
                          <div className="col-md-9 d-flex justify-content-end align-items-center">
                            <div className="mr-3 f-14">{`${t("Showing")}  ${
                              offsetT + 1
                            } - ${offsetT + tests?.length} ${t("of")} ${
                              testData?.TotalTests
                            } ${t("result")}`}</div>
                            <div className="ml-3">
                              <Pagination
                                onChange={handlePaginationT}
                                current={page}
                                total={Math.ceil(testData?.TotalTests / 2)}
                              />
                            </div>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </>
              ) : (
                <SectionLoader />
              )}
            </div>
          </div>
      </section>
      <SendQueryModal
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        test={tab == "packages" ? false : true}
        code={code}
      />
    
    </React.Fragment>
  );
};
// export const getStaticProps= async ({ locale }:{locale: string}) => {
//     let Slug = ROUTE.PATHLOGYTEST?.replace("/", "");
//     const data: any = await Api.post(Url.seoDetail, { Slug: Slug });
//     return {
//       props: {
//         seoData: data?.Result?.Details || {},
//       ...(await serverSideTranslations(locale, ["common"])),
//       },
//     };
//   };
export default PathlogyTest;
