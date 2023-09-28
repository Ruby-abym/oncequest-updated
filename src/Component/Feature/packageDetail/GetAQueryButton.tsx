import React from "react";

const GetAQueryButton = ({className, setModalIsOpen}:any) => {
  return (
    <a
      href={"#"}
      className={className ? className : "button--hexagon booknow mt-0"}
      onClick={()=>setModalIsOpen(true)}
    >
      <span>
        GET A CALL BACK
        <i className="fa fa-long-arrow-right ml-20" aria-hidden="true"></i>
      </span>
    </a>
  );
};

export default GetAQueryButton;
