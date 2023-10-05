import React from "react";
const color = {
  Pending: "#EE811F",
  Success: "#399CA0",
  Failed: "#DB0000",
};
const PaymentHistory = () => {
  return (
    <div className="tc_box">
      <div className="heading_box">
        <div className="row justify-content-between">
          <span className="col">Payment History</span>
          <span className="col text-right d-flex align-items-center justify-content-end">
            <div className="acc_search_inp">
              <input placeholder="Search Report" />
              <img src="/assets/img/my-profile/search.png" alt="" />
            </div>
            <img
              src="/assets/img/my-profile/filter.png"
              alt=""
              className="ml-2"
              height={18}
              width={18}
            />
          </span>
        </div>
      </div>
      <div className="payment_history_Table">
        <table>
          <thead>
            <tr>
              <th>Description</th>
              <th className="text-center">Status</th>
              <th className="text-center">Transaction Id</th>
              <th className="text-center">Payment Method</th>
              <th className="text-center">Paid</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="order_id">Order ID 587452</div>
                <div>(21 Feb, 2023 11:00PM)</div>
              </td>
              <td align="center" style={{ color: color.Success }}>
                Success
              </td>
              <td align="center">3262754666</td>
              <td align="center">Online</td>
              <td align="center" style={{ color: color.Success }}>
                - ₹ 5850
              </td>
            </tr>
            <tr>
              <td>
                <div className="order_id">Order ID 587452</div>
                <div>(21 Feb, 2023 11:00PM)</div>
              </td>
              <td align="center" style={{ color: color.Failed }}>
                Failed
              </td>
              <td align="center">3262754666</td>
              <td align="center">Online</td>
              <td align="center" style={{ color: color.Failed }}>
                - ₹ 5850
              </td>
            </tr>
            <tr>
              <td>
                <div className="order_id">Order ID 587452</div>
                <div>(21 Feb, 2023 11:00PM)</div>
              </td>
              <td align="center" style={{ color: color.Pending }}>
                Pending
              </td>
              <td align="center">3262754666</td>
              <td align="center">Online</td>
              <td align="center" style={{ color: color.Pending }}>
                - ₹ 5850
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="text-center">
        <button type="submit" className="book--hexagon active sm_form">
          <span className="text-capitalize">
            View All
            <i className="fa fa-long-arrow-right ml-20" aria-hidden="true"></i>
          </span>
        </button>
      </div>
    </div>
  );
};

export default PaymentHistory;
