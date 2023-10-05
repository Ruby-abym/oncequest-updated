import React, { useState } from "react";
import AddEditMember from "./AddEditMember";

const FamilyMember = () => {
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
            <span className="col">Family Members</span>
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
                Add New Member
              </span>
            </a>
          </div>
        </div>
        <div className="address_box_list">
          <div className="address_box">
            <div className="member_details">
              <img src="/assets/img/my-profile/user_pic.png" alt="" />
              <div>
                <h6>Manoj Gupta</h6>
                <p>+91-9599043601</p>
                <p> Male, 24 Yrs</p>
                <p>Self</p>
              </div>
            </div>
            <div className="d-flex flex-column  justify-content-end aling-items-end">
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
            <div className="member_details">
              <img src="/assets/img/my-profile/user_pic.png" alt="" />
              <div>
                <h6>Manoj Gupta</h6>
                <p>+91-9599043601</p>
                <p> Male, 24 Yrs</p>
                <p>Self</p>
              </div>
            </div>
            <div className="d-flex flex-column  justify-content-end aling-items-end">
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
        <AddEditMember
          open={open}
          editData={editData}
          handleClose={handleClose}
          handleSubmit={handleSubmit}
        />
      )}
    </React.Fragment>
  );
};

export default FamilyMember;
