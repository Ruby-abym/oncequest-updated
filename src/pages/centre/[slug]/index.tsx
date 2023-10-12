import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import Slider from "react-slick";
import { centerAction } from '@/redux/action';
import { ROUTE } from '@/Const/Route';
import BreadCrumb from '@/Component/Common/BreadCrumb';
import Link from 'next/link';
import BookingEnquiry from '@/Component/Feature/Centres/BookingEnquiry';
import { Rating } from 'react-simple-star-rating'
import ImgPlaceHolder from '@/Utils/imgPlaceholder';

import { Timeconvert } from '@/Utils/index';
import CenterTiming from '@/Component/Feature/Centres/CenterTiming';
import MapWithMarker from '@/Component/Feature/Centres/GoogleMap';
import { FacebookShareButton } from 'react-share';
import NearByCenter from '@/Component/Feature/Centres/NearByCenter';


import Payment from '@/Component/Feature/Centres/Payment';
import { useTranslation } from "next-i18next";
import SectionLoader from '@/Component/Common/Loader/SectionLoader';

import {NextPage } from 'next';
import Api from '@/redux/common/api';
import { SITE_URL, Url } from '@/redux/common/url';
import { NextSeo } from 'next-seo';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';
const Facility = dynamic(()=>import('@/Component/Feature/Centres/Facility'))
interface MyPageProps {
    seoData:any;
  }

const LabsDetails : NextPage<MyPageProps> = ({ seoData }) =>{
    const { t } = useTranslation();
   const router = useRouter();
   const {slug}:any = router.query;
    const dispatch = useDispatch();

    const [day, setDay] = useState("");
    const [altitude, setAltitude] = useState<any[]>([]);
    const centerData: any = useSelector((state: any) => state.center.selected ? state.center.selected : {});
    
    const nearCenterData = useSelector((state: any) => state.center.nearByCenter ? state.center.nearByCenter?.Centres : {});
    const centerval =useSelector((state: any) => state.center.list ? state.center.list: {});
   
   
    const [initialRenderComplete, setInitialRenderComplete] = useState<boolean>(false);
    useEffect(() => {
      setInitialRenderComplete(true);
    
    }, []);
   
    useEffect(() => {
        window?.scrollTo(0, 0);
        dispatch(centerAction.getCenterBySlugAction(slug));
        if(centerval==null){
            console.log("this is not right page")
           
            // router.push('/404')
          }
        return () => { };
    }, [slug]);

    useEffect(() => {
        let arr: any[] = [];
        arr.push(centerData?.CentreDetails);
        setAltitude(arr);
        if (centerData?.CentreDetails?.CentreLat) {
            dispatch(centerAction.getNearByCenterAction({ CurrentCentreSlug: centerData?.CentreDetails?.Slug, Pincode: centerData?.CentreDetails?.Pincode }));
        }
        return () => { };
    }, [centerData?.CentreDetails?.CentreLat]);


    function SelectedDayTiming(val: any): any {
        let timing = val?.find((el: any) => {
            return el?.day === day;
        })
        return timing?.timings;
    }

    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
    }
    if(!initialRenderComplete) return<></>
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
          
            <BreadCrumb page={t("lab_centres")} data={{ slug: slug, path: ROUTE.CENTER }} />
            <section className="bg-white section pt-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            {centerData && Object.keys(centerData)?.length > 0 ?
                                <>
                                    {centerData?.CentreDetails?.CentreImages?.length > 0 &&
                                        <div className="centerSlider bg_lab mb-4 p-4">
                                            <Slider {...settings}>
                                                {centerData?.CentreDetails?.CentreImages?.map((img: any, index: any) => (
                                                    <div key={index} className='text-center'>
                                                        <img src={centerData?.CentreImageBaseUrl && img ? `${centerData?.CentreImageBaseUrl}${img}` : "/assets/img/lab_details.jpg"} onError={(e: any) => ImgPlaceHolder(e, "/assets/img/lab_details.jpg")} className="scale" alt="" />
                                                    </div>
                                                ))}
                                            </Slider>
                                        </div>}
                                    <div className="overview-wrap bg_lab mb-4 p-4">
                                        <div className="h-services mt-0 lab_wrapper">
                                            <div className="lab_flex_pad">
                                                <div><img src="/assets/img/test.png" className="scale_booknow" />{centerData?.CentreDetails?.DisplayCentreName}</div>
                                                <div className="lab_flex_center">
                                                    <FacebookShareButton url={`${window.location.host}${ROUTE.CENTERDETAILS}/${centerData?.CentreDetails?.Slug}`}><div className="mr-3"><img src="/assets/img/share.png" className="scale_booknow" />{t("share")}</div></FacebookShareButton>
                                                    <a href={`https://www.google.com/maps/search/?api=1&query=${centerData?.CentreDetails?.CentreLat},${centerData?.CentreDetails?.CentreLng}`} target="_blank"><img src="/assets/img/direction.png" className="scale_booknow" />{t("get_direction")}</a>
                                                </div>
                                            </div>
                                            <div className="address">
                                                {centerData?.CentreDetails?.AddressLine1 ? centerData?.CentreDetails?.AddressLine1 + ", " : ""}
                                                {centerData?.CentreDetails?.AddressLine2 ? centerData?.CentreDetails?.AddressLine2 + ", " : ""}
                                                {centerData?.CentreDetails?.Landmark ? centerData?.CentreDetails?.Landmark + ", " : ""}
                                                {centerData?.CentreDetails?.Locality ? centerData?.CentreDetails?.Locality + ", " : ""}
                                                {centerData?.CentreDetails?.CityName ? centerData?.CentreDetails?.CityName + ", " : ""}
                                                {centerData?.CentreDetails?.Pincode ? centerData?.CentreDetails?.Pincode + "- " : ""}
                                                {centerData?.CentreDetails?.StateName ? centerData?.CentreDetails?.StateName : ""}
                                            </div>
                                            <div className="lab_flex_start">
                                                {centerData?.CentreDetails?.Phone &&
                                                    <div className="lab_flex_center">
                                                        <span><img src="/assets/img/call.png" className="scale_booknow" /></span>
                                                        <span>
                                                            <div>{t("phone_number")}</div>
                                                            <div className="text"><a href={`tel: ${centerData?.CentreDetails?.Phone}`} target="_blank">{`(+91) ${centerData?.CentreDetails?.Phone}`}</a></div>
                                                        </span>
                                                    </div>
                                                }
                                                {centerData?.CentreDetails?.CentreTimings &&
                                                    <div className="lab_flex_center">
                                                        <span><img src="/assets/img/clock.png" className="scale_booknow" /></span>
                                                        <CenterTiming timing={centerData?.CentreDetails?.CentreTimings} />
                                                    </div>
                                                }
                                                {centerData?.CentreDetails?.Email &&
                                                    <div className="lab_flex_center">
                                                        <span><img src="/assets/img/email.png" className="scale_booknow" /></span>
                                                        <span>
                                                            <div>Email Id</div>
                                                            <a className="text" href={`mailto: ${centerData?.CentreDetails?.Email}`}>{centerData?.CentreDetails?.Email}</a>
                                                        </span>
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    {centerData?.CentreDetails?.AboutUs ?
                                        <div className="overview-wrap bg_lab mb-4 p-4">
                                            <div className="headingmains text-left pb-3">
                                                <h6 className="right">About {centerData?.CentreDetails?.CentreTypeId == 1 ? 'Centre' : "Lab"}</h6>
                                            </div>
                                            <p className="text-left" dangerouslySetInnerHTML={{ __html: centerData?.CentreDetails?.AboutUs }}></p>
                                        </div>
                                        : ''}
                                </>
                                :
                                <SectionLoader />
                            }
                            <Facility facilityArray={centerData?.CentreDetails?.CentreFacilities} />
                            <Payment />
                            <NearByCenter heading="Nearby Centres" nearCenterData={nearCenterData} />
                        </div>

                        <div className="col-md-4">
                            <BookingEnquiry centerId={centerData?.CentreDetails?.Id} />
                            <div className="col-md-12 mb-4">
                                {centerData && Object.keys(centerData)?.length > 0 ?
                                    <>
                                        {altitude && <MapWithMarker {...altitude} />}
                                    </>
                                    :
                                    <SectionLoader />
                                }
                            </div>
                            {/* <div className="col-md-12 mb-4 bg_lab infobox_wrapper p-4">
                                    <div className="headingmains text-left pb-3">
                                        <h6 className="right">Customer Ratings</h6>
                                    </div>
                                    <div className="d-flex flex-wrap justify-content-between align-items-center bg-white m-0">
                                        <div className="p-1">
                                            <Rating
                                                onClick={() => console.log("")}
                                                ratingValue={centerData?.CentreDetails?.Rating}  
                                                fillColor="#ffd700"
                                            />
                                        </div>
                                        <div className="p-1">
                                            <h6 className="font_Rating py-1 px-3">{centerData?.CentreDetails?.Rating ? `${centerData?.CentreDetails?.Rating} out of 5` : ""}</h6>
                                        </div>
                                    </div>
                                </div> */}
                            {/* <div className="row align-items-center justify-content-between m-3 bg_lab">
                                    <img src="/assets/img/path_test.png" className="scale mt-3" alt=""/>
                                </div> */}
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
export const getServerSideProps = async ({ locale,params }:{locale: string,params:any}) => {
    let Slug = `${ROUTE.CENTERDETAILS}/${params?.slug}`?.replace("/", "");
   
    const data: any = await Api.post(Url.seoDetail, { Slug: Slug});
     
    return {
      props: {
        seoData: data?.Result?.Details || {},
        ...(await serverSideTranslations(locale, ["common"])),
      },
    };
  };
export default LabsDetails
