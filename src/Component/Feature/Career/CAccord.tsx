import React, { useState } from 'react'

const CAccord = (props:any) => {
    const {title,description,data}=props;
    const [isActive, setIsActive] = useState(false);
    return (
        <li key={data}>
            <div className="question" onClick={()=>{setIsActive(!isActive)}}><img src={isActive ? "/assets/img/wrong_icon.png" : "/assets/img/right_icon.png"} className="scale_booknow" alt=""/> {title}</div>
            <div className={isActive ? "answer active" : "answer"} dangerouslySetInnerHTML={{__html: description ? description : ""}}></div>
        </li>
    )
}
export default CAccord