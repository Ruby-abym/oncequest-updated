import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link'
import Api from "@/redux/common/api";
import { SITE_URL, Url } from "@/redux/common/url";
import {  NextPage } from "next";
import { NextSeo } from "next-seo";
import ImgPlaceHolder from '@/Utils/imgPlaceholder';
import { dashboardAction } from '../../redux/action';
import { ROUTE } from '@/Const/Route';
import BreadCrumb from '@/Component/Common/BreadCrumb';
import WaitScreen from '@/Component/Common/LodingScreen/WaitScreen';
import { useRouter } from 'next/router';
import SubmitForm from '@/Component/Common/SubmitForm/SubmitForm';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
interface MyPageProps {
    seoData: any;
  }
const Ecme: NextPage<MyPageProps> = ({seoData})=> {
    const  {t} = useTranslation();
    const dispatch = useDispatch();
    const [imgUri, setImgUri] = useState<string>("");
    const [videoUri, setVideoUri] = useState<string>("");
    const [cme, setCme] = useState<any>([]);
    const cmeData:any = useSelector((state:any) => state.dashboard.cme ? state.dashboard.cme : {});
    const router = useRouter();
    useEffect(() => {
        window?.scrollTo(0, 0);
        dispatch(dashboardAction.cmeListAction({}));
        return () => {};
    }, []);

    useEffect(() => {
        setImgUri(cmeData?.ImageBaseUrl);
        setVideoUri(cmeData?.VideoBaseUrl)
        setCme(cmeData?.CMELists);
        return () => {};
    }, [cmeData]);
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
        <BreadCrumb page={"eCME"} data={{slug: "", path: ""}}/> 
        {cmeData && Object.keys(cmeData).length >0 ?
        <>
        <section className="about-section">
              <div className="container" id="section2">
                <div className="row">
                    <div className="col-md-12">
                        <div className="overview-wrap text-center">
                            <img src="/assets/img/ecme_banner.png" className="scale" alt="" />
                            <div className="headingmains text-center pb-3">
                                <h1 className="right aos-init pb-2 mt-sm-4 mt-lg-5">Electronic Continuing Medical Education</h1>
                            </div>
                            <p className="text-center dull_heading pb-3">We bring together healthcare professionals to share information on relevant topics</p>
                        </div>
                    </div>
                </div>          
            </div>
        </section>
        <section className="news_section pb-4">
            <div className="container">
                <div className="row"> 
                    {cme && cme.length > 0 ? cme?.map((item:any, i:any)=> (
                        <div className="col-md-4" key={i}>
                            <div className="news_img col-md-12"><img src={item?.Images && item?.Images.length>0 && imgUri ?  `${imgUri}${item?.Images[0]?.image}` : "/assets/img/histopathology.jpg"} onError={(e:any)=> ImgPlaceHolder(e, "/assets/img/histopathology.jpg")} className="scale round_img" alt="" /></div>
                            <div className="col-md-12 box-white-shadow news_box_width_85">
                            <div className="infobox_wrapper">
                                <h5 className="mb-3">{item?.EventTitle}</h5>
                                <div className="f-14">{item?.ShortDetails && item?.ShortDetails?.slice(0,300)}</div>
                                <Link className="infobox_button button-read-more" href={`${ROUTE.ECME}/${item?.Slug}`}><img src="/assets/img/arrow-read.svg" className="scale" /></Link>
                            </div>
                        </div>
                    </div>
                    ))
                    : 
                    (<p className="col-md-12 f-20 text-center">{t("no_cme_available")}</p>)
                    }
                </div>
            </div>
        </section>
        <SubmitForm heading={t("reach_out-to_us")} des={""} PageSrc={"Ecme"}/>
        </>
        : <WaitScreen />
        }
     </React.Fragment>
    )
}
export const getStaticProps = async ({ locale }:{locale: string}) => {
    // let Slug = ROUTE.ECME?.replace("/", "");
    // const data: any = await Api.post(Url.seoDetail, { Slug: Slug });
    return {
      props: {
        // seoData: data?.Result?.Details || {},
      ...(await serverSideTranslations(locale, ["common"])),
      },
    };
  };
export default Ecme