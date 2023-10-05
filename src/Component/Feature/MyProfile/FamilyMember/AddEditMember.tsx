import { Formik, FormikProps, FormikValues } from "formik";
import React from "react";
import ReactModal from "react-modal";
import { validateEditMember } from "@/Utils/Validation";
import { onlyNumber } from "@/Utils";
const initialValue = {
  FirstName: "",
  LastName: "",
  Mobile: "",
  DOB: "",
  Relation: "",
};
interface IMember {
  open: boolean;
  editData: any;
  handleClose: () => void;
  handleSubmit: (data: any) => void;
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
const AddEditMember = ({
  open,
  handleClose,
  handleSubmit,
  editData,
}: IMember) => {
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
          <h6 className="pb-3">
            {editData?.id ? "Edit Family Member" : "Add Family Member"}
          </h6>
          <div>
            <Formik
              initialValues={initialValue}
              enableReinitialize={true}
              validationSchema={validateEditMember}
              onSubmit={(val: any) => {
                handleSubmit(val)
                console.log(val);
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
                          <span className="error_message">
                            {errors?.FirstName as any}
                          </span>
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
                          <span className="error_message">
                            {errors?.LastName as any}
                          </span>
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
                          <span className="error_message">
                            {errors?.Mobile as any}
                          </span>
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
                        <label className="profileLabel">Select Relation</label>
                        {/* <input
                          type="text"
                          name="EmailId"
                          className="form-control profileInp"
                          placeholder="Enter Email ID"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values?.EmailId}
                        /> */}
                        <select
                          name="Relation"
                          className="form-control profileInp"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values?.Relation}
                        >
                          <option value=""> Select Relation</option>
                          <option value="Self"> Self</option>
                          <option value="Wife">Wife</option>
                          <option value="Brother">Brother</option>
                        </select>
                        {touched?.Relation && errors?.Relation && (
                          <span className="error_message">
                            {errors?.Relation as any}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col-12 text-center">
                      <button
                        type="submit"
                        className="book--hexagon active sm_form" /* onClick={() => { file?.length == 0 && setFileErr("file upload is required.") }} */
                      >
                        <span>
                          {editData?.id ? "Update" : "Save"}
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

export default AddEditMember;
