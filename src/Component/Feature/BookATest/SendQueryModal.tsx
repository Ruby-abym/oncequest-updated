import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import ReactModal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import { useRouter } from "next/router";
import { submitAction } from "@/redux/action";
import { validateGeneralEnquiry } from "@/Utils/Validation";
import { onlyNumber } from "@/Utils";
import { useTranslation } from "next-i18next";

const SendQueryModal = ({
  modalIsOpen,
  setModalIsOpen,
  test,
  code,
  lab,
}: any) => {
  ReactModal.setAppElement("body");
  const  {t}  = useTranslation();
  const dispatch = useDispatch();
  const router = useRouter();
  const cityData = useSelector((state: any) => state.dashboard.city);
  const [initialValue, setInitialValue] = useState({
    Name: "",
    Email: "",
    Mobile: "",
    CityId: "",
    Message: "",
  });
  const customStyles: any = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#fff",
      minWidth: "300px",
      minHeight: "300px",
      maxWidth: "calc(100vw - 1rem)",
      maxHeight: "calc(100vh - 1rem)",
      overflow: "auto",
    },
  };
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);
  useEffect(() => {
    setInitialValue({ ...initialValue, Message: code });
  }, [code]);

  const handleSubmit = (values: any) => {
    let val: any = { ...values };
    val.SourceUrl = window.location.href;
    if (lab) {
      val.LabName = code;
    } else if (test) {
      val.TestCode = code;
    } else {
      val.PackageCode = code;
    }
    dispatch(submitAction.submitEnquiryAction(val, router));
    setModalIsOpen(false);
  };
  return (
    <ReactModal
      isOpen={modalIsOpen}
      style={customStyles}
      onRequestClose={() => setModalIsOpen(false)}
    >
      <div className="model-header">
        <span
          className="model-btn pointer"
          onClick={() => setModalIsOpen(false)}
        >
          x
        </span>
      </div>
      <>
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
              <div className="infobox_wrapper">
                <h3 className="mr-10">{"GET A CALL BACK"}</h3>
                <div className="ln-1 mr-10">{t("neurology_form_note")}</div>
                <div className="form-group">
                  <input
                    type="text"
                    name="Name"
                    className="form-control"
                    placeholder={t("name") || ""}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values?.Name}
                  />
                  {/* {touched?.Name && errors?.Name && (
                    <span className="error_message">{t(errors?.Name as any)}</span>
                  )} */}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="Mobile"
                    className="form-control"
                    placeholder={t("mobile_number") || ""}
                    onKeyPress={onlyNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values?.Mobile}
                  />
                  {/* {touched?.Mobile && errors?.Mobile && (
                    <span className="error_message">{t(errors?.Mobile as any)}</span>
                  )} */}
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
                  {/* {touched?.CityId && errors?.CityId && (
                    <span className="error_message">{t(errors?.CityId as any)}</span>
                  )} */}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder={t("email") || ""}
                    name="Email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values?.Email}
                  />
                  {/* {touched?.Email && errors?.Email && (
                    <span className="error_message">{errors?.Email as any}</span>
                  )} */}
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    placeholder={t("message") || ""}
                    name="Message"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values?.Message}
                  ></textarea>
                  {/* {touched?.Message && errors?.Message && (
                    <span className="error_message">{t(errors?.Message as any)}</span>
                  )} */}
                </div>
                <button type="submit" className="book--hexagon active">
                  <span>
                    {t("submit_btn")}
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
      </>
    </ReactModal>
  );
};

export default SendQueryModal;
