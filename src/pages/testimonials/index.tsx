import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import ImgPlaceHolder from "@/Utils/imgPlaceholder";
import { dashboardAction } from "../../redux/action";
import { ROUTE } from "@/Const/Route";
import BreadCrumb from "@/Component/Common/BreadCrumb";

import {NextPage } from 'next';
import Api from '@/redux/common/api';
import { SITE_URL, Url } from '@/redux/common/url';
import { NextSeo } from 'next-seo';

import ReactPlayer from "react-player";
import SectionLoader from "@/Component/Common/Loader/SectionLoader";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
interface MyPageProps {
  seoData:any;
}
const Testimonials: NextPage<MyPageProps> = ({ seoData }) =>  {
  const  {t} = useTranslation();
  const dispatch = useDispatch();
  
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const testimonialData: any = useSelector((state: any) => state.dashboard.testimonial ? state.dashboard.testimonial : {});
  
const router = useRouter();
  
  useEffect(() => {
    window?.scrollTo(0, 0);
    dispatch(dashboardAction.getTestimonialAction( {segment:router?.query?.type ? router?.query?.type : ""}));
    return () => { }
  }, []);

  useEffect(() => {
    if (testimonialData && Array.isArray(testimonialData) && testimonialData?.length > 0) {
      window?.scrollTo(0, 0);
      if (router?.query?.type) {
        let tData: any[] = testimonialData.filter((ele: any) => ele.Segment === router?.query?.type);
       
        setTestimonials(tData);
      } else {
        setTestimonials(testimonialData);
      }
    }
    return () => { }
  }, [router?.query?.type, testimonialData]);
  console.log(testimonials)
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
      <BreadCrumb page={t("testimonials")} data={{ slug: "", path: "#" }} />
      <section className="team-section">
        <div className="container">
          <div className="text-center"><img className="scale" src={t("images.testimonial_banner")} alt="" /></div>
          <div className="tab-content">
            <div className="mt-25 text-center">
              <h2>{t("testimonials")}</h2>
              <div className="mt-25">
                <p className="text-center dull_heading pb-3">
                  {t("testimonial_content")}
                </p>
              </div>
            </div>
            {testimonialData && Object.keys(testimonialData).length > 0 ?
              <>
                {testimonials &&
                  <div className="equal_clm h-services testimonial_list">
                    {testimonials && testimonials?.length > 0 ? testimonials?.map((item: any, i: any) => (
                      <div className="infobox_wrapper doctor_card h421" key={i}>
                        <div >
                          <div >
                            <div className="team_member">
                              <figure className="effect-julia">
                                <img src={item?.ProfileImage ? item?.ProfileImage : item?.Gender && item?.Gender?.toLowerCase() == "female" ? "/assets/img/testi_female.png" : "/assets/img/testi_male.png"} onError={(e: any) => ImgPlaceHolder(e, item?.Gender && item?.Gender?.toLowerCase() == "female" ? "/assets/img/testi_female.png" : "/assets/img/testi_male.png")} alt="" />
                              </figure>
                              <div className="member_name">
                                {item?.VideoUrl && item?.VideoUrl != '' ?
                                  <div>
                                    <ReactPlayer className="testimonialVdo" controls url={item?.VideoUrl} />
                                  </div> : <div dangerouslySetInnerHTML={{ __html: item?.Content && item?.Content }}></div>
                                }
                                <h5><span></span>{item?.Name}</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )) :
                      (<div className="singl_clm testimonial_list">
                        <div className="infobox_wrapper doctor_card text-center f-16">
                          {t("no_data_available")}
                        </div>
                      </div>)
                    }
                  </div>}
              </>
              :
              <SectionLoader />
            }
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
export const getServerSideProps = async ({ locale }:{locale: string}) => {
  let Slug = ROUTE.TESTIMONIAL?.replace("/", "");
  const data: any = await Api.post(Url.seoDetail, { Slug: Slug});

  return {
    props: {
      seoData: data?.Result?.Details || {},
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
export default Testimonials;
