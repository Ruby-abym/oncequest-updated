import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import Api from "@/redux/common/api";
import { SITE_URL, Url } from "@/redux/common/url";
import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import ImgPlaceHolder from "@/Utils/imgPlaceholder";
import { doctorAction } from "../../redux/action";
import { ROUTE } from "@/Const/Route";
import BreadCrumb from "@/Component/Common/BreadCrumb";
import WaitScreen from "@/Component/Common/LodingScreen/WaitScreen";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

interface MyPageProps {
    seoData: any;
  }
const Team: NextPage<MyPageProps> = ({seoData})=>  {
  const  {t}  = useTranslation();
  const router = useRouter();
  const dispatch = useDispatch();
  const dData:any = useSelector((state:any) => state.doctor.list ? state.doctor.list : {});
  const doctorList:any = useSelector((state:any) => state.doctor.list?.Doctors ? state.doctor.list?.Doctors : {});

  useEffect(() => {
   
    dispatch(doctorAction.listDoctorAction({DepartmentId:""}));
    return () => {}
  }, []);

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
    {dData && Object.keys(dData).length <1 && <WaitScreen/>}
    <BreadCrumb page={"Meat our team"} data={{slug: "", path: "#"}}/>
    <section className="team-section">
      <div className="container">
        <div className="text-center"><img className="scale" src={t("images.team_banner")} alt="" /></div>
        <div className="tab-content">
          <div className="mt-25 text-center">
            <h2>Meet our Experts</h2>
            <div className="mt-25">
              <p className="text-center dull_heading pb-3">
                Oncquest Laboratories Ltd has a two-decade legacy of trust, and
                accuracy in pathology testing.
              </p>
            </div>
          </div>
          {doctorList && 
          <div className="equal_clm h-services">
            {doctorList && doctorList?.length >0 && doctorList?.map((item:any, i:any)=> (
              <div className="doc_infobox_wrapper doc_span" key={i}>
              <div className="pointer mt-25">
                <div className="">
                  <div className="doc_infobox_icon_container text-center">
                    <img src={item?.ProfileImage ? item?.ProfileImage : "/assets/img/doctor1.png"} onError={(e:any)=> ImgPlaceHolder(e, "/assets/img/doctor1.png")} className="doc_scale" />
                  </div>
                  <h6 className="text-center">{item?.Name}</h6>
                  <p className="text-center mt-10 gray">
                   {item?.Designation} {item?.Designation && item?.DepartmentName && " - "} {item?.DepartmentName}
                  </p>
                </div>
                <div className="doc_contact">
                  <h6 className="text-center white">
                  {item?.Name}
                  </h6>
                  <p className="text-center mt-10 white">
                  {item?.Designation} {item?.Designation && item?.DepartmentName && " - "} {item?.DepartmentName}
                  </p>
                  <p className="text-center">
                      <Link href={`${ROUTE.DOCTORDETAILS}/${item?.DoctorCode}`} className="mt-2 team normal button--hexagon">
                        <span>{t("know_more")}</span>
                      </Link>
                    </p>
                </div>
              </div>
            </div>
            ))}
          </div>}
        </div>
      </div>
    </section>
    </React.Fragment>
  );
}
export const getServerSideProps= async ({locale}:{locale:string}) => {
    let Slug = ROUTE.TEAM?.replace("/", "");
    const data: any = await Api.post(Url.seoDetail, { Slug: Slug });
    return {
      props: {
        seoData: data?.Result?.Details || {},
      ...(await serverSideTranslations(locale, ["common"])),
      },
    };
  };
export default Team;
