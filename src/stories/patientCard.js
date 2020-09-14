import React from 'react';
import './patientCard.css';

const PatientCard=(props)=> {
    return (
        <>
          <div className="patient-card">
          <div className={" "+props.cardimage}>
          <div className="image-text">
          <p>{props.imagetext}</p>
          </div>  
          </div>  
          </div>  
        </>
    );
}

export default PatientCard;