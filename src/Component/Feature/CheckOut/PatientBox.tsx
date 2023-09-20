import moment from 'moment';
import React from 'react'

const PatientBox = (props:any) => {
    const {finalValue,Relation, handleEditPatient}=props;
    function getRelation (val:any) {
        let data= Relation.find((ele:any) =>ele.Id?.toString() === val);
        return data?.Name;
    }
    return (
        <div className='col-md-3 '>
            {finalValue?.PatientFirstName ?
            (<div className='p_box'>
                <div className='mb-1 name'><span className="w-75">{finalValue?.PatientFirstName} {finalValue?.PatientLastName}</span><span className="text-center ml-2" onClick={handleEditPatient}><img className="scale_checkout" src="/assets/img/pencil.png" alt=""/></span></div>
                <p className='mb-2'>{finalValue?.PatientRelation &&  getRelation(finalValue?.PatientRelation)}</p>
                <p className='mb-2'><img className="scale_checkout mr-2" src="/assets/img/call.png" alt=""/>{"+91 " + finalValue?.PatientMobile}</p>
                <div className='row '>
                    <div className='col-md-6'><img className="scale_checkout mr-2" src="/assets/img/male.png" alt=""/><span className="text-capitalize">{finalValue?.PatientGender}</span></div>
                    <div className='col-md-6'><img className="scale_checkout mr-2" src="/assets/img/age.png" alt=""/><span>{finalValue?.PatientDob ? Math.floor(moment(new Date()).diff(finalValue?.PatientDob, 'years',true))+"yr+" : ""}</span></div>
                </div>
            </div>)
            :
            (<div className='p_box add'>
            <img className="scale_checkout mb-4" src="/assets/img/plus_circle.png" alt=""/>
            ADD NEW PATIENT
            </div>)}
        </div>
    )
}

export default React.memo(PatientBox)
