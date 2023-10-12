import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { useLocation, useParams } from 'next-r'
import { useRouter } from 'next/router';
import { useParams } from 'next/navigation';
import { centerAction } from '../../../redux/action';
import { ROUTE } from "@/Const/Route";
import { useTranslation } from "react-i18next";
import SectionLoader from '@/Component/Common/Loader/SectionLoader';

const Facility = (props: any) => {
    let fArr: any[] = props?.facilityArray || [];
    const { t } = useTranslation();
    
   
    const router = useRouter()
   
    const dispatch = useDispatch();
   
    useEffect(() => {
        dispatch(centerAction.getFacilityAction({ DepartmentId: "" }));
        return () => { };
    }, []);
    let facilityLoading = useSelector((state: any) => state.center.facility ? state.center.facility : null);
    let facilityData = useSelector((state: any) => state.center.facility?.Facilities ? state.center.facility?.Facilities : []);
    const facitlity = [ROUTE.BENGALURULAB, ROUTE.GURUGRAMLAB, ROUTE.KOLKATALAB, ROUTE.LUDHIANALAB]?.includes(router?.pathname) ? facilityData : facilityData.filter((ele: any) => fArr?.length > 0 && fArr?.includes(ele?.Id?.toString()));
    return (
        <div className="overview-wrap bg_lab mb-4 p-4">
            <div className="headingmains text-left pb-3">
                <h6 className="right">{t("facility")}</h6>
            </div>
            <div className="row pt-3 text-center align-items-baseline justify-content-start">
                {facilityLoading && Object.keys(facilityLoading)?.length > 0 ?
                    <>
                        {facitlity && facitlity.length > 0 && facitlity?.map((item: any, index: any) => (
                            <div className="col f-box" key={index}>
                                <div className="p-2"><img src={item?.Icon} className="scale" alt="" /></div>
                                <div className="p-2 text-center">{item?.FacilityName}</div>
                            </div>
                        ))}
                    </>
                    :
                    <SectionLoader />
                }
            </div>
        </div>
    )
}

export default Facility