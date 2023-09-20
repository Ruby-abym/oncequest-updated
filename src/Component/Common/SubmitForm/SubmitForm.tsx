import { Formik } from 'formik';
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { onlyNumber } from '../../../Utils/index';
import { validateSubmitForm} from '../../../Utils/Validation';
import { submitAction } from '@/redux/action';
import * as Yup from 'yup';
import { useTranslation } from 'next-i18next';

const initialValue={Name: "",Email: "",Mobile: "",Message: "",CityId: ""};
const SubmitForm = (props:any) => {
  const  {t}  = useTranslation();
  const {heading, des, PageSrc, validationSchema}=props;
    const dispatch = useDispatch();
    const router=useRouter();
    const cityData = useSelector((state:any) => state.dashboard.city);

    const handleSubmit = (val:any) => {
        let data:any={...val};
        data.SourceUrl = window.location.href;
        dispatch(submitAction.submitQueryAction(data,history));
    };
    return (
        <section className="department_form section">
                <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="headingmains text-center pb-3">
                            <h1 className="right aos-init pb-2"> {heading} </h1>
                            <p>{des}</p>
                        </div>
                    </div>
                </div>
                <Formik
                  initialValues={initialValue}
                  enableReinitialize={true}
                  validationSchema={validationSchema ? validationSchema : validateSubmitForm}
                  onSubmit={(val:any) => {
                      handleSubmit(val)
                  }}
                  render={({ values, handleChange, errors, touched, handleBlur, handleSubmit}) => (
                  <form onSubmit={handleSubmit}>
                  <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-9 col-xl-9">
                      <div className="row align-items-center mt-4">
                        <div className="col-sm">
                            <input type="text" name="Name" className="form-control" placeholder={t("name")} onChange={handleChange} onBlur={handleBlur} value={values?.Name}/>
                            {touched?.Name && errors?.Name &&<span className="error_message">{t(errors?.Name as any)}</span>}
                        </div>
                        <div className="col-sm mt-4 mt-sm-0">
                            <input type="text" name="Mobile" className="form-control" placeholder={t("mobile_number")} onKeyPress={onlyNumber} onChange={handleChange} onBlur={handleBlur} value={values?.Mobile}/>
                            {touched?.Mobile && errors?.Mobile &&<span className="error_message">{t(errors?.Mobile as any)}</span>}
                        </div>
                      </div>
                      <div className="row align-items-center mt-4">
                        <div className="col-sm">
                            <input type="text" className="form-control" placeholder={t("email")} name="Email" onChange={handleChange} onBlur={handleBlur} value={values?.Email}/>
                            {touched?.Email && errors?.Email &&<span className="error_message">{t(errors?.Email as any)}</span>}
                        </div>
                        <div className="col-sm mt-4 mt-sm-0">
                            <select className="form-control" name="CityId" id="CityId" onChange={handleChange} onBlur={handleBlur} value={values.CityId}>
                                <option value="">{t("city")}</option>
                                {cityData && cityData.length > 0 && cityData?.map((item:any, i:any)=> (
                                <option className="text-uppercase" value={item?.Id} key={i}>{t(item?.Name)}</option>
                                ))}
                            </select>
                            {touched?.CityId && errors?.CityId &&<span className="error_message">{t(errors?.CityId as any)}</span>}
                        </div>
                      </div>
                      <div className="row align-items-center">
                        <div className="col mt-4">
                          <textarea className="form-control" placeholder={t("message")} name="Message" onChange={handleChange} onBlur={handleBlur} value={values?.Message}></textarea>
                          {touched?.Message && errors?.Message &&<span className="error_message">{t(errors?.Message as any)}</span>}
                        </div>
                      </div>
                      <div className="row text-center my-3">
                        <div className="col">
                          <button type="submit" className="button--hexagon active mt-4"><span>{t("submit_btn")} <p><svg xmlns="http://www.w3.org/2000/svg" width="16.817" height="10.695" viewBox="0 0 16.817 10.695">
                            <path id="Icon_material-arrow-forward" data-name="Icon material-arrow-forward" d="M0,6l-.942.942,3.73,3.737H-11.47v1.337H2.787l-3.73,3.737L0,16.695l5.347-5.347Z" transform="translate(11.47 -6)" fill="#114a82"></path>
                          </svg>
                          </p></span></button>
                        </div>
                      </div>
                    </div>
                  </div>
                  </form>
                  )}
                />
                </div>
              </section>
    )
}
export default React.memo(SubmitForm)
