import { onlyNumber } from "@/Utils";

import { validateEditAddress } from "@/Utils/Validation";
import { Formik } from "formik";
import React from "react";
import ReactModal from "react-modal";
const initialValue = {
  Address1: "",
  Address2: "",
  CityState: "",
  Pincode: "",
  Default: "false"
};
interface IMember {
  open: boolean;
  editData:any;
  handleClose: () => void;
  handleSubmit: (data: any) => void;
}
const AddEditAddressChk = ({ open, handleClose, handleSubmit, editData }: IMember) => {
  ReactModal.setAppElement("body");
  return (
    <ReactModal
      isOpen={open}
      /* style={customStyles} */
      onRequestClose={handleClose}
      className="my_acc_modal"
      overlayClassName="my_acc_overlay"
    >
      <div className="cross_button">
        <img
          src="/assets/img/my-profile/cross.png"
          alt=""
          className="cursor-pointer"
          onClick={handleClose}
        />
        <div className="acc_modal_content">
          <h6 className="pb-3">{editData?.id ? "Edit Address" : "Add New Address"}</h6>
          <div>
            <Formik
              initialValues={initialValue}
              enableReinitialize={true}
              validationSchema={validateEditAddress}
              onSubmit={(val: any) => {
                /* handleSubmit(val) */
                console.log(val,"fdfdfd");
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
                  <div className="row align-items-start">
                    <div className="col-12">
                      <div className="form-group">
                        <label className="profileLabel">Colony/Area/Sector</label>
                        <input
                          type="text"
                          name="Address1"
                          className="form-control profileInp"
                          placeholder="Enter Colony/Area/Sector"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values?.Address1}
                        />
                        {touched?.Address1 && errors?.Address1 && (
                          <span className="error_message">
                            {errors?.Address1 as any}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label className="profileLabel">House No./Building/Flat</label>
                        <input
                          type="text"
                          name="Address2"
                          className="form-control profileInp"
                          placeholder="Enter House No."
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values?.Address2}
                        />
                        {touched?.Address2 && errors?.Address2 && (
                          <span className="error_message">
                            {errors?.Address2 as any}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label className="profileLabel">City,State</label>
                        <input
                          type="text"
                          name="CityState"
                          className="form-control profileInp"
                          placeholder="Enter Your City,State"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values?.CityState}
                        />
                        {touched?.CityState && errors?.CityState && (
                          <span className="error_message">
                            {errors?.CityState as any}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label className="profileLabel">Pincode</label>
                        <input
                          type="text"
                          name="Pincode"
                          className="form-control profileInp"
                          placeholder="Enter Pincode"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values?.Pincode}
                          maxLength={6}
                          onKeyPress={onlyNumber}
                        />
                        {touched?.Pincode && errors?.Pincode && (
                          <span className="error_message">
                            {errors?.Pincode as any}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <div>
                          <div className="form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="Default"
                              id="flexRadioDefault1"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value="true"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexRadioDefault1"
                            >
                              Make Defaut Address
                            </label>
                          </div>
                        </div>
                        {touched?.Default && errors?.Default && (
                          <span className="error_message">
                            {errors?.Default as any}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col-12 text-center">
                      <button
                        type="submit"
                        className="book--hexagon active sm_form"
                      >
                        <span>
                          {editData?.id ? "Update" :"Save"}
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
      </div>
    </ReactModal>
  );
};

export default AddEditAddressChk;
