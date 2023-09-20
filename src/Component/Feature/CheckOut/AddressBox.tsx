import React from 'react'

const AddressBox = (props:any) => {
    const {finalValue,handleEditAddress}=props;
    return (
        <div className='col-md-3 '>                   
        {finalValue?.CustomerAddressLine1 ?
        (<div className='p_box'>
            <div className="text-center" onClick={handleEditAddress}>{/* <img className="scale_checkout" src="/assets/img/pencil.png" alt=""/> */}</div>
            <div className='mb-1 name'>
                <div>
                <img className="scale_checkout mr-2" src={finalValue?.AddressTag && finalValue?.AddressTag === "home" ? "/assets/img/home.png" : finalValue?.AddressTag === "work" ? "/assets/img/work.png" : "/assets/img/other.png"} alt=""/>
                <span className="text-capitalize text-dark">{finalValue?.AddressTag}</span>
                </div>
            </div>
            <p className='mb-2'>{`
                ${finalValue?.CustomerAddressLine1 ? finalValue?.CustomerAddressLine1+", " : ""}
                ${finalValue?.CustomerAddressLine2 ? finalValue?.CustomerAddressLine2+ ", ": ""}
                ${finalValue?.CustomerLocality ? finalValue?.CustomerLocality+ ", ": ""}
                ${finalValue?.CustomerCityId ? finalValue?.CustomerCityId+ " - ": ""}
                ${finalValue?.CustomerPincode ? finalValue?.CustomerPincode+ ", ": ""}
                ${finalValue?.CustomerStateId ? finalValue?.CustomerStateId: ""}
            `}</p>
        </div>)
        :
        (<div className='p_box add'>
        <img className="scale_checkout mb-4" src="/assets/img/plus_circle.png" alt=""/>
            ADD NEW Address
        </div>)}
    </div>
    )
}

export default React.memo(AddressBox)
