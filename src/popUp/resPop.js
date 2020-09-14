import React, { useState } from 'react';
import './resPop.css';

const ResPop=(props)=> {
const [ressearch, setressearch]=useState(true);
const modalres=()=>{
    setressearch(!ressearch);
}

    return (
        <>
        <div className="responsive-pop">
        <div className="responsive-close " onClick={props.handler}>
              <i className="fa fa-times" aria-hidden="true"></i>
              <p>
                <strong>Close</strong>
              </p>
            </div>
            <div className="res-search-menu">
            { ressearch ?
            <div>
            <select className="select">
            <option value="">Select Speciality</option>
            <option value="Arthroscopy">Arthroscopy</option>
            <option value="Foot And Ankle">Foot And Ankle</option>
            <option value="Hand And Wrist">Hand And Wrist</option>
            <option value="Hip">Hip</option>
            <option value="Interventional Pain Management">Interventional Pain Management</option>
            <option value="Knee">Knee</option>
            <option value="Physical Medicine And Rehabilitation">Physical Medicine And Rehabilitation</option>
            <option value="Regenerative Medicine">Regenerative Medicine</option>
            <option value="Rheumatology">Rheumatology</option>
            <option value="Shoulder And Elbow">Shoulder And Elbow</option>
            <option value="Spine">Spine</option>
            <option value="Sports Medicine">Sports Medicine</option>
          </select>
              <div className="box-mid mt-y">
                <input type="Number" placeholder="ZIP" />
              </div>
              <select className="mt-y select">
                  <option value="0">Distance</option>
                  <option value="1">0-5 Miles</option>
                  <option value="2">5-10 Miles</option>
                  <option value="3">10-15 Miles</option>
                  <option value="4">15-20 Miles</option>
                  <option value="5">20-25 Miles</option>
                  <option value="6">25+ Miles</option>
                </select>
            </div>
            :
            <div className="chang">
            <div className="changer-box">
            <p>Please Enter Your Serach</p>
              <select className="select">
                <option value="0">Specialist's Name</option>
                <option value="1">Audi</option>
                <option value="2">BMW</option>
                <option value="3">Citroen</option>
                <option value="4">Ford</option>
                <option value="5">Honda</option>
                <option value="6">Jaguar</option>
                <option value="7">Land Rover</option>
                <option value="8">Mercedes</option>
                <option value="9">Mini</option>
                <option value="10">Nissan</option>
                <option value="11">Toyota</option>
                <option value="12">Volvo</option>
              </select>
            </div>
            </div>
            }
            <div className="popup-btn mt-y">
            <button className="pop-btn">SERACH</button>
          </div>
          <div className="tog-box">
          <label className="heading">Search by Name</label>
          <div className="tog-switch-text">
            <label className="switch">
              <input type="checkbox"  onClick={modalres}/>
              <span className="slider round"></span>
            </label>
            { ressearch ?
              <label className="tog-text">OFF</label>
             :
              <label className="off">ON</label>
            }
          </div>
        </div>
            </div>
       </div>
        </>
    );
}

export default ResPop;