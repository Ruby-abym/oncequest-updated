import { Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ImgPlaceHolder from '@/Utils/imgPlaceholder';
import { dashboardAction, submitAction, testAction } from '../../redux/action';
import { onlyNumber } from '@/Utils/index';
import { validateQuickLink } from '@/Utils/Validation';
import { ROUTE } from '@/Const/Route';
import BreadCrumb from '@/Component/Common/BreadCrumb';
import { useRouter } from 'next/router';
import Api from "@/redux/common/api";
import { SITE_URL, Url } from "@/redux/common/url";
import { NextPage } from "next";
import { NextSeo } from "next-seo";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
interface MyPageProps {
    seoData: any;
  }
const initialValue = { Name: "", Email: "", Mobile: "", Message: "", CityId: "" };

const Allergy: NextPage<MyPageProps> = ({seoData})=>{
    const [initialRenderComplete, setInitialRenderComplete] = useState<boolean>(false);
  useEffect(() => {
    setInitialRenderComplete(true);
  }, []);
    const  {t}  = useTranslation();
    const dispatch = useDispatch();
    const router = useRouter();
   
    const [limit, setLimit] = useState(8);
    const [offsetT, setOffsetT] = useState(0);
    const cityData = useSelector((state: any) => state.dashboard.city);
    const [subCategory, setSubCategory] = useState(100);
    const testData = useSelector((state: any) => state.test.list.Tests ? state.test.list.Tests : {});
    useEffect(() => {
        window?.scrollTo(0, 0);
        return () => { };
    }, []);
// test commits
    useEffect(() => {
        window?.scroll(0, 0);
        dispatch(dashboardAction.getDashboardAction({}));
        return () => { }
    }, [])

    const handleSubmit = (values: any) => {
        let data: any = values;
        data.SourceUrl = window.location.href;
        dispatch(submitAction.submitQueryAction(data, history));
    };

    useEffect(() => {
        window?.scrollTo(0, 0);
        dispatch(testAction.listTestAction({ Offset: offsetT, Limit: limit, SubcategoryId: subCategory }));

        return () => { }
    }, []);
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
            <BreadCrumb page={t("allergy_small")} data={{ slug: "", path: "" }} />
            <div className="container">
                <div className="row">
                    <div className="col-12 position-relative mt-3">
                        <img src={t("images.allergy.banner")} width="100%" />
                        <div className="banner-text">
                            <h3>{t("everything_need")}<br />{t("about_allergies")}</h3>
                            <h2 className="mt-1 mt-md-2"><b>{t("What_re_they")}</b></h2>
                            <p className="mt-1 mt-md-3" dangerouslySetInnerHTML={{ __html: t("What_re_they_info") }}></p>
                        </div>
                    </div>
                </div>
            </div>
            <section className="background-light mt-3">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 headingmains text-center">
                            <h1>{t("what_is_allergy")}</h1>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-7">
                            <p className="text-light-grey">
                            {t("allergy_info")}
                            </p>
                            <img src={t("images.allergy.imageal")} width="100%" className="mb-3" />
                        </div>
                        <div className="col-12 col-md-5 d-flex align-items-center justify-content-end">
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
            <section>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-12 text-center mb-4">
                            <h2>{t("common_signs_aym_allergy")}</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-4 mt-4">
                            <div className="card text-center p-4 background-light symp-allergy">
                                <h2>{t("skin")}</h2>
                                <p>{t("about_skin_allergy")}</p>
                                <img src={t("images.allergy.1al")} className="d-block m-auto" width="100px" />
                            </div>
                        </div>
                        <div className="col-12 col-md-4 mt-4">
                            <div className="card text-center p-4 background-light">
                                <h2>{t("lungs")}</h2>
                                <p>{t("about_lungs_allergy")}</p>
                                <img src={t("images.allergy.2al")} className="d-block m-auto" width="100px" />
                            </div>
                        </div>
                        <div className="col-12 col-md-4 mt-4">
                            <div className="card text-center p-4 background-light">
                                <h2>{t("nose")}</h2>
                                <p>{t("about_nose_allergy")}</p>
                                <img src={t("images.allergy.3al")} className="d-block m-auto" width="100px" />
                            </div>
                        </div>
                        <div className="col-12 col-md-4 mt-4">
                            <div className="card  text-center p-4 background-light">
                                <h2>{t("head")}</h2>
                                <p>{t("about_head_allergy")}</p>
                                <img src={t("images.allergy.4al")} className="d-block m-auto" width="100px" />
                            </div>
                        </div>
                        <div className="col-12 col-md-4 mt-4">
                            <div className="card text-center p-4 background-light">
                                <h2>{t("eyes")}</h2>
                                <p>{t("about_eyes_allergy")}</p>
                                <img src={t("images.allergy.5al")} className="d-block m-auto" width="100px" />
                            </div>
                        </div>
                        <div className="col-12 col-md-4 mt-4">
                            <div className="card text-center p-4 background-light">
                                <h2>{t("stomach")}</h2>
                                <p>{t("about_stomach_allergy")}</p>
                                <img src={t("images.allergy.6al")} className="d-block m-auto" width="100px" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-4 mt-4">
                            <div className="card text-center p-4">
                                <h2>{t("common_allergens")}</h2>
                                <p>
                                {t("common_allergens_info")}
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 mt-4">
                            <div className="card text-center p-4">
                                <h2>{t("common_allergy_diseases")}
                                </h2>
                                <p>
                                {t("common_allergy_diseases_info")}
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 mt-4">
                            <div className="card text-center p-4">
                                <h2>{t("allergic_reactions")}
                                </h2>
                                <ul>
                                    <li>{t("shellfish")}</li>
                                    <li>{t("tree_dry_fruits")}</li>
                                    <li>{t("peanuts")} </li>
                                    <li>{t("fish")}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="">
                <div className="container mt-5">
                    <div className="row ">
                        <div className="col-12 text-center">
                            <h2>{t("tests_and_packages")}</h2>
                            <div className="tab-content">
                                <div className="">
                                    <div className="row">
                                        {testData && testData.length > 0 && testData?.map((item: any, index: any) => {
                                            return (
                                                <div className="col-sm-6 col-md-6 col-lg-3" key={index}>
                                                    <div className="h-services h-ser-mt">
                                                        <div className="infobox_wrapper homeSubcategoryWrap">
                                                            <div className="infobox_icon_container">
                                                                <img className="scale" src={item?.Profile && item?.Profile} onError={(e: any) => ImgPlaceHolder(e, t("images.allergy.placeholder"))} alt="" />
                                                            </div>
                                                            <h3 className="infobox_title">{item?.TestName}</h3> 
                                                            <a className="infobox_button button-read-more read-more-alle" href="#" onClick={(e: any) => { e.preventDefault(); router.push(ROUTE.BOOKATEST,{ query: { tabs: "tests", subCategoryId: 100 }}) }}>
                                                                <img src="assets/img/arrow-read.svg" className="scale" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container-fluid mt-5">
                    <div className="row ">
                        <div className="col-12 text-center">
                            <h2>{t("allergy_vs_Cold")}</h2><br />
                            <p>{t("about_allergy_vs_Cold")}</p>
                        </div>
                    </div>
                    <div className="row mt-5 px-md-4 bl-padding0">
                        <div className="col-12 col-md-6">
                            <div className="row">
                                <div className="col-10 offset-md-2">
                                    <h2 className="big-heading">{t("allergy")}</h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4 col-md-3 bg-blue border-light p-2">
                                    <p className="text-light mb-0">{t("symptoms")}</p>
                                </div>
                                <div className="col-8 col-md-9 bg-blue  border-light p-2">
                                    <p className="mb-0 text-light">{t("allergy-symptoms_info")}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4 col-md-3 bg-blue border-light p-2">
                                    <p className="text-light mb-0">{t("duration")}</p>
                                </div>
                                <div className="col-8 col-md-9 bg-blue  border-light p-2">
                                    <p className="mb-0 text-light " dangerouslySetInnerHTML={{ __html: t("allergy-duration_info") }}></p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4 col-md-3 bg-blue border-light p-2">
                                    <p className="text-light mb-0">{t("sneezing")} </p>
                                </div>
                                <div className="col-8 col-md-9 bg-blue  border-light p-2">
                                    <p className="mb-0 text-light">{t("allergy-sneezing_info")} </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4 col-md-3 bg-blue border-light p-2">
                                    <p className="text-light mb-0">{t("season")}</p>
                                </div>
                                <div className="col-8 col-md-9 bg-blue  border-light p-2">
                                    <p className="mb-0 text-light">{t("allergy-season_info")}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4 col-md-3 bg-blue border-light p-2">
                                    <p className="text-light mb-0">{t("nasal_discharge")}</p>
                                </div>
                                <div className="col-8 col-md-9 bg-blue  border-light p-2">
                                    <p className="mb-0 text-light">{t("allergy-nasal_discharge_info")} </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="row">
                                <div className="col-12">
                                    <h2 className="big-heading">{t("cold")}</h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 bg-blue  border-light p-2">
                                    <p className="mb-0 text-light hei-75">{t("cold-symptoms_info")}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 bg-blue  border-light p-2">
                                    <p className="mb-0 text-light hei-74">{t("cold-duration_info")}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 bg-blue  border-light p-2">
                                    <p className="mb-0 text-light">{t("cold-sneezing_info")}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 bg-blue  border-light p-2">
                                    <p className="mb-0 text-light">{t("cold-season_info")}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 bg-blue  border-light p-2">
                                    <p className="mb-0 text-light">{t("cold-nasal_discharge_info")}</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
            <section>
                <div className="container-fluid mt-5 px-md-4">
                    <div className="row">
                        <div className="col-12 col-md-6 mt-md-5 pt-md-5">
                            <h2>
                            {t("wao_heading")}
                            </h2><br />
                            <p>
                            {t("wao_para_info")}</p><br />
                            <h5>{t("definitions_of_terms")}</h5><br />
                            <div className="row px-3 mt-2">
                                <div className="col-4 bg-purple"><b>{t("sensitivity")}</b></div>
                                <div className="col-8 bg-light-purple">
                                    <p className="mb-0">{t("sensitivity_about")}</p>
                                </div>
                            </div>
                            <div className="row px-3 mt-2">
                                <div className="col-4 bg-purple"><b>{t("hypersensitivity")}</b></div>
                                <div className="col-8 bg-light-purple">
                                    <p className="mb-0">{t("hypersensitivity_about")}</p>
                                </div>
                            </div>
                            <div className="row px-3 mt-2">
                                <div className="col-4 bg-purple"><b>{t("sensitivity2")}</b></div>
                                <div className="col-8 bg-light-purple">
                                    <p className="mb-0">{t("sensitivity2_about")}</p>
                                </div>
                            </div>
                            <div className="row px-3 mt-2">
                                <div className="col-4 bg-purple"><b>{t("allergy_small")}</b></div>
                                <div className="col-8 bg-light-purple">
                                    <p className="mb-0">{t("allergy_small_about")}</p>
                                </div>
                            </div>
                            <div className="row px-3 mt-2   ">
                                <div className="col-4 bg-purple"><b>{t("naphylaxis")}</b></div>
                                <div className="col-8 bg-light-purple">
                                    <p className="mb-0">{t("naphylaxis_about")}
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className="col-12 col-md-6 mt-5 d-flex justify-content-center">
                            <div className="circle-img for-cr-img center">
                                <img width="100%" src={t("images.allergy.circle")} alt="" />
                            </div>
                        </div>
                        <div className="row bl-padding">
                            <div className="col-12 mt-md-5">
                                <h5>{t("common_misconception")}</h5><br />
                                <p>{t("common_misconception_info")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <hr />

            {/* wao end */}

            {/* <!--chart image start--> */}
            <section>
                <div className="container">
                    <div className="row bl-padding">
                        <div className="col-12">
                            <img src={t("images.allergy.chartal")} width="100%" className="img-responsive" />
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--chart image end--> */}

            <hr />
            <div className="text-center bl-padding">
                <p>{t("ification_of_environmentally")}</p>
            </div>

            <section className="background-light p-5 mt-md-4">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2>{t("incidence_and_prevalence_allergy")}</h2>
                        </div>
                        <div className="col-12 mt-5">
                            <img src={t("images.allergy.longal")} width="100%" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-4 mt-5 text-center">
                            <h2><u>{t("eczema")}</u></h2>
                            <p>{t("eczema_about")}</p>
                        </div>

                        <div className="col-12 col-md-4 mt-5 text-center">
                            <h2><u>{t("rhinitis")}</u></h2>
                            <p>{t("rhinitis_about")}</p>
                        </div>

                        <div className="col-12 col-md-4 mt-5 text-center">
                            <h2><u>{t("wheezing")}</u></h2>
                            <p>{t("wheezing_about")}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!--footer start--> */}
            <footer className=" p-4 p-md-5 text-center">
                <p dangerouslySetInnerHTML={{ __html: t("lingering_common_allergy_symptoms") }}>
                </p>
            </footer>
        </React.Fragment>
    )
}
export const getStaticProps = async ({ locale }:{locale: string}) => {
    let Slug = ROUTE.ALLERGY?.replace("/", "");
    const data: any = await Api.post(Url.seoDetail, { Slug: Slug });
    return {
      props: {
        seoData: data?.Result?.Details || {},
        ...(await serverSideTranslations(locale, ["common"])),
    },
    };
  };
export default Allergy