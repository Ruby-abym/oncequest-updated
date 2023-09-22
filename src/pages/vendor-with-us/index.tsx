import { Formik } from 'formik';

import React, { useEffect, useState } from 'react'
import { useTranslation } from 'next-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import { onlyNumber } from '@/Utils/index';
import { validatePartner } from '@/Utils/Validation';
import Api from "@/redux/common/api";
import { SITE_URL, Url } from "@/redux/common/url";
import {  NextPage } from "next";
import { NextSeo } from "next-seo";
import { ROUTE } from '@/Const/Route';

import BreadCrumb from '@/Component/Common/BreadCrumb';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
interface MyPageProps {
    seoData: any;
  }
const initialValue={FirstName: "",LastName: "", Mobile: "", EmailId: "", CityId: "", Address: ""};
const BecomeVendor : NextPage<MyPageProps> = ({seoData})=>{
    const  {t}= useTranslation();
    const router = useRouter()
    const dispatch = useDispatch();
    const [values, setValues] = useState<any>({...initialValue});
    const cityData = useSelector((state:any) => state.dashboard.city);
    const [initialRenderComplete, setInitialRenderComplete] = useState<boolean>(false);
    useEffect(() => {
      setInitialRenderComplete(true);
    }, []);
    useEffect(() => {
        window?.scrollTo(0, 0);
        return () => {};
    }, []);
   
    const handleSubmit = (value:any) => {
        let data:any=value; 
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
        <BreadCrumb page={"Vendor"} data={{slug: "", path: ""}}/> 
        <section className="about-section">
              <div className="container" id="section2">
                <div className="row">
                    <div className="col-md-12">
                        <div className="overview-wrap text-center">
                            <img src={t("images.partner.banner")} className="scale round_img" alt="" />
                            <div className="headingmains text-center pb-3">
                                <h1 className="right aos-init mt-sm-4 mt-lg-5">Become A Vendor</h1>
                            </div>
                        </div>
                    </div>
                </div>          
            </div>
        </section>
        <section className="news_section pb-4">
            <div className="container">
                <div className="row pt-3">
                    <div className="col-md-7">
                        <div className='partnerDetais w-100'>
                            <h5>Highlights</h5>
                            <ul>
                                <li>Be a part of India’s Leading Super Specialized Laboratory Network.</li>
                                <li>Minimum investment around &#x20B9;2- 3 Lakh.</li>
                                <li>Good return on investment.</li>
                                <li>Exclusive Oncquest collection center.</li>
                            </ul>
                            <h5>Eligibility</h5>
                            <ul>
                                <li>Approx. 150-250 sq. ft. area at ground floor with toilet facility.</li>
                                <li>Preferred from medical experienced background.</li>
                                <li>Good return on investment.</li>
                                <li>A self-motivated entrepreneur.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className='w-100'>
                        <div className="h-services">
                                    <div className="infobox_wrapper">
                                    <Formik
                                    initialValues={values}
                                    enableReinitialize={true}
                                    validationSchema={validatePartner}
                                    onSubmit={(val:any) => {
                                            handleSubmit(val);
                                    }}
                                    render={({ values, handleChange, errors, touched, handleBlur, handleSubmit,dirty, isValid}) =>(
                                    <form onSubmit={handleSubmit}>
                                        {/* <h4 className="mr-10">Become A Vendor</h4> */}
                                        <h6 className="ln-1 mr-10">INTERESTED? LET'S CONNECT!
                                        </h6>
                                        <div className="form-group">
                                            <input type="text" name="FirstName" className="form-control" placeholder="First Name" onChange={handleChange} onBlur={handleBlur} value={values?.FirstName}/>
                                            {touched?.FirstName && errors?.FirstName &&<span className="error_message">{t(errors?.FirstName as any)}</span>}
                                        </div>
                                        <div className="form-group">
                                            <input type="text" name="LastName" className="form-control" placeholder="Last Name" onChange={handleChange} onBlur={handleBlur} value={values?.LastName}/>
                                            {touched?.LastName && errors?.LastName &&<span className="error_message">{t(errors?.LastName as any)}</span>}
                                        </div>
                                        <div className="form-group">
                                            <input type="text" name="Mobile" className="form-control" placeholder="Mobile Number" onKeyPress={onlyNumber} onChange={handleChange} onBlur={handleBlur} value={values?.Mobile}/>
                                            {touched?.Mobile && errors?.Mobile &&<span className="error_message">{t(errors?.Mobile as any)}</span>}
                                        </div>
                                        <div className="form-group">
                                            <input type="text" name="EmailId" className="form-control" placeholder="Email Id" onChange={handleChange} onBlur={handleBlur} value={values?.EmailId}/>
                                            {touched?.EmailId && errors?.EmailId &&<span className="error_message">{t(errors?.EmailId as any)}</span>}
                                        </div>
                                        <div className="form-group">
                                            <select className="form-control" name="CityId" id="CityId" onChange={handleChange} onBlur={handleBlur} value={values.CityId}>
                                                <option value="">City</option>
                                                {cityData && cityData.length > 0 && cityData?.map((item:any, i:any)=> (
                                                <option className="text-uppercase" value={item?.Id} key={i}>{item?.Name}</option>
                                                ))}
                                            </select>
                                            {touched?.CityId && errors?.CityId &&<span className="error_message">{t(errors?.CityId as any)}</span>}
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Address" name="Address" onChange={handleChange} onBlur={handleBlur} value={values?.Address}/>
                                            {/* {touched?.Address && errors?.Address &&<span className="error_message">{errors?.Address}</span>} */}
                                        </div>
                                        <button className="book--hexagon active" ><span>Submit<i className="fa fa-long-arrow-right ml-20" aria-hidden="true"></i></span></button> 
                                        <div className="f-10">By continuing, you agree to Oncquest Lab Terms of Use and Privacy Policy.</div> 
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
export const getStaticProps= async ({locale}:{locale:string}) => {
  
    return {
      props: {
      
      ...(await serverSideTranslations(locale, ["common"])),
      },
    };
  };
export default BecomeVendor