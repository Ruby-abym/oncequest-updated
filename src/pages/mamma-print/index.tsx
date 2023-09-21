import { Formik } from 'formik';

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { dashboardAction, submitAction } from '../../redux/action';
import { onlyNumber } from '@/Utils/index';
import { validateQuickLink } from '@/Utils/Validation';
import { ROUTE } from '@/Const/Route';
import BreadCrumb from '@/Component/Common/BreadCrumb';
import { useRouter } from 'next/router';
import Api from "@/redux/common/api";
import { SITE_URL, Url } from "@/redux/common/url";
import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const initialValue = { Name: "", Email: "", Mobile: "", Message: "", CityId: "" };
interface MyPageProps {
    seoData: any;
  }
const Mamaprint: NextPage<MyPageProps> = ({seoData})=>  {
    const  {t}  = useTranslation();
    const dispatch = useDispatch();
    const [initialRenderComplete, setInitialRenderComplete] = useState<boolean>(false);
  useEffect(() => {
    setInitialRenderComplete(true);
  }, []);
    const dashboard: any = useSelector((state: any) => state.dashboard.dashboardData);
    const router = useRouter();
    const [values, setValues] = useState<any>({ ...initialValue });
    const [collapse, setCollapse] = useState(false);
    const cityData = useSelector((state: any) => state.dashboard.city);
    const category = dashboard?.Categories;
   

    useEffect(() => {
       
        dispatch(dashboardAction.getDashboardAction({}));
        return () => { }
    }, [])

    const handleSubmit = (values: any) => {
        let data: any = values;
        data.SourceUrl = window.location.href;
        dispatch(submitAction.submitQueryAction(data, router));
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
            <BreadCrumb page={t("mamma_print")} data={{ slug: "", path: "" }} />
            <div className="container">
                <div className="row">
                    <div className="col-12 position-relative mt-3">
                        <img src={t("images.mama.banner")} width="100%" />
                    </div>
                </div>
            </div>
            <section className="background-light mt-3" data-aos="fade-up">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 text-center headingmains">
                            <h2>{t("indian_scenario")}</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-6 col-xl-7">
                            <section data-aos="fade-up">
                                <div className="container mt-5 remB-mt">
                                    <div className="row">
                                    </div>
                                    <div className="row" data-aos="fade-up">
                                        <div className="col-12 col-md-12 col-xl-4 mt-4">
                                            <div className="card card2 text-center p-3 card-hover">
                                                <img src={t("images.mama.icon7")} className="d-block m-auto" width="90px" /><br />
                                                <p dangerouslySetInnerHTML={{ __html: t("breast_cancer_women") }}>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-12 col-xl-4 mt-4">
                                            <div className="card card2 text-center p-3 card-hover">
                                                <img src={t("images.mama.icon8")} className="d-block m-auto" width="90px" /><br />
                                                <p dangerouslySetInnerHTML={{ __html: t("one_women_diagnosed") }}>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-12 col-xl-4 mt-4">
                                            <div className="card card2 text-center p-3 card-hover">
                                                <img src={t("images.mama.icon9")}  className="d-block m-auto" width="90px" /><br />
                                                <p dangerouslySetInnerHTML={{ __html: t("one_women_dies_cancer") }}>
                                                </p>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 col-xl-5 d-flex align-items-center justify-content-end">
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
            <section className='.background-light mt-5' data-aos="fade-up">
                <div className="container mt-3">
                    <div className="col-12 col-md-10 mx-auto">
                        <div className="row">
                            <div className="col-12 text-center mb-4 headingmains">
                                <h2>{t("current_challenges_br_cancer")}</h2>
                            </div>
                            <div className="col-12 col-md-8">
                                <div className="row">
                                    <div className="col-12 mt-2" data-aos="fade-up">
                                        <div className="card  p-3 border-none border-radius bg-blue">
                                            <p>{t("er_pr_her2")}</p>
                                        </div>
                                    </div>
                                    <div className="col-12 mt-2" data-aos="fade-up">
                                        <div className="card  p-3 border-none border-radius bg-light-blue">
                                            <p>{t("clinical_factors_provide")}</p>
                                        </div>
                                    </div>
                                    <div className="col-12 mt-2" data-aos="fade-up">
                                        <div className="card  p-3 border-none border-radius bg-blue">
                                            <p>{t("breast_cancer_complex")}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4">
                                <div className="row hvr_img">
                                    <div className="col-12 col-md-6 mt-4" data-aos="fade-up"><img  src={t("images.mama.her")}
                                        className="hover-image" /></div>
                                    <div className="col-12 col-md-6 mt-4" data-aos="fade-up"><img  src={t("images.mama.pr")}
                                        className="hover-image" /></div>
                                    <div className="col-12 col-md-6 mx-auto mt-4" data-aos="fade-up"><img src={t("images.mama.er")}
                                        className="hover-image" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section /* data-aos="fade-up" */>
                <div className="container mt-5">
                    <div className="row ">
                        <div className="col-12 text-center headingmains">
                            <h2 dangerouslySetInnerHTML={{ __html: t("bluePrint_together_provide") }}></h2>
                        </div>
                        <div className="col-12 mt-5 mob-w100">
                            <img src={t("images.mama.MammaPrint_luePrint")} width="450px" className="d-block m-auto" />
                        </div>
                    </div><div className="row">
                        <div className="col-12 text-center mt-5">
                        <div className=''>
                            <h5 className="sub-heading" dangerouslySetInnerHTML={{ __html: t("bluePrint_guide_adjuvent") }}></h5>
                                </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6 mt-5 partnerDetais part-mt">
                            <h3 className="mama-print">{t("mamma_print")}</h3>
                            <ul className="mama-print-ul">
                                <li>{t("mamma_print_list1")}</li>
                                <li>{t("mamma_print_list2")}</li>
                                <li>{t("mamma_print_list3")}</li>
                                <li>{t("mamma_print_list4")}</li>
                                <li>{t("mamma_print_list5")}</li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-6 mt-5 partnerDetais part-mt">
                            <h3 className="blue-print">{t("blue_print")}</h3>
                            <ul className="mama-print-ul">
                                <li>{t("blue_print_list1")}</li>
                                <li>{t("blue_print_list2")}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container-fluid mt-5 part-mt">
                    <div className="row">
                        <div className="col-12 py-4 col-md-6 bg-blue d-flex align-items-center">
                            <div className='part-mt'>
                                <h3 className='font_color'>{t("bluePrint_sub_typing")}</h3>
                                <p dangerouslySetInnerHTML={{ __html: t("bluePrint_80-gene") }}>
                                </p>
                            </div>
                        </div>
                        <div className="col-12 py-5 col-md-6 bg-light-blue d-flex align-items-center traditional-path">
                            <img src={t("images.mama.BluePrint_Molecular2")} width="60%" className="m-auto d-block" />
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container mt-5 p-2 p-md-5 background-light pdmob15 card part-mt">
                    <div className="row">
                        <div className="col-12 col-md-6 partnerDetais">
                            <div className='headingmains'><h2>{t("mamma_print_risk")}</h2></div>
                            <p className='sub_text'>{t("mamma_print_risk_about")}</p>
                            <ul className="mama-print-ul">
                                <li>{t("mamma_print_risk_list1")}</li>
                                <li>{t("mamma_print_risk_list2")}</li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-6">
                            <img src={t("images.mama.mammaprint_molecular")} width="100%" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 mt-4">
                            <h5>{t("navigate_the_complexity")}
                            </h5>
                        </div>
                        <div className="col-12 col-md-4 mt-4">
                            <div className="card p-3">
                                <h4>{t("what")}</h4>
                                <p>
                                {t("mp_bp_offer_comprehensive")}
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 mt-4">
                            <div className="card p-3">
                                <h4>{t("why")}</h4>
                                <p>
                                {t("mp_bp_offer_functional")}
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 mt-4">
                            <div className="card p-3">
                                <h4>{t("who")}</h4>
                                <p>
                                {t("mp_bp_benefit")}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="card p-4 mt-4">
                                <div className="row">
                                    <div className="col-12 col-md-10 mamadpad">
                                        <h5 dangerouslySetInnerHTML={{ __html: t("together_help_breast_cancer") }}></h5>
                                        <h5>{t("mindact_microarray_node")}</h5>
                                    </div>
                                    <div className="col-12 col-md-2">
                                        <img src={t("images.mama.icon_mind")} width="50px" /> &nbsp; &nbsp;
                                        <img src={t("images.mama.icon_act")} width="50px" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="p-3 mt-5">
                                <div className="row">
                                    <div className="col-12 col-md-2 text-center prcnt-width">
                                        <img src={t("images.mama.prcnt_nw")} width="100%" />
                                    </div>
                                    <div className="col-12 col-md-10 d-flex align-items-center mamahmt20">
                                        <div>
                                            <h5 dangerouslySetInnerHTML={{ __html: t("mindact_data_confirms") }}></h5>
                                            <p>{t("dmfs_for_clinically")}</p>
                                        </div>
                                    </div>
                                    <div className="col-12 mt-4">
                                        <img src={t("images.mama.graph")} width="100%" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container mt-5">
                    <div className="row mb-5 pb-5">
                        <div className="col-12 mt-4">
                            <table className="w-100 p-3 mama_print_table">
                                <tr>
                                    <td colSpan={5} className="text-center border-none p-2 bg-blue">
                                        <b className="text-light table-heading">{t("test_details")}</b>
                                    </td>
                                </tr>
                                <tr className="table-header">
                                    <td><p>{t("test_code")}</p></td>
                                    <td><p>{t("test_name")}</p></td>
                                    <td><p>{t("test_technique")}</p></td>
                                    <td width="35%"><p>{t("test_specimen")}</p></td>
                                    <td><p>{t("test_tat")}</p></td>
                                </tr>
                                <tr className="td-color">
                                    <td><p>{t("serial_code1")}</p></td>
                                    <td><p>{t("mamma_blueprint_combination")}</p></td>
                                    <td><p>{t("microarray")}</p></td>
                                    <td><p>{t("specimen_info1")}</p></td>
                                    <td><p>{t("working_day")}</p></td>
                                </tr>
                                <tr className="td-color">
                                    <td><p>{t("serial_code2")}</p></td>
                                    <td><p>{t("mamma_print_assay")}</p></td>
                                    <td><p>{t("microarray")}</p></td>
                                    <td><p>{t("specimen_info2")}</p></td>
                                    <td><p>{t("working_day")}</p></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

          
        </React.Fragment>
    )
}
export const getStaticProps= async ({locale}:{locale:string}) => {
    // let Slug = ROUTE.MAMAPRINT?.replace("/", "");
    // const data: any = await Api.post(Url.seoDetail, { Slug: Slug });
    return {
      props: {
        // seoData: data?.Result?.Details || {},
      ...(await serverSideTranslations(locale, ["common"])),
      },
    };
  };
export default Mamaprint