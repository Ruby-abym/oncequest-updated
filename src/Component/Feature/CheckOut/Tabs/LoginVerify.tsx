import React, { useEffect, useState } from "react";
import styles from "@/styles/checkout.module.css";
import OtpInput from "react-otp-input";
import { useDispatch, useSelector } from "react-redux";
import { checkOutAction } from "@/redux/action";
import { onlyNumber } from "@/Utils";

const LoginVerify = () => {
  const dispatch = useDispatch();
  const [mobile, setMobile] = useState<string>("");
  const [otp, setOtp] = useState<string>("");
  const [error, setError] = useState<any>("");
  const [login, setLogin] = useState<boolean>(false);
  const sendOtp = useSelector((state: any) => state.checkout.sendOtp);
  const OtpFailed = useSelector((state: any) => state.checkout.failOtp);

  const handleMobileChange = (e: any) => setMobile(e.target.value);

  const handleLogin = () => {
    if (!mobile) {
      setError("Mobile Number is required");
    } else if (mobile && mobile?.length != 10) {
      setError("Enter 10 Digit");
    } else {
      dispatch(checkOutAction.sendOtpAction({ MobileNo: mobile }));
    }
  };

  useEffect(() => {
    if (sendOtp?.UserId) {
      setLogin(true);
    }
  }, [sendOtp]);
  useEffect(() => {
    if (OtpFailed) {
      setOtp("");
    }
    return () => {};
  }, [OtpFailed]);

  const handleVerifyOtp = () => {
    let data = {
      MobileNo: mobile,
      UserId: sendOtp?.UserId,
      Otp: otp,
    };
    dispatch(checkOutAction.verifyOtpAction(data));
  };
  return (
    <div className={styles.paddingbox}>
      <div className="row">
        <div className="col-md-6">
          {!login && (
            <React.Fragment>
              <div className={styles.loginInp}>
                <div>Enter Mobile Number</div>
                <input
                  className="from-control"
                  placeholder="10 digit mobile number"
                  onKeyPress={onlyNumber}
                  maxLength={10}
                  onChange={handleMobileChange}
                  value={mobile}
                />
                {error && <div className="error_message">{error}</div>}
                {sendOtp?.error?.MobileNo && (
                  <span className="error_message">
                    {sendOtp?.error?.MobileNo[0]}
                  </span>
                )}
              </div>
              <button
                type="button"
                className="book--hexagon active"
                style={{ padding: "6px 25px" }}
                onClick={handleLogin}
              >
                <span className="text-capitalize">
                  Continue
                </span>
              </button>
            </React.Fragment>
          )}
          {login && (
            <React.Fragment>
              <div className={styles.verifyText}>
                Please enter verification code(OTP) sent to: +91 7565059119{" "}
                <span onClick={() => setLogin(false)}>Change Number</span>
              </div>
              <OtpInput
                numInputs={4}
                inputStyle={{
                  width: "36px",
                  height: "36px",
                  borderWidth: 0,
                  borderBottom: "1px solid #404040",
                }}
                value={otp}
                onChange={(val: any) => setOtp(val)}
                containerStyle={{ gap: "10px", color: "#404040" }}
                renderInput={(props) => <input {...props} onKeyPress={onlyNumber}/>}
              />
              <p className={styles.resendText}>
                If you didn't receive a code!{" "}
                <span onClick={handleLogin}>Resend</span>
              </p>
              <button
                type="button"
                className="book--hexagon active"
                style={{ padding: "6px 30px" }}
                onClick={handleVerifyOtp}
              >
                <span className="text-capitalize">Verify</span>
              </button>
            </React.Fragment>
          )}
        </div>
        <div className="col-md-6">
          <div className={styles.secureLogin}>
            <h6>Advantage of our secure login</h6>
            <div>
              <img src="/assets/img/star.png" alt="" />
              <span>Lorem ipsum is placeholder text commonly.</span>
            </div>
            <div>
              <img src="/assets/img/star.png" alt="" />
              <span>Lorem ipsum is placeholder text commonly.</span>
            </div>
            <div>
              {" "}
              <img src="/assets/img/star.png" alt="" />
              <span>Lorem ipsum is placeholder text commonly.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginVerify;
