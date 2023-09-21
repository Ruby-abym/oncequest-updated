import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import { useDispatch, useSelector } from 'react-redux';
import { dashboardAction } from '../redux/action';

import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { ROUTE } from '@/Const/Route';
import InnerFitness from '@/Component/Feature/Home/InnerFitness';
import BookTest from '@/Component/Feature/Home/BookTest';
import Wellness from '@/Component/Feature/Home/Wellness';
import OncquestOffer from '@/Component/Feature/Home/OncquestOffer';

import Testimonial from '@/Component/Feature/Home/Testimonial';
import {NextPage } from 'next';
import Api from '@/redux/common/api';
import { SITE_URL, Url } from '@/redux/common/url';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

interface MyPageProps {
  seoData:any;
}

const Home: NextPage<MyPageProps> = ({ seoData }) => {
  const [initialRenderComplete, setInitialRenderComplete] = useState<boolean>(false);
  useEffect(() => {
    setInitialRenderComplete(true);
  }, []);


  const {t} = useTranslation();
const router = useRouter();
const { locale } = useRouter();
  const dispatch = useDispatch();
  const [hvr, setHvr] = useState<any>(false);
  const dashboard: any = useSelector((state: any) => state.dashboard.dashboardData || null);



  useEffect(() => {
   
    dispatch(dashboardAction.getDashboardAction({}));
    return () => { }
  }, [])

  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };
  if (!initialRenderComplete) return <></>;
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
      {/* <SeoAdd slug={""} /> */}
      <section className="headslider desk-view" data-aos="fade-right" data-aos-duration="1100" style={{ position: "relative", zIndex: 13 }}>
        <div className="sliderbox">
         <div className="slidercont111 owl-carousel">
            <Slider {...settings}>
              <div>
                <Link rel="preload" href={ROUTE.CENTER}><img className="scale" src={t("images.home.slider1")} alt="" /></Link>
              </div>
              <div>
                <Link href={ROUTE.BOOKATEST}><img className="scale" src={t("images.home.slider2")} alt="" /></Link>
              </div>
              {/* <div>
                <Link href={ROUTE.PREVENTIVEHEALTHPKJ}><img className="scale" src={t("images.home.slider3")} alt="" /></Link>
              </div> */}
              <div>
                <Link href={ROUTE.PREVENTIVEHEALTHPKJ}><img className="scale" src={t("images.home.slider8")} alt="" /></Link>
              </div>
              <div>
                <Link href={ROUTE.PREVENTIVEHEALTHPKJ}><img className="scale" src={t("images.home.slider9")} alt="" /></Link>
              </div>
              <div>
                <Link href={ROUTE.PREVENTIVEHEALTHPKJ}><img className="scale" src={t("images.home.slider10")} alt="" /></Link>
              </div>
              <div>
                <Link href={ROUTE.PREVENTIVEHEALTHPKJ}><img className="scale" src={t("images.home.slider11")} alt="" /></Link>
              </div>
              <div>
                <Link href={ROUTE.PREVENTIVEHEALTHPKJ}><img className="scale" src={t("images.home.slider12")} alt="" /></Link>
              </div>
              <div>
                <Link href={ROUTE.NEUROLOGY}><img className="scale" src={t("images.home.slider4")} alt="" /></Link>
              </div>
              <div>
              <Link href={ROUTE.BOOKATEST}><img className="scale" src={t("images.home.slider5")} alt="" /></Link>
              </div>
              <div>
                <Link href={ROUTE.PRIVILEGEMEMBERSHIP}><img className="scale" src={t("images.home.slider6")} alt="" /></Link>
              </div>
              {/* <div>
                <Link href={ROUTE.PRIVILEGEMEMBERSHIPDOCTOR}><img className="scale" src={t("images.home.slider7")} alt="" /></Link>
              </div> */}
            </Slider>
          </div>
        </div>
        <div className="search-slider">
          <div className="container img-responsive leftmargin aos-init aos-animate" data-aos="flip-up" data-aos-duration="1500" >
            <div className="prnt_dvhome intelliSearch">
              <div className={locale === 'ta' ?  'tamil-class-wc frm_dvhome new-intelli': 'frm_dvhome new-intelli'}>
                <h5>{t("welcome_note")}</h5>
                <h1>{t("pathlogy_network")}</h1>
                <ul>
                  <li><Link href={ROUTE.HOMECOLLECTION} className="button--hexagon active"><span><img src="/assets/img/collection.png" className="search-scale" />
                  {t("home")} <i className="fa fa-long-arrow-right" aria-hidden="true"></i></span> </Link></li>
                  <li><Link href={{ pathname: ROUTE.BOOKATEST, query: { tabs: "tests", categoryId: "", subCategoryId: "" } }} className="button--hexagon"><span> <img src="../assets/img/test.png" className="search-scale" />
                  {t("find")}<i className="fa fa-long-arrow-right" aria-hidden="true"></i></span></Link></li>
                  <li><a href="https://itd.oncquest.net/Oncquest/Design/onlinelab/" target="_blank" rel="noopener noreferrer" className="button--hexagon"><span>  <img src="../assets/img/report.png" className="search-scale" />
                  {t("download")}<i className="fa fa-long-arrow-right" aria-hidden="true"></i></span></a></li>
                  <li><Link href={ROUTE.CENTER} className="button--hexagon" onMouseEnter={(e: any) => setHvr(true)} onMouseLeave={(e: any) => setHvr(false)}><span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="21.909" height="23.305" viewBox="0 0 19.909 25.305">
                      <path id="Path_4510" data-name="Path 4510" d="M9.077,0a9.077,9.077,0,0,1,9.077,9.077c0,5.013-6.149,14.672-8.6,14.672S0,14.09,0,9.077A9.077,9.077,0,0,1,9.077,0Z" transform="translate(0.789 0.837)" fill="#cccece" />
                      <g id="Group_828" data-name="Group 828">
                        <ellipse id="Ellipse_1534" data-name="Ellipse 1534" cx="3.946" cy="3.552" rx="3.946" ry="3.552" transform="translate(5.983 6.362)" fill="#24a0b8" />
                        <g id="Group_827" data-name="Group 827">
                          <g id="Group_750" data-name="Group 750" transform="translate(4.99 4.99)">
                            <path id="Path_4466" data-name="Path 4466" d="M1974.855,1449.019a4.965,4.965,0,1,1,4.965-4.964A4.97,4.97,0,0,1,1974.855,1449.019Zm0-8.4a3.436,3.436,0,1,0,3.436,3.436A3.44,3.44,0,0,0,1974.855,1440.619Z" transform="translate(-1969.89 -1439.09)" fill="#575757" />
                          </g>
                          <path id="Path_4511" data-name="Path 4511" d="M1923.914,1408.469a3.012,3.012,0,0,1-2.5-1.321l-5.966-8.784a.624.624,0,0,1-.04-.065,9.955,9.955,0,1,1,17,0,.683.683,0,0,1-.04.067l-5.966,8.784A3.012,3.012,0,0,1,1923.914,1408.469Zm-7.174-10.93,5.943,8.75a1.488,1.488,0,0,0,2.461,0l5.941-8.748.005-.008a8.426,8.426,0,1,0-14.354,0Z" transform="translate(-1913.959 -1383.163)" fill="#575757" />
                        </g>
                      </g>
                    </svg>
                    {t("find_center")}<i className="fa fa-long-arrow-right" aria-hidden="true"></i></span> </Link></li>
                </ul>
                <div className="clearfix"></div>
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="headslider mob-view" data-aos="fade-right" data-aos-duration="1100" style={{ position: "relative", zIndex: 13 }}>
      




        <div className="search-slider">
          <div className="container img-responsive leftmargin aos-init aos-animate" data-aos="flip-up" data-aos-duration="1500" >
            <div className="prnt_dvhome intelliSearch">
              <div className={locale === 'ta' ?  'tamil-class-wc frm_dvhome new-intelli': 'frm_dvhome new-intelli'}>
                <h5>{t("welcome_note")}</h5>
                <h1>{t("pathlogy_network")}</h1>
                <ul>
                  <li><Link href={ROUTE.HOMECOLLECTION} className="button--hexagon active"><span><img src="assets/img/collection.png" className="search-scale" />
                  {t("home")} <i className="fa fa-long-arrow-right" aria-hidden="true"></i></span> </Link></li>
                  <li><Link href={{ pathname: ROUTE.BOOKATEST, query: { tabs: "tests", categoryId: "", subCategoryId: "" } }} className="button--hexagon"><span> <img src="../assets/img/test.png" className="search-scale" />
                  {t("find")}<i className="fa fa-long-arrow-right" aria-hidden="true"></i></span></Link></li>
                  <li><a href="https://itd.oncquest.net/Oncquest/Design/onlinelab/" target="_blank" rel="noopener noreferrer" className="button--hexagon"><span>  <img src="../assets/img/report.png" className="search-scale" />
                  {t("download")}<i className="fa fa-long-arrow-right" aria-hidden="true"></i></span></a></li>
                  <li><Link href={ROUTE.CENTER} className="button--hexagon" onMouseEnter={(e: any) => setHvr(true)} onMouseLeave={(e: any) => setHvr(false)}><span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="21.909" height="23.305" viewBox="0 0 19.909 25.305">
                      <path id="Path_4510" data-name="Path 4510" d="M9.077,0a9.077,9.077,0,0,1,9.077,9.077c0,5.013-6.149,14.672-8.6,14.672S0,14.09,0,9.077A9.077,9.077,0,0,1,9.077,0Z" transform="translate(0.789 0.837)" fill="#cccece" />
                      <g id="Group_828" data-name="Group 828">
                        <ellipse id="Ellipse_1534" data-name="Ellipse 1534" cx="3.946" cy="3.552" rx="3.946" ry="3.552" transform="translate(5.983 6.362)" fill="#24a0b8" />
                        <g id="Group_827" data-name="Group 827">
                          <g id="Group_750" data-name="Group 750" transform="translate(4.99 4.99)">
                            <path id="Path_4466" data-name="Path 4466" d="M1974.855,1449.019a4.965,4.965,0,1,1,4.965-4.964A4.97,4.97,0,0,1,1974.855,1449.019Zm0-8.4a3.436,3.436,0,1,0,3.436,3.436A3.44,3.44,0,0,0,1974.855,1440.619Z" transform="translate(-1969.89 -1439.09)" fill="#575757" />
                          </g>
                          <path id="Path_4511" data-name="Path 4511" d="M1923.914,1408.469a3.012,3.012,0,0,1-2.5-1.321l-5.966-8.784a.624.624,0,0,1-.04-.065,9.955,9.955,0,1,1,17,0,.683.683,0,0,1-.04.067l-5.966,8.784A3.012,3.012,0,0,1,1923.914,1408.469Zm-7.174-10.93,5.943,8.75a1.488,1.488,0,0,0,2.461,0l5.941-8.748.005-.008a8.426,8.426,0,1,0-14.354,0Z" transform="translate(-1913.959 -1383.163)" fill="#575757" />
                        </g>
                      </g>
                    </svg>
                    {t("find_center")}<i className="fa fa-long-arrow-right" aria-hidden="true"></i></span> </Link></li>
                </ul>
                <div className="clearfix"></div>
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
        </div>
        <div className="sliderbox">
          {/* <div className="slidercont111 owl-carousel">
          <div>
            <img className="scale"src="assets/img/banner1.jpg" alt="" />
          </div>
                  <div>
            <img className="scale"src="assets/img/banner1.jpg" alt=""/>
          </div>
                  <div>
            <img className="scale"src="assets/img/banner1.jpg" alt=""/>slider_m1
          </div>
                  <div>
            <img className="scale"src="assets/img/banner1.jpg" alt=""/>
          </div>
        </div> */}



          <div className="slidercont111 owl-carousel ">
            <Slider {...settings}>
              <div>
                <Link href={ROUTE.CENTER}><img className="scale" src={t("images.home.slider_m1")} alt="" /></Link>
              </div>
              <div>
                <Link href={ROUTE.BOOKATEST}><img className="scale" src={t("images.home.slider_m2")} alt="" /></Link>
              </div>
              {/* <div>
                <Link href={ROUTE.PREVENTIVEHEALTHPKJ}><img className="scale" src={t("images.home.slider_m3")} alt="" /></Link>
              </div> */}
              <div>
                <Link href={ROUTE.PREVENTIVEHEALTHPKJ}><img className="scale" src={t("images.home.slider_m8")} alt="" /></Link>
              </div>
              <div>
                <Link href={ROUTE.PREVENTIVEHEALTHPKJ}><img className="scale" src={t("images.home.slider_m9")} alt="" /></Link>
              </div>
              <div>
                <Link href={ROUTE.PREVENTIVEHEALTHPKJ}><img className="scale" src={t("images.home.slider_m10")} alt="" /></Link>
              </div>
              <div>
                <Link href={ROUTE.PREVENTIVEHEALTHPKJ}><img className="scale" src={t("images.home.slider_m11")} alt="" /></Link>
              </div>
              <div>
                <Link href={ROUTE.PREVENTIVEHEALTHPKJ}><img className="scale" src={t("images.home.slider_m12")} alt="" /></Link>
              </div>
              <div>
                <Link href={ROUTE.NEUROLOGY}><img className="scale" src={t("images.home.slider_m4")} alt="" /></Link>
              </div>
              <div>
              <Link href={ROUTE.BOOKATEST}><img className="scale" src={t("images.home.slider_m5")} alt="" /></Link>
              </div>
              
              <div>
                <Link href={ROUTE.PRIVILEGEMEMBERSHIP}><img className="scale" src={t("images.home.slider_m6")} alt="" /></Link>
              </div>
              {/* <div>
                <Link href={ROUTE.PRIVILEGEMEMBERSHIPDOCTOR}><img className="scale" src={t("images.home.slider_m7")} alt="" /></Link>
              </div> */}
            </Slider>
          </div>
        </div>
      </section>
      <InnerFitness packages={dashboard?.Packages} baseUri={dashboard?.PackageBaseUrl} />
      <BookTest category={dashboard?.Categories} />
      <Wellness />
      <OncquestOffer Offers={dashboard?.Offers} />
      <Testimonial testimonial={dashboard?.Testimonials} loadingData={dashboard}/>
     </React.Fragment>
  );
}
export const getStaticProps = async ({ locale }:{locale: string}) => {
  let Slug = ROUTE.HOME?.replace("/", "");
  const data: any = await Api.post(Url.seoDetail, { Slug: Slug});
  return {
    props: {
      seoData: data?.Result?.Details || {},
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
export default Home;

