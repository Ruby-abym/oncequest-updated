
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

import { FDiscount } from "@/Utils/index";
import { packageAction } from "@/redux/action";
import { ROUTE } from "@/Const/Route";
import BookButton from "@/Component/Feature/BookATest/BookButton";
import BreadCrumb from "@/Component/Common/BreadCrumb";
import WaitScreen from "@/Component/Common/LodingScreen/WaitScreen";


import DetailBookButton from "@/Component/Feature/packageDetail/DetailBookButton";
import { useTranslation } from "next-i18next";
import SendQueryModal from "@/Component/Feature/packageDetail/SendQueryModal";
import GetAQueryButton from "@/Component/Feature/packageDetail/GetAQueryButton";
import {NextPage } from 'next';
import Api from '@/redux/common/api';
import { SITE_URL, Url } from '@/redux/common/url';
import { NextSeo } from 'next-seo';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
interface MyPageProps {
    seoData:any;
  }
const PackageDetails: NextPage<MyPageProps> = ({ seoData }) =>  {
  const { t } = useTranslation();
 
  const dispatch = useDispatch();
  const router = useRouter();
  const {slug} = router.query;
  const packageDt = useSelector((state: any) =>
    state.package.selected ? state.package.selected : {}
  );
  const packageData = useSelector((state: any) =>
    state.package.selected?.Details ? state.package.selected?.Details : {}
  );
  const component = useSelector(
    (state: any) => state.package.packageComponent?.Lists
  );
  const [show, setShow] = React.useState(true);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  useEffect(() => {
    window?.scrollTo(0, 0);
    dispatch(packageAction.getPackageBySlugAction(slug));
    return () => {};
  }, []);

  useEffect(() => {
    if (
      packageData?.Tests &&
      Array.isArray(packageData?.Tests) &&
      packageData?.Tests?.length > 0
    ) {
      let IdArr = packageData?.Tests.map((item: any) => {
        return item?.test_id;
      });
      if (IdArr) {
        dispatch(packageAction.getPackageComponetAction(IdArr?.toString()));
      }
    }
    return () => {};
  }, [packageData]);
  

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
      {packageDt && Object.keys(packageDt)?.length < 1 && <WaitScreen />}
      {packageData && Object.keys(packageData)?.length > 0 && (
      <BreadCrumb
        page={t("bread_tests_and_packages")}
        data={{ slug: packageData?.PackageName, path: ROUTE.BOOKATEST }}
      />
      )}
      {packageData && Object.keys(packageData)?.length > 0 && (
        <section className="package_detail_section pt-3 pb-4 bg-white">
          <div className="container" id="section2">
            <div className="d-flex justify-content-between align-items-center flex-wrap mb-4">
              <div>
                <div className="headingmains text-left">
                  <h1 className="right test-pkg-font aos-init pb-2">
                    {packageData?.PackageName}
                  </h1>
                </div>
              </div>
              <div>
                <a
                  href="#"
                  onClick={(e: any) => {
                    e.preventDefault();
                    router.push({pathname:ROUTE.BOOKATEST, query:{
                      tabs: "packages",
                      categoryId: "",
                    }},ROUTE.BOOKATEST);
                  }}
                >
                  {t("back_to_packages")}
                </a>
                <DetailBookButton
                  type={"package"}
                  data={packageData}
                  className="button--hexagon normal active mx-3"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-9">
                <div
                  className="bg-package for-cur-pointer col-md-12 p-4 mb-4"
                  onClick={() => setShow(!show)}
                >
                  <div className="infobox_wrapper pkj_wrapper">
                    <div className="infobox_wrapper pkj_wrapper">
                      <div className="test-des-n">
                        <div>
                          <div className="row">
                            <div className="col-md-4">
                              <h2>Department :</h2>
                              <p>{packageData?.Department}</p>
                            </div>
                            <div className="col-md-4">
                              <h2>MRP :</h2>
                              <p>₹{packageData?.SellingPrice}</p>
                            </div>
                            <div className="col-md-4">
                              <h2>Technique :</h2>
                              <p>{packageData?.Technique}</p>
                            </div>
                          </div>
                          <div className="icon-test-descr">
                            {show ? (
                              <i className="fa fa-minus"></i>
                            ) : (
                              <i className="fa fa-plus"></i>
                            )}
                          </div>
                        </div>
                      </div>
                      {show && (
                        <div className="test-des-table">
                          <h3>Details</h3>

                          <table className="table">
                            <tbody>
                              <tr>
                                <td width="40%">
                                  <strong>Package Name</strong>
                                </td>
                                <td>{packageData?.PackageName}</td>
                              </tr>
                              <tr>
                                <td>
                                  <strong>Package Code</strong>
                                </td>
                                <td>{packageData?.PackageCode}</td>
                              </tr>
                              <tr>
                                <td>
                                  <strong>Department</strong>
                                </td>
                                <td>{packageData?.Department}</td>
                              </tr>
                              <tr>
                                <td>
                                  <strong>MRP</strong>
                                </td>
                                <td>₹{packageData?.SellingPrice}</td>
                              </tr>
                              <tr>
                                <td>
                                  <strong>Technique</strong>
                                </td>
                                <td>{packageData?.Technique}</td>
                              </tr>
                              <tr>
                                <td>
                                  <strong>Sample Type</strong>
                                </td>
                                <td>{packageData?.SampleType}</td>
                              </tr>
                              <tr>
                                <td>
                                  <strong>Temperature</strong>
                                </td>
                                <td>{packageData?.Temperature}</td>
                              </tr>
                              <tr>
                                <td>
                                  <strong>Sample Remarks</strong>
                                </td>
                                <td>{packageData?.SampleRemarks}</td>
                              </tr>
                              <tr>
                                <td>
                                  <strong>Cut Off Time</strong>
                                </td>
                                <td>
                                  {packageData?.CutOffTime
                                    ? packageData?.CutOffTime
                                    : "NA"}
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <strong>TAT / Reported on</strong>
                                </td>
                                <td>{packageData?.ReportTAT}</td>
                              </tr>
                              <tr>
                                <td>
                                  <strong>Billing Category</strong>
                                </td>
                                <td>{packageData?.BillingCategory}</td>
                              </tr>
                              <tr>
                                <td>
                                  <strong>Schedule</strong>
                                </td>
                                <td>{packageData?.Schedule}</td>
                              </tr>
                              <tr>
                                <td>
                                  <strong>Components</strong>
                                </td>
                                <td>
                                  {" "}
                                  {packageData?.Components &&
                                  packageData?.Components.length > 0
                                    ? packageData?.Components.map(
                                        (item: any, i: any) => (
                                          <p>{item?.title} </p>
                                        )
                                      )
                                    : ""}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="bg-package imp-instruction col-md-12 p-4 mb-3">
                  <h4 className="mb-3 text-dark">Important Instructions</h4>
                  <ul>
                    <li>
                      Turn Around Time (TAT) starts from the time sample reaches
                      processing laboratory.
                    </li>
                    <li>12 hours fasting may be required for certain tests.</li>
                    <li>
                      For any query please email as at: life@oncquestlabs.com or
                      call us: 0124 6650000
                    </li>
                    <li>
                      Prices are indicative and may vary from location to
                      location.
                    </li>
                  </ul>
                </div>
                {packageData?.Description && (
                  <div className="bg-package imp-instruction col-md-12 p-4 mb-3">
                    <h4 className="mb-3 text-dark">{"Package Brief"}</h4>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: packageData?.Description
                          ? packageData?.Description
                          : "",
                      }}
                    ></div>
                  </div>
                )}
                {/* <div className="bg-package faq_wrap col-md-12 p-4 mb-3">
                  <h4 className="mb-3 text-dark">
                    {t("frequently_asked_questions")}
                  </h4>
                  <ul>
                    {packageData &&
                    packageData?.Faqs &&
                    packageData?.Faqs.length > 0 ? (
                      packageData?.Faqs.map((item: any, i: any) => (
                        <Accord
                          title={item?.title}
                          description={item?.description}
                          key={i}
                        />
                      ))
                    ) : (
                      <p className="text-left fs-16">
                        {t("no_Frequently_asked_questions_available")}
                      </p>
                    )}
                  </ul>
                </div> */}
                <div className="d-flex my-3" style={{width: "fit-content", gap: "1rem"}}>
                    <DetailBookButton
                      type={"package"}
                      data={packageData}
                      className="button--hexagon normal active"
                    />
                    <GetAQueryButton
                      setModalIsOpen={setModalIsOpen}
                      className="button--hexagon normal active"
                    />
                </div>
              </div>
              <div className="col-md-3">
                <div className="row">
                  <div className="col-12 mb-3">
                    <div className="h-services h2-services">
                      <div className="infobox_wrapper pkj_wrap_box active">
                        {FDiscount(
                          packageData?.MRP,
                          packageData?.SellingPrice
                        ) ? (
                          <div className="dis_icon text-center">
                            <img
                              src="/assets/img/discount.jpeg"
                              className="scale"
                            />
                            <span className="img_text_center">
                              {FDiscount(
                                packageData?.MRP,
                                packageData?.SellingPrice
                              )}{" "}
                              <br />
                              {t("off")}
                            </span>
                          </div>
                        ) : (
                          ""
                        )}
                        <div className="infobox_icon_container">
                          <img
                            src="/assets/img/test_blood.png"
                            className="scale circle_img"
                          />
                        </div>
                        <h3 className="infobox_title text-uppercase">
                          {packageData?.PackageName}
                        </h3>
                        <div className="infobox_lines">
                          {" "}
                          <img
                            src="/assets/img/info.png"
                            className="scale_booknow"
                          />
                          {packageData?.Recommendation}
                        </div>
                        <div className="infobox_lines">
                          {" "}
                          <img
                            src="/assets/img/parameter.png"
                            className="scale_booknow"
                          />
                          {packageData?.ComponentCount
                            ? packageData?.ComponentCount
                            : 0}
                          {" Parameter(s) covered"}
                        </div>
                        <div className="infobox_lines">
                          {" "}
                          <img
                            src="/assets/img/daily.png"
                            className="scale_booknow"
                          />
                          {packageData?.ReportTAT}
                        </div>
                        {packageData?.SampleReport && (
                          <a
                            href={packageData?.SampleReport}
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
                        {/* <Link to={`${ROUTE.PACKAGEDETAILS}/${packageData?.Slug}`} className="moreButton">+More</Link> */}
                        <div className="d-flex mb-3 justify-content-between align-items-baseline">
                          <div>
                            {packageData?.MRP !== packageData?.SellingPrice && (
                              <span className="price-redtext">
                                &#x20B9;{`${packageData?.MRP}`}
                              </span>
                            )}{" "}
                            <span className="price-bluetext">
                              &#x20B9;{`${packageData?.SellingPrice}`}
                            </span>
                          </div>
                          {packageData?.MRP - packageData?.SellingPrice > 0 ? (
                            <div>
                              <span className="price-greentext">
                                {t("save")} &#x20B9;
                                {packageData?.MRP - packageData?.SellingPrice}
                              </span>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                        <BookButton type={"package"} data={packageData} />
                        <GetAQueryButton setModalIsOpen={setModalIsOpen} />
                      </div>
                    </div>
                  </div>
                  {packageData?.SampleReport && (
                    <div className="col-12 my-4">
                      <div className="dd">
                        <div className="bg-pdf">
                         
                          <a
                            href={packageData?.SampleReport}
                            target="_blank"
                            className="book--hexagon transparent"
                          >
                            <span>
                              {t("view_sample")}
                              <i
                                className="fa fa-long-arrow-right"
                                aria-hidden="true"
                              ></i>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                  {/* <div className="col-12">
                                    <div className="my-3">
                                    <Link to="#">
                                        <img className="scale" src={"/assets/img/test_banner1.png"} alt=""/>
                                    </Link>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="my-3">
                                    <Link to="#">
                                        <img className="scale" src={"/assets/img/test_banner2.png"} alt=""/>
                                    </Link>
                                    </div>
                                </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      <SendQueryModal
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        test={false}
        code={packageData?.PackageName}
      />
    </React.Fragment>
  );
}
export const getServerSideProps = async ({ locale,params }:{locale: string,params:any}) => {
    let Slug = `${ROUTE.PACKAGEDETAILS}/${params.slug}`?.replace("/", "");
   
    const data: any = await Api.post(Url.seoDetail, { Slug: Slug});
    try {
         const val:any = await Api.post(`${Url.packageBySlug}/${params?.slug}`,{});
    
 
  return {
    props: {
      
      seoData: data?.Result?.Details || {},
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };

  
    } catch (error) {
      return{
                notFound:true,
            }
    }
    
    
  };
export default PackageDetails;
