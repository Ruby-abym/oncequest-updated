import { Formik } from "formik";
import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

import { onlyNumber } from "@/Utils/index";
import {  validateGurugramLab } from "@/Utils/Validation";


import { ROUTE } from "@/Const/Route";
import { useTranslation } from "next-i18next";

const initialValue = {
  Name: "",
  Mobile: "",
  CityId: "",
  QueryNature: "",
  Message: "",
};

const GurugramForm = (props: any) => {
  const { pageSource } = props;
  const {t}  = useTranslation();
  const dispatch = useDispatch();
  const router = useRouter();
  const cityData = useSelector((state: any) => state.dashboard.city);
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  const handleSubmit = (values: any) => {
    let data: any = values;
    data.SourceUrl = router.pathname;
    if (router.pathname === ROUTE.PREVENTIVEHEALTHPKJ) {
      data.QueryNature = values?.QueryNature;
      data.Message = values?.Message;
    } else {
      data.QueryNature = undefined;
      data.Message = undefined;
    }
    // dispatch(submitAction.submitEnquiryAction(data, ));
    setButtonDisabled(true);
  };
  return (
    <div className="h-services mt-3 mt-md-0">
      <div className="infobox_wrapper">
        <Formik
          initialValues={initialValue}
          enableReinitialize={true}
          validationSchema={validateGurugramLab
          }
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
            <form onSubmit={handleSubmit} style={{ width: "100%" }}>
              <h6 className="ln-1 mr-10">{t("gurugram_form_title")}</h6>
              <div className="ln-1 mr-10">{t("neurology_form_note")}</div>
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
                  <span className="error_message">{t(errors?.Name as any)}</span>
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
                  <span className="error_message">{t(errors?.Mobile as any)}</span>
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
                  <option value="">{t("city")}</option>
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
                  <span className="error_message">{t(errors?.CityId as any)}</span>
                )}
              </div>
              {router.pathname === ROUTE.PREVENTIVEHEALTHPKJ && (
                <>
                  <div className="form-group">
                    <select
                      className="form-control"
                      name="QueryNature"
                      id="QueryNature"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values?.QueryNature}
                    >
                      <option value="">{t("query_nature")} </option>
                      <option value="Preventive Health Check" className="text-uppercase">
                        Preventive Health Check
                      </option>
                      <option value="Diagnostic Test" className="text-uppercase">
                        Diagnostic Test
                      </option>
                      <option value="Other" className="text-uppercase">
                        Other
                      </option>
                    </select>
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
                  </div>
                </>
              )}
              <button  type="submit"  disabled={isButtonDisabled} className="book--hexagon active">
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
  );
};

export default GurugramForm;
