import React, { useState } from 'react'

const FAccord = (props: any) => {
    const { data, title, description } = props;
    const [isActive, setIsActive] = useState(false);
    console.log('props', props);
    if (data) {
        setIsActive(false);
    } 
    return (
        <li>
            <div className="question" onClick={(e) => { setIsActive(true) }}>{title}<i className={isActive ? "fa fa-angle-up" : "fa fa-angle-down"}></i></div>
      
            {isActive && <div className={isActive == true ? 'answer active' : 'answer'} dangerouslySetInnerHTML={{ __html: description ? description : "" }}></div>}
        </li>
    )
}
export default React.memo(FAccord)
