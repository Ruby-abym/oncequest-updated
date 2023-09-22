import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'next/navigation'
import { centerAction } from '../../../redux/action';
import { useTranslation } from "react-i18next";
import SectionLoader from '@/Component/Common/Loader/SectionLoader';

const Payment = () => {
    const { t } = useTranslation();
    // const { slug }: any = useParams();
    const dispatch = useDispatch();
// Payment
    useEffect(() => {
        dispatch(centerAction.getPgOptionAction({ DepartmentId: "" }));
        return () => { };
    }, []);
    const pgOptionLoading = useSelector((state: any) => state.center.pgOption ? state.center.pgOption : {});
    const pgOptionData = useSelector((state: any) => state.center.pgOption?.PgOptions ? state.center.pgOption?.PgOptions : []);
    return (
        <div className="overview-wrap bg_lab mb-4 p-4">
            <div className="headingmains text-left pb-3">
                <h6 className="right">{t("payment_mode")}</h6>
            </div>
            <div className="row pt-3 text-center align-items-baseline justify-content-start">
                {pgOptionLoading && Object.keys(pgOptionLoading)?.length > 0 ?
                    <>
                        {pgOptionData && pgOptionData.length > 0 && pgOptionData?.map((item: any, index: any) => (
                            <div className="col f-box" key={index}>
                                <div className="p-2"><img src={item?.Icon} className="scale" alt="" /></div>
                                <div className="p-2 text-center">{item?.OptionName}</div>
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

export default Payment