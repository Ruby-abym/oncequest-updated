import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'next-i18next';
import {NextPage } from 'next';
import Api from '@/redux/common/api';
import { SITE_URL, Url } from '@/redux/common/url';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { ROUTE } from '@/Const/Route'
import BreadCrumb from '@/Component/Common/BreadCrumb';
import { useRouter } from 'next/router';
import { submitAction } from '../../redux/action';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
interface MyPageProps {
    seoData:any;
  }
const Thankyou: NextPage<MyPageProps> = ({ seoData }) =>  {
    const {t}= useTranslation();
    const dispatch = useDispatch();
    const router = useRouter();
    useEffect(() => {
        // window?.scrollTo(0, 0);
        dispatch(submitAction.sendEmailAction());
        dispatch(submitAction.sendSmsAction());
        return () => { }
    }, [])
    // const scrpt = `!function(px){function e(t,e,c){var n="",r="";try{""!=(n=function(t,e){try{var c={};e.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(t,e,n){c[e]=n});return c.hasOwnProperty(t)?c[t]:""}catch(t){return""}}(t,c))?function(t,e,c){try{var n,r;c?((n=new Date).setTime(n.getTime()+864e5),r="; expires="+n.toGMTString()):r="",document.cookie=t+"="+e+r+";Path=/"}catch(t){}}(e,n,1):n=function(t){try{var e=document.cookie.match(new RegExp("(^| )"+t+"=([^;]+)"));if(e)return e[2]}catch(t){}return null}(e),r=""!=n&&null!=n?"&"+t+"="+n:"&"+t+"="}catch(t){}return r}var c="",n="",r="";try{n=e("ad","acf",c=window.location.href),r=e("col_ci","col_ci",c)}catch(t){console.log(t)}var a="https://ade.clmbtech.com/cde/eventTracking.htm?pixelId="+px+"&_w=1&_t=2"+n+r+"&rd="+(new Date).getTime();(new Image).src=a}('14428');`;
    // const noscrpt = `<img height='1' width='1' style='display:none' src='https://ade.clmbtech.com/cde/eventTracking.htm?pixelId=14428&_w=1&_t=2'/>`;
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
            <BreadCrumb page={"Thank You"} data={{ slug: "", path: "" }} />
            <section className="thank-section">
                <div className="container">
                    <div className="tab-content">
                        <div id="organs" className="tab-pane fade in active show">
                            <div className="row">
                                <div className="col-sm-12 col-md-6 col-lg-12">
                                    <div className="h-services">
                                        <div className="infobox_wrapper">
                                            <div className="thank_container"><img src={t("images.thank_you")} className="scale" style={{ "width": "8%" }} /></div>
                                            <h2 className="text-center mr-25">Thank You for <br /> getting in touch</h2>
                                            <div className="text-center f-16" style={{ color: "#0A0B0C" }}>Our Health Expert will reach you out soon</div>
                                            <div className="text-center mt-25">
                                                <Link href={ROUTE.HOME} className="book--hexagon active"><span>GO TO HOME</span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <script>{scrpt}</script> */}
            {/* {noscrpt} */}
            <img height='1' width='1' src='https://ade.clmbtech.com/cde/eventTracking.htm?pixelId=14428&_w=1&_t=2' style={{ display: 'none' }} />

        </React.Fragment>

    )
}
export const getStaticProps = async ({ locale }:{locale: string}) => {
    let Slug = ROUTE.THANKYOU?.replace("/en", "");
    const data: any = await Api.post(Url.seoDetail, { Slug: Slug});
    return {
      props: {
        seoData: data?.Result?.Details || {},
        ...(await serverSideTranslations(locale, ["common"])),
      },
    };
  };
export default Thankyou