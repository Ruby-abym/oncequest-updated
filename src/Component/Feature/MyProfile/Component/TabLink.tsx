import React from "react";

interface ITabLink {
    classStyle:any;
    icon:string | any;
    label:string;
    onClick:(val:any)=> void;
}
const TabLink = ({ classStyle,icon,label, onClick}: ITabLink) => {
  return (
    <li className={classStyle}>
      <a onClick={onClick}>
        <div className="icon-module">
          <img src={icon} alt="" />
        </div>
        <p>{label}</p>
      </a>
    </li>
  );
};

export default TabLink;
