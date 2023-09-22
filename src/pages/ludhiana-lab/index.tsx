import React, { useEffect, useState } from 'react'
import { useTranslation } from 'next-i18next';
import WhyOncqSection from '@/Component/Common/Lab/WhyOncqSection';
import { ROUTE } from '@/Const/Route';
import { useRouter } from 'next/router';
import BreadCrumb from '@/Component/Common/BreadCrumb';
import DepartmentCard from '@/Component/Feature/Department/DepartmentCard';
import Facility from '@/Component/Feature/Centres/Facility';
import Payment from '@/Component/Feature/Centres/Payment';
import DoctorTeams from '@/Component/Feature/Overview/doctorTeam';
import Api from "@/redux/common/api";
import { SITE_URL, Url } from "@/redux/common/url";
import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import GurugramForm from '@/Component/Common/Lab/gurugramForm';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
interface MyPageProps {
    seoData: any;
  }
const LudhianaLab : NextPage<MyPageProps> = ({seoData})=> {
    const  {t} = useTranslation();
  const router = useRouter();
  const [initialRenderComplete, setInitialRenderComplete] = useState<boolean>(false);
  useEffect(() => {
    setInitialRenderComplete(true);
  }, []);
    useEffect(() => {
        window?.scrollTo(0, 0);
        return () => { };
    }, []);
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
            <BreadCrumb page={t("ludhiana_lab")} data={{ slug: "", path: "" }} />
            <section className="bg-white section pt-3">
                <div className="container" id="section2">
                    <div className="row">
                        <div className="col-12">
                            <div className="text-center"><img src={t("images.ludhiana_lab.ludhiana_banner")} className="scale" alt="" /></div>
                            <div className="headingmains text-center py-3">
                                <h1 className="right aos-init pb-3 mt-sm-3 mt-lg-4">{t("about_ludhiana_lab")}</h1>
                                <div className='row'>
                                    <div className="col-12 col-md-7">
                                        <p className="text-center py-2">{t("about_ludhiana_lab1")}</p>
                                        <p className="text-center py-2">{t("about_ludhiana_lab2")}</p>
                                        <p className="text-center py-2">{t("about_ludhiana_lab3")}</p>
                                    </div>
                                    <div className="col-12 col-md-5 d-flex align-items-center justify-content-end">
                                        <div className='w-100'>
                                            <GurugramForm pageSource="Gurugram Lab" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='bg-white'>
                <div className="container">
                    <div className='btm_overview' /* className='bottom_pdng' style={{display: "flex", justifyContent: "center"}} */>
                        <WhyOncqSection />
                    </div>
                    <DepartmentCard />
                    <div className='pb-4'>
                        <DoctorTeams />
                    </div>
                    <div className='pb-4 text-center headingmains'>
                        <div className="text-center py-3">
                            <h3 className="right aos-init pb-3 mt-sm-3 mt-lg-4">{t("home_sample_collection")}</h3>
                        </div>
                        <div className='pb-3'>
                            <div className='calldt_lab'>
                                <a className="text" target="_blank" href="tel: 0124 6650000"><img src="/assets/img/call.png" width="20px" height="20px" /><span style={{ marginLeft: "10px" }}>0124 6650000, </span></a>
                                <a href={`https://wa.me/07065350350`} target="_blank" style={{ marginLeft: "10px" }}><img src="/assets/img/whatsapp.png" width="20px" height="20px" /><span style={{ marginLeft: "10px" }}>07065350350</span></a>
                            </div>
                            {/* <h3 className="right aos-init py-2 mt-3">
                                {t("laboratory_reference")}
                            </h3> */}
                            <p className="text-center py-2 text_light">
                                {t("company_name")}
                            </p>
                            <div className="text-center py-2">
                            GT Road, bypass, near sherpur, Ludhiana, Punjab 141010
                            </div>
                            <div className='py-2'>
                                <a
                                    href="https://www.google.com/maps/place/Oncquest+Laboratories%2FMohandai+Oswal+Hospital%2FLudhiana/@30.8907651,75.8829237,17z/data=!4m5!3m4!1s0x391a837abec50d63:0x6181a07935a96129!8m2!3d30.8908688!4d75.885339"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="viewMapLink"
                                >
                                    <span>{t("view_map")}</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <section className="row">
                        <div className='col-md-7 col-12'><Facility /></div>
                        <div className='col-md-5 col-12'><Payment /></div>
                    </section>
                </div>
            </section>
        </React.Fragment>
    )
}
export const getStaticProps= async ({locale}:{locale:string}) => {
    // let Slug = ROUTE.LUDHIANALAB?.replace("/", "");
    // const data: any = await Api.post(Url.seoDetail, { Slug: Slug });
    return {
      props: {
        // seoData: data?.Result?.Details || {},
      ...(await serverSideTranslations(locale, ["common"])),
      },
    };
  };
export default LudhianaLab