import React, { useEffect, useState } from 'react'
import { ROUTE } from '@/Const/Route'
import { useRouter } from 'next/router';
import BreadCrumb from '@/Component/Common/BreadCrumb'
import Api from "@/redux/common/api";
import { SITE_URL, Url } from "@/redux/common/url";
import { NextPage } from "next";
import { NextSeo } from "next-seo";

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
interface MyPageProps {
    seoData: any;
  }
const Accreditations: NextPage<MyPageProps>= ({seoData})=>{
  const [initialRenderComplete, setInitialRenderComplete] = useState<boolean>(false);
  useEffect(() => {
    setInitialRenderComplete(true);
  }, []);
  const  {t}= useTranslation()
  const router = useRouter()
  useEffect(() => {
    window?.scrollTo(0, 0)
    return () => {}
  }, [])
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
      <BreadCrumb page={t('arrd')} data={{ slug: '', path: '#' }} />
      <section className="categories about-section pt-3">
        <div className="container" id="section2">
          <div className="row">
            <div className="col-md-12">
              <div className="overview-wrap text-center">
                <img src={t('images.accreditation.banner')} className="scale" alt="" />
                <div className="headingmains text-center pb-3">
                  <h1 className="right aos-init pb-2 mt-3 mt-lg-5">
                    {t('arrd')}
                  </h1>
                </div>
                <p className="text-center dull_heading pb-3">
                  {t('pillars_endeavour_text')}
                </p>
              </div>
            </div>
          </div>
          <section className="sub-section">
            <div className="row">
              <div className="col-md-4 justify-content-center text-center nbl-img-w">
                {/* <img
                  src={t('images.accreditation.nabl_logo')}
                  className="scale"
                  alt=""
                /> */}
              </div>
              <div className="col-md-8">
                <h4 className="text-left mb-0 py-3">{t('nabl')}</h4>
                <p
                  className="w-100 text-left py-3 f-16"
                  dangerouslySetInnerHTML={{
                    __html: t('accreditation_nabl_text'),
                  }}
                ></p>
              </div>
              <div className="container">
              <h4 className="text-center mb-0 py-3">Our Accreditations</h4>
                <div className="row">
                  <div className="col-sm-12 col-md-6 col-lg-4 my-4 pt-3 mpmobile">
                    <div className="h-well sbg1">
                      <div className="infobox_wrapper">
                        <div className="infobox_icon_container">
                          <img
                            src={t('images.quick_link.link4')}
                            className="scale"
                          />
                        </div>
                        <h4 className="infobox_title pl-4">{t('gurugram_lab')}</h4>
                        <div className="d-flex">
                        <a
                          href="https://admin.oncquestlabs.com/public/uploads/certificates/Certificate-MC-5076.pdf.pdf"
                          target="_blank"
                          className="mt-4 button--hexagon1 certi-icon"
                        >
                            <img src="./src/assets/img/certificate-icon.png" alt="" />
                          <span><img className="scale_download mr-2" src="/assets/img/certificate-icon.png" aria-hidden="true" />Certificate</span>
                        </a>
                        <a
                          href="https://admin.oncquestlabs.com/public/uploads/certificates/Scope-MC-5076.pdf"
                          target="_blank"
                          className="mt-4 button--hexagon1 certi-icon"
                        >
                             
                          <span><img className="scale_download mr-2" src="/assets/img/scope-icon.png" aria-hidden="true" />Scope</span>
                        </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </React.Fragment>
  )
}
export const getStaticProps = async ({ locale }:{locale: string}) => {
    let Slug = ROUTE.ACCREDATITION?.replace("/", "");
    const data: any = await Api.post(Url.seoDetail, { Slug: Slug });
    return {
      props: {
        seoData: data?.Result?.Details || {},
        ...(await serverSideTranslations(locale, ["common"])),      },
    };
  };
export default Accreditations
