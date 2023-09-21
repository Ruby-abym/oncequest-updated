import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";


import { ROUTE } from "@/Const/Route";
import BreadCrumb from "@/Component/Common/BreadCrumb";


import { pkjInfo } from "./array";

import { useTranslation } from "next-i18next";
function PreventiveHealthPackageDetails() {
  const  {t}  = useTranslation();
  const dispatch = useDispatch();
  const router = useRouter();
  const {slug}:any= useParams();
  const [deatils, setDetails]=useState<any>({});
  useEffect(() => {
    if(pkjInfo){
    window?.scrollTo(0, 0);
    let dt:any =pkjInfo?.find((ele:any)=>ele?.slug === slug);
    setDetails(dt);
    }
    return () => {}
  }, [slug]);

  return (
    <>
  
    <BreadCrumb page={"Preventive Health Packages"} data={{slug: slug, path: ROUTE.PREVENTIVEHEALTHPKJ}}/>
    <section className="team-section phppkj">
      <div className="container">
        <div className="text-center">{/* <img className="scale" src="/assets/img/php_banner.jpg" alt="" /> */}</div>
        <div className="tab-content">
          <div className="mt-25 text-center">
            <h2>{deatils.heading}</h2>
            <div className="mt-25">
              {/* <p className="text-center dull_heading pb-3">
              When the age of a person exceeds 50 years, it becomes very important to take care of one’s health as she enters the senior citizen age. With age, the metabolism and functioning of the body become slow.
              </p> */}
            </div>
          </div>
          <div className="row">
            {deatils?.description && deatils?.description?.length > 0 && deatils?.description.map((item:any,i:any)=>(
              <div className="col-12 phpkj_des" key={i}>
                <h4 className="pkj_hed">{item?.head}</h4>
                <div className="pkj_des" dangerouslySetInnerHTML={{__html: item?.des}}></div>
              </div>
            ))}
          </div>
          <div className="row">
          <div className="col-12 phpkj_des">
            <h4 className="pkj_hed">{t("declaimer")}:</h4>
            <div className="pkj_des">{deatils?.disclaimer}</div>
          </div>
          <div className="col-12">
          <a href={"#"} onClick={(e:any) => {e.preventDefault(); router.push(ROUTE.BOOKATEST,
          {
            query:{
              tabs:"packages",categoryId: ""}})}} className="button--hexagon normal active">
              <span>{t("book_now")}<i className="fa fa-long-arrow-right ml-20" aria-hidden="true"></i></span>
            </a>
          </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default PreventiveHealthPackageDetails;
