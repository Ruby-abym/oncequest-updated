import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { FacebookShareButton } from 'react-share';
import { ROUTE } from '../../../Const/Route';
import { useTranslation } from 'next-i18next';
import SectionLoader from '@/Component/Common/Loader/SectionLoader';

const NearByCenter = (props: any) => {
    const  {t}  = useTranslation();
    const { heading, nearCenterData } = props;
    const nearByCenter = useSelector((state: any) => state.center.nearByCenter ? state.center.nearByCenter : {});
    return (
        <div className="overview-wrap bg_lab mb-4 p-4">
            <div className="headingmains text-left">
                <h6 className="right">{t(heading)}</h6>
            </div>
            {nearByCenter && Object.keys(nearByCenter)?.length > 0 ?
                <>
                    {nearCenterData && nearCenterData?.length > 0 ? nearCenterData?.map((item: any, index: any) => (
                        <div className="h-services" key={index}>
                            <div className="infobox_wrapper lab_wrapper near_by">
                                <div className="lab_flex_pad">
                                    <div><img src="../assets/img/test.png" className="scale_booknow" />{item?.DisplayCentreName}</div>
                                    <div className="lab_flex_center">
                                        <FacebookShareButton url={`${window.location.host}${ROUTE.CENTERDETAILS}/${item?.Slug}`}><div className="mr-3"><img src="/assets/img/share.png" className="scale_booknow" />{t("share")}</div></FacebookShareButton>
                                        <a href={`https://www.google.com/maps/search/?api=1&query=${item?.CentreLat},${item?.CentreLng}`} target="_blank"><img src="/assets/img/direction.png" className="scale_booknow" />{t("get_direction")}</a>
                                    </div>
                                </div>
                                <div className="address">
                                    {item?.AddressLine1 ? item?.AddressLine1 + ", " : ""}
                                    {item?.AddressLine2 ? item?.AddressLine2 + ", " : ""}
                                    {item?.Landmark ? item?.Landmark + ", " : ""}
                                    {item?.Locality ? item?.Locality + ", " : ""}
                                    {item?.CityName ? item?.CityName + ", " : ""}
                                    {item?.Pincode ? item?.Pincode + "- " : ""}
                                    {item?.StateName ? item?.StateName : ""}
                                </div>
                                <div className="d-flex flex-row justify-content-between align-items-baseline">
                                    <div className="lab_flex_start d-flex align-items-baseline">
                                        {item?.Phone &&
                                            <div className="lab_flex_center">
                                                <span><img src="/assets/img/call.png" className="scale_booknow" /></span>
                                                <span>
                                                    <div><a href={`tel: ${item?.Phone}`} target="_blank">{`(+91) ${item?.Phone}`}</a></div>
                                                </span>
                                            </div>
                                        }
                                        {item?.Email &&
                                            <div className="lab_flex_center">
                                                <span><img src="/assets/img/email.png" className="scale_booknow" /></span>
                                                <span>
                                                    <a className="text" href={`mailto: ${item?.Email}`}>{item?.Email}</a>
                                                </span>
                                            </div>
                                        }
                                    </div>
                                    <Link className="button-read-more pt-2 pb-2 text-dark f-15 know_more" href={`${ROUTE.CENTERDETAILS}/${item?.Slug}`}>{t("know_more")}<img src="/../assets/img/arrow-read-dark.svg" className="scale_booknow ml-3" /></Link>
                                </div>
                            </div>
                        </div>
                    )) :
                        (<div className="fs-18">{t("no_nearby_centres")}</div>)
                    }
                </>
                :
                <SectionLoader />
            }
        </div>
    )
}

export default NearByCenter