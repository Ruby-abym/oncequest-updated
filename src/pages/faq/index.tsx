import { url } from 'inspector'
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dashboardAction } from '../../redux/action';
import { ROUTE } from '@/Const/Route';
import BreadCrumb from '@/Component/Common/BreadCrumb';
import { GetStaticPropsContext } from 'next';
import FAccords from '@/Component/Feature/Faq/FAccords';
import SectionLoader from '@/Component/Common/Loader/SectionLoader';
import { useTranslation } from 'next-i18next';
import {NextPage } from 'next';
import Api from '@/redux/common/api';
import { SITE_URL, Url } from '@/redux/common/url';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
interface MyPageProps {
    seoData:any;
  }
const Faq: NextPage<MyPageProps> = ({ seoData }) =>  {
    const  {t}  = useTranslation();
    const dispatch = useDispatch();
    const router = useRouter();
    const [filter, setFilter] = useState("");
    const [faq, setFaq] = useState<any[]>([]);
    const [isActive, setIsActive2] = useState(false);
    const faqData: any[] = useSelector((state: any) => state.dashboard.faq);

    useEffect(() => {
        window?.scrollTo(0, 0);
        dispatch(dashboardAction.getFaqAction({}));
        return () => { };
    }, []);

    useEffect(() => {
        if (faqData && Array.isArray(faqData) && faqData?.length > 0) {
            setFilter(faqData[0]?.CategoryId);
            setIsActive2(false);
        }
        return () => { };
    }, [faqData]);

    useEffect(() => {
        if (filter && faqData && Array.isArray(faqData) && faqData?.length > 0) {
            let arr = faqData?.filter((ele: any) => {
                return ele.CategoryId === filter;
            })
            setFaq(arr[0]?.Faqs);
            setIsActive2(false)
        }
        return () => { };
    }, [filter]);

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
            <BreadCrumb page={t("bread_frequently_asked_question")} data={{ slug: "", path: "" }} />
            <section className="faq_section section_bg_img faq_bg_image" style={{ 'backgroundImage': `url("../assets/img/prescription.png")` }}>
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-sm-12 col-md-6 col-lg-5">
                            <div className="faq_box">
                                <h2 className="mb-2">{t("faq")}</h2>
                                <p>{t("faq_desc")}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row faq_wrap">
                        <div className="col-md-3 left mb-4 mb-md-0">
                            <ul>
                                {faqData && Object.keys(faqData)?.length > 0 ?
                                    <>
                                        {faqData && faqData?.length > 0 && faqData?.map((item: any, i: any) => (
                                            <li className={filter === item?.CategoryId ? "active" : ""} key={i}>
                                                <a href="#" onClick={(e: any) => { e.preventDefault(); setFilter(item?.CategoryId) }}>{item?.Category}</a>
                                            </li>
                                        ))}
                                    </>
                                    :
                                    <SectionLoader />
                                }
                            </ul>
                        </div>
                        <div className="col-md-9 right">
                            <ul>
                                {faqData && Object.keys(faqData)?.length > 0 ?
                                    <>
                                        {faq.length > 0 ? faq?.map((item2: any, i: any) => (
                                            <li>
                                                <div className="question" onClick={(e) => { (isActive == false || isActive != item2?.faq_category_id + i) ? setIsActive2(item2?.faq_category_id + i) : setIsActive2(false) }}>{item2?.title}<i className={isActive == item2?.faq_category_id + i ? "fa fa-angle-up" : "fa fa-angle-down"}></i></div>

                                                {isActive && <div className={isActive == item2?.faq_category_id + i ? 'answer active' : 'answer'} dangerouslySetInnerHTML={{ __html: item2?.description ? item2?.description : "" }}></div>}
                                            </li>
                                        )) : (
                                            <div className="text-center text-dark p-3 bg-white">{t("no_faq_desc")}</div>
                                        )}
                                    </>
                                    :
                                    <SectionLoader />
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
export const getServerSideProps = async ({ locale }:{locale: string}) => {
    let Slug = ROUTE.FAQ?.replace("/", "");
    const data: any = await Api.post(Url.seoDetail, { Slug: Slug});
    return {
      props: {
        seoData: data?.Result?.Details || {},
        ...(await serverSideTranslations(locale, ["common"])),
      },
    };
  };
export default Faq