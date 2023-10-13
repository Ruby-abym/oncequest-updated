import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Slider from 'react-slick';
import ImgPlaceHolder from '@/Utils/imgPlaceholder';
import { dashboardAction } from '@/redux/action';
import { ROUTE } from '@/Const/Route'
import SubmitForm from '@/Component/Common/SubmitForm/SubmitForm';
import {NextPage } from 'next';
import Api from '@/redux/common/api';
import { SITE_URL, Url } from '@/redux/common/url';
import { NextSeo } from 'next-seo';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from "next-i18next";
import BreadCrumb from '@/Component/Common/BreadCrumb';
import WaitScreen from '@/Component/Common/LodingScreen/WaitScreen';

interface MyPageProps {
    seoData:any;
  }
const EcmeDetails: NextPage<MyPageProps> = ({ seoData }) =>{
    const { t } = useTranslation();
   const router = useRouter();
   const {slug}:any = router.query;
    const dispatch = useDispatch();
    const [imgUri, setImgUri] = useState<string>("");
    const [videoUri, setVideoUri] = useState<string>("");
    const [cme, setCme] = useState<any>({});
    const cmeData:any = useSelector((state: any) => state.dashboard.cmeDetails ? state.dashboard.cmeDetails : {});

    useEffect(() => {
        window?.scrollTo(0, 0);
        dispatch(dashboardAction.cmeBySlugAction(slug));
        return () => { };
    }, []);

    useEffect(() => {
        if(cmeData){
            setImgUri(cmeData?.ImageBaseUrl);
            setVideoUri(cmeData?.VideoBaseUrl)
            setCme(cmeData?.CMEDetails);
        }
        return () => { };
    }, [cmeData]);

    var settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows:true,
        autoplay:false,
        centerMode: true,
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
           
            {cmeData && Object.keys(cmeData)?.length < 1 && <WaitScreen/>}
            <BreadCrumb page={t("news_update")} data={{ slug: slug, path: ROUTE.NEWSANDUPDATES }} />  
            {cme && Object.keys(cme)?.length > 0 &&
            <>
            <section className="about-section">
                <div className="container" id="section2">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="text-center">
                            <div className="overview-wrap mb-3">
                                {cme?.Images && cme?.Images?.length > 0 && cme?.Images[0]?.image && <div><img src={imgUri && `${imgUri}${cme?.Images[0]?.image}` /* : "/assets/img/histopathology.jpg"} onError={(e: any) => ImgPlaceHolder(e, "/assets/img/histopathology.jpg") */} className="scale" alt="" /></div>}
                                <div className="headingmains text-center pb-3">
                                    <h1 className="right aos-init pb-2 mt-3 mt-lg-5">{cme?.EventTitle}</h1>
                                </div>
                                <p className='dull_heading pb-lg-3' dangerouslySetInnerHTML={{__html: cme?.Details}}></p>
                            </div>
                                {cme?.CreatedAt &&
                                <div className="headingmains text-center mt-3 mb-n4">
                                    <p>{cme?.CreatedAt && moment(cme?.CreatedAt).format("MMMM DD, YYYY")} {cme?.PostedBy ? "by "+cme?.PostedBy : "" }</p>
                                </div>}
                                <div className='dtl dlt01'>
                                    <div className='dtl_box'>
                                        <h5 className='mb-2'><img src="/assets/img/ecme_calendar.png" className="scale_booknow" alt=""/><span >{t("date_name")}</span></h5>
                                        <p>{cme?.date && moment(cme?.date).format("DD, MMMM YYYY")}</p>
                                    </div>
                                    <div className='dtl_box'>
                                        <h5 className='mb-2'><img src="/assets/img/ecme_clock.png" className="scale_booknow" alt=""/><span >{t("time")}</span></h5>
                                        <p>{cme?.Time && moment(cme?.Time, "hh:mm").format('LT')}</p>
                                    </div>
                                    <div className='dtl_box'>
                                        <h5 className='mb-2'><img src="/assets/img/ecme_venue.png" className="scale_booknow" alt=""/><span >{t("venue")}</span></h5>
                                        <p className="location">{t(cme?.Location)}</p>
                                    </div>
                                </div>
                                {/* <div className='ecme_box_wrap'>
                                    <div className='ecme_box'>
                                        <h5 className='mb-2'>Total Attendees</h5>
                                        <p>Hematopathology (including lymph node pathology)</p>
                                        <p> Oncopathology</p>
                                        <p> Multicolor Flow cytometry</p>
                                        <p> Molecular Oncopathology</p>
                                    </div>
                                    <div className='ecme_box'>
                                        <h5 className='mb-2'>Discussed Point</h5>
                                        <ul>
                                            <li>Hematopathology (including lymph node pathology)</li>
                                            <li> Oncopathology</li>
                                            <li> Multicolor Flow cytometry</li>
                                            <li> Molecular Oncopathology</li>
                                        </ul>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="nrlDiv">
            <section className="section">
                <div id="section2">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="overview-wrap">
                                <div className="headingmains text-center pb-3">
                                    <h2 className="right aos-init pb-2 mt-sm-4 text-white p-2">{t("health_talk_expert")}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="nrl_slider nrl_sli1">
                    <Slider {...settings}>
                           <div >
                                <img className="scale" src="/assets/img/1.jpg" alt="" />
                            </div>
                            <div>
                                <img className="scale" src="/assets/img/2.jpg" alt="" />
                            </div>
                            <div>
                                <img className="scale" src="/assets/img/3.jpg" alt="" />
                            </div>
                            <div>
                                <img className="scale" src="/assets/img/4.jpg" alt="" />
                            </div>
                            {/* <div>
                                <img className="scale" src="/assets/img/nrl_usp.jpg" alt="" />
                            </div>
                            <div>
                                <img className="scale" src="/assets/img/nrl_usp.jpg" alt="" />
                            </div>
                            <div>
                                <img className="scale" src="/assets/img/nrl_usp.jpg" alt="" />
                            </div>
                            <div>
                                <img className="scale" src="/assets/img/nrl_usp.jpg" alt="" />
                            </div> */}
                    </Slider>
                    </div> 
                </div>
            </section>
        </div>
        <SubmitForm heading={t("reach_out-to_us")} des={""} PageSrc={"EcmeDetails"}/>
        </>
        }
        </React.Fragment>
    )
}
export const getServerSideProps = async ({ locale,params }:{locale: string,params:any}) => {
    let Slug = `${ROUTE.ECME}/${params.slug}`?.replace("/", "");
   const val = await Api.post(`${Url.cme}/${params?.slug}`, {});
    const data: any = await Api.post(Url.seoDetail, { Slug: Slug});
   
    const isSlugCorrect = val?.Result?.CMEDetails?.Id
    
    if(isSlugCorrect){
        return {
            props: {
              
              seoData: data?.Result?.Details || {},
              ...(await serverSideTranslations(locale, ["common"])),
            },
          };
    }
    else{
        return{
            notFound:true,
        }
    }
  };
export default EcmeDetails