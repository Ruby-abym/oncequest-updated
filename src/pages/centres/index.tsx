import { inArray } from 'jquery';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import Link from 'next/link'
import SectionLoader from '@/Component/Common/Loader/SectionLoader';
import { FacebookShareButton } from 'react-share';
import { getSelectedCity } from '@/Utils';
import { centerAction ,dashboardAction } from '../../redux/action';
import {ROUTE} from '../../Const/Route'
import BreadCrumb from '@/Component/Common/BreadCrumb';
import {NextPage } from 'next';
import Api from '@/redux/common/api';
import { SITE_URL, Url } from '@/redux/common/url';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';


const MapWithMarker = dynamic(() => import('@/Component/Feature/Centres/GoogleMap'), {
    ssr:false
  })
// import WaitScreen from '../LodingScreen/WaitScreen';
// import MapGl from '../MapGl/MapGl';
interface MyPageProps {
  seoData:any;
}
import CenterTiming from '@/Component/Feature/Centres/CenterTiming';
import { useTranslation } from 'next-i18next';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';
interface MyPageProps {
    seoData:any;
  }

const Labs: NextPage<MyPageProps> = ({ seoData }) =>{
    const { t } = useTranslation();
    const dispatch = useDispatch();
   const router = useRouter()
    const [limit, setLimit] = useState<any>(20);
    const [increseBy, setIncreseBy] = useState<any>(20);
    const [related, setRelated] = useState<boolean>(false);
    const [stateId, setStateId] = useState("");
    const [cityId, setCityId] = useState<any>("");
    const [cityByState, setcityByState] = useState<any[]>([]);
    const [pincode, setPincode] = useState<any>("");
    const [locality, setLocality] = useState<any>("");
    const [search, setSearch] = useState<any>("");
    const [searchTermShow, setSearchTermShow] = useState<any>("");
    const [findByPincode, setFindByPincode] = useState<any>("");
    const [altitude, setAltitude] = useState<any[]>([]);
    const [center, setCenter] = useState<any>({});
    const [localStoreCity, setLocalStoreCity] = useState<any>("");
    const [excludedCentreIds, setExcludedCentreIds] = useState<any>([]);
    const centerData: any = useSelector((state: any) => state.center.list ? state.center.list : {});
    const nearCenterData = useSelector((state: any) => state.center.relatedCentre ? state.center.relatedCentre : []);
    
    const state: any[] = useSelector((state: any) => state.dashboard.state);
    const city: any[] = useSelector((state: any) => state.dashboard.city);
    const nearestCenters = localStoreCity == "" ? nearCenterData : [];
   
    useEffect(() => {
        window?.scrollTo(0, 0);
        setLocalStoreCity(getSelectedCity());
        setSearch("");
        setStateId("");
        setCityId("");
        setPincode("");
        setLimit(20);
        setLocality("");
        setSearchTermShow("");
        setFindByPincode("");
        setRelated(false);
        let data: any = {};
        data.CityId = getSelectedCity();
        data.Offset = 0;
        data.Limit = 20;
        dispatch(centerAction.listCenterAction(data));
        return () => { };
    }, [getSelectedCity()]);

    useEffect(() => {
        dispatch(dashboardAction.getStateAction({}));
        return () => { };
    }, []);
    useEffect(() => {
        if (related && centerData?.Centres?.length > 0) {
            let StateId = centerData?.Centres?.[0].StateId;
            let CityId = centerData?.Centres?.[0].CityId;
            
            dispatch(centerAction.getRelatedCentreAction({ "StateId": StateId, "CityId": CityId }));
        }
        return () => { };
    }, [centerData]);

    const handleLimit = (e: any) => {
        e.preventDefault();
        setLimit(limit + increseBy);
    };

    useEffect(() => {
        if (limit > 21) {
            window?.scrollTo(0, 0);
            let data: any = {};
            if (search) {
                data.LatLng = search;
            } else if (stateId || cityId) {
                data.StateId = stateId;
                data.CityId = cityId;
            } else if (pincode) {
                data.Pincode = pincode;
            } else if (locality) {
                data.SearchTeam = locality;
            } else {
                data.CityId = localStoreCity;
            }
            data.Offset = 0;
            data.Limit = limit;
            dispatch(centerAction.listCenterAction(data));
        }
        return () => { };
    }, [limit]);

    const handleStateChange = (e: any) => {
        setStateId(e.target.value);
        setCityId("");
        setSearch("");
        let _ct = city?.filter((ele: any) => {
            return ele.StateId == e.target.value;
        })
        setcityByState(_ct);
        setPincode("");
        setRelated(false);
        setLimit(20);
        setLocality("");
        setSearchTermShow("");
        setFindByPincode("");
        let data: any = {};
        data.StateId = e.target.value;
        data.Offset = 0;
        data.Limit = 20;
        dispatch(centerAction.listCenterAction(data));
    }

    const handleSelectCity = (e: any) => {
        setCityId(e.target.value);
        setRelated(false);
        setLimit(20);
        let data: any = {};
        data.StateId = stateId;
        data.CityId = e.target.value;
        data.Offset = 0;
        data.Limit = 20;
        dispatch(centerAction.listCenterAction(data));
    }

    const handleGetUserLatLng = async (e: any) => {
        e.preventDefault();
        if (navigator?.geolocation) {
            await navigator?.geolocation.getCurrentPosition((position: any) => {
                let data: any = `${position.coords.latitude},${position.coords.longitude}`;
                setSearch(data);
                setStateId("");
                setCityId("");
                setPincode("");
                setLimit(20);
                setLocality("");
                setSearchTermShow("");
                setFindByPincode("");
                dispatch(centerAction.listCenterAction({ LatLng: data, Offset: 0, Limit: 20 }));
                localStorage.setItem("UserLatLng", data);
            }, (err: any) => console.log(err), { timeout: 5000 })
        } else {
            alert("your Browser does not support location, Please add your address manually");
        }
    }
    useEffect(() => {
        let arr: any[] = [];
        arr.length = 0;
        let lat: number = 0;
        let lng: number = 0;

        var ExcludedCentreIdsArr: any[] = [];
        if (centerData?.Centres && centerData?.Centres?.length > 0) {
            centerData?.Centres?.map((item: any) => {
                ExcludedCentreIdsArr.push(item?.Id);
                setExcludedCentreIds(ExcludedCentreIdsArr);
                if (
                    item?.CentreLat !== "" &&
                    item?.CentreLat !== null &&
                    item?.CentreLng !== "" &&
                    item?.CentreLng !== null
                ) {
                    arr.push(item);
                    lat += parseFloat(item?.CentreLat);
                    lng += parseFloat(item?.CentreLng);
                }
            })
            setCenter({ lat: lat / arr.length, lng: lng / arr.length })
            setAltitude(arr);
        }
        return () => { };
    }, [centerData]);
  

    const handleSearch = (e: any) => {
        setRelated(false);
        let val = e.target.value;
        val = val && val?.trim();
        setSearch("");
        setSearchTermShow(val);
        setFindByPincode("");
        setSearch("");
        setStateId("");
        setCityId("");
        setLimit(20);
        if (val && val.length >= 3) {
            if (!isNaN(val)) {
                if (val.length >= 6) {
                    setPincode(val);
                    dispatch(centerAction.listCenterAction({ Pincode: val, Offset: 0, Limit: 20 }));
                    setRelated(true);
                }
            } else {
                setLocality(val);
                dispatch(centerAction.listCenterAction({ SearchTeam: val, Offset: 0, Limit: 20 }));
            }
        }
        if (val.length === 0) {
            setLocality("");
            setPincode("");
            dispatch(centerAction.listCenterAction({ SearchTeam: "", Pincode: "", Offset: 0, Limit: limit }));
            // setRelated(true);
        }
    }
    const findCityName = () => {
        let _id = stateId ? cityId : localStoreCity;
        let dt = city.find((ele)=> ele.Id == _id)
        return dt?.Name || ""
    }
    return (
        <React.Fragment>
            <NextSeo
       title={seoData?.SeoTitle}
       description={seoData?.SeoDescription}
       canonical={`${SITE_URL}${router.asPath}`}
       openGraph={{
         title:seoData?.SeoTitle,
         description:seoData?.SeoDescription,
         type: "website",
         locale: "en_IE",
         url: `${SITE_URL}${router.asPath}`,
         siteName: "oncquest-lab",
       }}
       twitter={{
         handle: "@handle",
         site: "@site",
         cardType: "summary_large_image",
       }}
       additionalMetaTags={[
         {
           property: "keywords",
           content:seoData?.SeoKeywords
         },
       ]}
    />
            <BreadCrumb page={t("lab_centres")} data={{ slug: "", path: "" }} />
            <section className="bg-white section  pt-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="headingmains text-left">
                                        <h3 className="right aos-init pb-2">{t("center_heading")}</h3>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="form-group">
                                        <select className="form-control rounded-pill" value={stateId} onChange={(e: any) => handleStateChange(e)}>
                                            <option value="">{t("select_state")}</option>
                                            {state && state?.length > 0 && state?.map((item: any,i:number) => (
                                                <option  className="text-uppercase" value={item?.Id} key={item?.Id}>{t(item?.Name)}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="form-group">
                                        <select className="form-control rounded-pill" value={cityId} onChange={(e: any) => handleSelectCity(e)}>
                                            <option value="">{t("select_city")}</option>
                                            {cityByState && stateId && cityByState?.length > 0 && cityByState?.map((item: any) => (
                                                <option className="text-uppercase" value={item?.Id} key={item?.Id}>{t(item?.Name)}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="row" style={{ position: "relative", zIndex: 31 }}>
                                <div className="col-sm-8">
                                    <div className="form-group">
                                        <div className="input-group">
                                            <span className="input-group-prepend">
                                                <div className="input-group-text border-0 bg-transparent mr-n5"><i className="fa fa-search"></i></div>
                                            </span>
                                            <input className="form-control rounded-pill py-1 pl-5 ml-1 bg-transparent" type="search" placeholder={t("search_locality_pincode")} value={searchTermShow} onChange={(e: any) => handleSearch(e)} id="example-search-input" />
                                        </div>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-7">
                            <div className="lab_list h-services">
                                <img src={t("images.center_banner")} className="scale" alt="" />
                            </div>
                            {Object.keys(centerData).length > 0 ?
                                <>
                                    {centerData && centerData?.Centres?.length > 0 ? centerData?.Centres?.map((item: any, index: any) => (
                                        <React.Fragment key={index}>
                                            <div className="lab_list h-services" key={index}>
                                                <div className="infobox_wrapper lab_wrapper">
                                                    <div className="lab_flex_pad">
                                                        <div><img src="/assets/img/test.png" className="scale_booknow" />{t(item?.DisplayCentreName)}</div>
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
                                                    <div className="lab_flex_start">
                                                        {item?.Phone &&
                                                            <div className="lab_flex_center">
                                                                <span><img src="/assets/img/call.png" className="scale_booknow" /></span>
                                                                <span>
                                                                    <div>{t("phone_number")}</div>
                                                                    <div className="text"><a href={`tel: ${item?.Phone}`} target="_blank">{`(+91) ${item?.Phone}`}</a></div>
                                                                </span>
                                                            </div>
                                                        }
                                                        {item?.CentreTimings &&
                                                            <div className="lab_flex_center">
                                                                <span><img src="/assets/img/clock.png" className="scale_booknow" /></span>
                                                                <CenterTiming timing={item?.CentreTimings} />
                                                            </div>
                                                        }
                                                        {item?.Email &&
                                                            <div className="lab_flex_center">
                                                                <span><img src="/assets/img/email.png" className="scale_booknow" /></span>
                                                                <span>
                                                                    <div>{t("email")}</div>
                                                                    <a className="text" href={`mailto: ${item?.Email}`}>{item?.Email}</a>
                                                                </span>
                                                            </div>
                                                        }
                                                    </div>
                                                    <Link className="button-read-more pt-2 pb-2 text-dark f-15" href={`${ROUTE.CENTERDETAILS}/${item?.Slug}`}>{t("know_more")}<img src="/assets/img/arrow-read-dark.svg" className="scale_booknow ml-3" /></Link>
                                                </div>
                                            </div>
                                        </React.Fragment>
                                    ))
                                        :
                                        (
                                            <div className="lab_list h-services">
                                                <div className="infobox_wrapper text-center fs-16">
                                                    {t("no_centre_found")} {t(findCityName())}
                                                </div>
                                            </div>
                                        )
                                    }

                                    {centerData?.TotalCentres > limit && centerData?.Centres?.length >= limit &&
                                        <div className="text-center my-4">
                                            <a href="#" onClick={(e: any) => handleLimit(e)} className="button--hexagon normal active">
                                                <span className="text-capitalize"> {t("load_more")}</span>
                                            </a>
                                        </div>
                                    }
                                </>
                                :
                                <SectionLoader />
                            }
                            {nearestCenters && nearestCenters?.Centres?.length > 0 ? <h6 className='pb-3'>Other Labs/Centers</h6> : ""}

                            {nearestCenters && nearestCenters?.Centres?.length > 0 ?
                                nearestCenters?.Centres?.map((item: any, index: any) => (
                                    excludedCentreIds.includes(item?.Id) == false ?
                                        <>
                                            <div className="lab_list h-services" key={index}>
                                                <div className="infobox_wrapper lab_wrapper">
                                                    <div className="lab_flex_pad">
                                                        <div><img src="/assets/img/test.png" className="scale_booknow" />{item?.DisplayCentreName}</div>
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
                                                    <div className="lab_flex_start">
                                                        {item?.Phone &&
                                                            <div className="lab_flex_center">
                                                                <span><img src="/assets/img/call.png" className="scale_booknow" /></span>
                                                                <span>
                                                                    <div>{t("phone_number")}</div>
                                                                    <div className="text"><a href={`tel: ${item?.Phone}`} target="_blank">{`(+91) ${item?.Phone}`}</a></div>
                                                                </span>
                                                            </div>
                                                        }
                                                        {item?.CentreTimings &&
                                                            <div className="lab_flex_center">
                                                                <span><img src="/assets/img/clock.png" className="scale_booknow" /></span>
                                                                <CenterTiming timing={item?.CentreTimings} />
                                                            </div>
                                                        }
                                                        {item?.Email &&
                                                            <div className="lab_flex_center">
                                                                <span><img src="/assets/img/email.png" className="scale_booknow" /></span>
                                                                <span>
                                                                    <div>Email Id</div>
                                                                    <a className="text" href={`mailto: ${item?.Email}`}>{item?.Email}</a>
                                                                </span>
                                                            </div>
                                                        }
                                                    </div>
                                                    <Link className="button-read-more pt-2 pb-2 text-dark f-15" href={`${ROUTE.CENTERDETAILS}/${item?.Slug}`}>{t("know_more")}<img src="/assets/img/arrow-read-dark.svg" className="scale_booknow ml-3" /></Link>
                                                </div>
                                            </div>
                                        </>
                                        : ""
                                ))
                                :
                                (
                                    <div style={{ display: nearestCenters?.Centres?.length > 0 ? '' : 'none' }} className="lab_list h-services">
                                        <div className="infobox_wrapper text-center fs-16">
                                            No Nearby Centre Found
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                        <div className="col-md-5">
                            {Object.keys(centerData).length > 0 ?
                                <>
                                    {<MapWithMarker {...altitude} 
                                    googleMapURL= "https://maps.googleapis.com/maps/api/js?key=AIzaSyBdZRmvc_EiOcYC2w9uIzO4h3xaq6Rebds&v=3&libraries=geometry,places"
                                    loadingElement={<div style={{ height: "500px",  }} />}
                                    containerElement={<div style={{ height: "500px", }} />}
                                    mapElement={<div style={{ height: `30%`, maxHeight: "700px", minHeight: "500px" }} />} 
                                   
                                    />}
                                </>
                                :
                                <SectionLoader />
                            }
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
export const getServerSideProps = async ({ locale }:{locale: string}) => {
    let Slug = ROUTE.CENTER?.replace("/", "");
    const data: any = await Api.post(Url.seoDetail, { Slug: Slug});
    return {
      props: {
        seoData: data?.Result?.Details || {},
        ...(await serverSideTranslations(locale, ["common"])),
      },
    };
  };
export default Labs

