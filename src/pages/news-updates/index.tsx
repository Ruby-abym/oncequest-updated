import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import ImgPlaceHolder from '@/Utils/imgPlaceholder';
import Testimonial from '@/Component/Feature/Home/Testimonial';
import { dashboardAction } from '../../redux/action';
import { ROUTE } from '@/Const/Route';
import BreadCrumb from '@/Component/Common/BreadCrumb';
import PressRealease from '@/Component/Feature/NewsUpdate/PressRealease';

import Api from "@/redux/common/api";
import { useRouter } from 'next/router';
import { SITE_URL, Url } from "@/redux/common/url";
import {  NextPage } from "next";
import { NextSeo } from "next-seo";
import { useTranslation } from 'next-i18next';

import SectionLoader from '@/Component/Common/Loader/SectionLoader';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
interface MyPageProps {
    seoData: any;
  }
const NewsUpdates: NextPage<MyPageProps> = ({seoData})=> {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const router = useRouter();
    const [imgUri, setImgUri] = useState<string>("");
    const [imgUriCme, setImgUriCme] = useState<string>("");
    const [videoUri, setVideoUri] = useState<string>("");
    const [news, setNews] = useState<any>([]);
    const [imgPUri, setImgPUri] = useState<string>("");
    const [videoPUri, setVideoPUri] = useState<string>("");
    const [press, setPress] = useState<any>([]);
    const newsData: any = useSelector((state: any) => state.dashboard.newsAndUpdate ? state.dashboard.newsAndUpdate : {});
    const pressData: any = useSelector((state: any) => state.dashboard.pressRelease ? state.dashboard.pressRelease : {});
    const testimonialData: any = useSelector((state: any) => state.dashboard.testimonial ? state.dashboard.testimonial : {});
    const [cme, setCme] = useState<any>([]);
    const cmeData: any = useSelector((state: any) => state.dashboard.cme ? state.dashboard.cme : {});
    const [initialRenderComplete, setInitialRenderComplete] = useState<boolean>(false);
  useEffect(() => {
    setInitialRenderComplete(true);
  }, []);
    useEffect(() => {
        dispatch(dashboardAction.newsAndUpdateAction({}));
        dispatch(dashboardAction.pressReleaseAction({}));
        dispatch(dashboardAction.getTestimonialAction({}));
        return () => { };
    }, []);

    useEffect(() => {
        window?.scrollTo(0, 0);
        if (newsData) {
            setImgUri(newsData?.ImageBaseUrl);
            setVideoUri(newsData?.VideoBaseUrl);
            setNews(newsData?.NewsEvents);
        }
        return () => { };
    }, [newsData]);

    useEffect(() => {
        if (pressData) {
            setImgPUri(pressData?.ImageBaseUrl);
            setVideoPUri(pressData?.VideoBaseUrl);
            setPress(pressData?.PressRelease);
        }
        return () => { };
    }, [pressData]);

    useEffect(() => {
        window?.scrollTo(0, 0);
        dispatch(dashboardAction.cmeListAction({}));
        return () => { };
    }, []);

    useEffect(() => {
        setImgUriCme(cmeData?.ImageBaseUrl);
        setVideoUri(cmeData?.VideoBaseUrl)
        setCme(cmeData?.CMELists);
        return () => { };
    }, [cmeData]);
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
            <BreadCrumb page={t("news_update")} data={{ slug: "", path: "" }} />
            <section className="news_section section overview-top pt-3">
                <div className="container" id="section2">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="overview-wrap text-center">
                                <img src="../assets/images/en/news_banner.png" className="scale" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="news_section pb-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h2 className="xs-title mb-3">{t("news_and_events")}</h2>
                            <p className="fs-18" style={{ color: "#9c999d" }}>{t("stay_up_to_date")}</p>
                        </div>
                        {Object.keys(newsData).length > 0 && Object.keys(newsData).length > 0 ?
                            <>
                                {news && news.length > 0 ? news?.map((item: any, i: any) => (
                                    <div className="col-md-4" key={i}>
                                        <Link href={`${ROUTE.NEWSANDUPDATESDETAIL}/${item?.Slug}`}>
                                            <div className="news_img col-md-12"><img src={item?.Images && imgUri ? `${imgUri}${item?.Images[0].image ? item?.Images[0].image : item?.Images[1].image}` : t("images.news1")} className="scale round_img" alt="" /></div>
                                            <div className="col-md-12 p-3 box-white-shadow news_box_width_85">
                                                <p className="f-16">{item?.Date && moment(item?.Date).format("MMM DD, YYYY")}</p>
                                                <p className="f-14">{item?.ShortDetails && item?.ShortDetails?.slice(0, 500)}</p>
                                            </div>
                                        </Link>
                                    </div>
                                ))
                                    :
                                    <p className="col-md-12 f-20 text-center mb-5">{t("no_data_available")}</p>
                                }
                            </>
                            : <SectionLoader />
                        }
                    </div>
                </div>
            </section>
            <section className="news_section pb-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h2 className="xs-title mb-3">{t("ecme_new")}</h2>
                            <p className="fs-18" style={{ color: "#9c999d" }}>{t("bring_together_healthcare")}</p>
                        </div>
                        {Object.keys(cmeData).length > 0 && Object.keys(cmeData).length > 0 ?
                            <>
                                {cme && cme.length > 0 ? cme?.map((item: any, i: any) => (
                                    <div className="col-md-4" key={i}>
                                        <div className="news_img col-md-12"><img src={item?.Images && item?.Images.length > 0 && imgUriCme ? `${imgUriCme}${item?.Images[0]?.image}` : t("images.histopathology")} onError={(e: any) => ImgPlaceHolder(e, t("images.histopathology"))} className="scale round_img" alt="" /></div>
                                        <div className="col-md-12 box-white-shadow news_box_width_85">
                                            <div className="infobox_wrapper">
                                                <h5 className="mb-3">{item?.EventTitle}</h5>
                                                <div className="f-14">{item?.ShortDetails && item?.ShortDetails?.slice(0, 300)}</div>
                                                <Link className="infobox_button button-read-more arrow-news" href={`${ROUTE.ECME}/${item?.Slug}`}><img src="/assets/img/arrow-read.svg" className="scale" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                ))
                                    :
                                    (<p className="col-md-12 f-20 text-center">{t("no_cme_available")}</p>)
                                }
                            </>
                            : <SectionLoader />
                        }
                    </div>
                </div>
            </section>
            <PressRealease press={press} imgPUri={imgPUri} videoPUri={videoPUri} />
            <Testimonial testimonial={testimonialData} loadingData={testimonialData}/>
        </React.Fragment>
    )
}

  export const getServerSideProps = async ({ locale }:{locale: string}) => {
    let Slug = ROUTE.NEWSANDUPDATES?.replace("/", "");
    const data: any = await Api.post(Url.seoDetail, { Slug: Slug });
    
    return {
      props: {
        seoData: data?.Result?.Details || {},
      ...(await serverSideTranslations(locale, ["common"])),
      },
    };
  };
export default NewsUpdates
