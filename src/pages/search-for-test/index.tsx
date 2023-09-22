import React, { useEffect, useState } from 'react'
import { ROUTE } from '@/Const/Route'
import Api from "@/redux/common/api";
import { SITE_URL, Url } from "@/redux/common/url";
import { NextPage } from "next";
import { NextSeo } from "next-seo";

import BreadCrumb from '@/Component/Common/BreadCrumb'
import { useRouter } from 'next/router';
import SubmitForm from '@/Component/Common/SubmitForm/SubmitForm';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
interface MyPageProps {
    seoData: any;
  }
const SearchForTest : NextPage<MyPageProps> = ({seoData})=> {
    const  {t} = useTranslation();
    const router = useRouter();
    const [tab, setTab] = useState<string>("condition");
    const [filter, setFilter] = useState<string>("");
    const [initialRenderComplete, setInitialRenderComplete] = useState<boolean>(false);
  useEffect(() => {
    setInitialRenderComplete(true);
  }, []);
    useEffect(() => {
        window?.scrollTo(0, 0);
        return () => {}
    }, [])
    const handleTab = (e: any, value: string) => {
        e.preventDefault();
        setTab(value);
    };
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
            <BreadCrumb page={"Contact Us"} data={{ slug: "Search For Tests by Speciality", path: "#" }} />
            <section className="section bg-color">
                <div className="container" id="section2">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="text-center">
                                <img src={t("images.specility_banner")} className="scale" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section bg-color'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-md-10'>
                            <div className='tab'>
                                <h6 className={tab === "condition" ? 'tab_item active' : 'tab_item'} onClick={(e:any) => handleTab(e, "condition")}>TEST BY CONDITION</h6>
                                <h6 className={tab === "specility" ? 'tab_item active' : 'tab_item'} onClick={(e:any) => handleTab(e, "specility")}>TEST BY SPECIALITY</h6>
                                <h6 className={tab === "code" ? 'tab_item active' : 'tab_item'} onClick={(e:any) => handleTab(e, "code")}>TEST BY CODE</h6>
                            </div>
                            <div className="tab-content">
                                <div className={tab === "condition" ? "tab_body row col-md-12 m-0 tab-pane fade in active show": "tab_body row col-md-12 m-0 tab-pane fade in"}>
                                    <h6 className='mb-3'>Test by {tab}</h6>
                                    <div className='item_wrap'>
                                        <div className={filter === "Abortions" ? 'test_item active': 'test_item'} onClick={()=>setFilter("Abortions")}>Abortions</div>
                                        <div className='test_item'>Acid Base Imbalance</div>
                                        <div className='test_item active'>Abortions</div>
                                        <div className='test_item'>Acid Base Imbalance</div>
                                        <div className='test_item'>Abortions</div>
                                        <div className='test_item'>Acid Base Imbalance</div>
                                        <div className='test_item'>Abortions</div>
                                        <div className='test_item'>Acid Base Imbalance</div>
                                        <div className='test_item'>Abortions</div>
                                        <div className='test_item'>Acid Base Imbalance</div>
                                        <div className='test_item'>Abortions</div>
                                        <div className='test_item'>Acid Base Imbalance</div>
                                        <div className='test_item'>Abortions</div>
                                        <div className='test_item'>Acid Base Imbalance</div>
                                        <div className='test_item'>Abortions</div>
                                        <div className='test_item'>Acid Base Imbalance</div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-content">
                                <div className={tab === "specility" ? "tab_body row col-md-12 m-0 tab-pane fade in active show": "tab_body row col-md-12 m-0 tab-pane fade in"}>
                                    <h6 className='mb-3'>Test by {tab}</h6>
                                    <div className='item_wrap'>
                                        <div className='test_item'>Abortions</div>
                                        <div className='test_item'>Acid Base Imbalance</div>
                                        <div className='test_item active'>Abortions</div>
                                        <div className='test_item'>Acid Base Imbalance</div>
                                        <div className='test_item'>Abortions</div>
                                        <div className='test_item'>Acid Base Imbalance</div>
                                        <div className='test_item'>Abortions</div>
                                        <div className='test_item'>Acid Base Imbalance</div>
                                        <div className='test_item'>Abortions</div>
                                        <div className='test_item'>Acid Base Imbalance</div>
                                        <div className='test_item'>Abortions</div>
                                        <div className='test_item'>Acid Base Imbalance</div>
                                        <div className='test_item'>Abortions</div>
                                        <div className='test_item'>Acid Base Imbalance</div>
                                        <div className='test_item'>Abortions</div>
                                        <div className='test_item'>Acid Base Imbalance</div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-content">
                                <div className={tab === "code" ? "tab_body row col-md-12 m-0 tab-pane fade in active show": "tab_body row col-md-12 m-0 tab-pane fade in"}>
                                    <h6 className='mb-3'>Test by {tab}</h6>
                                    <div className='item_wrap'>
                                        <div className='test_item'>Abortions</div>
                                        <div className='test_item'>Acid Base Imbalance</div>
                                        <div className='test_item active'>Abortions</div>
                                        <div className='test_item'>Acid Base Imbalance</div>
                                        <div className='test_item'>Abortions</div>
                                        <div className='test_item'>Acid Base Imbalance</div>
                                        <div className='test_item'>Abortions</div>
                                        <div className='test_item'>Acid Base Imbalance</div>
                                        <div className='test_item'>Abortions</div>
                                        <div className='test_item'>Acid Base Imbalance</div>
                                        <div className='test_item'>Abortions</div>
                                        <div className='test_item'>Acid Base Imbalance</div>
                                        <div className='test_item'>Abortions</div>
                                        <div className='test_item'>Acid Base Imbalance</div>
                                        <div className='test_item'>Abortions</div>
                                        <div className='test_item'>Acid Base Imbalance</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='sub-section bg-color'>
                <div className='container'>
                    <div className="headingmains text-center pb-3">
                        <h1 className="right aos-init pb-2">Quality</h1>
                    </div>
                    <div className='row justify-content-center'>
                        <div className='col-md-4'>
                            <div className='box_quality'>
                                <h3 className='mb-2'>Timely, Accurate & Cost Effective</h3>
                                <p className='mb-2'>We endeavor to provide our patients timely, accurate, cost effective and error free results from the widest test menu. We strive to meet our patient's requirements and provide services with a high ethical conduct.</p>
                                <div className="text-center"><button type="button" className="book--hexagon m-0 transparent" ><span>{t("know_more")}<i className="fa fa-long-arrow-right ml-20" aria-hidden="true"></i></span></button></div>
                            </div>
                        </div>
                        <div className='col-md-4 my-3 my-md-0'>
                            <div className='box_quality'>
                                <h3 className='mb-2'>Timely, Accurate & Cost Effective</h3>
                                <p className='mb-2'>We endeavor to provide our patients timely, accurate, cost effective and error free results from the widest test menu. We strive to meet our patient's requirements and provide services with a high ethical conduct.</p>
                                <div className="text-center"><button type="button" className="book--hexagon m-0 transparent" ><span>{t("know_more")}<i className="fa fa-long-arrow-right ml-20" aria-hidden="true"></i></span></button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section className="section bg-color">
            <div className="zForm">
                <div className="form_roatate bg-white"> */}
                <SubmitForm heading={"General Enquiry"} des={"Please fill in your details below and we will get back to you. Thanks"} PageSrc={"SearchForTestBySpecility"}/>
                {/* </div>
            </div>
            </section> */}
        </React.Fragment>
    )
}
export const getStaticProps = async ({locale}:{locale:string}) => {
    // let Slug = ROUTE.SERACHFORTEST?.replace("/", "");
    // const data: any = await Api.post(Url.seoDetail, { Slug: Slug });
    // console.log(data)
    return {
      props: {
        // seoData: data?.Result?.Details || {},
      ...(await serverSideTranslations(locale, ["common"])),
      },
    };
  };
export default SearchForTest

