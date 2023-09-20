import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { dashboardAction } from '../../redux/action';
import { useRouter } from 'next/router';
import BreadCrumb from '@/Component/Common/BreadCrumb';
import Api from "@/redux/common/api";
import { SITE_URL, Url } from "@/redux/common/url";
import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import {ROUTE} from '@/Const/Route'
import SubmitForm from '@/Component/Common/SubmitForm/SubmitForm';
import { useTranslation } from 'next-i18next';
import { validateGeneralEnquiry } from '@/Utils/Validation';
import SectionLoader from '@/Component/Common/Loader/SectionLoader';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
interface MyPageProps {
    seoData: any;
  }
const CorporateOffice: NextPage<MyPageProps> = ({seoData})=>  {
    const [initialRenderComplete, setInitialRenderComplete] = useState<boolean>(false);
  useEffect(() => {
    setInitialRenderComplete(true);
  }, []);
    const  {t}  = useTranslation();
    const dispatch = useDispatch();
    const router = useRouter();
    const details: any = useSelector((state: any) => state.dashboard.generalDetails);

    useEffect(() => {
        window?.scrollTo(0, 0);
        dispatch(dashboardAction.generalDetailAction({}));
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
            <BreadCrumb page={t("office")} data={{ slug: "", path: "#" }} />
            <div style={{ position: "relative" }}>
                <div className="mapdiv"></div>
                <div className="colordiv"></div>
                <div className="zInd">
                    <section className="corporate">
                        <div className="container">
                            <div className="row wd-corporate">
                                <div className="col-12">
                                    <div className="headingmains text-center pt-2">
                                        {details && Object.keys(details)?.length > 0 ?
                                            <>
                                                <h3 className="right aos-init pb-2">{t("reg_office")}</h3>
                                                <p className="text-center py-2 text_light">
                                                    {t("company_name")}
                                                </p>
                                                <div className="text-center py-1">
                                                    {t(details?.RegisteredOfficeAddress)}
                                                </div>
                                                <h3 className="right aos-init pb-2 mt-3">
                                                    {t("laboratory_reference")}
                                                </h3>
                                                <p className="text-center py-2 text_light">
                                                    {t("company_name")}
                                                </p>
                                                <div className="text-center py-1">
                                                    {t(details?.OfficeAddress)}
                                                </div>
                                                <ul className="corporate_box">
                                                    {details?.PhoneNumber &&
                                                        <li>
                                                            <div><a className="text" target="_blank" href={`tel: ${details?.PhoneNumber}`}><img src="/assets/img/call.png" className="co_icon" /></a></div>
                                                            <div>{t("phone_number")}</div>
                                                            <div><a className="text" target="_blank" href={`tel: ${details?.PhoneNumber}`}>{details?.PhoneNumber}</a></div>
                                                        </li>}
                                                    {details?.EmailId &&
                                                        <li>
                                                            <div><a className="text" href={`mailto: ${details?.EmailId}`}><img src="/assets/img/email.png" className="co_icon" /></a></div>
                                                            <div>{t("email")}</div>
                                                            <div><a className="text" href={`mailto: ${details?.EmailId}`}>{details?.EmailId}</a></div>
                                                        </li>}
                                                    {details?.WhatsApp &&
                                                        <li>
                                                            <div><a href={`https://wa.me/${details?.WhatsApp}`} target="_blank"><img src="/assets/img/whatsapp.png" className="co_icon" /> </a></div>
                                                            <div>{t("whatsApp")}</div>
                                                            <div><a href={`https://wa.me/${details?.WhatsApp}`} target="_blank">{details?.WhatsApp} </a></div>
                                                        </li>}
                                                </ul>
                                                <div className="text-center mt-3"><span className="customer_care">{t("customer_care")} <a target="_blank" href={`tel: ${details?.CustomerCare}`}>{details?.CustomerCare}</a></span></div>
                                            </>
                                            :
                                            <SectionLoader />
                                        }
                                    </div>
                                    <SubmitForm heading={t("enquiry")} des={t("neurology_form_note")} PageSrc={"Corporate Office"} validationSchema={validateGeneralEnquiry} />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </React.Fragment>
    )
}
export const getStaticProps = async ({ locale }:{locale: string}) => {
    let Slug = ROUTE.CORPORATEOFFICE?.replace("/", "");
    const data: any = await Api.post(Url.seoDetail, { Slug: Slug });
    return {
      props: {
        seoData: data?.Result?.Details || {},
      ...(await serverSideTranslations(locale, ["common"])),
      },
    };
  };
export default CorporateOffice

