import React from 'react'
import { useRouter } from 'next/router';
import { ROUTE } from '@/Const/Route';
import moment from 'moment';
import ImgPlaceHolder from '@/Utils/imgPlaceholder';
import Link from 'next/link';
import { useTranslation } from "react-i18next";
import { useSelector } from 'react-redux';
import SectionLoader from '@/Component/Common/Loader/SectionLoader';

function PressRealease(props: any) {
    const { t } = useTranslation();
    const { press, imgPUri, videoPUri } = props;
  
    const pressData: any = useSelector((state: any) => state.dashboard.pressRelease ? state.dashboard.pressRelease : {});
    return (
        <section className="sub-section h-wellness pressRealeaseIndex">
            <div className="container">
                <div className="row my-4">
                    <div className="col-12">
                        <div className="xs-feature-text-content text-left">
                            <div className="xs-heading">
                                <h2 className="xs-title">{t("press_release")}</h2>
                            </div>
                        </div>
                    </div>
                </div>

                {Object.keys(pressData).length > 0 && Object.keys(pressData).length > 0 ?
                    <div className="row mt-3">
                        {press && press.length > 0 ? press?.map((item: any, i: any) => (
                            <div className="col-sm-12 col-md-6 col-lg-4" key={i}>
                                <div className="h-well mt-well sbg1">
                                    <div className="infobox_wrapper">
                                        {/* <div className="infobox_icon_container"><img src={item?.Images  && imgPUri ?  `${imgPUri}${item?.Images[0].image}` : "../assets/img/b1.png"} onError={(e:any)=> ImgPlaceHolder(e, "../assets/img/b1.png")} className="scale round_img" alt="" /></div> */}
                                        <div className="infobox_icon_container"><img src={item?.Images && Array.isArray(item?.Images) && item?.Images?.length > 0 && imgPUri ? `${imgPUri}${item?.Images[0]?.image}` : ""} onError={(e: any) => ImgPlaceHolder(e, "")} className="scale round_img" alt="" /></div>
                                        <h4 className="infobox_title">
                                            {item?.EventTitle}
                                        </h4>
                                        <p className="time f-18">{item?.Date && moment(item?.Date).format("MMM DD, YYYY")}</p>
                                        <p className="f-14">{item?.ShortDetails && item?.ShortDetails?.slice(0, 500)}</p>
                                        <Link href={`${ROUTE.PRESSREALEASEDETAIL}/${item?.Slug}`} className="mt-5 button--hexagon1"><span>KNOW MORE</span></Link>
                                    </div>
                                </div>
                            </div>
                        )) :
                            <div className="col-12 text-left f-16">{t("no_data_available")}</div>
                        }
                    </div>
                    : <SectionLoader />
                }
            </div>
        </section>
    )
}

export default PressRealease