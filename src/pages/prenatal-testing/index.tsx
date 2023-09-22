import { Formik } from 'formik';

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import {  submitAction } from '../../redux/action';
import { onlyNumber } from '@/Utils/index';
import { useRouter } from 'next/router';
import { ROUTE } from '@/Const/Route';
import BreadCrumb from '@/Component/Common/BreadCrumb';
import Api from "@/redux/common/api";
import { SITE_URL, Url } from "@/redux/common/url";
import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";

import { useTranslation } from 'next-i18next';
import { validateQuickLink } from '@/Utils/Validation';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const initialValue = { Name: "", Email: "", Mobile: "", Message: "", CityId: "" };
interface MyPageProps {
    seoData: any;
  }
const PrenatalTesting: NextPage<MyPageProps> = ({seoData})=> {
    const  {t}  = useTranslation();
    const dispatch = useDispatch();
    const router = useRouter();
    const [values, setValues] = useState<any>({ ...initialValue });
    const [collapse, setCollapse] = useState(false);
    const cityData = useSelector((state: any) => state.dashboard.city);
    const [initialRenderComplete, setInitialRenderComplete] = useState<boolean>(false);
    useEffect(() => {
      setInitialRenderComplete(true);
    }, []);
    // console.log(hello)
    useEffect(() => {
        window?.scrollTo(0, 0);
        return () => { };
    }, []);

    const handleSubmit = (values: any) => {
        let data: any = values;
        data.SourceUrl = window.location.href;
        dispatch(submitAction.submitQueryAction(data, router));
    };
    if(!initialRenderComplete) return <></>
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
            <BreadCrumb page={t("prenatal_testing")} data={{ slug: "", path: "" }} />
            <section className="about-section prenanat-about-sec">
                <div className="container" id="section2">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="overview-wrap text-center mt-3">
                                <img src={t("images.prenataltesting.prenataltesting_banner_new_website")} className="scale round_img" alt="" />
                                <div className="headingmains text-center">
                                    <h1 className="right aos-init mt-3 mt-lg-5 mt-3">{t("prenatal_testing")}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="news_section pb-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <div className='partnerDetais prenatal-para w-100 scenario-head partnerDetais-par'><br></br>
                                <p><strong>{t("prenatal_testing_about1")} </strong></p>
                                <br></br>
                                <p>{t("prenatal_testing_about2")}</p>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className='w-100'>
                                <div className="h-services">
                                    <div className="infobox_wrapper pb-2">
                                        <Formik
                                            initialValues={initialValue}
                                            enableReinitialize={true}
                                            validationSchema={validateQuickLink}
                                            onSubmit={(val: any) => {
                                                handleSubmit(val)
                                            }}
                                            render={({ values, handleChange, errors, touched, handleBlur, handleSubmit }) => (
                                                <form onSubmit={handleSubmit} style={{ width: "100%" }}>
                                                    <h6 className="ln-1 mr-10">{t("neurology_form_title")}
                                                    </h6>
                                                    <div className="ln-1 mr-10">{t("neurology_form_note")}</div>
                                                    <div className="form-group">
                                                        <input type="text" name="Name" className="form-control" placeholder={t("name")} onChange={handleChange} onBlur={handleBlur} value={values?.Name} />
                                                        {touched?.Name && errors?.Name && <span className="error_message">{t(errors?.Name as any)}</span>}
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="text" name="Mobile" className="form-control" placeholder={t("mobile_number")} onKeyPress={onlyNumber} onChange={handleChange} onBlur={handleBlur} value={values?.Mobile} />
                                                        {touched?.Mobile && errors?.Mobile && <span className="error_message">{t(errors?.Mobile as any)}</span>}
                                                    </div>
                                                    <div className="form-group">
                                                        <select className="form-control" name="CityId" id="CityId" onChange={handleChange} onBlur={handleBlur} value={values?.CityId} >
                                                            <option value="">{t("city")}</option>
                                                            {cityData && cityData.length > 0 && cityData?.map((item: any, i: any) => (
                                                                <option value={item?.Id} key={i} className="text-uppercase">{t(item?.Name)}</option>
                                                            ))}
                                                        </select>
                                                        {touched?.CityId && errors?.CityId && <span className="error_message">{t(errors?.CityId as any)}</span>}
                                                    </div>
                                                    <div className="form-group">
                                                        <textarea className="form-control" placeholder={t("message")} name="Message" onChange={handleChange} onBlur={handleBlur} value={values?.Message}></textarea>
                                                        {touched?.Message && errors?.Message && <span className="error_message">{t(errors?.Message as any)}</span>}
                                                    </div>
                                                    <button type="submit" className="book--hexagon active" ><span>{t("submit_btn")}<i className="fa fa-long-arrow-right ml-20" aria-hidden="true"></i></span></button>
                                                </form>
                                            )}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="pink-section w-100">
            </div>
            <section>
                <div className="print-molecular-dv w-100 nw-sct">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="molecular-main-part w-100 float-left">
                                    <div className="molecular-frst-dv w-100 float-left">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <h2>{t("types_prenatal_testing")}</h2>

                                                <div className="row text-hms partnerDetais part-pad0 head-pren">
                                                    <div className="col-lg-12 sub-head-pren">
                                                        <p className='sub-head-pren'><strong>{t("types_prenatal_testing_info")} </strong></p>
                                                        <h5>{t("screening_tests")}</h5>
                                                        <p>{t("screening_tests_about")}
                                                        </p>
                                                        <h5>{t("diagnostic_tests")}</h5>
                                                        <p>{t("diagnostic_tests_about")}</p>
                                                        <h5>{t("1st-trimester_screening_adv")} </h5>

                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-6 col-md-6">
                                                <img src={t("images.prenataltesting.prenatal-types")} alt="" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="molecular-thrd molecular-thrd-pren w-100 float-left">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="molecls-dv w-100 float-left partnerDetais">
                                                    <h2>{t("types_prenatal_screening_testing")}</h2>
                                                    <p>{t("prenatal_testing_include")}</p>

                                                    <h4>{t("first_trimester_tests")}</h4>
                                                    <img src={t("images.prenataltesting.screening-tests-types")} alt="" />
                                                    <p>{t("first_trimester_tests_about")} </p>

                                                    <h4>{t("second_trimester_tests")}</h4>
                                                    <p>{t("second_trimester_tests_about")}</p>

                                                    <h4>{t("cell_free_dna_screening")}</h4>
                                                    <p>{t("cell_free_dna_screening_about1")}</p>
                                                    <p>{t("cell_free_dna_screening_about2")}</p>

                                                    <h4>{t("pre_screening_test_results")}</h4>
                                                    {/* <img src={t("images.neurology.parkison")} alt="" /> */}
                                                    <p>{t("pre_screening_test_results_info")}
                                                    </p>

                                                    <h4>{t("prenatal_care")}</h4>
                                                    <p>{t("prenatal_care_info")}</p>

                                                    <h4>{t("pre_accurate_results")}</h4>
                                                    <p>{t("pre_accurate_results_info")}</p>
                                                    <h5 className='mb-2'>{t("1st-trimester_screening_adv1")}</h5>
                                                    <ul>
                                                        <li>{t("decision_to_pursue")}</li>
                                                    </ul>
                                                    <h4>{t("neurology_sub_heading8")}</h4>
                                                    <ul>
                                                        <li>{t("test_offering1")}</li>
                                                        <li>{t("test_offering2")}</li>
                                                        <li>{t("test_offering3")}</li>
                                                        <li>{t("test_offering4")}</li>
                                                        <li>{t("test_offering5")}</li>
                                                        <li>{t("test_offering6")}</li>
                                                        <li>{t("test_offering7")}</li>
                                                        <li>{t("test_offering8")}</li>
                                                        <li>{t("test_offering9")}</li>
                                                        <li>{t("test_offering10")}</li>
                                                        <li>{t("test_offering11")}</li>
                                                        <li>{t("test_offering12")}</li>
                                                        <li>{t("test_offering13")}</li>
                                                        <li>{t("test_offering14")}</li>
                                                        <li>{t("test_offering15")}</li>
                                                        <li>{t("test_offering16")}</li>
                                                        <li>{t("test_offering17")}</li>
                                                        <li>{t("test_offering18")}</li>
                                                        <li>{t("test_offering19")}</li>
                                                        <li>{t("test_offering20")}</li>
                                                        <li>{t("test_offering21")}</li>
                                                        <li>{t("test_offering22")}</li>
                                                        <li>{t("test_offering23")}</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
export const getStaticProps = async ({ locale }:{locale: string}) => {
    // let Slug = ROUTE.PRENATALTESTING?.replace("/", "");
    // const data: any = await Api.post(Url.seoDetail, { Slug: Slug });
    return {
      props: {
        // seoData: data?.Result?.Details || {},
      ...(await serverSideTranslations(locale, ["common"])),
      },
    };
  };
export default PrenatalTesting