import React from "react";

const DownloadReport = () => {
  return (
    <div className="tc_box">
      <div className="heading_box">
        <div className="row justify-content-between">
          <span className="col">Download Report</span>
          <span className="col text-right">
            <div className="acc_search_inp">
              <input placeholder="Search Report" />
              <img src="/assets/img/my-profile/search.png" alt="" />
            </div>
          </span>
        </div>
      </div>
      <div className="report_list_box">
        <div className="report_box">
          <div className="row align-items-center justify-content-center">
            <div className="col-sm-4">
              <div className="report_box_details">
                <span>S</span>
                <div>
                  <h6>Sanoj Gupta</h6>
                  <p>Booking ID: 3262754667</p>
                </div>
              </div>
            </div>
            <div className="col text-center">
              <div className="report_mid_sec">Full Body Checkup</div>
              <div className="report_mid_sec_tag">
                <span>Report Generated On: 12 Jul, 2023</span>
              </div>
            </div>
            <div className="col-sm-4 text-right">
              <a
                href=""
                className="book--hexagon active download_acc_report"
                onClick={(e: any) => {
                  e.preventDefault();
                }}
              >
                <span>
                  <img
                    className="mr-2"
                    src="/assets/img/my-profile/download.png"
                    aria-hidden="true"
                  />
                  Download Report
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="report_box">
          <div className="row align-items-center justify-content-center">
            <div className="col-sm-4">
              <div className="report_box_details">
                <span>S</span>
                <div>
                  <h6>Sanoj Gupta</h6>
                  <p>Booking ID: 3262754667</p>
                </div>
              </div>
            </div>
            <div className="col text-center">
              <div className="report_mid_sec">Full Body Checkup</div>
              <div className="report_mid_sec_tag">
                <span>Report Generated On: 12 Jul, 2023</span>
              </div>
            </div>
            <div className="col-sm-4 text-right">
              <a
                href=""
                className="book--hexagon active download_acc_report"
                onClick={(e: any) => {
                  e.preventDefault();
                }}
              >
                <span>
                  <img
                    className="mr-2"
                    src="/assets/img/my-profile/download.png"
                    aria-hidden="true"
                  />
                  Download Report
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="report_box">
          <div className="row align-items-center justify-content-center">
            <div className="col-sm-4">
              <div className="report_box_details">
                <span>S</span>
                <div>
                  <h6>Sanoj Gupta</h6>
                  <p>Booking ID: 3262754667</p>
                </div>
              </div>
            </div>
            <div className="col text-center">
              <div className="report_mid_sec">Full Body Checkup</div>
              <div className="report_mid_sec_tag">
                <span>Report Generated On: 12 Jul, 2023</span>
              </div>
            </div>
            <div className="col-sm-4 text-right">
              <a
                href=""
                className="book--hexagon active download_acc_report"
                onClick={(e: any) => {
                  e.preventDefault();
                }}
              >
                <span>
                  <img
                    className="mr-2"
                    src="/assets/img/my-profile/download.png"
                    aria-hidden="true"
                  />
                  Download Report
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadReport;
