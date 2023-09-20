import { Formik } from 'formik';

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Api from "@/redux/common/api";
import { SITE_URL, Url } from "@/redux/common/url";
import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import {  submitAction } from '../../redux/action';
import { onlyNumber } from '@/Utils/index';
import { ROUTE } from '@/Const/Route';
import BreadCrumb from '@/Component/Common/BreadCrumb';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { validateQuickLink } from '@/Utils/Validation';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const initialValue = { Name: "", Email: "", Mobile: "", Message: "", CityId: "" };
interface MyPageProps {
    seoData: any;
  }
const Cancer : NextPage<MyPageProps> = ({seoData})=> {
    const  {t}  = useTranslation();
    const dispatch = useDispatch();
    const router = useRouter();
    const [initialRenderComplete, setInitialRenderComplete] = useState<boolean>(false);
  useEffect(() => {
    setInitialRenderComplete(true);
  }, []);
    const [values, setValues] = useState<any>({ ...initialValue });
    const [collapse, setCollapse] = useState(false);
    const cityData = useSelector((state: any) => state.dashboard.city);

    useEffect(() => {
        window?.scrollTo(0, 0);
        return () => { };
    }, []);

    const handleSubmit = (values: any) => {
        let data: any = values;
        data.SourceUrl = window.location.href;
        dispatch(submitAction.submitQueryAction(data, history));
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
            <BreadCrumb page={t("Cancer")} data={{ slug: "", path: "" }} />
            <section className="about-section">
                <div className="container" id="section2">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="overview-wrap text-center mt-3">
                                <img src={t("images.cancer.banner")} className="scale round_img" alt="" />
                                <div className="headingmains text-center">
                                    <h1 className="right aos-init mt-3 mt-lg-5 mt-3">{t("Cancer")}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="news_section pb-4">
                <div className="container">
                    <div className="row pt-3">
                        <div className="col-md-7">
                            <div className='partnerDetais w-100 scenario-head partnerDetais-par'>
                                <h1>{t("what_is_cancer")}</h1><br></br>
                                <p>{t("about_cancer_info")}</p>
                                <br></br>
                                <h2>{t("cancer_common_forms")}</h2>
                                <ul>
                                    <li>{t("cancer_occur")}</li>
                                </ul>
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
                                                        <input type="text" className="form-control" placeholder={t("email")} name="Email" onChange={handleChange} onBlur={handleBlur} value={values?.Email} />
                                                        {touched?.Email && errors?.Email && <span className="error_message">{t(errors?.Email as any)}</span>}
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
            <section id="molecualr-dv">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 p-0">
                            <div className="molecualr-img w-100 float-left">
                                <img src={t("images.cancer.cancer1")} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 p-0">
                            <div className="molecular-text w-100 float-left">
                                <div className="w-100 float-left cancer_li">
                                    <h2>{t("five_main_cat")}</h2>
                                    <ul>
                                        <li>{t("cat_cancer1")}</li>
                                        <li>{t("cat_cancer2")}</li>
                                        <li>{t("cat_cancer3")}</li>
                                        <li>{t("cat_cancer4")}</li>
                                        <li>{t("cat_cancer5")}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section><br></br>
            <section>
                <div className="print-section w-100 ">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="print-left-part w-100 float-left partnerDetais cancer_li">
                                    <h3>{t("cancer_scenario")}</h3>
                                    <ul>
                                        <li>{t("cancer_scenario1")}</li>
                                        <li>{t("cancer_scenario2")}</li>
                                        <li>{t("cancer_scenario3")}</li>
                                        <li>{t("cancer_scenario4")}</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <div className="print-left-part w-100 float-left blue-prnt partnerDetais cancer_li">
                                    <h3>{t("cancer_statistics")}</h3>
                                    <ul>
                                        <li>{t("cancer_statistics1")}</li>
                                        <li>{t("cancer_statistics2")}</li>
                                        <li>{t("cancer_statistics3")}</li>
                                        <li>{t("cancer_statistics4")}</li>
                                        <li>{t("cancer_statistics5")}</li>
                                    </ul>
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
                                                <h2>{t("cancer_men_women")}</h2>
                                                <p className='my-2'>{t("cancer_men_women_info")}</p>
                                                <div className="row text-hms partnerDetais part-pad0">
                                                    <div className="col-lg-6 cancer_li">
                                                        <h4>{t("top5_cancer_men")}</h4>
                                                        <ul>
                                                            <li>{t("top_cancer_men1")}</li>
                                                            <li>{t("top_cancer_men2")}</li>
                                                            <li>{t("top_cancer_men3")}</li>
                                                            <li>{t("top_cancer_men4")}</li>
                                                            <li>{t("top_cancer_men5")}</li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-lg-6 cancer_li">
                                                        <h4>{t("top5_cancer_women")}</h4>
                                                        <ul>
                                                            <li>{t("top_cancer_women1")}</li>
                                                            <li>{t("top_cancer_women2")}</li>
                                                            <li>{t("top_cancer_women3")}</li>
                                                            <li>{t("top_cancer_women4")}</li>
                                                            <li>{t("top_cancer_women5")}</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-6 col-md-6">
                                                <img src={t("images.cancer.killer")} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="molecular-thrd w-100 float-left">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="molecls-dv w-100 float-left partnerDetais cancer_li">
                                                    <h4>{t("breast_cancer")}</h4>
                                                    <p>{t("breast_cancer_info")}</p>
                                                    <h4>{t("oral_cancer")}</h4>
                                                    <p>{t("oral_cancer_info")}</p>
                                                    <h4>{t("lung_cancer")}</h4>
                                                    <img src={t("images.cancer.lungs")} alt="" />
                                                    <p>{t("lung_cancer_info1")}</p>
                                                    <p>{t("lung_cancer_info2")}</p>
                                                    <h4>{t("cervical_cancer")}</h4>
                                                    <p>{t("cervical_cancer_info1")}</p>
                                                    <p>{t("cervical_cancer_info2")}</p>

                                                    <h4>{t("leukemia")}</h4>
                                                    <p>{t("leukemia_info")}</p>

                                                    <h5 className='my-2'>{t("four_types_leukemia")}</h5>
                                                    <ul>
                                                        <li>{t("four_types_leukemia1")}</li>
                                                        <li>{t("four_types_leukemia2")}</li>
                                                        <li>{t("four_types_leukemia3")}</li>
                                                        <li>{t("four_types_leukemia4")}</li>
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
            <section id="molecualr-dv" className=' mb-5'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 p-0">
                            <div className="molecualr-img w-100 float-left">
                                <img src={t("images.cancer.diagnosis")} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 p-0">
                            <div className="molecular-text w-100 float-left">
                                <div className="w-100 float-left cancer_li">
                                    <h2>{t("role_early_diagnosis")}</h2>
                                    <ul>
                                        <li>{t("role_early_diagnosis1")}</li>
                                        <li>{t("role_early_diagnosis2")}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='mb-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <h1 className='w-100 text-center'>{t("cancer_risk_screening")}</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className='cancer_table mt-4 w-100'>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>{t("panel_name")}</th>
                                            <th rowSpan={6}>{t("parameter_name")}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><h4 className='text_dark'><strong>{t("cancer_risk_panel")} ({t("male")})</strong></h4></td>
                                            <td>CBC,
                                                ESR,
                                                AFP, (Tumour Marker)<br></br>
                                                CEA,
                                                CA 19.9,
                                                Total PSA</td>
                                        </tr>
                                        <tr>
                                            <td><h4 className='text_dark'><strong>{t("cancer_risk_panel")} ({t("female")})</strong></h4></td>
                                            <td>CBC,
                                                ESR,
                                                AFP, (Tumour Marker)<br></br>
                                                CEA,
                                                CA 125, CA 15.3</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p style={{cursor: "auto", fontSize: "10px", color: "#666666" }} className="py-1">*Source:
                                    <a style={{ fontSize: "10px", color: "#666666" }} href="https://www.cdc.gov/cancer/risk_factors.htm" target="_blank">https://www.cdc.gov/cancer/risk_factors.htm</a> |
                                    <a style={{ fontSize: "10px", color: "#666666" }} href="http://cancerindia.org.in/dos-and-donts/" target="_blank">http://cancerindia.org.in/dos-and-donts/</a> |
                                    <a style={{ fontSize: "10px", color: "#666666" }} href="https://www.cdc.gov/cancer/dcpc/data/index.htm" target="_blank">https://www.cdc.gov/cancer/dcpc/data/index.htm</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
export const getStaticProps= async ({ locale }:{locale: string}) => {
    let Slug = ROUTE.CANCER?.replace("/", "");
    const data: any = await Api.post(Url.seoDetail, { Slug: Slug });
    return {
      props: {
        seoData: data?.Result?.Details || {},
      ...(await serverSideTranslations(locale, ["common"])),
      },
    };
  };
export default Cancer