
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";


import { FDiscount } from "@/Utils/index";
import { testAction } from "@/redux/action";
import { ROUTE } from "@/Const/Route";
import BreadCrumb from "@/Component/Common/BreadCrumb";
import WaitScreen from "@/Component/Common/LodingScreen/WaitScreen";
import BookButton from "@/Component/Feature/BookATest/BookButton";
import DetailBookButton from "@/Component/Feature/packageDetail/DetailBookButton";


import { useTranslation } from "next-i18next";
import SendQueryModal from "@/Component/Feature/packageDetail/SendQueryModal";
import GetAQueryButton from "@/Component/Feature/packageDetail/GetAQueryButton";
import SeoFooterContent from "@/Component/Common/Seo/SeoFooterContent";
import SeoHeaderContent from "@/Component/Common/Seo/SeoHeaderContent";
import {NextPage } from 'next';
import Api from '@/redux/common/api';
import { SITE_URL, Url } from '@/redux/common/url';
import { NextSeo } from 'next-seo';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
interface MyPageProps {
  seoData:any;
}
const TestDetails: NextPage<MyPageProps> = ({ seoData }) =>  {
  const { t } = useTranslation();
  
 const router = useRouter()
 const { slug } = router.query;
  const dispatch = useDispatch();
 
  const testDt = useSelector((state: any) =>
    state.test.selected ? state.test.selected : {}
  );
  const testData = useSelector((state: any) =>
    state.test.selected?.Details ? state.test.selected?.Details : {}
  );
 
  const [show, setShow] = React.useState(false);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [showDiv, setShowDiv] = useState(false);

  useEffect(() => {
    window?.scrollTo(0, 0);
    dispatch(testAction.getTestBySlugAction(slug));
    return () => {};
  }, []);


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
      {testDt && Object.keys(testDt)?.length < 1 && <WaitScreen />}
      {testData && Object.keys(testData)?.length > 0 && (
        <BreadCrumb
          page={t("bread_tests_and_packages")}
          data={{ slug: testData?.TestName, path: ROUTE.BOOKATEST }}
        />
      )}
      {testData && Object.keys(testData)?.length > 0 && (
        <section className="bg-white package_detail_section pt-3 pb-lg-4">
          <div className="container" id="section2">
            <div className="d-flex justify-content-between align-items-center flex-wrap mb-4">
              <div>
                <div className="headingmains text-left">
                  <h1 className="right test-pkg-font aos-init pb-2">
                    {testData?.TestName}
                  </h1>
                </div>
              </div>
              <div>
                <a
                  href="#"
                  onClick={(e: any) => {
                    e.preventDefault();
                    router.push({pathname:ROUTE.BOOKATEST,query:{tabs: "tests",
                    categoryId: "",}},ROUTE.BOOKATEST);
                  }}
                  className="mr-2"
                >
                  {t("back_to_test")}
                </a>
                <DetailBookButton
                  type={"test"}
                  data={testData}
                  className="button--hexagon normal active mx-3"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-9">
              {seoData?.HeaderContent && (
                <section className="bg-package pathlogy-content test-details-content p-4 mb-3">
                  <SeoHeaderContent />
                </section>
      )}
                <div
                  className="bg-package for-cur-pointer col-md-12 p-4 mb-4"
                  onClick={() => setShow(!show)}
                >
                  <div className="infobox_wrapper pkj_wrapper">
                    <div className="test-des-n">
                      <div>
                        <div className="row">
                          <div className="col-md-4">
                            <h2>Department :</h2>
                            <p>{testData?.Department}</p>
                          </div>
                          <div className="col-md-4">
                            <h2>MRP :</h2>
                            <p>₹{testData?.SellingPrice}</p>
                          </div>
                          <div className="col-md-4">
                            <h2>Technique :</h2>
                            <p>{testData?.Technique}</p>
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
                                <strong>Test Name</strong>
                              </td>
                              <td>{testData?.TestName}</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>Test Code</strong>
                              </td>
                              <td>{testData?.TestCode}</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>Department</strong>
                              </td>
                              <td>{testData?.Department}</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>MRP</strong>
                              </td>
                              <td>₹{testData?.SellingPrice}</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>Technique</strong>
                              </td>
                              <td>{testData?.Technique}</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>Sample Type</strong>
                              </td>
                              <td>{testData?.SampleType}</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>Temperature</strong>
                              </td>
                              <td>{testData?.Temperature}</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>Sample Remarks</strong>
                              </td>
                              <td>{testData?.SampleRemarks}</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>Cut Off Time</strong>
                              </td>
                              <td>{testData?.CutOffTime}</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>TAT / Reported on</strong>
                              </td>
                              <td>{testData?.ReportTAT}</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>Test Category</strong>
                              </td>
                              <td>{testData?.TestCategory}</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>Billing Category</strong>
                              </td>
                              <td>{testData?.BillingCategory}</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>Schedule</strong>
                              </td>
                              <td>{testData?.Schedule}</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>Components</strong>
                              </td>
                              <td>
                                {" "}
                                {testData?.Components &&
                                testData?.Components.length > 0
                                  ? testData?.Components.map(
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
                {testData?.Description && (
                  <div className="bg-package imp-instruction col-md-12 p-4 mb-3">
                    <h4 className="mb-3 text-dark">{"Test Brief"}</h4>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: testData?.Description
                          ? testData?.Description
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
                    {testData?.Faqs && testData?.Faqs.length > 0 ? (
                      testData?.Faqs.map((item: any, i: any) => (
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
                <div
                  className="d-flex my-3"
                  style={{ width: "fit-content", gap: "1rem" }}
                >
                  <DetailBookButton
                    type={"test"}
                    data={testData}
                    className="button--hexagon normal active"
                  />
                  <GetAQueryButton
                    setModalIsOpen={setModalIsOpen}
                    className="button--hexagon normal active"
                  />
                </div>
                {seoData?.FooterContent && (
                <section className="bg-package pathlogy-content p-4 mb-3">
                  <SeoFooterContent />
                </section>
                  )}
              </div>
              <div className="col-md-3">
                <div className="row">
                  <div className="col-12 mb-3">
                    <div className="h-services h2-services">
                      <div className="infobox_wrapper pkj_wrap_box active">
                        {FDiscount(testData?.MRP, testData?.SellingPrice) ? (
                          <div className="dis_icon text-center">
                            <img
                              src="/assets/img/discount.jpeg"
                              className="scale"
                            />
                            <span className="img_text_center">
                              {FDiscount(testData?.MRP, testData?.SellingPrice)}{" "}
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
                          {testData?.TestName}
                        </h3>
                        {testData?.Recommendation ? (
                          <div className="infobox_lines">
                            {" "}
                            <img
                              src="/assets/img/info.png"
                              className="scale_booknow"
                            />
                            {testData?.Recommendation}
                          </div>
                        ) : (
                          ""
                        )}
                        {testData?.Components?.length > 0 ? (
                          <div className="infobox_lines">
                            {" "}
                            <img
                              src="/assets/img/parameter.png"
                              className="scale_booknow"
                            />
                            {testData?.Components?.length}
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
                          {testData?.ReportTAT}
                        </div>

                        {testData?.SampleReport && (
                          <a
                            href={testData?.SampleReport}
                            target="_blank"
                            className="infobox_lines"
                          >
                            {" "}
                            <img
                              src="/assets/img/report.png"
                              className="scale_booknow"
                            />
                            Download Sample Report
                          </a>
                        )}
                        {/* <Link to={`${ROUTE.PACKAGEDETAILS}/${testData?.Slug}`} className="moreButton">+More</Link> */}
                        <div className="d-flex mb-3 justify-content-between align-items-baseline">
                          <div>
                            {testData?.MRP !== testData?.SellingPrice && (
                              <span className="price-redtext">
                                &#x20B9;{`${testData?.MRP}`}
                              </span>
                            )}{" "}
                            <span className="price-bluetext">
                              &#x20B9;{`${testData?.SellingPrice}`}
                            </span>
                          </div>
                          {testData?.MRP - testData?.SellingPrice > 0 ? (
                            <div>
                              <span className="price-greentext">
                                {t("save")} &#x20B9;
                                {testData?.MRP - testData?.SellingPrice}
                              </span>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                        <BookButton type={"test"} data={testData} />
                        <GetAQueryButton setModalIsOpen={setModalIsOpen} />
                      </div>
                    </div>
                  </div>
                  {testData?.SampleReport && (
                    <div className="col-12 my-4">
                      <div className="dd">
                        <div className="bg-pdf">
                          <img
                            className="scale img_1"
                            src={t("images.sample")}
                            alt=""
                          />
                          <img
                            className="scale img_2"
                            src={t("images.sample_report_bg")}
                            alt=""
                          />
                          <a
                            href={testData?.SampleReport}
                            target="_blank"
                            className="book--hexagon transparent"
                          >
                            <span>
                              VIEW SAMPLE
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
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      <SendQueryModal
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        test={true}
        code={testData?.TestName}
      />
    </React.Fragment>
  );
}
export const getServerSideProps = async ({ locale,params }:{locale: string,params:any}) => {
  let Slug = `${ROUTE.TESTDETAILS}/${params.slug}`?.replace("/", "");
  
  const data: any = await Api.post(Url.seoDetail, { Slug: Slug});
 
  const val:any = await Api.post(`${Url.testBySlug}/${params?.slug}`,{});
    

   

   const isSlugCorrect = val?.Result?.Details?.Id
    if(isSlugCorrect){
        return {
            props: {
              
              seoData: data?.Result?.Details || {},
              ...(await serverSideTranslations(locale, ["common"])),
            },
          };
    }
    else{
        return{
            notFound:true,
        }
    }
    
};
export default TestDetails;
