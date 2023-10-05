import React, {useState} from "react";
import CancelOrder from "./CancelOrder";

const MyOrder = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [editData, setEditData] = useState<any>({});
  const handleOpen = (data:any) => {setEditData(data);setOpen(true);}
  const handleClose = () => {setEditData({});setOpen(false);}
  const handleSubmit =(data:any) => {};
  return (
    <React.Fragment>
    <div className="tc_box">
      <div className="heading_box">My Orders</div>
      <div className="order_box_list">
      <div className="order_box">
        <div className="order_summary">
          <div className="d-flex justify-content-between flex-wrap">
            <div className="order_name">Manoj Gupta</div>
            <div>
              <span className="mr-2">Booking ID : 3566677786</span>
              <span style={{color: "#C5C4C4"}}>(21 Feb, 2023 11:00PM)</span>
            </div>
          </div>
        </div>
        <div className="middle_order_box">
          <div className="order_details row align-items-stretch">
            <div className="col-md-6">
              <div className="row">
                <div className="col-5">Order Status</div>
                <div className="col-7">Cancelled</div>
              </div>
              <div className="row mt-10">
                <div className="col-5">Slot Date & Time</div>
                <div className="col-7">21 Feb, 2023 11:00PM</div>
              </div>
              <div className="row mt-10">
                <div className="col-5">Order Amount</div>
                <div className="col-7">2325</div>
              </div>
            </div>
            <div className="col-md-6 text-right">
              <div className="h-100 d-flex flex-column align-items-end justify-content-between mr-2">
                <button
                  type="submit"
                  className="book--hexagon active m-0"
                  style={{ width: "220px" }}
                >
                  <span className="text-capitalize">
                    Booking Summary
                    <i
                      className="fa fa-long-arrow-right ml-20"
                      aria-hidden="true"
                    ></i>
                  </span>
                </button>
                <button
                  type="submit"
                  className="book--hexagon red m-0"
                  style={{ width: "220px" }}
                  onClick={()=> handleOpen({id:1})}
                >
                  <span className="text-capitalize">
                    Cancel Order
                    <i
                      className="fa fa-long-arrow-right ml-20"
                      aria-hidden="true"
                    ></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="timeline">
          <div className="row justify-content-between align-items-center flex-nowrap">
            <div className="col d-flex flex-column align-items-center timeline_box first">
              <div className="t_circle"><span></span></div>
              <div className="mt-3">Order Placed</div>
            </div>
            <div className="col d-flex flex-column align-items-center timeline_box">
              <div className="t_circle"><span></span></div>
              <div className="mt-3">Order Confirmed</div>
            </div>
            <div className="col d-flex flex-column align-items-center timeline_box dark">
              <div className="t_circle"><span></span></div>
              <div className="mt-3">Phlebo Allocated</div>
            </div>
            <div className="col d-flex flex-column align-items-center timeline_box dark">
              <div className="t_circle"><span></span></div>
              <div className="mt-3">Sample Inprocess</div>
            </div>
            <div className="col d-flex flex-column align-items-center timeline_box dark">
              <div className="t_circle"><span></span></div>
              <div className="mt-3">Report Generated</div>
            </div>
          </div>
        </div>
      </div>
      <div className="order_box">
        <div className="order_summary">
          <div className="d-flex justify-content-between">
            <div className="order_name">Manoj Gupta</div>
            <div>
              <span className="mr-2">Booking ID : 3566677786</span>
              <span style={{color: "#C5C4C4"}}>(21 Feb, 2023 11:00PM)</span>
            </div>
          </div>
        </div>
        <div className="middle_order_box">
          <div className="order_details row align-items-stretch">
            <div className="col-6">
              <div className="row">
                <div className="col-5">Order Status</div>
                <div className="col-7">Cancelled</div>
              </div>
              <div className="row mt-10">
                <div className="col-5">Slot Date & Time</div>
                <div className="col-7">21 Feb, 2023 11:00PM</div>
              </div>
              <div className="row mt-10">
                <div className="col-5">Order Amount</div>
                <div className="col-7">2325</div>
              </div>
            </div>
            <div className="col-6 text-right">
              <div className="h-100 d-flex flex-column align-items-end justify-content-between mr-2">
                <button
                  type="submit"
                  className="book--hexagon active m-0"
                  style={{ width: "220px" }}
                >
                  <span className="text-capitalize">
                    Booking Summary
                    <i
                      className="fa fa-long-arrow-right ml-20"
                      aria-hidden="true"
                    ></i>
                  </span>
                </button>
                <button
                  type="submit"
                  className="book--hexagon red m-0"
                  style={{ width: "220px" }}
                >
                  <span className="text-capitalize">
                    Cancel Order
                    <i
                      className="fa fa-long-arrow-right ml-20"
                      aria-hidden="true"
                    ></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="timeline">
          <div className="row justify-content-between align-items-center flex-nowrap">
            <div className="col d-flex flex-column align-items-center timeline_box first">
              <div className="t_circle"><span></span></div>
              <div className="mt-3">Order Placed</div>
            </div>
            <div className="col d-flex flex-column align-items-center timeline_box">
              <div className="t_circle"><span></span></div>
              <div className="mt-3">Order Confirmed</div>
            </div>
            <div className="col d-flex flex-column align-items-center timeline_box">
              <div className="t_circle"><span></span></div>
              <div className="mt-3">Phlebo Allocated</div>
            </div>
            <div className="col d-flex flex-column align-items-center timeline_box">
              <div className="t_circle"><span></span></div>
              <div className="mt-3">Sample Inprocess</div>
            </div>
            <div className="col d-flex flex-column align-items-center timeline_box">
              <div className="t_circle"><span></span></div>
              <div className="mt-3">Report Generated</div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    {open && <CancelOrder open={open} editData={editData} handleClose={handleClose} handleSubmit={handleSubmit}/>}
    </React.Fragment>
  );
};

export default MyOrder;
