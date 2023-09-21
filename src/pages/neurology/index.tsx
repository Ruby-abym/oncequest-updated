import { Formik } from 'formik';

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import {  submitAction } from '../../redux/action';
import { onlyNumber } from '@/Utils/index';
import { ROUTE } from '@/Const/Route';
import Api from "@/redux/common/api";
import { SITE_URL, Url } from "@/redux/common/url";
import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import BreadCrumb from '@/Component/Common/BreadCrumb';
import { useRouter } from 'next/router';

import { useTranslation } from 'next-i18next';
import { validateQuickLink } from '@/Utils/Validation';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
interface MyPageProps {
    seoData: any;
  }
const initialValue = { Name: "", Email: "", Mobile: "", Message: "", CityId: "" };

const Neurology : NextPage<MyPageProps> = ({seoData})=>{
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
            <BreadCrumb page={t("neurology")} data={{ slug: "", path: "" }} />
            <section className="about-section">
                <div className="container" id="section2">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="overview-wrap text-center mt-3">
                                <img src={t("images.neurology.Neurology_banner_new_website")} className="scale round_img" alt="neurology-banner" />
                                <div className="headingmains text-center">
                                    <h2 className="right aos-init mt-3 mt-lg-5 mt-3">{t("neurology_title")}</h2>
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
                                <h1>{t("neurology_heading1")}</h1><br></br>
                                <p>{t("neurology_content_role")}</p>
                                <br></br>
                                <h2>{t("neurology_heading2")}</h2>
                                <ul>
                                    <li><strong>{t("neurology_bold_word")}</strong> {t("neurology_desc")}</li>
                                    <li><strong>{t("neurology_bold_word1")}</strong> {t("neurology_desc1")}</li>
                                </ul>
                                {/* <h5>Highlights</h5>
                            <ul>
                                <li>Be a part of India’s Leading Super Specialized Laboratory Network.</li>
                                <li>Minimum investment around &#x20B9;2- 3 Lakh.</li>
                                <li>Good return on investment.</li>
                                <li>Exclusive Oncquest collection center.</li>
                            </ul>
                            <h5>Eligibility</h5>
                            <ul>
                                <li>Approx. 150-250 sq. ft. area at ground floor with toilet facility.</li>
                                <li>Preferred from medical experienced background.</li>
                                <li>Good return on investment.</li>
                                <li>A self-motivated fwf df entrepreneur.</li>
                            </ul> */}
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
                                <img src={t("images.neurology.cancer_diagnosis")} alt="" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 p-0">
                            <div className="molecular-text w-100 float-left">
                                <div className="w-100 float-left">
                                    <h2>{t("neurology_bold_word12")}</h2>
                                    <ul>
                                        <li>{t("neurology_desc2")}</li>
                                        <li>{t("neurology_desc3")}</li>
                                        <li>{t("neurology_desc4")}</li>
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
                                <div className="print-left-part w-100 float-left partnerDetais">
                                    <h3>{t("neurology_heading3")}</h3>
                                    <ul>
                                        <li>{t("neurology_desc5")}</li>
                                        <li>{t("neurology_desc6")} <strong><i>{t("neurology_bold_word2")}</i></strong></li>
                                        <li>{t("neurology_desc7")}</li>
                                        <li> {t("neurology_desc8")} <strong><i>{t("neurology_bold_word3")}</i></strong> {t("neurology_desc9")}</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <div className="print-left-part w-100 float-left blue-prnt partnerDetais">
                                    <h3>{t("neurology_heading4")}</h3>
                                    <p>{t("neurology_desc10")}</p>
                                    <ul>
                                        <li>{t("nerve_disorders_list_item1")}</li>
                                        <li>{t("nerve_disorders_list_item2")}</li>
                                        <li>{t("nerve_disorders_list_item3")}</li>
                                        <li>{t("nerve_disorders_list_item4")}</li>
                                        <li>{t("nerve_disorders_list_item5")}</li>
                                        <li>{t("nerve_disorders_list_item6")}</li>
                                        <li>{t("nerve_disorders_list_item7")}</li>
                                        <li>{t("nerve_disorders_list_item8")}</li>
                                        <li>{t("nerve_disorders_list_item9")}</li>
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
                                                <h2>{t("neurology_heading5")}</h2>

                                                <div className="row text-hms partnerDetais part-pad0">
                                                    <div className="col-lg-12">
                                                        <ul>
                                                            <li><strong>{t("neurology_bold_word4")}</strong> {t("meaning_type_content")}
                                                                <strong>{t("neurology_bold_word5")}</strong> {t("meaning_type_content1")}</li>
                                                            <li><strong>{t("neurology_bold_word6")}</strong> {t("meaning_type_content2")} <strong>{t("neurology_bold_word7")}</strong>{t("meaning_type_content7")}
                                                                <strong>{t("neurology_bold_word8")}</strong>{t("meaning_type_content8")}<strong>{t("neurology_bold_word9")}</strong>{t("meaning_type_content4")}</li>
                                                            <li><strong>{t("neurology_bold_word10")}</strong> {t("meaning_type_content5")}</li>
                                                            <li><strong>{t("neurology_bold_word11")}</strong> {t("meaning_type_content6")}</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-6 col-md-6">
                                                <img src={t("images.neurology.killer")} alt="" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="molecular-thrd w-100 float-left">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="molecls-dv w-100 float-left partnerDetais">
                                                    <h4>{t("neurology_sub_heading")}</h4>
                                                    <p>{t("neurological_text")}</p>

                                                    <h4>{t("neurology_sub_heading1")}</h4>
                                                    <img src={t("images.neurology.stroke")} alt="" />
                                                    <p> {t("stroke_text")}</p>

                                                    <h4>{t("neurology_sub_heading2")} </h4>
                                                    <p>{t("epilepsy_text")}</p>

                                                    <h4>{t("neurology_sub_heading3")}</h4>
                                                    <p>{t("dementias_text1")}</p>
                                                    <p>{t("dementias_text2")}</p>

                                                    <h4>{t("neurology_sub_heading4")} </h4>
                                                    <img src={t("images.neurology.parkison")} alt="" />
                                                    <p>{t("parkinson_text")}
                                                    </p>

                                                    <h4>{t("neurology_sub_heading5")}</h4>
                                                    <p>{t("neuroimmunological_text")}</p>

                                                    <h5>{t("neurology_heading6")}</h5>
                                                    <ul>
                                                        <li>{t("treatment_list_text1")}</li>
                                                        <li>{t("treatment_list_text2")}</li>
                                                        <li>{t("treatment_list_text3")}</li>
                                                        <li>{t("treatment_list_text4")}</li>
                                                    </ul>

                                                    <h4>{t("neurology_sub_heading6")}</h4>
                                                    <ul>
                                                        <li>{t("nervous_system_list_text1")}</li>
                                                        <li>{t("nervous_system_list_text2")}</li>
                                                        <li>{t("nervous_system_list_text3")}</li>
                                                        <li>{t("nervous_system_list_text4")}</li>
                                                        <li>{t("nervous_system_list_text5")} </li>
                                                        <li>{t("nervous_system_list_text6")}</li>
                                                        <li>{t("nervous_system_list_text7")}</li>
                                                    </ul>

                                                    <h4>{t("neurology_sub_heading7")}</h4>
                                                    <p>{t("neurologists_desc")}</p>
                                                    <ul>
                                                        <li>{t("neurologists_list_text1")}</li>
                                                        <li>{t("neurologists_list_text2")}</li>
                                                        <li>{t("neurologists_list_text3")}</li>
                                                        <li>{t("neurologists_list_text4")}</li>
                                                        <li>{t("neurologists_list_text5")}</li>
                                                        <li>{t("neurologists_list_text6")}</li>
                                                    </ul>

                                                    <p>{t("neurologists_list_text7")}</p>

                                                    <h4>{t("neurology_sub_heading8")}</h4>
                                                    <ul>
                                                        <li>{t("test_offer_text1")}</li>
                                                        <li>{t("test_offer_text2")}</li>
                                                        <li>{t("test_offer_text3")}</li>
                                                        <li>{t("test_offer_text4")}</li>
                                                        <li>{t("test_offer_text5")}</li>
                                                        <li>{t("test_offer_text6")}</li>
                                                        <li>{t("test_offer_text7")}</li>
                                                        <li>{t("test_offer_text8")}</li>
                                                        <li>{t("test_offer_text9")}</li>
                                                        <li>{t("test_offer_text_1")}</li>
                                                        <li>{t("test_offer_text_2")}</li>
                                                        <li>{t("test_offer_text_3")}</li>
                                                        <li>{t("test_offer_text_4")}</li>
                                                        <li>{t("test_offer_text_5")}</li>
                                                        <li>{t("test_offer_text_6")}</li>
                                                        <li>{t("test_offer_text_7")}</li>
                                                        <li>{t("test_offer_text_8")}</li>
                                                        <li>{t("test_offer_text_9")}</li>
                                                        <li>{t("test_offer__text1")}</li>
                                                        <li>{t("test_offer__text2")}</li>
                                                        <li>{t("test_offer__text3")}</li>
                                                        <li>{t("test_offer__text4")}</li>
                                                        <li>{t("test_offer__text5")}</li>
                                                        <li>{t("test_offer__text6")}</li>
                                                        <li>{t("test_offer__text7")}</li>
                                                        <li>{t("test_offer__text8")}</li>
                                                        <li>{t("test_offer__text9")}</li>
                                                        <li>{t("test_offer__text_1")}</li>
                                                        <li>{t("test_offer__text_2")}</li>
                                                        <li>{t("test_offer__text_3")}</li>
                                                        <li>{t("test_offer__text_4")}</li>
                                                        <li>{t("test_offer__text_5")}</li>
                                                        <li>{t("test_offer__text_6")}</li>
                                                        <li>{t("test_offer__text_7")}</li>
                                                        <li>{t("test_offer__text_8")}</li>
                                                        <li>{t("test_offer__text_9")}</li>
                                                        <li>{t("test_offer__text_11")}</li>
                                                        <li>{t("test_offer__text_12")}</li>
                                                        <li>{t("test_offer__text_13")}</li>
                                                        <li>{t("test_offer__text_14")}</li>
                                                        <li>{t("test_offer__text_15")}</li>
                                                        <li>{t("test_offer__text_16")}</li>
                                                        <li>{t("test_offer__text_17")}</li>
                                                        <li>{t("test_offer__text_18")}</li>
                                                        <li>{t("test_offer__text_19")}</li>
                                                        <li>{t("test_offer__text_20")}</li>
                                                        <li>{t("test_offer__text_21")}</li>
                                                        <li>{t("test_offer__text_22")}</li>
                                                    </ul>

                                                    <h4 className="show-button" onClick={(e) => setCollapse((prevCheck) => !prevCheck)}>{t("references_collapse")} <i className="fa fa-plus" style={{ display: collapse == true ? 'none' : 'block' }}></i> <i
                                                        className="fa fa-minus" style={{ display: collapse == true ? 'block' : 'none' }}></i></h4>
                                                    <ul className="show-data" style={{ display: collapse == true ? 'block' : 'none' }}>
                                                        <li>{t("references_collapse_text")}</li>
                                                        <li>{t("references_collapse_text1")}</li>
                                                        <li>{t("references_collapse_text2")}</li>
                                                        <li>{t("references_collapse_text3")}</li>
                                                        <li>{t("references_collapse_text4")}</li>
                                                        <li>{t("references_collapse_text5")}</li>
                                                        <li>{t("references_collapse_text6")}</li>
                                                        <li>{t("references_collapse_text7")}</li>
                                                        <li>{t("references_collapse_text8")}</li>
                                                        <li>{t("references_collapse_text9")}</li>
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
export const getStaticProps = async ({locale}:{locale:string}) => {
    // let Slug = ROUTE.NEUROLOGY?.replace("/", "");
    // const data: any = await Api.post(Url.seoDetail, { Slug: Slug });
    return {
      props: {
        // seoData: data?.Result?.Details || {},
      ...(await serverSideTranslations(locale, ["common"])),
      },
    };
  };
export default Neurology