import React, {useEffect} from 'react'
import { ROUTE } from '@/Const/Route';
import { useRouter } from 'next/router';
import BreadCrumb from '@/Component/Common/BreadCrumb';
import { useTranslation } from 'next-i18next';
import Api from "@/redux/common/api";
import { SITE_URL, Url } from "@/redux/common/url";
import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

interface MyPageProps {
    seoData: any;
  }
const ClinicalTrial: NextPage<MyPageProps> = ({seoData})=>  {
    const  {t}  = useTranslation();
   const router = useRouter()
    useEffect(() => {
        window?.scrollTo(0, 0);
        return () => { }
    }, [])

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
            <BreadCrumb page={t("clinical_trial_bread")} data={{ slug: "", path: "" }} />
            <section className="clinical-trial-section padtp-20">
                <div className="container" id="section2">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="overview-wrap text-center">
                                <img src="../assets/img/clinical-pathology.jpg" className="scale round_img" alt="" />
                                <div className="headingmains text-center pb-3">
                                    <h1 className="right aos-init mt-3 mt-lg-5">{t("clinical_trial")}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="news_section pb-4">
                <div className="container">
                    <div className="row pt-lg-3">
                        <div className="col-md-12">
                            <div className='clinical-content part-headfont w-100'>
                                <h5>Clinical Trial (CT) & Patient Support Programme (PSP) with leading Pharma and Healthcare Organisations</h5>                              
                                    <p>We are committed to supporting our Clients and Sponsors as per ICH-GCP Guidelines, providing comprehensive solutions under one roof. Our extensive network provides pan-India coverage related to patient recruitment, site training, and logistics support as per agreed protocols. We have dedicated teams focused on building relationships with CROs/Program Sponsors/ Pharma companies and assisting them with program design and execution.</p>
                                    <p>Our Centralised Laboratory services bring uniformity in result data and enable better statistical analysis & control in multiple cities’ programs.</p>                                
                                <h5>Dedicated Project Manager for all-round assistance</h5>                              
                                    <p>Our dedicated Project Manager will lead the project as per Standard Operating Procedure (SOP), supported by Project Associates on new test validation, visit specific sampling kits, visit specific panels, data management, protocol specific lab manual, temperature controlled time bound logistic service along with validated packaging materials, centralized portal for report access, sample storage at frozen temperature for a longer duration, and any other technical assistance that may be required anytime apart from weekly & daily updates.</p>
                                    <p>Our expert team will customize the study and set up the project management and seamless execution precisely as per the study protocols & sponsorship requirements while maintaining strict confidentiality. We also support pre-clinical trials with our partner organizations.</p>                               
                                <h5>Key projects</h5>                               
                                    <p>Clinical Trial Studies on Typhoid Vaccine, Hepatitis B Vaccine, Pentavalent Vaccine, MMR Vaccine, Pneumococcal Vaccine, Diabetes, Hypertension, NAFLD, Obesity, Endocrine Cancer, Thyroid Cancer, Osteoporosis, BA/BE Studies, PK/PD Studies.</p>
                                    <p>Patient Support Programs on Oncology Projects covering PAN India with Indication, Breast Cancer, Lung cancer etc.</p>
                                    <p><strong>Contact us for more details:</strong></p> 
                                    <p><a className="text-link" href="mailto: clinicaltrial.operations@oncquest.net">clinicaltrial.operations@oncquest.net</a>, <a className="text-link" href="mailto: gopal.nandan@oncquest.net">gopal.nandan@oncquest.net</a></p> 
                                    <p>M: <a className="text" target="_blank" href="tel: 8860078718">8860078718</a>, <a className="text" target="_blank" href="tel: 9818910958">9818910958</a></p>                       
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
export const getStaticProps = async ({ locale }:{locale: string}) => {
    let Slug = ROUTE.CLINICALTRIAL?.replace("/", "");
    const data: any = await Api.post(Url.seoDetail, { Slug: Slug });
    return {
      props: {
        seoData: data?.Result?.Details || {},
      ...(await serverSideTranslations(locale, ["common"])),
      },
    };
  };
export default ClinicalTrial