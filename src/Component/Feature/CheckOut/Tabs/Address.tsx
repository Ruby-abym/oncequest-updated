import React, { useState } from "react";
import styles from "@/styles/checkout.module.css";
import AddEditAddressChk from "./AddEditAddressChk";

const Address = () => {
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
  const data = [
    {
      add: "39/2/7, 4, Madan Mohan Malviya Marg, Sahibabad, Ghaziabad, Uttar Pradesh 201010",
    },
    {
      add: "39/2/7, 4, Madan Mohan Malviya Marg, Sahibabad, Ghaziabad, Uttar Pradesh 201010",
    },
    {
      add: "39/2/7, 4, Madan Mohan Malviya Marg, Sahibabad, Ghaziabad, Uttar Pradesh 201010",
    },
  ];
  return (
    <React.Fragment>
      <div className={styles.paddingbox}>
        <div className={styles.addressBoxList}>
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
                New Address
              </span>
            </a>
          </div>
          {data?.map((ele: any, idx: any) => (
            <div className={`${styles.addressBox} ${idx == 0 ? styles.activeBox : ""}`} key={idx}>
              <div className={styles.addDetails}>
                <div>{ele?.add}</div>
              </div>
              <div className={styles.editAddressIcon}>
                <img
                  src={`assets/img/my-profile/${idx == 0 ? "yedit" : "bedit"}.png`}
                  onClick={() => handleOpen({ id: 1 })}
                />
              </div>
              {idx == 0 && <div className={styles.selectedIcon}>
              <img src="/assets/img/my-profile/ptick.png" />
            </div>}
            </div>
          ))}
        </div>
      </div>
      {open && (
        <AddEditAddressChk
          open={open}
          editData={editData}
          handleClose={handleClose}
          handleSubmit={handleSubmit}
        />
      )}
    </React.Fragment>
  );
};

export default Address;
