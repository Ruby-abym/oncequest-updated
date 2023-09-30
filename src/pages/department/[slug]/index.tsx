import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';
import ImgPlaceHolder from '@/Utils/imgPlaceholder';
import { DoctorEnquiryform } from '@/Utils/Validation';
import { dashboardAction, departmentAction } from '@/redux/action';
import { ROUTE } from '@/Const/Route';
import BreadCrumb from '@/Component/Common/BreadCrumb';
import SectionLoader from '@/Component/Common/Loader/SectionLoader';
import SubmitForm from '@/Component/Common/SubmitForm/SubmitForm';
import AvailabelTest from '@/Component/Feature/Department/AvailabelTest';
import DoctorTeam from '@/Component/Feature/Department/DoctorTeam';
import Instrument from '@/Component/Feature/Department/Instrument';
import {NextPage } from 'next';
import Api from '@/redux/common/api';
import { SITE_URL, Url } from '@/redux/common/url';
import { NextSeo } from 'next-seo';
import { useTranslation } from "react-i18next";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
interface MyPageProps {
    seoData:any;
  }
const DepartmentDetails: NextPage<MyPageProps> = ({ seoData }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const {slug}:any = router.query;
  const dispatch = useDispatch();
  const departmentDt = useSelector((state: any) => state.department.selected ? state.department.selected : {});
  const departmentData = useSelector((state: any) => state.department.selected?.DepartmentDetails ? state.department.selected?.DepartmentDetails : {});
  const baseUrl = useSelector((state: any) => state.department.selected?.InstrumentsBaseUrl);
  const [initialRenderComplete, setInitialRenderComplete] = useState<boolean>(false);
    useEffect(() => {
      setInitialRenderComplete(true);
    }, []);
  useEffect(() => {
    window?.scrollTo(0, 0);
    if(slug){
      dispatch(departmentAction.getDepartmentBySlugAction(slug));
    }
    return () => { };
  }, [slug]);

  useEffect(() => {
    dispatch(dashboardAction.getCityAction({ id: "" }));
    return () => { }
  }, [])
  if(!initialRenderComplete) return<></>
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
      <BreadCrumb page={"Department"} data={{ slug: slug, path: ROUTE.DEPARTMENT }} />
      <>
        <section className="bg-white section overview-top pt-3 paddingBtmZero">
          <div className="container" id="section2">
            <div className="row">
              <div className="col-md-12">
                <div className="overview-wrap text-center">
                  {departmentDt && Object.keys(departmentDt)?.length > 0 ?
                    <img src={departmentData?.MainBanner ? departmentData?.MainBanner : "/assets/img/department_detail.png"} onError={(e: any) => ImgPlaceHolder(e, "/assets/img/department_detail.png")} className="scale" alt="" />
                    :
                    <SectionLoader />
                  }
                  <div className="headingmains text-center pb-lg-3">
                    <h1 className="right aos-init pb-2 mt-3 mt-lg-5">{t(departmentData?.DepartmentName)}</h1>
                  </div>
                  <p dangerouslySetInnerHTML={{ __html: departmentData?.Description }}></p>
              </div>
            </div>
          </div>
          </div>
        </section>
        <Instrument instruments={departmentData?.Instruments} BaseUrl={baseUrl} />
        <DoctorTeam departmentId={departmentData?.Id} />
        {/* <Staff Structure={departmentData?.Structure} TeamImage={departmentData?.TeamImage}/>	 */}
        <AvailabelTest departmentId={departmentData?.Id} DepartmentName={departmentData?.DepartmentName}></AvailabelTest>
        <SubmitForm heading={"Reach Out to Us"} des={departmentData?.DepartmentName} PageSrc={"DepartmentDetail"} validationSchema={DoctorEnquiryform} />
      </>
    </React.Fragment>
  )
}
export const getServerSideProps = async ({ locale,params }:{locale: string,params:any}) => {
    let Slug = `${ROUTE.DEPARTMENTDETAILS}/${params.slug}`?.replace("/", "");
   
    const data: any = await Api.post(Url.seoDetail, { Slug: Slug});
   
    return {
      props: {
        seoData: data?.Result?.Details || {},
        ...(await serverSideTranslations(locale, ["common"])),
      },
    };
  };
export default DepartmentDetails
