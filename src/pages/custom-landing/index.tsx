import React, { useEffect } from 'react'

import { ROUTE } from '@/Const/Route'
import BreadCrumb from '@/Component/Common/BreadCrumb'
import { useRouter } from 'next/router'
import Api from "@/redux/common/api";
import { SITE_URL, Url } from "@/redux/common/url";
import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
interface MyPageProps {
    seoData: any;
  }
const CustomLanding : NextPage<MyPageProps> = ({seoData})=> {
    const {t}= useTranslation();
    const router = useRouter()
    useEffect(() => {
        window?.scrollTo(0, 0);
        return () => {}
    }, [])
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
            <BreadCrumb page={"Custom Landing Page"} data={{ slug: "", path: "" }} />
            <section className="section">
                <div className="container" id="section2">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="text-center">
                                <img src={t("images.custom_landing.banner")} className="scale" alt="" />
                            </div>
                            <div className="headingmains text-center pb-3">
                                <h1 className="right aos-init pb-2 mt-sm-4 mt-lg-5">What is Stomach Health Test?</h1>
                                <p className="text-center">It is a non-invasive, painless and simple blood test used to determine the stomach health. It also reports any gastric problems, capacity of the stomach to produce gastric acid and helps in identifying early acid-related disorders that can be treated effectively as part of routine care, or else, could lead to conditions, such as</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sub-section overview_network">
                <div className="container">
                    <div className="bg-color row m-0 align-items-center">
                        <div className='col-md-5 p-0'>
                            <img src={t("images.custom_landing.custom1")} className="scale" alt="" />
                        </div>
                        <div className='col-md-7'>
                            <p className="mb-2">Deficiency of Vitamin B12, Calcium, Magnesium, Zinc, Iron</p>
                            <p className="mb-2"> Acid-disorders</p>
                            <p className="mb-2">Stomach-ulcer disease or stomach cancer, if untreated</p>
                            <p className="mb-2"> It is suitable for all adults suffering from gastric complaints as a part of routine investigation. It provides reassurance when the risk of disease is low.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='sub-section'>
                <div className='container'>
                    <div className="headingmains text-center pb-3">
                        <h2 className="right aos-init pb-2">A SIMPLE BLOOD TEST TO DETERMINE</h2>
                    </div>
                    <div className='row mt-3 mb-3'>
                        <div className='col-md-3'>
                            <div className='bt_box'>
                                <div className='img_box bg-pink mb-3'><img src={t("images.custom_landing.liver_icon")} className="scale" alt="" /></div>
                                <h6 className='mb-2'>Stomach health</h6>
                                <p>It is suitable for all adults suffering from gastric complaints as a part of routine investigation.</p>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='bt_box'>
                                <div className='img_box bg-gray mb-3' ><img src={t("images.custom_landing.liver_icon")} className="scale" alt="" /></div>
                                <h6 className='mb-2'>Stomach health</h6>
                                <p>It is suitable for all adults suffering from gastric complaints as a part of routine investigation.</p>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='bt_box'>
                                <div className='img_box bg-green mb-3'><img src={t("images.custom_landing.liver_icon")} className="scale" alt="" /></div>
                                <h6 className='mb-2'>Stomach health</h6>
                                <p>It is suitable for all adults suffering from gastric complaints as a part of routine investigation.</p>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='bt_box'>
                                <div className='img_box bg-pink-light mb-3'><img src={t("images.custom_landing.liver_icon")} className="scale" alt="" /></div>
                                <h6 className='mb-2'>Stomach health</h6>
                                <p>It is suitable for all adults suffering from gastric complaints as a part of routine investigation.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='sub-section how_section'>
                <div className='container'>
                    <div className="headingmains text-center pb-3">
                        <h2 className="right aos-init pb-2">HOW DOES IT WORK?</h2>
                    </div>
                    <div className='row mt-3 mb-4'>
                        <div className='col-md-3 how_work'>
                            <div className='step'>1</div>
                            <p>It requires a blood sample after a minimum of four hours of Fasting</p>
                        </div>
                        <div className='col-md-3 how_work'>
                            <div className='step'>2</div>
                            <p>It requires a blood sample after a minimum of four hours of Fasting</p>
                        </div>
                        <div className='col-md-3 how_work'>
                            <div className='step'>3</div>
                            <p>It requires a blood sample after a minimum of four hours of Fasting</p>
                        </div>
                        <div className='col-md-3 how_work'>
                            <div className='step'>4</div>
                            <p>It requires a blood sample after a minimum of four hours of Fasting</p>
                        </div>
                    </div>
                    <p className='text-center mt-5 f-20'>Note: Previous medical history should be provided when requesting the test. It helps adjust the diagnostic outcomes and risk assessment of your stomach condition</p>
                </div>
            </section>
            <section className='sub-section overview_network'>
                <div className='container'>
                    <div className='row align-items-center mb-5'>
                        <div className='col-md-6'>
                            <h4 className='mb-2'>Important information required in the test request form:</h4>
                            <p className='mb-3'>There can be many causes for stomach complaints either less or excess acid. It is important to determine the underlying cause since problems such as these may lead.</p>
                            <ul className='imp_list'>
                                <li>Helicobacter pylori eradication status</li>
                                <li> Use of Proton Pump Inhibitors</li>
                                <li> Presence of Stomach-acid-related symptoms </li>
                                <li>Use of Non-steroidal anti-inflammatory drugs (NSAIDs)/pain-killer medication</li>
                            </ul>
                        </div>
                        <div className='col-md-6'>
                            <img src={t("images.custom_landing.custom2")} className="scale" alt="" />
                        </div>
                    </div>
                    <div className='row justify-content-center'>
                        <div className='col-md-9 why_box'>
                            <div className="headingmains text-center pb-3">
                                <h2 className="right aos-init pb-2">WHY AND WHEN SHOULD A STOMACH HEALTH TEST BE TAKEN?</h2>
                            </div>
                            <p className='text-center mb-3'>There can be many causes for stomach complaints either less or excess acid. It is important to determine the underlying cause sinceproblems such as these may lead to other stomach illnesses and digestion disorders</p>
                            <p className='text-center mx-3'><b>Opt for this test if you are suffering from:</b></p>
                            <p className='text-center mb-2'> Stomach pain or burning sensation </p>
                            <p className='text-center mb-2'>Feeling of heaviness in the stomach area </p>
                            <p className='text-center mb-2'>Heartburn/acidity </p>
                            <p className='text-center mb-2'>Excessive belching/ burping</p>
                            <p className='text-center mb-2'> Bloating/stuffed feeling </p>
                            <p className='text-center mb-2'>Routine nausea or vomiting </p>
                            <p className='text-center mb-2'>Helicobacter pylori infection Thyroid disorders, Diabetes, Rheumatoid arthritis, or Celiac disease</p>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
export const getStaticProps= async ({locale}:{locale:string}) => {
    let Slug = ROUTE.CUSTOMLANDING?.replace("/", "");
    const data: any = await Api.post(Url.seoDetail, { Slug: Slug });
    return {
      props: {
        seoData: data?.Result?.Details || {},
      ...(await serverSideTranslations(locale, ["common"])),
      },
    };
  };
export default CustomLanding