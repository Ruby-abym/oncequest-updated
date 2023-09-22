import moment from 'moment';
import React, { useState } from 'react'
import { Timeconvert } from '@/Utils';
import { useTranslation } from "react-i18next";

const CenterTiming = (props:any) => {
    const { t } = useTranslation();
    const {timing}=props;
    const [day, setDay] = useState(moment(new Date()).format("dddd"));
    function SelectedDayTiming(val: any): any {
        let timing = val?.find((el: any) => {
            return el?.day === day;
        })
        return timing?.timings;
    }
    return (
        <span>
        <div>
            <span>{t("timing")}</span>
            <span className="ml-2 centre_timing">
                <select onChange={(e: any) => setDay(e.target.value)} value={day} className={day !== "" ? "color" : ""}>
                    <option value={""} className="t_highlight">{t("select")}</option>
                    {timing && timing?.length>0 && timing?.map((data: any, index: any) => (
                        <option value={data?.day} className={day !== data?.day ? "t_highlight" : ""} key={index}>{t(data?.day)}</option>
                    ))}
                </select>
            </span>
        </div>
        <div className="text">{timing && timing?.length>0 && day && SelectedDayTiming(timing)?.map((time: any, index: any) => (<span key={index}>{time && time?.open && time?.close && time?.open !== null && time?.close !== null && `${Timeconvert(time?.open)} To ${Timeconvert(time?.close)}`}</span>))}</div>
        </span>
    )
}

export default React.memo(CenterTiming)
