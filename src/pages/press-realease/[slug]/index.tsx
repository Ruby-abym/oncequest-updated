import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { dashboardAction } from '@/redux/action'
import { ROUTE } from '@/Const/Route'
import WaitScreen from '@/Component/Common/LodingScreen/WaitScreen'
import {NextPage } from 'next';
import Api from '@/redux/common/api';
import { SITE_URL, Url } from '@/redux/common/url';
import { NextSeo } from 'next-seo';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from "react-i18next";
import BreadCrumb from '@/Component/Common/BreadCrumb'
interface MyPageProps {
    seoData:any;
  }
const PressRealeaseDetails : NextPage<MyPageProps> = ({ seoData })  => {
    const { t } = useTranslation();
   const router = useRouter()
   const {slug}:any = router.query;
    const dispatch = useDispatch();
    const base:any = useSelector((state:any) => state.dashboard.selectPress ? state.dashboard.selectPress : {});
    const data = useSelector((state:any) => state.dashboard.selectPress?.Details ? state.dashboard.selectPress?.Details : {});
    useEffect(() => {
        window?.scrollTo(0, 0);
        dispatch(dashboardAction.pressReleaseBySlugAction(slug));
        return () => {};
    }, [slug]);

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
   
    {base && Object.keys(base)?.length < 1 && <WaitScreen/>}
        <BreadCrumb page={t("press_release")} data={{slug: slug, path: ROUTE.NEWSANDUPDATES}}/> 
        {data && Object.keys(data).length > 0 &&
        <section className="about-section pt-3">
				<div className="container" id="section2">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="row">
                                    <div className="col-sm-12">
                                        <div className="headingmains text-left">
                                            <h1 className="right aos-init pb-2">{data?.EventTitle}</h1>
                                            {data?.ReferenceUrl && <div className="refUrl py-2">Reference :- <a href={data?.ReferenceUrl} target="_blank"><b>{data?.ReferenceUrl}</b></a></div>}
                                        </div>
                                    </div>
                            </div>
                            <div className="row">
                                <div className="row m-0 col-md-12">
                                {data?.Images && data?.Images.length >0 && data?.Images?.map((item:any, i:any)=> 
                                i < 1 ? (
                                    <div className="col-sm-12 p-0" key={i}>
                                        <img src={item?.image && base && `${base?.ImageBaseUrl}${item?.image}` /* : "/assets/img/overview01.png"} onError={(e:any)=> ImgPlaceHolder(e, "/assets/img/overview01.png")*/}  className="scale" alt="" />
                                    </div>
                                ):
                                i > 0 && (
                                    <div className="col-sm-4 p-0"  key={i}>
                                        <img src={item?.image && base && `${base?.ImageBaseUrl}${item?.image}` /* : "/assets/img/overview01.png"} onError={(e:any)=> ImgPlaceHolder(e, "/assets/img/overview01.png")*/}  className="scale" alt="" />
                                    </div>
                                )
                                )}
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-sm-12 f-14">
                                    <div dangerouslySetInnerHTML={{__html: data?.Details}}>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="h-services mt-2">
                                <div className="infobox_wrapper">
                                    <div className="my-3">
                                    {data?.CreatedAt && <div className="my-3 f-16">Posted on {data?.CreatedAt && moment(data?.CreatedAt).format("MMMM DD, YYYY")} {data?.PostedBy ? "by "+data?.PostedBy : "" }</div>}
                                        {/* <div className="mt-3">
                                            <h6 >Venue:</h6>
                                            <h6 >{data?.Location}</h6>
                                        </div> */}
                                        <div className="mt-3">
                                            <h6>{t("date_name")}:</h6>
                                            <h6>{data?.Date && moment(data?.Date).format("Do MMMM' YY")}</h6>
                                        </div>
                                        <div className="mt-3">
                                            <h6 >{t("time")}:</h6>
                                            <h6 >{data?.Time && moment(data?.Time, "hh:mm").format('LT')}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>          
                </div> 
			</section>
            }
     </React.Fragment>
    )
}

export default PressRealeaseDetails

