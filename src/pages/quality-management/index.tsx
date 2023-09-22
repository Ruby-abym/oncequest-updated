import React, {useEffect,useState} from 'react'
import { ROUTE } from '@/Const/Route'
import BreadCrumb from '@/Component/Common/BreadCrumb';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import Api from "@/redux/common/api";
import { SITE_URL, Url } from "@/redux/common/url";
import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo"
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
interface MyPageProps {
    seoData: any;
  }
const QualityManagement: NextPage<MyPageProps> = ({seoData})=> {
    const  {t}  = useTranslation();
    const router = useRouter();
    useEffect(() => {
        window?.scrollTo(0, 0);
        return () => {}
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
            <BreadCrumb page={t("about_us")} data={{slug: "Quality Management", path: "#"}}/> 
            <section className="categories about-section pt-3">
				<div className="container" id="section2">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="overview-wrap">
                                <div className='text-center'><img src={t("images.quality_banner")} className="scale" alt=""/></div>
                                <div className="headingmains text-center pb-3">
                                    <h1 className="right aos-init pb-2 mt-sm-4 mt-lg-5">Quality Management</h1>
                                </div>
                                <p className="text-center dull_heading pb-3">Oncquest Laboratories Ltd has a two-decade legacy of trust, and accuracy in pathology testing.</p>
                                <p className="text-center">The design of Quality Management System is based on norms laid down by Oncquest, which are in conformity with the ISO: 15189: 2007 standards of Medical Laboratory Management Systems, College of American Pathologists (CAP) and NABL requirements. The system reflects the organization’s desire to be ‘Best-in-Class’ and incorporates the twin objectives of ‘customer satisfaction’ and ‘continual improvement’ into the organization’s operations.</p>
                                <p className="text-center text_dark py-3"><strong>Important elements of Quality Management System include:</strong></p>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="overview-wrap">
                                <div className="headingmains text-center pb-3">
                                    <h2 className="right aos-init pb-2 mt-sm-4 mt-lg-5">Quality Assurance</h2>
                                </div>
                                <p className='text-center my-3'><strong className="text_dark">Documentation: </strong>At Oncquest we ensure that the Quality Management System laid down and structure of documentation is as per the requirement of International guidelines of ISO 15189 and CAP. We ensure that day to day records are being documented and stored for easy retrieval and future reference.</p>
                                <p className='text-center my-3'><strong className="text_dark">Standard Operating Procedures (SOP’s): </strong>The SOPs that form a part of Documentation are laid down and implemented to cover all the requirements of ISO 15189 and CAP.</p>
                                <p className='text-center my-3'><strong className="text_dark">Quality Control samples:</strong> At Oncquest we ensure that calibrations are performed and quality control samples are analyzed and studied for performance of the method and instrument before we analyze any patient sample so as to meet the twin principle of Quality Assurance – ‘Fit for purpose” and “Right first time”.</p>
                                <p className='text-center my-3'><strong className="text_dark">Maintenance and Calibration: </strong>At Oncquest care is taken to choose the instruments and equipments based on specific requirement of the scope. All the instruments are regularly maintained and calibrated to ensure the reliability of the analysis / results.</p>
                                <p className='text-center my-3'><strong className="text_dark">External Quality Assessment Scheme: </strong>Oncquest participates in various National and International Proficiency Testing programs which includes but are not limited to CAP, AIIMS, Bio-Rad etc</p>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="overview-wrap">
                                <div className="headingmains text-center pb-3">
                                    <h2 className="right aos-init pb-2 mt-sm-4 mt-lg-5">Quality Control</h2>
                                </div>
                                <p className="text_dark text-center mb-3"><strong>Quality Control procedures are used in each assay to assure that the test run is valid and results are reliable; which includes:</strong></p>
                                <div className="qaulity_box text-center mb-3">
                                    <div>KIT<br/>CONTROLS</div>
                                    <div>QUALITY<br/>CONTROL SAMPLES</div>
                                    <div>VALIDATION AND <br/>VERIFICATION STUDIES</div>
                                </div>
                                <p className="text-center my-3">The frequency of analyzing the quality control samples as per recommendation by the ISO 15189/ NABL 112/ GCLP and manufacturers recommendations.</p>
                                <p className="text-center my-3">Quality Control plans have been laid down and implemented to ensure the accuracy of the entire testing process from receipt of sample and testing of sample to reporting of results;</p>
                                <p className="text-center my-3">Quality Control Plan laid down for Sample Reception includes but is not limited to sample reception. Verification of requisition, sample conditions and availability of services and action plan in case of any discrepancy</p>
                                <p className="text-center my-3">Quality Control Plan for technical sections includes Reception, Analysis, Quality Control and Reporting of results at the respective sections of the laboratory and action plan in case of any discrepancy.</p>
                                <p className="text-center my-3">At Oncquest Validation and verification of method/ test /instrument is performed as per guidelines of CLSI/CAP/ various other international guidelines to ensure the accuracy and reproducibility of test method before it is implemented for Patient Testing.</p>
                            </div>
                        </div>                  
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="overview-wrap">
                                <div className="headingmains text-center pb-3">
                                    <h2 className="right aos-init pb-2 mt-sm-4 mt-lg-5">Quality Assessment & Quality Improvement</h2>
                                </div>
                                <p className="text_dark text-center mb-2"><strong>Quality Assessment:</strong></p>
                                <p className='text-center mb-3'>At Oncquest we ensure that the QMS laid down is assessed at fixed intervals to ensure that is meets the compliances and requirements through Internal Audits, External Audits and Accreditation Audits.</p>
                                <p className="text_dark text-center mb-2"><strong>Quality Improvement:</strong></p>
                                <p className='text-center mb-3'>At Oncquest continuous efforts are taken for improvising our services and reducing the complaints which includes but is not limited to Statistical Evaluation of the following:</p>
                                <div className="qaulity_box box2 font17 text-center mb-3">
                                    <div >PATIENT<br/> FEEDBACK </div>
                                    <div >CLINICIAN / HOSPITAL <br/> FEEDBACK</div>
                                    <div >COMPLAINT  <br/> ANALYSIS </div>
                                    <div >ANALYSIS OF TURN <br/>AROUND TIME</div>
                                    <div >PRE ANALYTICAL ERRORS <br/> IDENTIFIED DURING SAMPLE <br/> RECEPTION </div>
                                    <div >TEST ORDER ACCURACY/ PRE ANALYTICAL <br/> ERRORS IDENTIFIED DURING SAMPLE <br/> REGISTRATION/ ACCESSIONING</div>
                                    <div >NON- REPORTABLE <br/> CASES </div>
                                </div>
                                <p className="text_dark text-center mt-3"><strong>Based on the statistical evaluation of the above, improvements plans are drawn for the next term/ year and efforts are made to achieve the same.</strong></p>
                            </div>
                        </div>                  
                    </div>           
                    {/* <section className="sub-section overview_network bg-gray">
                        <div className="row">
                            <div className="col-md-12">
                                <h4 className="text-center pb-3">Quality Assurance</h4>
                                <p className="w-100 text-left">To <strong>discover</strong> at an early stage the condition which afflict the populations we serve, through community outreach and our relationships with practitioners.</p>
                                <p className="w-100 text-left">To <strong>diagnose</strong> with accuracy and reliability the condition which are presented to us, using the best-in-className of technology that is available; globally.</p>
                                <p className="w-100 text-left">To <strong>defend</strong>, effectively, the population from such diseases for the future, through education and knowledge sharing.</p>
                            </div>
                        </div>
                    </section> */}
                </div>
            </section>
        </React.Fragment>
    )
}
export const getStaticProps= async ({locale}:{locale:string}) => {
    // let Slug = ROUTE.QUALITYMANAGEMENT?.replace("/", "");
    // const data: any = await Api.post(Url.seoDetail, { Slug: Slug });
    return {
      props: {
        // seoData: data?.Result?.Details || {},
      ...(await serverSideTranslations(locale, ["common"])),
      },
    };
  };
export default QualityManagement
