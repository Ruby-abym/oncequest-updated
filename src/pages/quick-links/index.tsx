
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';

import { dashboardAction, submitAction } from '../../redux/action';

import { ROUTE } from '@/Const/Route';
import BreadCrumb from '@/Component/Common/BreadCrumb';
import {NextPage } from 'next';
import Api from '@/redux/common/api';
import { SITE_URL, Url } from '@/redux/common/url';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import BookTest from '@/Component/Feature/Home/BookTest';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
interface MyPageProps {
    seoData:any;
  }
const initialValue = { Name: "", Email: "", Mobile: "", Message: "", CityId: "" };

const LandingPages : NextPage<MyPageProps> = ({ seoData }) => {
    const [initialRenderComplete, setInitialRenderComplete] = useState<boolean>(false);
  useEffect(() => {
    setInitialRenderComplete(true);
  }, []);
    const  {t}  = useTranslation();
    const dispatch = useDispatch();
    const dashboard: any = useSelector((state: any) => state.dashboard.dashboardData);
    const router = useRouter();
    const [values, setValues] = useState<any>({ ...initialValue });
    const [collapse, setCollapse] = useState(false);
    const cityData = useSelector((state: any) => state.dashboard.city);
    const category = dashboard?.Categories;
    useEffect(() => {
        window?.scrollTo(0, 0);
        return () => { };
    }, []);

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
     if(!initialRenderComplete) return <></>
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
            <BreadCrumb page={t("quick_link")} data={{ slug: "", path: "" }} />
            <section className="background-light_quick_link mmobile">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 text-center headingmains">
                            <h2>{t("quick_link")}</h2>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-4 mpmobile my-4 pt-3">
                            <Link href="/neurology" target="_blank">
                                <div className="h-well sbg1">
                                    <div className="infobox_wrapper">
                                        <div className="infobox_icon_container"><img src={t("images.quick_link.link1")} className="scale" /></div>
                                        <h4 className="infobox_title">{t("neurology")}</h4>
                                        <p className='quickLink'>{t("neurology_info")}</p>
                                        <a href="/neurology" target="_blank" className="mt-5 button--hexagon1"><span>{t("know_more")}</span></a>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 mpmobile my-4 pt-3">
                            <a href="/allergy" target="_blank">
                                <div className="h-well sbg1">
                                    <div className="infobox_wrapper">
                                        <div className="infobox_icon_container"><img src={t("images.quick_link.link2")} className="scale" /></div>
                                        <h4 className="infobox_title">{t("allergy_small")}</h4>
                                        <p className='quickLink'>{t("allergy_small_info")}</p>
                                        <a href="/allergy" target="_blank" className="mt-5 button--hexagon1"><span>{t("know_more")}</span></a>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 mpmobile my-4 pt-3">
                            <a href="/mamma-print" target="_blank">
                                <div className="h-well sbg1">
                                    <div className="infobox_wrapper">
                                        <div className="infobox_icon_container"><img src={t("images.quick_link.link3")} className="scale" /></div>
                                        <h4 className="infobox_title">{t("mamma_print_plus_blueprint")}</h4>
                                        <p className='quickLink'>{t("mamma_print_plus_blueprint_info")}</p>
                                        <a href="/mamma-print" target="_blank" className="mt-5 button--hexagon1"><span>{t("know_more")}</span></a>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 my-4 pt-3 mpmobile">
                            <a href={ROUTE.GURUGRAMLAB} target="_blank">
                                <div className="h-well sbg1">
                                    <div className="infobox_wrapper">
                                        <div className="infobox_icon_container"><img src={t("images.quick_link.link4")} className="scale" /></div>
                                        <h4 className="infobox_title">{t("gurugram_lab")}</h4>
                                        <p className='quickLink'>{t("about_gurugram_laboratory1")}</p>
                                        <a href={ROUTE.GURUGRAMLAB} target="_blank" className="mt-5 button--hexagon1"><span>{t("know_more")}</span></a>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 my-4 pt-3 mpmobile">
                            <a href={ROUTE.BENGALURULAB} target="_blank">
                                <div className="h-well sbg1">
                                    <div className="infobox_wrapper">
                                        <div className="infobox_icon_container"><img src={t("images.quick_link.link5")} className="scale" /></div>
                                        <h4 className="infobox_title">{t("bengaluru_lab")}</h4>
                                        <p className='quickLink'>{t("about_bengaluru_landing")}</p>
                                        <a href={ROUTE.BENGALURULAB} target="_blank" className="mt-5 button--hexagon1"><span>{t("know_more")}</span></a>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 my-4 pt-3 mpmobile">
                            <a href={ROUTE.KOLKATALAB} target="_blank">
                                <div className="h-well sbg1">
                                    <div className="infobox_wrapper">
                                        <div className="infobox_icon_container"><img src={t("images.quick_link.link6")} className="scale" /></div>
                                        <h4 className="infobox_title">{t("kolkata_lab")}</h4>
                                        <p className='quickLink'>{t("about_kolkata_landing")}</p>
                                        <a href={ROUTE.KOLKATALAB} target="_blank" className="mt-5 button--hexagon1"><span>{t("know_more")}</span></a>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 my-4 pt-3 mpmobile">
                            <a href={ROUTE.CANCER} target="_blank">
                                <div className="h-well sbg1">
                                    <div className="infobox_wrapper">
                                        <div className="infobox_icon_container"><img src={t("images.quick_link.link7")} className="scale" /></div>
                                        <h4 className="infobox_title">{t("cancer_landing")}</h4>
                                        <p className='quickLink'>{t("about_cancer_landing")}</p>
                                        <a href={ROUTE.CANCER} target="_blank" className="mt-5 button--hexagon1"><span>{t("know_more")}</span></a>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 my-4 pt-3 mpmobile">
                            <a href={ROUTE.PRENATALTESTING} target="_blank">
                                <div className="h-well sbg1">
                                    <div className="infobox_wrapper">
                                        <div className="infobox_icon_container"><img src={t("images.quick_link.link8")} className="scale" /></div>
                                        <h4 className="infobox_title">{t("prenatal_landing")}</h4>
                                        <p className='quickLink'>{t("about_prenatal_landing")}</p>
                                        <a href={ROUTE.PRENATALTESTING} target="_blank" className="mt-5 button--hexagon1"><span>{t("know_more")}</span></a>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 my-4 pt-3 mpmobile">
                            <a href={ROUTE.LUDHIANALAB} target="_blank">
                                <div className="h-well sbg1">
                                    <div className="infobox_wrapper">
                                        <div className="infobox_icon_container"><img src={t("images.quick_link.link9")} className="scale" /></div>
                                        <h4 className="infobox_title">{t("ludhiana_lab")}</h4>
                                        <p className='quickLink'>The well-built state-of-the-art laboratory has modern and certified equipment’s. This advanced lab
                                            benefits a large number of patients with accurate, precise, and rapid results. Apart from simple routine
                                            tests, our services cover a vast array of specialized and super-specialized tests and highly advanced
                                            genome testing.</p>
                                        <a href={ROUTE.LUDHIANALAB} target="_blank" className="mt-5 button--hexagon1"><span>{t("know_more")}</span></a>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>






        </React.Fragment>
    )
}
export const getServerSideProps = async ({ locale }:{locale: string}) => {
    let Slug = ROUTE.QUICKLINKS?.replace("/","");
    const data: any = await Api.post(Url.seoDetail, { Slug: Slug});
    
    return {
      props: {
        seoData: data?.Result?.Details || {},
        ...(await serverSideTranslations(locale, ["common"])),
      },
    };
  };
export default LandingPages