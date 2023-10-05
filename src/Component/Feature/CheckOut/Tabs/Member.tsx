import React, { useState } from "react";
import styles from "@/styles/checkout.module.css";
import AddEditMemberChk from "./AddEditMemberChk";

const Member = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [editData, setEditData] = useState<any>({});
  const handleOpen = (data: any) => {
    setEditData(data);
    setOpen(true);
  };
  const handleClose = () => {
    setEditData({});
    setOpen(false);
  };
  const handleSubmit = () => {};
  return (
    <React.Fragment>
      <div className={styles.paddingbox}>
        <div className={styles.memberBoxList}>
          <div>
            <a
              href=""
              style={{ width: "150px", padding: "5px 20px" }}
              className="book--hexagon active"
              onClick={(e: any) => {
                e.preventDefault();
                handleOpen({});
              }}
            >
              <span className="text-capitalize">
                <img
                  className="mr-2"
                  src="/assets/img/my-profile/white-plus.png"
                  aria-hidden="true"
                />
                Add Member
              </span>
            </a>
          </div>
          <div className={`${styles.memberBox} ${styles.activeBox}`}>
            <div className={styles.memberDetails}>
              <div>
                <i className="fa fa-user" aria-hidden="true"></i>
                Sonu Kumar,
              </div>
              <div>
                <i className="fa fa-male" aria-hidden="true"></i>
                Male, 27 yrs,
              </div>
              <div>
                <i className="fa fa-handshake-o" aria-hidden="true" style={{fontSize:"12px"}}></i>
                Self
              </div>
              <div>
                <i className="fa fa-phone" aria-hidden="true"></i>
                +91 9152124555
              </div>
            </div>
            <div className={styles.editAddressIcon}>
              <img
                src="/assets/img/my-profile/yedit.png"
                onClick={() => handleOpen({ id: 1 })}
              />
            </div>
            <div className={styles.selectedIcon}>
              <img src="/assets/img/my-profile/ptick.png" />
            </div>
          </div>
          <div className={`${styles.memberBox}`}>
            <div className={styles.memberDetails}>
              <div>
                <i className="fa fa-user" aria-hidden="true"></i>
                Sonu Kumar,
              </div>
              <div>
                <i className="fa fa-male" aria-hidden="true"></i>
                Male, 27 yrs,
              </div>
              <div>
                <i className="fa fa-handshake-o" aria-hidden="true" style={{fontSize:"12px"}}></i>
                Self
              </div>
              <div>
                <i className="fa fa-phone" aria-hidden="true"></i>
                +91 9152124555
              </div>
            </div>
            <div className={styles.editAddressIcon}>
              <img
                src="/assets/img/my-profile/bedit.png"
                onClick={() => handleOpen({ id: 1 })}
              />
            </div>
            {/* <div className={styles.selectedIcon}>
              <img src="/assets/img/my-profile/ptick.png" />
            </div> */}
          </div>
          <div className={`${styles.memberBox}`}>
            <div className={styles.memberDetails}>
              <div>
                <i className="fa fa-user" aria-hidden="true"></i>
                Sonu Kumar,
              </div>
              <div>
                <i className="fa fa-male" aria-hidden="true"></i>
                Male, 27 yrs,
              </div>
              <div>
                <i className="fa fa-handshake-o" aria-hidden="true" style={{fontSize:"12px"}}></i>
                Self
              </div>
              <div>
                <i className="fa fa-phone" aria-hidden="true"></i>
                +91 9152124555
              </div>
            </div>
            <div className={styles.editAddressIcon}>
              <img
                src="/assets/img/my-profile/bedit.png"
                onClick={() => handleOpen({ id: 1 })}
              />
            </div>
            {/* <div className={styles.selectedIcon}>
              <img src="/assets/img/my-profile/ptick.png" />
            </div> */}
          </div>
        </div>
      </div>
      {open && (
        <AddEditMemberChk
          open={open}
          editData={editData}
          handleClose={handleClose}
          handleSubmit={handleSubmit}
        />
      )}
    </React.Fragment>
  );
};

export default Member;
