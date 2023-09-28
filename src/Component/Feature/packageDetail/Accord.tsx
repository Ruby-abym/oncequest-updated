import React, { useState } from 'react'

const PkjAccord = (props:any) => {
    const {title,description}=props;
    const [isActive, setIsActive] = useState(false);
    return (
        <li>
            <div className="question" onClick={()=>{setIsActive(!isActive)}}>{title}<i className={isActive ? "fa fa-angle-up" :"fa fa-angle-down"}></i></div>
            {isActive && 
            <div className="answer active">
                <div>
                {description && description?.length > 0 && description.map((item:any, i:any)=>(
                    <div className="text-capitalize" key={i} dangerouslySetInnerHTML={{__html: item?.title ? item?.title : ""}}></div>
                ))}
                </div>
            </div>
            } 
        </li>
    )
}
export default PkjAccord
