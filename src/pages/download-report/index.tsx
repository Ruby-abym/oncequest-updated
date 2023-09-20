import React from 'react' 

import BreadCrumb from '@/Component/Common/BreadCrumb'
import Api from "@/redux/common/api";
import { ROUTE } from '@/Const/Route';
import { useRouter } from 'next/router';
import { SITE_URL, Url } from "@/redux/common/url";
import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
interface MyPageProps {
    seoData: any;
  }
const DownloadReport: NextPage<MyPageProps> = ({seoData})=>{
    const router = useRouter()
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
        <BreadCrumb page={"Download Report"} data={{slug: "", path: ""}}/>
        <section className="thank-section">
            <img className="scale" src="/assets/img/prescription.png" alt="" />
            <div className="container">
                <div className="tab-content">
                    <div id="organs" className="tab-pane fade in active show">
                        <div className="row prescription-card">
                            <div className="col-sm-12 col-md-6 col-lg-4">
                                <div className="h-services">
                                    <div className="infobox_wrapper">
                                        <div><img src="/assets/img/download_logo.png" className="mb-3" width="60" height="60" alt=""/></div>
                                        <h3 className="mr-10">Download Report</h3>
                                        <div className="ln-1 mr-10">Enter the details mentioned on your Recipt</div>
                                        <div className="form-group">
                                            <input type="text" className="form-control form-control-sm" placeholder="User Id" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control form-control-sm" placeholder="Password" />
                                        </div>
                                        <button className="book--hexagon active"><span>Download Report<i className="fa fa-long-arrow-right ml-20" aria-hidden="true"></i></span></button> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> 
        </React.Fragment>
      )
  }
  export const getServerSideProps = async ({ locale }:{locale: string}) => {
    let Slug = ROUTE.DOWNLOADREPORT?.replace("/", "");
    const data: any = await Api.post(Url.seoDetail, { Slug: Slug });
    return {
      props: {
        seoData: data?.Result?.Details || {},
      ...(await serverSideTranslations(locale, ["common"])),
      },
    };
  };
  export default DownloadReport