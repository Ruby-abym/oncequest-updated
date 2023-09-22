import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  sendOtpValidation,
  validateAddAddress,
  validateAddPatient,
} from "@/Utils/Validation";
import { checkOutAction, dashboardAction } from "../../redux/action";
import { ROUTE } from "@/Const/Route";
import BreadCrumb from "@/Component/Common/BreadCrumb";
import Api from "@/redux/common/api";
// import SeoAdd from "../Seo/SeoAdd";
import { SITE_URL, Url } from "@/redux/common/url";
import moment from "moment";
import OtpInput from "react-otp-input";
import { getUser, onlyNumber } from "@/Utils/index";
import DatePicker from "react-datepicker";
import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import PatientBox from "@/Component/Feature/CheckOut/PatientBox";
import AddressBox from "@/Component/Feature/CheckOut/AddressBox";

import { useRouter } from "next/router";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { Formik } from "formik";
import axios from "axios";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
interface MyPageProps {
  seoData: any;
}
const initialValuePatient = {
  PatientFirstName: "",
  PatientLastName: "",
  PatientGender: "",
  PatientDob: null,
  PatientRelation: "",
  PatientMobile: "",
  CustomerAddressLine1: "",
};
const initialValueAddress = {
  CustomerName: "",
  CustomerEmail: "",
  CustomerAddressLine1: "",
  CustomerAddressLine2: "",
  CustomerStateId: "",
  CustomerCityId: "",
  AddressTag: "",
  CustomerLocality: "",
  CustomerPincode: "",
};

const CheckOut: NextPage<MyPageProps> = ({ seoData }) => {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const router = useRouter();
  // console.log(router)
  const [initialRenderComplete, setInitialRenderComplete] = useState<boolean>(false);
  useEffect(() => {
    setInitialRenderComplete(true);
  }, []);

  const [cardEntry, setCardEntry] = useState<any[]>([]);
  var ExistingEntries: any = [];
  let CityId: string | null
  useEffect(()=>{
    CityId = localStorage.getItem("oq:city");
  },[])
  
   
    var data: any;
    useEffect(()=>{
        data = router?.query
        AddToCart(data);
    },[router?.query])
  
    useEffect(()=>{
      // console.log(localStorage.getItem("CartData"));
    },[])

  // if (ExistingEntries) ExistingEntries = JSON.parse(ExistingEntries);
  useEffect(() => {
    setCardEntry(ExistingEntries);
  }, []);


 
  const RemoveFromCart = (e: any) => {
    var deleteItem = e.target.getAttribute("data-id");
    var CartData: any = [];
    var LocalData: any = ExistingEntries;
    if (LocalData != null && LocalData.length > 0) {
      LocalData &&
        Object.values(LocalData).map((v: any) => {
          if (v?.Id != deleteItem) {
            var Type = "package";
            if (v?.Id && v?.Type == "test") {
              Type = "test";
            }
            var newItem = {
              Id: v?.Id,
              TestCode: v?.TestCode,
              TestName: v?.TestName,
              MRP: v?.MRP,
              SellingPrice: v?.SellingPrice,
              CitywisePrices: v?.CitywisePrices,
              Type: Type,
            };
            CartData.push(newItem);
          }
        });
    }

    localStorage.setItem("CartData", JSON.stringify(CartData));
    ExistingEntries = CartData;
    setCardEntry(CartData);
  };
  const CartTotal = (mrp = "") => {
    let total = 0;
    let LocalData: any = cardEntry;
    if (LocalData != null && LocalData.length > 0) {
      LocalData &&
        Object.values(LocalData).map((value: any) => {
          if (mrp == "mrp") total += parseFloat(value?.MRP);
          else total += parseFloat(value?.SellingPrice);
        });
    }
    console.log(total);
    return total;
  };
  const AddToCart = (data: any) => {
    setResend(false);
    var CartData: any = [];
    var CityPrice: any = 0;
    var LocalData: any = ExistingEntries;
    var isAdded = false;
    if (LocalData != null && LocalData.length > 0) {
      LocalData &&
        Object.values(LocalData).map((v: any) => {
          if (v?.Id == data?.data?.Id) {
            isAdded = true;
          } else {
            var Type = "package";
            if (v?.Id && v?.Type == "test") {
              Type = "test";
            }
            var newItem = {
              Id: v?.Id,
              TestCode: v?.TestCode,
              TestName: v?.TestName,
              MRP: v?.MRP,
              SellingPrice: v?.SellingPrice,
              Type: Type,
            };
            isAdded = false;
            CartData.push(newItem);
          }
        });
    } else {
      isAdded = false;
    }
    if (!isAdded) {
      var Type = "package";
      if (data && data?.Type == "test") {
        Type = "test";
        var name = data.data.TestName;
      } else {
        var name = data.data.PackageName;
      }
      {
        (() => {
          CityPrice = data.data.SellingPrice;
          if (
            CityId &&
            data.data.CitywisePrices &&
            data.data.CitywisePrices?.length > 0
          ) {
            data.data.CitywisePrices.map((vv: any, kk: any) => {
              if (
                vv.availability == 1 &&
                vv.city_price &&
                CityId == vv.city_id
              ) {
                CityPrice = vv.city_price;
              }
            });
          }
        })();
      }
      var newItem = {
        Id: data.data.Id,
        TestCode: data.data.TestCode,
        TestName: name,
        MRP: data.data.MRP,
        SellingPrice: CityPrice,
        Type: Type,
      };
      CartData.push(newItem);
    }
    if (CartData.length > 0) {
      localStorage.setItem("CartData", JSON.stringify(CartData));
    }
    setCardEntry(CartData);
    ExistingEntries = CartData;
    window.history.replaceState({}, "");
  };

  // console.log(localStorage.getItem("CartData"))

  const datepickerRef = useRef(null);
  const [confirm, setConfirm] = useState<boolean>(false);
  const [showAddress, setShowAddress] = useState<boolean>(false);
  const [showPatient, setShowPatient] = useState<boolean>(false);
  const [showOtpBox, setShowOtpBox] = useState<boolean>(false);
  const [showSch, setShowSch] = useState<boolean>(false);
  const [finalValue, setFinalValue] = useState<any>({});
  const [mobile, setMobile] = useState<any>({});
  const [patient, setPatient] = useState<any>({ ...initialValuePatient });
  const [address, setAddress] = useState<any>({ ...initialValueAddress });
  const [otp, setOtp] = useState<any>("");
  const [selectDt, setSelectDt] = useState<any>("");
  const [selectTime, setSelectTime] = useState<any>("");
  const [am, setAm] = useState<any>("AM");
  const [dt, setDt] = useState<any[]>([]);
  const [cityByState, setcityByState] = useState<any[]>([]);
  const [counter, setCounter] = React.useState(0);
  const [resend, setResend] = useState<boolean>(false);
  const [buttonTxt, setButtonTxt] = useState<string>("sign_in");
  const [verifyOtpLoad, setverifyOtpLoad] = useState<boolean>(false);
  const [otpValidate, setOtpValidate] = useState<any>({
    isSubmitting: false,
    error: {},
  });
  const [scriptLoad, setScriptLoad] = useState(false);
  const sendOtp = useSelector((state: any) => state.checkout.sendOtp);
  const verifyOtp = useSelector(
    (state: any) => state.checkout.verifyOtp?.UserDetails
  );
  const OtpFailed = useSelector((state: any) => state.checkout.failOtp);
  const slotData = useSelector((state: any) => state.checkout.slot?.Slots);
  const state = useSelector((state: any) => state.dashboard.state);
  const city = useSelector((state: any) => state.dashboard.city);
  const loggedIn = useSelector((state: any) => state.user.isLoggedIn);
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  

  React.useEffect(() => {
    if (verifyOtp && verifyOtp?.Id) {
      setScriptLoad(true);
    }
  }, [verifyOtp]);

  React.useEffect(() => {
    const timer: any =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    if (counter < 1) {
      setShowOtpBox(false);
    }
    return () => clearInterval(timer);
  }, [counter]);

  React.useEffect(() => {
    if (OtpFailed) {
      setOtp("");
    }
    return () => {};
  }, [OtpFailed]);

  useEffect(() => {
    window?.scrollTo(0, 0);
    setResend(false);
    return () => {};
  }, []);
  useEffect(() => {
    dispatch(dashboardAction.getStateAction({}));
    return () => {};
  }, []);

  const getCityByState = (CustomerStateId: any) => {
    if (CustomerStateId) {
      let _ct = city?.filter((ele: any) => {
        return ele.StateId == CustomerStateId;
      });
      return _ct;
    } else {
      return [];
    }
  };

  const handleSendOtp = (e: any, _resend: boolean) => {
    const validationErrors = sendOtpValidation(mobile);
    setOtpValidate({
      isSubmitting: validationErrors.isFormValid,
      error: validationErrors,
    });
    if (validationErrors.isFormValid) {
      setShowOtpBox(true);
      setResend(_resend);
      setCounter(30);
      dispatch(checkOutAction.sendOtpAction(mobile));
      setOtp("");
      setButtonDisabled(true);
    }
  };

  const handleVerifyOtp = (e: any) => {
    let data = {
      MobileNo: mobile.MobileNo,
      UserId: sendOtp?.UserId,
      Otp: otp,
    };
    dispatch(checkOutAction.verifyOtpAction(data));
    setverifyOtpLoad(true);
  };
  const addDays = (days: any) => {
    var date = new Date(days?.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  };

  function getDates(startDate: Date, stopDate: Date) {
    var dateArray: any = new Array();
    var currentDate: any = startDate;
    while (currentDate <= stopDate) {
      dateArray.push(new Date(currentDate));
      currentDate = currentDate?.addDays(1);
    }
    return dateArray;
  }
  useEffect(() => {
    let boxingDay: any = new Date();
    let nextWeek = boxingDay * 1 + 2 * 6 * 24 * 3600 * 1000;
    function getDates(d1: any, d2: any) {
      var oneDay = 24 * 3600 * 1000;
      for (var d = [], ms = d1 * 1, last = d2 * 1; ms < last; ms += oneDay) {
        let dt: any = new Date(ms);
        d.push(dt);
      }
      return d;
    }
    let data = getDates(boxingDay, nextWeek);
    setDt(data);
    return () => {};
  }, []);
  const handleSlot = (_dt: any) => {
    setSelectTime("");
    setSelectDt(_dt);
    let data = _dt && moment(_dt).format("YYYY-MM-DD");
    dispatch(checkOutAction.availableSlotAction({ Date: data }));
  };
  const SetPatientNumber = (relation: any, setFieldValue: any) => {
    setFieldValue("PatientRelation", relation);
    if (relation) {
      if (relation == 1) {
        setFieldValue("PatientMobile", getUser()?.MobileNo);
      } else {
        setFieldValue("PatientMobile", "");
      }
    }
  };

  const handleAddPatient = (val: any) => {
    setFinalValue({ ...finalValue, ...val });
    // setShowPatient(true);
  };
  const handleAddAddress = (val: any) => {
    setFinalValue({ ...finalValue, ...val });
    setShowAddress(true);
  };
  const handleEditPatient = () => {
    let val: any = {};
    val.PatientFirstName = finalValue.PatientFirstName;
    val.PatientLastName = finalValue.PatientLastName;
    val.PatientGender = finalValue.PatientGender;
    val.PatientDob = finalValue.PatientDob;
    val.PatientMobile = finalValue.PatientMobile;
    val.PatientRelation = finalValue.PatientRelation;
    setPatient(val);
  };
  const handleEditAddress = () => {
    let val: any = {};
    val.CustomerName = finalValue.CustomerName;
    val.CustomerEmail = finalValue.CustomerEmail;
    val.CustomerAddressLine1 = finalValue.CustomerAddressLine1;
    val.CustomerAddressLine2 = finalValue.CustomerAddressLine2;
    val.CustomerCityId = finalValue.CustomerCityId;
    val.CustomerStateId = finalValue.CustomerStateId;
    val.CustomerLocality = finalValue.CustomerLocality;
    val.CustomerPincode = finalValue.CustomerPincode;
    val.AddressTag = finalValue.AddressTag;
    setAddress(val);
  };
  const handleDateTime = () => {
    setShowSch(true);
    setConfirm(true);
  };
  const handleCreateBooking = (e: any) => {
    /**
     * Cart Data
     */
    var cartItem: any = [];
    var LocalData: any = cardEntry;
    if (LocalData != null && LocalData.length > 0) {
      LocalData &&
        Object.values(LocalData).map((v: any) => {
          cartItem.push(v);
        });
    }

    let val: any = { ...finalValue, ...e };
    val.PatientDob = moment(val.PatientDob).format("YYYY-MM-DD");
    val.CustomerCityId = CityId ? CityId : null;
    val.CustomerName = e.PatientFirstName + " " + e.PatientLastName;
    // val.ScheduleDate = selectDt && moment(selectDt).format("YYYY-MM-DD");
    val.ScheduleDate = null;
    // val.ScheduleTime = selectTime && moment(`${selectTime} ${am}`, ["h:mm A"]).format("HH:mm:ss");
    val.ScheduleTime = null;
    // val.ItemType = data?.type;
    val.CartItem = cartItem;
    val.UserId = getUser()?.Id;
    val.MobileNo = getUser()?.MobileNo;
    val.SourceUrl = router.pathname;
    if (val.CartItem) {
      dispatch(checkOutAction.createBookingAction(val, router));
    } else {
      toast.warning("Cart is empty.");
    }
  };

  function handleClickDatepickerIcon() {
    const datepickerElement: any = datepickerRef?.current;
    datepickerElement?.setFocus(true);
  }
  const Relation = [
    { Id: 1, Name: "Self" },
    { Id: 2, Name: "Father" },
    { Id: 3, Name: "Mother" },
    { Id: 4, Name: "Daughter" },
    { Id: 5, Name: "Son" },
    { Id: 6, Name: "Husband" },
    { Id: 7, Name: "wife" },
    { Id: 8, Name: "Other" },
  ];
  if(!initialRenderComplete) return <></>
  return (
    <React.Fragment>
      <NextSeo
        title={seoData?.SeoTitle}
        description={seoData?.SeoDescription}
        canonical={`${SITE_URL}${router.asPath}`}
        openGraph={{
          title: seoData?.SeoTitle,
          description: seoData?.SeoDescription,
          type: "website",
          locale: "en_IE",
          url: `${SITE_URL}${router.asPath}`,
          siteName: "oncquest-lab",
          images: [
            {
              url: "https://admin.oncquestlabs.com/public/en/uploads/packages/inner-fitness-advance1643629102.jpg",
              alt: "Og Image Alt",
            },
          ],
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content: seoData?.SeoKeywords,
          },
        ]}
      />
      {/* <SeoAdd slug={ROUTE.CHECKOUT} /> */}
      <BreadCrumb page={t("checkout")} data={{ slug: "", path: "" }} />
      <section className="bg-gray section pt-3">
        <div className="container" id="section2">
          <div className="row">
            <div className="col-md-8">
              {!!localStorage.getItem("oqu") === false &&
                verifyOtp?.Id === undefined && (
                  <div className="row checkout_box mb-3">
                    <div className="col-12 chk_title">
                      <h4>{t("login_text")}</h4>
                    </div>
                    <div className="col-md-6 p-3">
                      <h6 className="py-2">{t("please_login")}</h6>
                      <div className="form-group cust-form-group">
                        <input
                          type="text"
                          name="MobileNo"
                          className="form-control"
                          placeholder={t("enter_mobile_number") as any}
                          onKeyPress={onlyNumber}
                          value={mobile?.MobileNo}
                          onChange={(e: any) =>
                            setMobile({
                              ...mobile,
                              [e?.target.name]: e?.target.value,
                            })
                          }
                        />
                        {otpValidate?.error?.MobileNo && (
                          <span className="error_message">
                            {t(otpValidate?.error?.MobileNo)}
                          </span>
                        )}
                        {sendOtp?.error?.MobileNo && (
                          <span className="error_message">
                            {sendOtp?.error?.MobileNo[0]}
                          </span>
                        )}
                      </div>
                      {sendOtp?.UserId && counter > 0 ? (
                        <div className="text-left my-2">
                          Did not receive OTP ? Resend OTP in{" "}
                          <span style={{ color: "green", fontWeight: "bold" }}>
                            {" "}
                            00:{counter < 10 ? `0${counter}` : counter}
                          </span>
                        </div>
                      ) : (
                        sendOtp?.UserId && (
                          <div className="text-left  my-2">
                            Did not receive OTP ?{" "}
                            <span
                              style={{ fontWeight: "bold", cursor: "pointer" }}
                              onClick={(e: any) => handleSendOtp(e, true)}
                            >
                              Resend OTP
                            </span>
                          </div>
                        )
                      )}
                      {/* {sendOtp?.UserId  && <div>
                        <button
                          style={{ marginTop:"12px", fontSize:"13px" , fontWeight:"700" , padding:"4px" , cursor:"pointer"}}
                          onClick={(e: any) => handleSendOtp(e, true)}
                          disabled={sendOtp?.UserId && counter < 1 ? false : true}
                        >
                          {" "}
                          Resend OTP{" "}
                        </button>
                      </div>} */}
                      {sendOtp?.UserId && (
                        <div className="row form-group-inline">
                          <div className="col-4 f-18">
                            <label>Enter Otp</label>
                          </div>
                          <div className="col-8">
                            <OtpInput
                              value={otp}
                              onChange={(e: any) => setOtp(e)}
                              numInputs={4}
                             
                              inputStyle={{
                                width: "40px",
                                height: "40px",
                                border: "1px solid #000",
                              }}
                              renderSeparator={<span>-</span>}
                              renderInput={(props) => <input {...props} />}
                            />
                            {otpValidate?.error?.otp && (
                              <span className="error_message">
                                {t(otpValidate?.error?.otp)}
                              </span>
                            )}
                          </div>
                        </div>
                      )}
                      {!sendOtp?.UserId && (
                        <>
                          <button
                            type="button"
                            className="book--hexagon active"
                            onClick={(e: any) => handleSendOtp(e, false)}
                            disabled={isButtonDisabled}
                          >
                            <span>
                              {isButtonDisabled ? "Loading..." : "Sign in"}
                              <i
                                className="fa fa-long-arrow-right ml-20"
                                aria-hidden="true"
                              ></i>
                            </span>
                          </button>
                          <br></br>
                        </>
                      )}
                      {sendOtp?.UserId && (
                        <button
                          type="button"
                          className="book--hexagon active"
                          onClick={(e: any) => handleVerifyOtp(e)}
                          disabled={otp?.length < 4}
                        >
                          <span>
                            Verify Otp
                            <i
                              className="fa fa-long-arrow-right ml-20"
                              aria-hidden="true"
                            ></i>
                          </span>
                        </button>
                      )}
                      <div className="f-14 py-2">
                        {t("read_the_privacy_policy")}
                      </div>
                    </div>
                    <div className="col-md-6 p-3">
                      {/* <h6 className="text-dark p-2">Advantage of our secure login</h6>
                                    <div className="text-dark p-2"><img className="scale_checkout mr-3" src="/assets/img/calendar.png" alt=""/><span>Lorem ipsum is placeholder text commonly.</span></div>
                                    <div className="text-dark p-2"><img className="scale_checkout mr-3" src="/assets/img/test.png" alt=""/><span>Lorem ipsum is placeholder text commonly.</span></div>
                                    <div className="text-dark p-2"> <img className="scale_checkout mr-3" src="/assets/img/star.png" alt=""/><span>Lorem ipsum is placeholder text commonly.</span></div> */}
                    </div>
                  </div>
                )}
              {!!localStorage.getItem("oqu") === true && !showPatient && (
                <div className="row checkout_box mb-5">
                  <div className="col-12 chk_title">
                    <h4>Patients</h4>
                    {/* <div className="text-center"><img className="scale_checkout" src="/assets/img/edit_pencil.png" alt=""/></div> */}
                  </div>
                  {/* <div className='col-md-12 row pt-3 pb-3'>
                                    <PatientBox finalValue={finalValue} Relation={Relation} handleEditPatient={handleEditPatient}/>
                                </div> */}
                  <div className="line mt-2 mb-4"></div>
                  <div className="col-12 chk_title">
                    <h6>Add Patient:</h6>
                  </div>
                  <Formik
                    initialValues={patient}
                    enableReinitialize={true}
                    validationSchema={validateAddPatient}
                    onSubmit={(val: any) => {
                      handleCreateBooking(val);
                      setisLoading(true);
                    }}
                    render={({
                      values,
                      handleChange,
                      errors,
                      touched,
                      handleBlur,
                      handleSubmit,
                      setFieldValue,
                    }) => (
                      <form onSubmit={handleSubmit}>
                        <div className="row pt-3 pb-3 m-0">
                          <div className="col-md-6 mb-3">
                            <input
                              type="text"
                              name="PatientFirstName"
                              className="form-control"
                              placeholder="First Name"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values?.PatientFirstName}
                            />
                            {touched?.PatientFirstName &&
                              errors?.PatientFirstName && (
                                <span className="error_message">
                                  {errors?.PatientFirstName as any}
                                </span>
                              )}
                          </div>
                          <div className="col-md-6 mb-3">
                            <input
                              type="text"
                              name="PatientLastName"
                              className="form-control"
                              placeholder="Last Name"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values?.PatientLastName}
                            />
                            {touched?.PatientLastName &&
                              errors?.PatientLastName && (
                                <span className="error_message">
                                  {errors?.PatientLastName as any}
                                </span>
                              )}
                          </div>
                          <div className="col-md-6 mb-3 ">
                            <div className="dt_picker">
                              <DatePicker
                                ref={datepickerRef}
                                selected={values?.PatientDob}
                                className="form-control"
                                onChange={(value: any) =>
                                  value && setFieldValue("PatientDob", value)
                                }
                                maxDate={new Date()}
                                dateFormat="dd-MM-yyyy"
                                showMonthDropdown
                                showYearDropdown
                                peekNextMonth
                                dropdownMode="select"
                                placeholderText="Date of birth"
                                onChangeRaw={(e: any) => e.preventDefault()}
                              />
                              <span>
                                <img
                                  className="scale"
                                  src="/assets/img/age.png"
                                  alt=""
                                  onClick={() => handleClickDatepickerIcon()}
                                />
                              </span>
                            </div>
                            {touched?.PatientDob && errors?.PatientDob && (
                              <span className="error_message">
                                {errors?.PatientDob as any}
                              </span>
                            )}
                          </div>
                          <div className="col-md-6 mb-3 row align-items-center">
                            <div className="col-12">
                              <div className="form-check-inline">
                                <label className="gen_label">GENDER</label>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="PatientGender"
                                  id="flexRadioDefault1"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value="Male"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="flexRadioDefault1"
                                >
                                  MALE
                                </label>
                              </div>
                              <div className="form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="PatientGender"
                                  id="flexRadioDefault2"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value="Female"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="flexRadioDefault2"
                                >
                                  FEMALE
                                </label>
                              </div>
                              <div className="form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="PatientGender"
                                  id="flexRadioDefault2"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value="Other"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="flexRadioDefault2"
                                >
                                  OTHER
                                </label>
                              </div>
                            </div>
                            <div className="col-12">
                              {touched?.PatientGender &&
                                errors?.PatientGender && (
                                  <span className="error_message">
                                    {errors?.PatientGender as any}
                                  </span>
                                )}
                            </div>
                          </div>
                          <div className="col-md-6 mb-3">
                            <select
                              className="form-control"
                              name="PatientRelation"
                              id="Relation"
                              onChange={(e: any) =>
                                SetPatientNumber(e.target.value, setFieldValue)
                              }
                              onBlur={handleBlur}
                              value={
                                values.PatientRelation
                              } /* onSelect={(e:any)=>SetPatientNumber(e.target.value,setFieldValue)} */
                            >
                              <option value="">Relation</option>
                              {Relation?.map((item: any, i: any) => (
                                <option
                                  className="text-uppercase"
                                  value={item?.Id}
                                  key={i}
                                >
                                  {item?.Name}
                                </option>
                              ))}
                            </select>
                            {touched?.PatientRelation &&
                              errors?.PatientRelation && (
                                <span className="error_message">
                                  {errors?.PatientRelation as any}
                                </span>
                              )}
                          </div>
                          <div className="col-md-6 mb-3">
                            <input
                              type="text"
                              name="PatientMobile"
                              className="form-control"
                              placeholder="Mobile Number"
                              onKeyPress={onlyNumber}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.PatientMobile}
                            />
                            {touched?.PatientMobile &&
                              errors?.PatientMobile && (
                                <span className="error_message">
                                  {errors?.PatientMobile as any}
                                </span>
                              )}
                          </div>
                          <div className="col-md-12 mb-3">
                            <label>Address</label>
                            <textarea
                              placeholder="Enter Address"
                              name="CustomerAddressLine1"
                              className="form-control"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.CustomerAddressLine1}
                            >
                              {" "}
                            </textarea>
                            {touched?.CustomerAddressLine1 &&
                              errors?.CustomerAddressLine1 && (
                                <span className="error_message">
                                  {errors?.CustomerAddressLine1 as any}
                                </span>
                              )}
                          </div>
                        </div>
                        <div className="col-md-12">
                          <button
                            type="submit"
                            disabled={isLoading}
                            className="book--hexagon active m-0"
                          >
                            <span>
                              {t("book_now")}
                              <i
                                className="fa fa-long-arrow-right ml-20"
                                aria-hidden="true"
                              ></i>
                            </span>
                          </button>
                        </div>
                       
                      </form>
                    )}
                  />
                </div>
              )}
            
            </div>
            <div className="col-md-4">
            
              <div className="h-services pkj_book_box">
                <div className="infobox_wrapper">
                  <h6 className="mb-2">{t("test_slash_Packages")}</h6>
                  {cardEntry && cardEntry.length > 0 ? (
                    cardEntry.map((item: any, index: any) => {
                      return (
                        <>
                          <hr className="checkout_hr" />
                          <div className="row">
                            <div className="col-lg-1">
                              <span
                                className="fa fa-trash delete_btn"
                                onClick={(e) => RemoveFromCart(e)}
                                data-id={item?.Id}
                              ></span>
                            </div>
                            <div className="col-lg-11">
                              <div className="d-flex flex-row justify-content-between mb-2 align-items-start">
                                {item?.Type && (
                                  <div className="text-capitalize  f-14">
                                    {item?.TestName + " (" + item?.Type + ")"}
                                  </div>
                                )}
                                {data?.type === "test" && <div className="text-capitalize font-weight-bold f-14">{data?.data?.TestName}</div>}
                                <div className="text-capitalize font-weight-bold fs-16">
                                  &#x20B9;
                                  {item?.SellingPrice
                                    ? `${item?.SellingPrice}`
                                    : "0"}
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })
                  ) : (
                    <>
                      <hr className="checkout_hr" />
                      <div className="d-flex flex-row justify-content-between text-warning mb-2">
                        <div className="text-capitalize font-weight-bold f-14">
                          No test/package added
                        </div>
                      </div>
                      <hr className="checkout_hr" />
                      <div className="text-center">
                        <button
                          className="book--hexagon active"
                          onClick={(e: any) =>
                            router.push(ROUTE.BOOKATEST, {
                             query:{
                                tabs: "",
                                categoryId: "",
                                subCategoryId: "",
                             }
                            })
                          }
                        >
                          <span>
                            ADD
                            <i
                              className="fa fa-long-arrow-right ml-20"
                              aria-hidden="true"
                            ></i>
                          </span>
                        </button>
                      </div>
                    </>
                  )}
                  {cardEntry && cardEntry.length > 0 ? (
                    <div className="add_more_btn text-right">
                      <a href="/book-a-test">
                        <button className="book--hexagon active m-0 pd_">
                          <span>
                            <i
                              className="fa fa-plus mr-1"
                              style={{ float: "left" }}
                            ></i>{" "}
                            {t("add_more")}
                          </span>
                        </button>
                      </a>
                    </div>
                  ) : (
                    ""
                  )}
                  <br></br>
                  {CartTotal() > 0 && (
                    <>
                      <div className="d-flex flex-row justify-content-between text-success mb-2">
                        <div className="text-capitalize font-weight-bold f-14">
                          {t("home_collection_fee")}
                        </div>
                        {CartTotal() > 1500 ? (
                          <div className="text-capitalize font-weight-bold f-14">
                            {" "}
                            {t("fee")}
                          </div>
                        ) : (
                          CartTotal() > 0 && "₹150"
                        )}
                      </div>
                      <hr className="checkout_hr" />
                      <div className="d-flex flex-row justify-content-between">
                        <h6 className="text-dark">{t("total")}</h6>
                        {CartTotal() > 1500 ? (
                          <div className="text-capitalize font-weight-bold f-14">
                            {" "}
                            &#x20B9;{CartTotal()}
                          </div>
                        ) : (
                          CartTotal() > 0 && (
                            <div className="text-capitalize font-weight-bold f-14">
                              &#x20B9;{CartTotal() + 150}
                            </div>
                          )
                        )}
                      </div>
                      {/* <hr className="checkout_hr" /> */}

                      {data?.data?.MRP - data?.data?.SellingPrice > 0 && (
                        <div className="text-success text-capitalize font-weight-bold">
                          You will save &#x20B9;{CartTotal("mrp") - CartTotal()}{" "}
                          on this order
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {(() => {
        if (verifyOtpLoad) {
          return (
            <>
              <img
                height="1"
                width="1"
                src="https://ade.clmbtech.com/cde/eventTracking.htm?pixelId=14441&_w=1&_t=2"
                style={{ display: "none" }}
              />
            </>
          );
        }
      })()}
    </React.Fragment>
  );
};
export const getStaticProps = async ({ locale }:{locale: string}) => {
  // let Slug = ROUTE.CHECKOUT?.replace("/en", "");
  // const data: any = await Api.post(Url.seoDetail, { Slug: Slug });
  return {
    props: {
      // seoData: data?.Result?.Details || {},
        ...(await serverSideTranslations(locale, ["common"])),    
    }
  };
};
export default CheckOut;
