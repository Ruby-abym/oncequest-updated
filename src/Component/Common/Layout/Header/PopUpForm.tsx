import { Formik } from "formik";
import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { onlyNumber } from "@/Utils/index";
import { validateGeneralEnquiry } from '@/Utils/Validation';
import { submitAction } from "@/redux/action";

import { ROUTE } from "@/Const/Route";
import { useTranslation } from "next-i18next";

const initialValue = { Name: "", Email: "", Mobile: "", Message: "", CityId: "" };

const WelcomePopup = (props: any) => {
  const [showPopup, setShowPopup] = useState(true);
  const [loading, setLoading] = useState(true);
  const  {t}  = useTranslation();
  const dispatch = useDispatch();
  const router = useRouter();
  const cityData = useSelector((state: any) => state.dashboard.city);

  const closePopup = () => {
    setShowPopup(false);
  };
  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoading(false);
    }, 1000); // Replace 2000 with the actual loading time in milliseconds
  }, []);

  if (!showPopup || loading) {
    return null;
  }

  const handleSubmit = (values: any) => {
    let val: any = { ...values };
    val.SourceUrl = window.location.href;
    dispatch(submitAction.submitEnquiryAction(val, router));
    setShowPopup(false);
};
  return (
    <div className="modal welcome-modal" role="dialog">
   <div className="modal-dialog for-modal-top" role="document">
      <div className="modal-content">
        <div className="modal-header modal-header-pb">
          <div className="pop-up-content">
            <h5 className="modal-title">Blood Sample Collection from Home</h5>
            <p>Drop your details to book your blood sample collection</p>
          </div>
          <div className="pop-up-img">
            <img
              src="/assets/img/pop-up-img.png"
              className="scale round_img"
              alt=""
            />
          </div>
          <button
            type="button"
            onClick={closePopup}
            className="close cust-pop-close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true" className="model-btn-pop pointer">
              &times;
            </span>
          </button>
        </div>
        <div className="modal-body-n">
          <div className="h-services h-services-pop mt-0-pop">
            <div className="infobox_wrapper">
              <Formik
                initialValues={initialValue}
                enableReinitialize={true}
                validationSchema={validateGeneralEnquiry}
                onSubmit={(val: any) => {
                  handleSubmit(val);
                }}
                render={({
                  values,
                  handleChange,
                  errors,
                  touched,
                  handleBlur,
                  handleSubmit,
                }) => (
                  <form onSubmit={handleSubmit}>
                        <div className="form-group">
                          <input
                            type="text"
                            name="Name"
                            className="form-control"
                            placeholder={t("name")}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values?.Name}
                          />
                          {touched?.Name && errors?.Name && (
                            <span className="error_message">
                              {t(errors?.Name as any)}
                            </span>
                          )}
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            name="Mobile"
                            className="form-control"
                            placeholder={t("mobile_number")}
                            onKeyPress={onlyNumber}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values?.Mobile}
                          />
                          {touched?.Mobile && errors?.Mobile && (
                            <span className="error_message">
                              {t(errors?.Mobile as any)}
                            </span>
                          )}
                        </div>
                        <div className="form-group">
                          <select
                            className="form-control"
                            name="CityId"
                            id="CityId"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values?.CityId}
                          >
                            <option value="">{t("city")}*</option>
                            {cityData &&
                              cityData.length > 0 &&
                              cityData?.map((item: any, i: any) => (
                                <option
                                  value={item?.Id}
                                  key={i}
                                  className="text-uppercase"
                                >
                                  {t(item?.Name)}
                                </option>
                              ))}
                          </select>
                          {touched?.CityId && errors?.CityId && (
                            <span className="error_message">
                              {t(errors?.CityId as any)}
                            </span>
                          )}
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder={t("email")}
                            name="Email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values?.Email}
                          />
                          {touched?.Email && errors?.Email && (
                            <span className="error_message">
                              {errors?.Email as any}
                            </span>
                          )}
                        </div>
                        <div className="form-group">
                          <textarea
                            className="form-control"
                            placeholder={t("message")}
                            name="Message"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values?.Message}
                          ></textarea>
                          {/* {touched?.Message && errors?.Message && (
                            <span className="error_message">
                              {t(errors?.Message as any)}
                            </span>
                          )} */}
                        </div>
                        <button
                          type="submit"
                          className="book--hexagon active"
                        >
                          <span>
                            {t("submit_btn")}
                            <i
                              className="fa fa-long-arrow-right ml-20"
                              aria-hidden="true"
                            ></i>
                          </span>
                        </button>
                  </form>
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </div>
  );
};

export default WelcomePopup;
