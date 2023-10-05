import React, { useState } from "react";
import AddEditAddress from "./AddEditAddress";

const ManageAddress = () => {
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
  const handleSubmit = (data: any) => {};
  return (
    <React.Fragment>
      <div className="tc_box">
        <div className="heading_box">
          <div className="row justify-content-between">
            <span className="col">Manage Addresses</span>
            <a
              href=""
              className="book--hexagon add_acc"
              onClick={(e: any) => {e.preventDefault();handleOpen({})}}
            >
              <span>
                <img
                  className="mr-2"
                  src="/assets/img/my-profile/plus.png"
                  aria-hidden="true"
                  width={16}
                  height={16}
                />
                Add New Address
              </span>
            </a>
          </div>
        </div>
        <div className="address_box_list">
          <div className="address_box">
            <div className="add_detail">
              <img src="/assets/img/my-profile/profile-module4.png" alt="" />
              <div>
                <p>D-2, 4th Floor, 188 Shakti Khan 4, Indiarpuram</p>
                <p>Near kailash Mansarover Bhawan</p>
                <p>Pincode : 201014</p>
              </div>
            </div>
            <div className="d-flex flex-column  justify-content-between aling-items-end">
              <div className="default_add">Default Address</div>
              <div className="text-right">
                <img
                  src="/assets/img/my-profile/edit.png"
                  alt=""
                  className="cursor-pointer scale_picon"
                />
                <img
                  src="/assets/img/my-profile/delete.png"
                  alt=""
                  className="cursor-pointer scale_picon ml-3"
                />
              </div>
            </div>
          </div>
          <div className="address_box">
            <div className="add_detail">
              <img src="/assets/img/my-profile/profile-module4.png" alt="" />
              <div>
                <p>D-2, 4th Floor, 188 Shakti Khan 4, Indiarpuram</p>
                <p>Near kailash Mansarover Bhawan</p>
                <p>Pincode : 201014</p>
              </div>
            </div>
            <div className="d-flex flex-column  justify-content-between aling-items-end">
              <div className="default_add"></div>
              <div className="text-right">
                <img
                  src="/assets/img/my-profile/edit.png"
                  alt=""
                  className="cursor-pointer scale_picon"
                  onClick={() => handleOpen({ id: 1 })}
                />
                <img
                  src="/assets/img/my-profile/delete.png"
                  alt=""
                  className="cursor-pointer scale_picon ml-3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {open && (
        <AddEditAddress
          open={open}
          editData={editData}
          handleClose={handleClose}
          handleSubmit={handleSubmit}
        />
      )}
    </React.Fragment>
  );
};

export default ManageAddress;
