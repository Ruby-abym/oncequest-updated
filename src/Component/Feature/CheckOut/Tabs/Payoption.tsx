import React from "react";
import styles from "@/styles/checkout.module.css";

interface IPayOption {
  totalPayble: number;
}
const Payoption = ({ totalPayble = 0 }: IPayOption) => {
  return (
    <div>
      <div className={styles.payTopHeading}>
        <span>Total Payable Amount</span>
        <span>₹{totalPayble}/-</span>
      </div>
      <hr className={styles.payHr} />
      <div className={styles.payOptionbox}>
        <div className={styles.payMidHeading}>Choose Payment Method:</div>
        <div className={styles.payRadio}>
          <div>
            <input name="payType" type="radio" id="online" />
            <label htmlFor="online">
              Credit card/Debit card/Net Banking 
            <img src="/assets/img/my-profile/upi.png" style={{width:"14%"}}/> 
            <img src="/assets/img/my-profile/paytm.png" height={24}/> 
            <div className={styles?.onlineInfoText}>Pay securely by Credit or Debit or Internet Banking through Easebuzz</div>
            </label>
          </div>
          <div>
            <input name="payType" type="radio" id="offline" />
            <label htmlFor="offline">Pay at Sample Pickup</label>
          </div>
        </div>
        <button
          type="button"
          className="book--hexagon active"
          style={{ padding: "6px 25px", margin: 0 }}
        >
          <span className="text-capitalize">Make Payment</span>
        </button>
      </div>
    </div>
  );
};

export default Payoption;
