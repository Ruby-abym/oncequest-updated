
import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { departmentAction } from "../../redux/action";

import { ROUTE } from "@/Const/Route";
import BreadCrumb from "@/Component/Common/BreadCrumb";

import SubmitForm from "@/Component/Common/SubmitForm/SubmitForm";

import { DoctorEnquiryform } from "@/Utils/Validation";
import {NextPage } from 'next';
import Api from '@/redux/common/api';
import { SITE_URL, Url } from '@/redux/common/url';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import SectionLoader from "@/Component/Common/Loader/SectionLoader";
import { groupBy } from "@/Utils/index";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
interface MyPageProps {
  seoData:any;
}
const Brochure: NextPage<MyPageProps> = ({ seoData }) =>  {
  const [initialRenderComplete, setInitialRenderComplete] = useState<boolean>(false);
  useEffect(() => {
    setInitialRenderComplete(true);
  }, []);
  const dispatch = useDispatch();
  const {t}  = useTranslation();
  const [brochure, setBrochure] = useState<any>({});
  const router = useRouter();
  const bData = useSelector((state: any) =>
    state.department.brochures ? state.department.brochures : {}
  );
  const brochureData = useSelector((state: any) =>
    state.department.brochures ? state.department.brochures?.List : {}
  );
  useEffect(() => {
   
    dispatch(departmentAction.brochuresListAction({}));
    return () => {};
  }, []);

  useEffect(() => {
    if (brochureData) {
      let newData = groupBy(brochureData, "department_id");
      console.log(newData);
      setBrochure(newData);
    }
    return () => {};
  }, [brochureData]);
 

 if(!initialRenderComplete) return<></>

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
      <BreadCrumb page={t("brochures")} data={{ slug: "", path: "" }} />
      <section className="section brochures_page">
        <div className="container">
          <div className="row overview-top">
            <div className="col-md-12">
              <div className="overview-wrap text-center">
                {/* <img src="/assets/img/Department.png" className="scale" alt=""/> */}
                <div className="headingmains text-center pb-3">
                  <h1 className="right aos-init pb-2">{t("brochures")}</h1>
                </div>
                <p className="text-center">{t("brochures_desc")}</p>
              </div>
            </div>
          </div>
        </div>
        <section className="sub-section bg-grey home-services">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="headingmains text-center pb-3">
                  <h4 className="right pb-2">{t("all_brochures")}</h4>
                </div>
              </div>
            </div>
            <div className="tab-content mb-5 mb-lg-0">
              <div id="organs" className="tab-pane fade in active show">
                {bData && Object.keys(bData).length > 0 ? (
                  <>
                    {brochure && (
                      <>
                        {Object.values(brochure).length > 0 ? (
                          Object.values(brochure)?.map(
                            (items: any, index: any) => (
                              <>
                                <div className="row" key={"deprt" + index}>
                                  <div className="col-12">
                                    <div className="headingmains text-center pt-3">
                                      <h4 className="right pb-0">
                                        {items[0].department_name}
                                      </h4>
                                    </div>
                                  </div>
                                </div>
                                <div className="equal_clm h-services for-block-info">
                                  {items?.map((item: any, index: any) => (
                                    <div
                                      className="infobox_wrapper brochures_card"
                                      key={index}
                                    >
                                      <div>
                                        <div>
                                          <div className="infobox_icon_container pdf_icon">
                                            <img
                                              src="/assets/img/pdf_icon.png"
                                              className="scale"
                                              alt=""
                                            />
                                          </div>
                                          <h3 className="infobox_title text-capitalize">
                                            {item?.title}
                                          </h3>
                                          {item?.image ? (
                                            <a
                                              href={item?.image}
                                              className="book--hexagon active"
                                              target="_blank"
                                            >
                                              <span>
                                                <img
                                                  className="scale_download mr-2"
                                                  src="/assets/img/download_logo.png"
                                                  aria-hidden="true"
                                                />
                                                Download
                                              </span>
                                            </a>
                                          ) : (
                                            <a
                                              href=""
                                              className="book--hexagon active disable-download"
                                              onClick={(e: any) =>
                                                e.preventDefault()
                                              }
                                            >
                                              <span>
                                                <img
                                                  className="scale_download mr-2"
                                                  src="/assets/img/download_logo.png"
                                                  aria-hidden="true"
                                                />
                                                Download
                                              </span>
                                            </a>
                                          )}
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </>
                            )
                          )
                        ) : (
                          <div className="singl_clm text-center f-16">
                            {t("no_data_available")}
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
          </div>
        </section>
        <SubmitForm
          heading={t("reach_out-to_us")}
          des={""}
          PageSrc={"Brochures"}
          validationSchema={DoctorEnquiryform}
        />
      </section>
    </React.Fragment>
  );
}
export const getStaticProps = async ({ locale }:{locale: string}) => {
  let Slug = ROUTE.BROCHURES?.replace("/en", "");
  const data: any = await Api.post(Url.seoDetail, { Slug: Slug});
  return {
    props: {
      seoData: data?.Result?.Details || {},
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
export default Brochure;
