import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import {
  checkOutAction,
  dashboardAction,
  packageAction,
  submitAction,
} from "../../redux/action";
import { ROUTE } from "@/Const/Route";
import BreadCrumb from "@/Component/Common/BreadCrumb";
import moment from "moment";
import Api from "@/redux/common/api";
import { SITE_URL, Url } from "@/redux/common/url";
import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";

import DatePicker from "react-datepicker";

import { onlyNumber } from "@/Utils/index";
import { validateHomeCollection } from "@/Utils/Validation";
import { Formik } from "formik";

import WhyOncq from "@/Component/Feature/Home/WhyOncq";
import HomeCollTandC from "@/Component/Feature/HomeCollection/HomeCollTandC";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const initialValue = {
  FirstName: "",
  LastName: "",
  Mobile: "",
  EmailId: "",
  CityId: "",
  PreferredDate: null,
  PreferredTime: "",
  PackageId: "",
  Address: "",
  Other: "",
};
interface MyPageProps {
    seoData: any;
  }
const HomeCollectionForm: NextPage<MyPageProps> = ({seoData})=> {
  const [initialRenderComplete, setInitialRenderComplete] = useState<boolean>(false);
  useEffect(() => {
    setInitialRenderComplete(true);
  }, []);
  const {t} = useTranslation();
  const router = useRouter();
  const dispatch = useDispatch();
  const datepickerRef = useRef(null);
  const cityData = useSelector((state: any) => state.dashboard.city);
  const packageDt: any = useSelector(
    (state: any) => state.package.list?.Packages
  );
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  useEffect(() => {
    window?.scrollTo(0, 0);
    dispatch(packageAction.listPackageAction({}));
  }, []);

  const handleSubmit = (values: any) => {
    let newDt: any = {};
    newDt.MobileNo = values?.Mobile;
    newDt.PatientFirstName = values?.FirstName;
    newDt.PatientLastName = values?.LastName;
    newDt.PatientGender = null;
    newDt.PatientMobile = values?.Mobile;
    newDt.CustomerName = `${values?.FirstName} ${values?.LastName}`;
    newDt.CustomerEmail = values?.EmailId;
    newDt.CustomerAddressLine1 = values?.Address;
    newDt.CustomerCityId = values?.CityId;
    newDt.ItemId = values?.PackageId;
    newDt.ItemType = "package";
    newDt.ScheduleDate =
      values?.PreferredDate &&
      moment(values?.PreferredDate).format("YYYY-MM-DD");
    newDt.ScheduleTime =
      values?.PreferredTime &&
      moment(values?.PreferredTime, ["HH:mm"]).format("h:mm:ss");
    newDt.SourceUrl = window.location.href;
    dispatch(checkOutAction.createBookingAction(newDt, history));
    setButtonDisabled(true);
  };
  function handleClickDatepickerIcon() {
    const datepickerElement: any = datepickerRef?.current;
    datepickerElement?.setFocus(true);
  }
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
              url: 'https://admin.oncquestlabs.com/public/en/uploads/packages/inner-fitness-advance1643629102.jpg',
              alt: 'Og Image Alt'
            }
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
      <BreadCrumb page={t("query_form")} data={{ slug: "", path: "" }} />
      <section
        className="thank-section prescription-bottom home-pre-bott"
        style={{ backgroundImage: "url(/assets/img/home_collection.png)" }}
      >
        {/* <img className="scale d-none d-md-block" src="/assets/img/home_collection.png" alt="" /> */}
        <div className="container">
          <div className="tab-content">
            <div id="organs" className="tab-pane fade in active show">
              <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-4">
                  <div className="h-services">
                    <Formik
                      initialValues={initialValue}
                      enableReinitialize={true}
                      validationSchema={validateHomeCollection}
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
                        setFieldValue,
                      }) => (
                        <form onSubmit={handleSubmit}>
                          <div className="infobox_wrapper">
                            <h4 className="mr-10">{t("query_form")}</h4>
                            <div className="ln-1 mr-10">
                              {t("query_form_content1")}
                              <br />
                              {t("query_form_content2")}
                            </div>
                            <div className="form-group">
                              <input
                                type="text"
                                name="FirstName"
                                className="form-control"
                                placeholder={t("first_name")}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values?.FirstName}
                              />
                              {touched?.FirstName && errors?.FirstName && (
                                <span className="error_message">
                                  {t(errors?.FirstName as any)}
                                </span>
                              )}
                            </div>
                            <div className="form-group">
                              <input
                                type="text"
                                name="LastName"
                                className="form-control"
                                placeholder={t("last_name")}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values?.LastName}
                              />
                              {touched?.LastName && errors?.LastName && (
                                <span className="error_message">
                                  {t(errors?.LastName as any)}
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
                              <input
                                type="text"
                                name="EmailId"
                                className="form-control"
                                placeholder={t("email")}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values?.EmailId}
                              />
                              {touched?.EmailId && errors?.EmailId && (
                                <span className="error_message">
                                  {t(errors?.EmailId as any)}
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
                                value={values.CityId}
                              >
                                <option value="">{t("city")}*</option>
                                {cityData &&
                                  cityData.length > 0 &&
                                  cityData?.map((item: any, i: any) => (
                                    <option
                                      className="text-uppercase"
                                      value={item?.Id}
                                      key={i}
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
                                placeholder={t("address")}
                                name="Address"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values?.Address}
                              />
                              {/* {touched?.Address && errors?.Address && <span className="error_message">{errors?.Address as any}</span>} */}
                            </div>
                            <div className="form-group">
                              <div className="dt_picker">
                                <DatePicker
                                  ref={datepickerRef}
                                  selected={values?.PreferredDate}
                                  className="form-control"
                                  onChange={(value: any) =>
                                    value &&
                                    setFieldValue("PreferredDate", value)
                                  }
                                  minDate={new Date()}
                                  dateFormat="dd-MM-yyyy"
                                  showMonthDropdown
                                  showYearDropdown
                                  peekNextMonth
                                  dropdownMode="select"
                                  placeholderText={`${t("preferred_date")}*`}
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
                              {touched?.PreferredDate &&
                                errors?.PreferredDate && (
                                  <span className="error_message">
                                    {t(errors?.PreferredDate as any)}
                                  </span>
                                )}
                            </div>
                            <div className="form-group">
                              <div
                                className="input-group date"
                                id="datetimepicker3"
                              >
                                <input
                                  type="time"
                                  className="form-control"
                                  placeholder="PreferredTime"
                                  name="PreferredTime"
                                  value={values?.PreferredTime}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                />
                              </div>
                              {touched?.PreferredTime &&
                                errors?.PreferredTime && (
                                  <span className="error_message">
                                    {t(errors?.PreferredTime as any)}
                                  </span>
                                )}
                            </div>
                            <div className="form-group">
                              <select
                                className="form-control"
                                name="PackageId"
                                id="PackageId"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.PackageId}
                              >
                                <option value="">{t("select_package")}</option>
                                {packageDt &&
                                  packageDt.length > 0 &&
                                  packageDt?.map((item: any, i: any) => (
                                    <option
                                      className="text-uppercase"
                                      value={item?.Id}
                                      key={i}
                                    >
                                      {t(item?.PackageName)}
                                    </option>
                                  ))}
                              </select>
                              {/* {touched?.PackageId && errors?.PackageId && <span className="error_message">{errors?.PackageId as any}</span>} */}
                            </div>
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder={t("other")}
                                name="Other"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values?.Other}
                              />
                            </div>
                            <button
                              type="submit"
                              disabled={isButtonDisabled}
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
                            <div className="f-10">{t("query_form_note")}</div>
                          </div>
                        </form>
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="home-coll-whyonc pt-3">
        <HomeCollTandC />
        <WhyOncq />
      </div>
    </React.Fragment>
  );
}
export const getServerSideProps = async ({ locale }:{locale: string}) => {
    let Slug = ROUTE.HOMECOLLECTION?.replace("/", "");
    const data: any = await Api.post(Url.seoDetail, { Slug: Slug });
    return {
      props: {
        seoData: data?.Result?.Details || {},
      ...(await serverSideTranslations(locale, ["common"])),
      },
    };
  };
export default HomeCollectionForm;
