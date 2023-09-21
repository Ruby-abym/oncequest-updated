
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import ImgPlaceHolder from '@/Utils/imgPlaceholder';
import { doctorAction } from '@/redux/action';
import { ROUTE } from '@/Const/Route';
import { useTranslation } from 'next-i18next';
import SectionLoader from '@/Component/Common/Loader/SectionLoader';

const DoctorTeams = () => {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const doctorData = useSelector((state: any) => state.doctor.list?.Doctors);
  const doctor = useSelector((state: any) => state.doctor.list);
  useEffect(() => {
    dispatch(doctorAction.listDoctorAction({}));
    return () => { };
  }, []);

  return (
    <section className="bg-white">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="headingmains text-center pb-3 mt-4 mt-lg-5">
              <h3 className="right aos-init pb-2 text-capitalize ">{t("doctor_team")}</h3>
            </div>
          </div>
        </div>
        {doctor && Object.keys(doctor).length > 0 ?
            <>
        <div className="equal_clm h-services Department">
              {doctorData && doctorData?.map((item: any, index: any) => index < 7 && (
                <div className="infobox_wrapper doctor_card" key={index}>
                  <div>
                    <div>
                      <div className="doc_infobox_icon_container text-center">
                        <img src={item?.ProfileImage ? item?.ProfileImage : "/assets/img/doctor1.png"} onError={(e: any) => ImgPlaceHolder(e, "/assets/img/doctor1.png")} className="doc_scale" alt="" />
                      </div>
                      <h3 className="infobox_title">{item?.Name}</h3>
                      <div className="infobox_title mb-4">{item?.Designation}</div>
                      <div className="infobox_title">{item?.DepartmentName}</div>
                      <Link className="infobox_button button-read-more" href={`${ROUTE.DOCTORDETAILS}/${item?.DoctorCode}`}><img src="/assets/img/arrow-read.svg" className="scale" /></Link>
                    </div>
                  </div>
                </div>
              ))}
              <div className="">
                <div className="h-servicesbtn ser-test-rpad">
                  <Link href={ROUTE.TEAM} className="btn explorebtn">
                    <span>{t("explore_all")}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="41.403"
                      height="26.331"
                      viewBox="0 0 41.403 26.331"
                    >
                      <path
                        id="Icon_material-arrow-forward"
                        data-name="Icon material-arrow-forward"
                        d="M16.768,6l-2.32,2.32,9.183,9.2h-35.1v3.291h35.1l-9.183,9.2,2.32,2.32L29.933,19.166Z"
                        transform="translate(11.47 -6)"
                        fill="#424242"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
        </div>
        </>
            :
            <SectionLoader />
          }
      </div>
    </section>
  )
}

export default DoctorTeams