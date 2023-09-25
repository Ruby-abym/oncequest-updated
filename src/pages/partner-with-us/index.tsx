import { Formik } from 'formik';
import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { submitAction } from '../../redux/action';
import Api from "@/redux/common/api";
import { SITE_URL, Url } from "@/redux/common/url";
import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import ImgPlaceHolder from '@/Utils/imgPlaceholder';
import { onlyNumber } from '@/Utils/index';
import { validatePartner } from '@/Utils/Validation';

import { ROUTE } from '@/Const/Route';
import BreadCrumb from '@/Component/Common/BreadCrumb';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
interface MyPageProps {
    seoData: any;
  }
const initialValue = { FirstName: "", LastName: "", Mobile: "", EmailId: "", CityId: "", Address: "" };
const BecomePartner : NextPage<MyPageProps> = ({seoData})=>{
    const [initialRenderComplete, setInitialRenderComplete] = useState<boolean>(false);
  useEffect(() => {
    setInitialRenderComplete(true);
  }, []);
    const {t}  = useTranslation();
    const dispatch = useDispatch();
    const router = useRouter();
    const [values, setValues] = useState<any>({ ...initialValue });
    const cityData = useSelector((state: any) => state.dashboard.city);

    useEffect(() => {
        window?.scrollTo(0, 0);
        return () => { };
    }, []);

    const handleSubmit = (value: any) => {
        let data: any = {};
        let city = value.CityId.split(',')
        data.FirstName = value.FirstName;
        data.LastName = value.LastName;
        data.Mobile = value.Mobile;
        data.Email = value.EmailId;
        data.CityId = city[0];
        data.Address = value.Address;
        data.CityName = city[1];
        data.SourceUrl = window.location.href;
        dispatch(submitAction.submitPartnerAction(data, router));
    };
    if(!initialRenderComplete) return <></>
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
            <BreadCrumb page={t("bread_partner")} data={{ slug: "", path: "" }} />
            <section className="about-section padtp-20">
                <div className="container" id="section2">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="overview-wrap text-center">
                                <img src={t("images.partner.banner")} className="scale round_img" alt="" />
                                <div className="headingmains text-center pb-3">
                                    <h1 className="right aos-init mt-3 mt-lg-5">{t("partner_page")}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="news_section pb-4">
                <div className="container">
                    <div className="row pt-lg-3">
                        <div className="col-md-7">
                            <div className='partnerDetais part-headfont w-100'>
                                <h5>{t("partner_highlights")}</h5>
                                <ul>
                                    <li>{t("partner_part_of_india")}</li>
                                    <li>{t("partner_investment")}</li>
                                    <li>{t("partner_return_investment")}</li>
                                    <li>{t("partner_collection_center")}</li>
                                </ul>
                                <h5>{t("partner_eligibility")}</h5>
                                <ul>
                                    <li>{t("partner_office_space")}</li>
                                    <li>{t("partner_medical_experience")}</li>
                                    {/* <li>{t("partner_good_return_investment")}</li> */}
                                    <li>{t("partner_motivation")}</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className='w-100'>
                                <div className="h-services remmt-car-form">
                                    <div className="infobox_wrapper">
                                        <Formik
                                            initialValues={initialValue}
                                            enableReinitialize={true}
                                            validationSchema={validatePartner}
                                            onSubmit={(val: any) => {
                                                handleSubmit(val);
                                            }}
                                            render={({ values, handleChange, errors, touched, handleBlur, handleSubmit }) => (
                                                <form onSubmit={handleSubmit}>
                                                    {/* <h4 className="mr-10">Become A Vendor</h4> */}
                                                    <h6 className="ln-1 mr-10">{t("partner_interest")}
                                                    </h6>
                                                    <div className="form-group">
                                                        <input type="text" name="FirstName" className="form-control" placeholder={t("first_name")} onChange={handleChange} onBlur={handleBlur} value={values?.FirstName} />
                                                        {touched?.FirstName && errors?.FirstName && <span className="error_message">{t(errors?.FirstName as any)}</span>}
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="text" name="LastName" className="form-control" placeholder={t("last_name")} onChange={handleChange} onBlur={handleBlur} value={values?.LastName} />
                                                        {touched?.LastName && errors?.LastName && <span className="error_message">{t(errors?.LastName as any)}</span>}
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="text" name="Mobile" className="form-control" placeholder={t("mobile_number")} onKeyPress={onlyNumber} onChange={handleChange} onBlur={handleBlur} value={values?.Mobile} />
                                                        {touched?.Mobile && errors?.Mobile && <span className="error_message">{t(errors?.Mobile as any)}</span>}
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="text" name="EmailId" className="form-control" placeholder={t("email")} onChange={handleChange} onBlur={handleBlur} value={values?.EmailId} />
                                                        {touched?.EmailId && errors?.EmailId && <span className="error_message">{errors?.EmailId as any}</span>}
                                                    </div>
                                                    <div className="form-group">
                                                        <select className="form-control" name="CityId" id="CityId" onChange={handleChange} onBlur={handleBlur} value={values.CityId}>
                                                            <option value="">{t("city")}</option>
                                                            {cityData && cityData.length > 0 && cityData?.map((item: any, i: any) => (
                                                                <option className="text-uppercase" value={item?.Id + ',' + item?.Name} key={i}>{t(item?.Name)}</option>
                                                            ))}
                                                        </select>
                                                        {touched?.CityId && errors?.CityId && <span className="error_message">{t(errors?.CityId as any)}</span>}
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder={t("address")} name="Address" onChange={handleChange} onBlur={handleBlur} value={values?.Address} />
                                                        {/* {touched?.Address && errors?.Address &&<span className="error_message">{errors?.Address as any}</span>} */}
                                                    </div>
                                                    <button type="submit" className="book--hexagon active" ><span>{t("submit_btn")}<i className="fa fa-long-arrow-right ml-20" aria-hidden="true"></i></span></button>
                                                    <div className="f-10">{t("partner_terms_condition")}</div>
                                                </form>
                                            )}
                                        />
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
    let Slug = ROUTE.BECOMWEPARTNER?.replace("/", "");
    const data: any = await Api.post(Url.seoDetail, { Slug: Slug });
   
    return {
      props: {
        seoData: data?.Result?.Details || {},
      ...(await serverSideTranslations(locale, ["common"])),
      },
    };
  };
export default BecomePartner