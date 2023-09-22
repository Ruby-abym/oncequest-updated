import moment from 'moment'
import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dashboardAction } from '../../redux/action'
import { ROUTE } from '@/Const/Route'
import BreadCrumb from '@/Component/Common/BreadCrumb'
import CAccord from '@/Component/Feature/Career/CAccord'
import CareerForm from '@/Component/Feature/Career/CareerForm'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/router'
import Api from "@/redux/common/api";
import { SITE_URL, Url } from "@/redux/common/url";
import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
// import SeoFooterContent from '../Seo/SeoFooterContent'
// import SeoHeaderContent from '../Seo/SeoHeaderContent'
interface MyPageProps {
    seoData: any;
  }
const Career : NextPage<MyPageProps> = ({seoData})=>  {
    const {t}  = useTranslation();
    const router = useRouter();
    const dispatch = useDispatch();
    const jobRef=useRef<any>();
    const jobData = useSelector((state:any) => state.dashboard.jobList?.Jobs ? state.dashboard.jobList?.Jobs : {});
    // const seoData: any = useSelector((state: any) => state.dashboard.seoDetail?.Details);
    useEffect(() => {
        window?.scrollTo(0, 0);
        dispatch(dashboardAction.jobListAction({}));
        return () => {}
    }, []);
    const smoothScroll=(e:any)=> {
        e.preventDefault();
        jobRef && jobRef?.current?.scrollIntoView({ behavior: 'smooth', block: "start"});
    }
    // useEffect(() => {
    //     const shouldRedirect = true;
    
    //     if (shouldRedirect) {
    //       window.location.href = 'https://oncquestlabs.com/';
    //     }
    //   });

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
        <BreadCrumb page={t("career")} data={{slug: "", path: ""}}/> 
        <section className="categories section pt-3">
				<div className="container" id="section2">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="overview-wrap">
                                <div className='text-center'><img src={t("images.career.banner")} className="scale" alt=""/></div>
                                <div className="headingmains text-center pb-3">
                                    <h1 className="right aos-init pb-2 mt-3 mt-lg-5">{t("career_page_title")}</h1>
                                </div>
                                <p className="text-center dull_heading pb-3">{t("career_desc")}</p>
                                <div className="text-center">
                                <a href="" onClick={(e:any)=> smoothScroll(e)} className="book--hexagon active">
                                    <span>{t("view_position")}<i className="fa fa-long-arrow-right ml-20" aria-hidden="true"></i></span>
                                </a>
                                </div>
                            </div>
                        </div>                 
                    </div>
                </div>
        </section>
        <section className="Seo-content">
        {/* <SeoHeaderContent /> */}
        </section>
        <div className="careerDiv">
        <section>
            <div className="container" id="section2">
                <section className="sub-section overview_network">
                    <div className="row my-4">
                        <div className="col-md-6 text-center my-3 my-md-0">
                            <img src={t("images.career.crn10")} className="scale  round_img" alt=""/>
                        </div>
                        <div className="col-md-6 text-center"><img src={t("images.career.crn12")} className="scale round_img" alt=""/></div>  
                    </div> 
                    <div className="row my-4">
                        <div className="col-12 text-center"><img src={t("images.career.career_img")} className="scale round_img" alt=""/></div>  
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="overview-wrap">
                                <div className="headingmains text-center pb-3">
                                    <h2 className="right aos-init pb-2 mt-4 text-white">{t("our_culture")}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-md-6">
                            <img src={t("images.career.crn1")} className="scale round_img" alt=""/>
                        </div>
                        <div className="col-md-6">
                            <p className="w-100 text-left">{t("culture_text")}</p>
                            <p className="w-100 text-left">{t("culture_text_")}</p>
                        </div>
                    </div>
                    <div className="row my-4">
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-sm-6 mb-3 mb-md-0"><img src={t("images.career.crn2")} className="scale  round_img" alt=""/></div>
                                <div className="col-sm-6 "><img src={t("images.career.crn4")} className="scale  round_img" alt=""/></div>
                                <div className="col-12 my-3 my-md-0">
                                <p className="w-100 text-left">{t("culture__text_")}</p>
                                <p className="w-100 text-left my-3">{t("culture_text__")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4"><img src={t("images.career.crn3")} className="scale round_img" alt=""/></div>  
                    </div>
                </section>    
            </div>
        </section>
        </div>
        <section className="categories section pt-3">
				<div className="container" id="section2" ref={jobRef}>
                {jobData && Array.isArray(jobData) &&
                    <div className="row">
                        <div className="col-md-8">
                                <div className="overview-wrap">
                                    <div className="headingmains text-left pb-3">
                                        <h2 className="right aos-init pb-2 mt-sm-4 mt-lg-5">{t("cureent_opening")}</h2>
                                    </div>
                                    <div className="w-100 text-left">
                                    {jobData?.length > 0 ? jobData?.map((item:any,i:any)=>(
                                    <div className="career_wrap col-md-12 p-4 mb-4 career_list" key={i}>
                                        <h5 className="job_name">{`${item?.JobTitle} - ${item?.Role}`}</h5>
                                        <div className="job_date mb-3">{`${item?.Location} | ${item?.Role}`}</div>
                                        <div className="job_date mb-3"><strong>Experience: </strong>{`${item?.Experience}`}</div>
                                        <ul>
                                            <CAccord title={t("job_description")} description={t(item?.Responsibilities)} data={i}/>
                                            <CAccord title={t("Skills_career")} description={item?.Skills} data={i+"s"}/>
                                        </ul>
                                    </div>
                                    )): 
                                    (<div className="text-left fs-16">No Current Opening</div>)
                                    }
                                    </div>
                                </div>
                        </div>
                        <div className="col-md-4">
                        {jobData?.length > 0 &&
                            <div className="overview-wrap h-services remmt-car-form">
                                {/* <div className="headingmains text-left pb-3">
                                    <h1 className="right aos-init pb-2 mt-sm-4 mt-lg-5">Current Openings</h1>
                                </div> */}
                                <CareerForm job={jobData}/>
                            </div>
                        }
                        </div>                  
                    </div>
                    }
                </div>
                <h5 className="text-center my-3" style={{letterSpacing: "1px"}}>{t("amazing_team_write_us")} <a href='mailto:resume@oncquest.net'>resume@oncquest.net</a></h5>
        </section>

        <section className="Seo-content">
        {/* <SeoFooterContent /> */}
        </section>
     </React.Fragment>
    )
}
export const getStaticProps= async ({ locale }:{locale: string}) => {
    // let Slug = ROUTE.CAREER?.replace("/", "");
    // const data: any = await Api.post(Url.seoDetail, { Slug: Slug });
    return {
      props: {
        // seoData: data?.Result?.Details || {},
      ...(await serverSideTranslations(locale, ["common"])),
      },
    };
  };
export default Career