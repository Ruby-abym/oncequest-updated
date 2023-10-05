import React, {useRef} from "react";
import { Formik,FormikProps, FormikValues } from "formik";
import { useTranslation } from "next-i18next";
import { validateEditProfile } from "@/Utils/Validation";
import { onlyNumber } from "@/Utils";

const initialValue = {
  FirstName: "",
  LastName: "",
  EmailId: "",
  Mobile: "",
  DOB: "",
  Gender: "",
};

const EditProfile = () => {
  const { t } = useTranslation();
  const fileInpRef = useRef<any>();
  const clickOnInp = () => {
    fileInpRef.current?.click();
  }
  const handleSubmit = (values: any) => {
   console.log("hello")
};
  return (
    <div className="edit_profile">
      <div className="heading_box">Edit Profile</div>
      <div className="form_box">
        <Formik
          initialValues={initialValue}
          enableReinitialize={true}
          validationSchema={validateEditProfile}
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
              <div className="d-flex align-items-end mb-3">
                <div className="profile_upload_inp">
                <div className="profile_upload">
                  M{" "}
                </div>
                <img
                    src="/assets/img/my-profile/camera.png"
                    alt=""
                    className="cursor-pointer ml-3"
                    onClick={clickOnInp}
                  />
                  <input type="file" ref={fileInpRef} style={{display:"none"}} accept="image/*"/>
                </div>
                <div className="ml-4">
                  <h4 className="profile_name mb-2">Manoj Gupta</h4>
                  <p>manojgupta4678@gmail.com</p>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label className="profileLabel">First Name</label>
                    <input
                      type="text"
                      name="FirstName"
                      className="form-control profileInp"
                      placeholder="Enter First Name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values?.FirstName}
                    />
                    {touched?.FirstName && errors?.FirstName && (
                      <span className="error_message">{errors?.FirstName as any}</span>
                    )}
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label className="profileLabel">Last Name</label>
                    <input
                      type="text"
                      name="LastName"
                      className="form-control profileInp"
                      placeholder="Enter Last Name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values?.LastName}
                    />
                    {touched?.LastName && errors?.LastName && (
                      <span className="error_message">{errors?.LastName as any}</span>
                    )}
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label className="profileLabel">Mobile Number</label>
                    <input
                      type="text"
                      name="Mobile"
                      className="form-control profileInp"
                      placeholder="Enter Mobile Number"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values?.Mobile}
                      onKeyPress={onlyNumber}
                    />
                    {touched?.Mobile && errors?.Mobile && (
                      <span className="error_message">{errors?.Mobile as any}</span>
                    )}
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label className="profileLabel">Email ID</label>
                    <input
                      type="text"
                      name="EmailId"
                      className="form-control profileInp"
                      placeholder="Enter Email ID"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values?.EmailId}
                    />
                    {touched?.EmailId && errors?.EmailId && (
                      <span className="error_message">{errors?.EmailId as any}</span>
                    )}
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label className="profileLabel">Date of Birth</label>
                    <input
                      type="date"
                      name="DOB"
                      className="form-control profileInp"
                      placeholder="Select DOB"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values?.DOB}
                    />
                    {touched?.DOB && errors?.DOB && (
                      <span className="error_message">{errors?.DOB as any}</span>
                    )}
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label className="profileLabel">Gender</label>
                    <div>
                      <div className="form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="Gender"
                          id="flexRadioDefault1"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value="Male"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault1"
                        >
                          Male
                        </label>
                      </div>
                      <div className="form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="Gender"
                          id="flexRadioDefault2"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value="Female"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault2"
                        >
                          Female
                        </label>
                      </div>
                    </div>
                    {touched?.Gender && errors?.Gender && (
                      <span className="error_message">{errors?.Gender as any}</span>
                    )}
                  </div>
                </div>
                <div className="col-12 text-center">
                  <button
                    type="submit"
                    className="book--hexagon active sm_form" /* onClick={() => { file?.length == 0 && setFileErr("file upload is required.") }} */
                  >
                    <span>
                      Save Profile
                      <i
                        className="fa fa-long-arrow-right ml-20"
                        aria-hidden="true"
                      ></i>
                    </span>
                  </button>
                </div>
              </div>
            </form>
          )}
        />
      </div>
    </div>
  );
};

export default EditProfile;
