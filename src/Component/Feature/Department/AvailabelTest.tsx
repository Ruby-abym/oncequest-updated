import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ImgPlaceHolder from '@/Utils/imgPlaceholder';
import { testAction } from '@/redux/action';
import { ROUTE } from '@/Const/Route';
import { useTranslation } from "next-i18next";
import SectionLoader from '@/Component/Common/Loader/SectionLoader';



function AvailabelTest(props: any) {
    const { t } = useTranslation();
    const { departmentId, DepartmentName } = props;
    const dispatch = useDispatch();
  const router = useRouter()
    const testDt: any = useSelector((state: any) => state.test.list ? state.test.list : {});
    const testData = useSelector((state: any) => state.test.list?.Tests);

    useEffect(() => {
        if (departmentId) {
            dispatch(testAction.listTestAction({ DepartmentId: departmentId, IsTrending: 1, Offset: 0, Limit: 20 }));
        }
        return () => { };
    }, [departmentId]);

    return (
        <section className="sub-section bg-white">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="headingmains text-center">
                            <h3 className="right aos-init pb-2 text-capitalize">{t("available_tests")}</h3>
                        </div>
                    </div>
                </div>
                {testDt && Object.keys(testDt).length > 0 ?
                    <>
                        {testData && testData?.length > 0 ?
                            <div className="equal_clm h-services">
                                {testData && testData?.length > 0 && testData?.map((item: any, index: any) => index < 7 && (
                                    <div className="infobox_wrapper doctor_card" key={index + "test"}>
                                        <div className="">
                                            <div>
                                                <div className="infobox_icon_container">
                                                    <img src={item?.Profile ? item?.Profile : "/assets/img/test_blood.png"} onError={(e: any) => ImgPlaceHolder(e, "/assets/img/test_blood.png")} className="scale" alt="" />
                                                </div>
                                                <h3 className="infobox_title text-uppercase">{item?.TestName}</h3>
                                                {/* <div className="infobox_title">National Reference Laboratory</div> */}
                                                {/* <div className="infobox_title my-3">{item?.LabName}</div> */}
                                                <Link className="infobox_button button-read-more" href={`${ROUTE.TESTDETAILS}/${item?.Slug}`}><img src="/assets/img/arrow-read.svg" className="scale" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                ))
                                }
                                <div className="">
                                    <div className="h-servicesbtn pa-td">
                                        <a href="#" className="btn explorebtn" onClick={(e: any) => { e.preventDefault(); router.push({
                                            pathname:ROUTE.BOOKATEST,query: { tabs: "tests", categoryId: "", depId: departmentId, depName: DepartmentName }},ROUTE.BOOKATEST) }}>
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
                                        </a>
                                    </div>
                                </div>
                            </div>
                            :
                            <div className='row'>
                                <div className="col-12 text-center f-16">{t("no_data_available")}</div>
                            </div>
                        }
                    </>
                    :
                    <SectionLoader />
                }
            </div>
        </section>
    )
}

export default AvailabelTest
