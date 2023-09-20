import React, { useEffect } from 'react'
import { useTranslation } from 'next-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { departmentAction } from '../../../redux/action';
import Link from 'next/link';
import { ROUTE } from '@/Const/Route';
import { ImgPlaceHolder } from '@/Utils';
import SectionLoader from '@/Component/Common/Loader/SectionLoader';

const DepartmentCard = () => {
    const  {t} = useTranslation();
    const dispatch = useDispatch();
    const Department: any = useSelector((state: any) => state.department.list?.Departments && state.department.list?.Departments);
    useEffect(() => {
        dispatch(departmentAction.listDepartmentAction({}));
        return () => { };
    }, []);

    return (
        <section className="sub-section bg-grey home-services">
            <div className="container pt-md-4">
                <div className="row">
                    <div className="col-12">
                        <div className="headingmains text-center pb-3">
                            <h2 className="right aos-init pb-2 text-uppercase">{t("expertise_areas")}</h2>
                        </div>
                    </div>
                </div>
                {Department ?
                    <div className="equal_clm h-services for-block-info">
                        {Department?.length > 0 ? Department?.map((item: any, index: any) => (
                            <div className="infobox_wrapper" key={index}>
                                <Link href={`${ROUTE.DEPARTMENTDETAILS}/${item?.Slug}`}>
                                    <div>
                                        <div>
                                            <div className="infobox_icon_container"><img src={item?.Icon ? item?.Icon : "../assets/img/test01.png"} onError={(e: any) => ImgPlaceHolder(e, "/assets/img/test01.png")} className="scale" alt="" /></div>
                                            <h3 className="infobox_title text-uppercase">{t(item?.DepartmentName)}</h3>
                                            <div className="infobox_content">{item?.ShortDescription}</div>
                                            <Link className="infobox_button button-read-more" href={`${ROUTE.DEPARTMENTDETAILS}/${item?.Slug}`}><img src="../assets/img/arrow-read.svg" className="scale" /></Link>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )) :
                            (
                                <div className="singl_clm f-16 text-center" >No Department Available</div>
                            )}
                    </div>
                    :
                    <SectionLoader/>
                    }
            </div>
        </section >
    )
}

export default React.memo(DepartmentCard)
