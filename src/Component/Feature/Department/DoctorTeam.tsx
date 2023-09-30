import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useRouter } from 'next/router';
import ImgPlaceHolder from '@/Utils/imgPlaceholder';
import { doctorAction, departmentAction } from '../../../redux/action';
import { ROUTE } from '@/Const/Route';
import ReactPlayer from 'react-player';
import { useTranslation } from "react-i18next";
import SectionLoader from '@/Component/Common/Loader/SectionLoader';
import Link from 'next/link';
const DoctorTeam = (props: any) => {
    const { t } = useTranslation();
    const router = useRouter()
    const {slug}:any = router.query;
    const { departmentId } = props;
    const dispatch = useDispatch();
    const [initialRenderComplete, setInitialRenderComplete] = useState<boolean>(false);
    useEffect(() => {
      setInitialRenderComplete(true);
    }, []);
    const doctorDt: any = useSelector((state: any) => state.doctor.list);
    const doctorData = useSelector((state: any) => state.doctor.list?.Doctors);
    const departmentData = useSelector((state: any) => state.department.selected?.DepartmentDetails ? state.department.selected?.DepartmentDetails : {});
    useEffect(() => {
        if (departmentId) {
            dispatch(doctorAction.listDoctorAction({ DepartmentId: departmentId }));
        }
        return () => { };
    }, [departmentId]);
  if(!initialRenderComplete) return<></>
    return (
        <section className="sub-section bg-white mt-2">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="headingmains text-center">
                            <h3 className="right aos-init text-capitalize">{t("our_team")}</h3>
                        </div>
                    </div>
                </div>
                <div className="row organslider">
                    {doctorDt && Object.keys(doctorDt).length > 0 ?
                        <>
                            {doctorData && <>
                                {doctorData && doctorData?.length > 0 ? doctorData?.map((item: any, index: any) => (
                                    <React.Fragment key={index + "doc"}>
                                        <div className="col-sm-12 col-md-6 col-lg-12 text-center">
                                            <div className="row">
                                                <div className="col-lg-3"></div>
                                                <div className="col-lg-6">
                                                    <div className="h-services Department">
                                                        <div className="infobox_wrapper doctor_card">
                                                            <div className='row'>
                                                                <div className='col-lg-6 text-right'>
                                                                    <div className="doc_infobox_icon_container">
                                                                        <img src={item?.ProfileImage ? item?.ProfileImage : "/assets/img/doctor1.png"} onError={(e: any) => ImgPlaceHolder(e, "/assets/img/doctor1.png")} className="doc_scale" alt="" />
                                                                    </div>
                                                                </div>
                                                                <div className='col-lg-6'>
                                                                    <h3 className="infobox_title">{item?.Name}</h3>
                                                                    <div className="infobox_title mb-2">{item?.Designation}</div>
                                                                    <div className="infobox_title mb-4">{item?.DepartmentName}</div>
                                                                    {slug === "anatomic-pathology" && index === 0 &&
                                                                        <div className="infobox_title">
                                                                            <a className="p-1" href="/assets/pdf/IHCList.pdf" target="_blank" rel="noopener noreferrer">
                                                                                <span className='pdf_dwnlink'>IHC Antibody Test List <img src="/assets/img/arrow-read.svg" className="scale" /></span>
                                                                            </a>
                                                                        </div>}
                                                                </div>
                                                            </div>
                                                            <Link className="infobox_button button-read-more" href={`${ROUTE.DOCTORDETAILS}/${item?.DoctorCode}`}><img src="/assets/img/arrow-read.svg" className="scale" /></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {departmentData?.TeamImage &&
                                            <div className="col-sm-12 col-md-6 col-lg-7 d-flex align-items-center justify-content-center" key={index}>
                                                <div className="team_img Department">
                                                    <img src={departmentData?.TeamImage ? departmentData?.TeamImage : "/assets/img/test_main.png"} onError={(e: any) => ImgPlaceHolder(e, "/assets/img/test_main.png")} className="scale" alt="" />
                                                </div>
                                            </div>}
                                        {item?.MainVideoYoutubeLink &&
                                            <div className="col-sm-12 col-md-6 col-lg-5 d-flex align-items-center justify-content-center" key={index}>
                                                <div className="h-services Department">
                                                    <ReactPlayer className="doc_vdo_scale" style={{ border: "1px solid #707070" }} controls url={`${doctorDt?.DoctorVideosBaseUrl}${item?.MainVideoYoutubeLink}`} />
                                                </div>
                                            </div>}
                                    </React.Fragment>
                                )) :
                                    <div className="col-12 text-center f-16">{t("no_data_available")}</div>
                                }
                            </>}
                        </>
                        :
                        <SectionLoader />
                    }
                </div>
            </div>
        </section>
    )
}

export default React.memo(DoctorTeam)
