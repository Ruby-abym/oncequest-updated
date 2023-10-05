import { ProfileTabEnum } from "@/Enum/ProfileTabEnum";
import React from "react";

interface IMyAcc {
  handleClick: (tab: any) => void;
}
const MYPROFILE_URL = "/assets/img/my-profile";
const LinkData: any[] = [
  {
    label: "My Orders",
    count: "20",
    tab: ProfileTabEnum.MyOrder,
    icon: `${MYPROFILE_URL}/dash-module1.png`,
  },
  {
    label: "Download Report",
    count: "20",
    tab: ProfileTabEnum.DownloadReport,
    icon: `${MYPROFILE_URL}/dash-module2.png`,
  },
  {
    label: "Family Members",
    count: "20",
    tab: ProfileTabEnum.FamilyMember,
    icon: `${MYPROFILE_URL}/dash-module3.png`,
  },
  {
    label: "Manage Addresses",
    count: "",
    tab: ProfileTabEnum.ManageAddress,
    icon: `${MYPROFILE_URL}/dash-module4.png`,
  },
  {
    label: "Payment History",
    count: "",
    tab: ProfileTabEnum.PaymentHistory,
    icon: `${MYPROFILE_URL}/dash-module5.png`,
  },
];
const MyAccount: React.FC<IMyAcc> = ({ handleClick }) => {
  return (
    <div className="profile-inbox my_acc">
      <div className="my-pro-heading text-center w-75 m-auto">
        <h2>My Account</h2>
        <div>
          <span></span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          omnis voluptate velit magni, possimus laborum doloribus!
        </p>
      </div>
      <div className="row text-center justify-content-center">
        {LinkData.map((ele: any, idx: any) => (
          <div className="col-md-4" key={idx}>
            <div
              className="my-profile-card text-center"
              onClick={() => handleClick(ele?.tab)}
            >
              <div className="icon-module">
                <img src={ele?.icon} alt="" />
              </div>
              <p>{ele?.label}</p>
              {ele?.count && <span>{ele?.count}</span>}
              <div className="dash-board-btn">
                <a className="btn explorebtn-btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="41.403"
                    height="26.331"
                    viewBox="0 0 41.403 26.331"
                  >
                    <path
                      id="Icon_material-arrow-forward"
                      data-name="Icon material-arrow-forward"
                      d="M16.768,6l-2.32,2.32,9.183,9.2h-35.1v3.291h35.1l-9.183,9.2,2.32,2.32L29.933,19.166Z"
                      transform="translate(11.47 -6)"
                      fill="#424242"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAccount;
