import { Formik } from "formik";
import React from "react";
import ReactModal from "react-modal";
import { validateCancleOrder } from "@/Utils/Validation";
const initialValue = {
  BookingID: "3566677786",
  OrderName: "Full body Cheakup",
  Message: "",
  Reason: "",
};
interface IMember {
  open: boolean;
  editData: any;
  handleClose: () => void;
  handleSubmit: (data: any) => void;
}
const CancelOrder = ({
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
          <h6 className="pb-3">Cancel Order</h6>
          <div>
            <Formik
              initialValues={initialValue}
              enableReinitialize={true}
              validationSchema={validateCancleOrder}
              onSubmit={(val: any) => {
                /* handleSubmit(val) */
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
                        <label className="profileLabel">Order Details</label>
                        <input
                          type="text"
                          name="OrderName"
                          className="form-control profileInp"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values?.OrderName}
                          disabled={true}
                        />
                        {touched?.OrderName && errors?.OrderName && (
                          <span className="error_message">
                            {errors?.OrderName as any}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label className="profileLabel">Booking ID</label>
                        <input
                          type="text"
                          name="BookingID"
                          className="form-control profileInp"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values?.BookingID}
                          disabled={true}
                        />
                        {touched?.BookingID && errors?.BookingID && (
                          <span className="error_message">
                            {errors?.BookingID as any}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <select
                          name="Reason"
                          className="form-control profileInp"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values?.Reason}
                        >
                          <option value="">
                            {" "}
                            Select Reason For Cancellation
                          </option>
                          <option value="1"> Wrong address selected</option>
                          <option value="2">Changed my mind</option>
                          <option value="3">Booked by mistake</option>
                          <option value="4">
                            Want to reschedule my booking
                          </option>
                          <option value="Other">Other</option>
                        </select>
                        {touched?.Reason && errors?.Reason && (
                          <span className="error_message">
                            {errors?.Reason as any}
                          </span>
                        )}
                      </div>
                    </div>
                    {values?.Reason === "Other" && (
                      <div className="col-12">
                        <div className="form-group">
                          <label className="profileLabel">
                            Could You Tell Us A Reason For Canceling?
                          </label>
                          <textarea
                            name="Message"
                            className="form-control profileInp"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values?.Message}
                            rows={3}
                          />
                          {touched?.Message && errors?.Message && (
                            <span className="error_message">
                              {errors?.Message as any}
                            </span>
                          )}
                        </div>
                      </div>
                    )}
                    <div className="col-12 text-center">
                      <button
                        type="submit"
                        className="book--hexagon active sm_form"
                      >
                        <span>
                          Cancel Order
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

export default CancelOrder;
