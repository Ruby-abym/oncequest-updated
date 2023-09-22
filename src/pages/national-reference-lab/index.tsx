import React, { useEffect, useState } from 'react'
import { useTranslation } from 'next-i18next';
import Slider from 'react-slick';
import { ROUTE } from '@/Const/Route';
import { useRouter } from 'next/router';
import BreadCrumb from '@/Component/Common/BreadCrumb';
import DepartmentCard from '@/Component/Feature/Department/DepartmentCard';
import Api from "@/redux/common/api";
import { SITE_URL, Url } from "@/redux/common/url";
import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import SubmitForm from '@/Component/Common/SubmitForm/SubmitForm';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

interface MyPageProps {
    seoData: any;
  }
const NationalRefLab : NextPage<MyPageProps> = ({seoData})=>  {
    const {t}= useTranslation();
    const [initialRenderComplete, setInitialRenderComplete] = useState<boolean>(false);
  useEffect(() => {
    setInitialRenderComplete(true);
  }, []);
    useEffect(() => {
        window?.scrollTo(0, 0);
        return () => {};
    }, []);
    const router = useRouter();
    var settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows:true,
        autoplay:true,
        centerMode: true,
        centerPadding: '0',
        responsive: [
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrows: false,
              }
            },
            {
                breakpoint: 577,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false,
                  arrows: false,
                }
              },
          ]
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
        <BreadCrumb page={"National Reference Laboratory"} data={{slug: "", path: ""}}/> 
        <section className="bg-white section overview-top pt-3">
            <div className="container" id="section2">
                <div className="row">
                    <div className="col-md-12">
                        <div className="overview-wrap">
                            {/* <video width="320" height="240" autoPlay>
                                <source src={"https://www.youtube.com/watch?v=FUiu-cdu6mA"} />
                            </video> */}
                            <div className='text-center'><img src={t("images.nrl.banner")} className="scale" alt="" /></div>
                            <div className="headingmains text-center pb-3">
                                <h1 className="right aos-init pb-2 mt-sm-4 mt-lg-5">National Reference Laboratory</h1>
                            </div>
                            <p>It is a non-invasive, painless and simple blood test used to determine the stomach health. It also reports any gastric problems, capacity of the stomach to produce gastric acid and helps in identifying early acid-related disorders that can be treated effectively as part of routine care, or else, could lead to conditions, such as</p>
                            <p>
                                <ul className="corporate_box">
                                    <li>
                                        <div><img src={t("images.nrl.Laboratory")} className="co_icon"/></div>
                                        <h6>Laboratory</h6>
                                        <h6>operation</h6>
                                    </li>
                                    <li>
                                        <div><img src={t("images.nrl.Laboratory")} className="co_icon" /></div>
                                        <h6>Floors of</h6>
                                        <h6>state-of-the-art</h6>
                                        <h6>faclity</h6>
                                    </li>
                                    <li>
                                        <div><img src={t("images.nrl.Laboratory")} className="co_icon" /></div>
                                        <h6>Square</h6>
                                        <h6>feet area</h6>
                                    </li>
                                    <li>
                                        <div><img src={t("images.nrl.Laboratory")} className="co_icon" /></div>
                                        <h6>Team of</h6>
                                        <h6>doctor</h6>
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>          
            </div> 
        </section>
        <DepartmentCard/>
        <div className="headingmains text-center pb-3">
            <h2 className="right aos-init pb-2 mt-sm-4 mt-lg-5">Quality</h2>
        </div>
        <p>
        <ul className="nrl_quality">
                <li>
                    <div className="hed">Timely, Accurate & Cost Effective</div>
                    <div className="con">We endeavor to provide our patients timely, accurate, cost effective and error free results from the widest test menu. We strive to meet our patient's requirements and provide services with a high ethical conduct.</div>
                </li>
                <li>
                    <div className="hed">Total Quality Management</div>
                    <div className="con">Commitment to quality is non-negotiable. We set benchmarks in identifying quality parameters for "Continual Quality Improvement". We follow good Lab Practices at every step.</div>
                </li>
            </ul>
        </p>
        <div className="headingmains text-center pb-3">
            <h2 className="right aos-init pb-2 mt-sm-4 mt-lg-5">NRL Accreditations</h2>
        </div>
        <p>
            <ul className="corporate_box">
                <li>
                    <div><img src={t("images.nrl.cap_logo")} className="co_logo"/></div>
                </li>
                <li>
                    <div><img src={t("images.nrl.nbl_logo")} className="co_logo" /></div>
                </li>
                <li>
                    <div><img src={t("images.nrl.bsi_logo")} className="co_logo" /></div>
                </li>
                <li>
                    <div><img src={t("images.nrl.bsi_logo")} className="co_logo" /></div>
                </li>
            </ul>
        </p>
        <div className="nrlDiv">
            <section className="section">
                <div id="section2">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="overview-wrap">
                                <div className="headingmains text-center pb-3">
                                    <h2 className="right aos-init pb-2 mt-sm-4 text-white">Lab USP & Strength</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="nrl_slider">
                    <Slider {...settings}>
                           <div>
                                <img className="scale" src={t("images.nrl.nrl_usp")} alt="" />
                            </div>
                            <div>
                                <img className="scale" src={t("images.nrl.nrl_usp")} alt="" />
                            </div>
                            <div>
                                <img className="scale" src={t("images.nrl.nrl_usp")} alt="" />
                            </div>
                            <div>
                                <img className="scale" src={t("images.nrl.nrl_usp")} alt="" />
                            </div>
                            <div>
                                <img className="scale" src={t("images.nrl.nrl_usp")} alt="" />
                            </div>
                            <div>
                                <img className="scale" src={t("images.nrl.nrl_usp")} alt="" />
                            </div>
                            <div>
                                <img className="scale" src={t("images.nrl.nrl_usp")} alt="" />
                            </div>
                            <div>
                                <img className="scale" src={t("images.nrl.nrl_usp")} alt="" />
                            </div>
                    </Slider>
                    </div> 
                </div>
            </section>
        </div>
        <SubmitForm heading={t("reach_out-to_us")} des={""} PageSrc={"NationalReferenceLab"}/>
     </React.Fragment>
    )
}
export const getStaticProps= async ({locale}:{locale:string}) => {
    // let Slug = ROUTE.NATIONREFLAB?.replace("/", "");
    // const data: any = await Api.post(Url.seoDetail, { Slug: Slug });
    return {
      props: {
        // seoData: data?.Result?.Details || {},
      ...(await serverSideTranslations(locale, ["common"])),
      },
    };
  };
export default NationalRefLab