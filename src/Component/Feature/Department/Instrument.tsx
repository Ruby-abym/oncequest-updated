import React from 'react'
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import ImgPlaceHolder from '@/Utils/imgPlaceholder';
import { useTranslation } from "next-i18next";

import SectionLoader from '@/Component/Common/Loader/SectionLoader';

const Instrument = (props: any) => {
    const { t } = useTranslation();
    const { instruments, BaseUrl } = props;
    const departmentDt = useSelector((state: any) => state.department.selected ? state.department.selected : {});
    var settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false,
                }
            },

        ]
    };
    return (
        <>
            <section className="bg-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="headingmains text-left pb-3">
                                <h1 className="right aos-init pb-2 mt-4 mt-lg-5">{t("instruments_equipments")} </h1>
                            </div>
                        </div>
                    </div>
                    {departmentDt && Object.keys(departmentDt)?.length > 0 ?
                        <>
                            {instruments &&
                                <>
                                    {instruments && instruments.length > 0 ?
                                        <div className="instrument_slider">
                                            <Slider {...settings}>
                                                {instruments && instruments.length > 0 && instruments?.map((item: any, i: any) => (
                                                    <div key={i + "ins"}>
                                                        <div className="row">
                                                            <div className="col-md-5 text-center">
                                                                <img src={item?.image ? `${BaseUrl}${item?.image}` : "/assets/img/equipment.png"} onError={(e: any) => ImgPlaceHolder(e, "/assets/img/equipment.png")} className="instrument_scale" alt="" />
                                                            </div>
                                                            <div className="col-md-7">
                                                                <div className="mt-4">
                                                                    <div className="headingmains text-left pb-3">
                                                                        <h3 className="right aos-init pb-2 ">{item?.instrument_name}</h3>
                                                                        <h3 className="right aos-init pb-2 ">{item?.heading && `${item?.heading} `} {item?.sub_heading ? `(${item?.sub_heading})` : item?.sub_heading}</h3>
                                                                    </div>
                                                                    <div className="infobox_wrapper instrument-para" dangerouslySetInnerHTML={{ __html: item?.description }}>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </Slider>
                                        </div>
                                        :
                                        <div className='f-16 text-left font-weight-bold'>No Instruments & Equipments Found</div>
                                    }
                                </>
                            }
                        </>
                        :
                        <SectionLoader />
                    }
                </div>
            </section>
        </>
    )
}

export default Instrument
