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
              <option value="">Specialist's Name</option>
              <option value="kenan-aksu-do">Aksu, Kenan D.O.</option>
              <option value="timothy-p-amann-d-o">Amann, Timothy D.O.</option>
              <option value="ashley-anderson-md">Anderson, Ashley M.D.</option>
              <option value="richard-f-balotti-jr-m-d">Balotti, Richard M.D.</option>
              <option value="evan-bash-md">Bash, Evan M.D.</option>
              <option value="john-h-benner-md">Benner, John M.D.</option>
              <option value="jeffrey-berger-do">Berger, Jeffrey D.O.</option>
              <option value="michael-birns">Birns, Michael M.D.</option>
              <option value="mark-brigham-m-d">Brigham, Mark M.D.</option>
              <option value="larry-chou-m-d">Chou, Larry M.D.</option>
              <option value="louis-j-ciliberti-dpm-ms">Ciliberti, Louis DPM</option>
              <option value="jeff-citara-d-o-m-s">Citara, Jeffrey D.O.</option>
              <option value="anne-e-colton-md">Colton, Anne M.D.</option>
              <option value="james-costanzo-m-d">Costanzo, James M.D.</option>
              <option value="linda-dandrea-m-d">D'Andrea, Linda M.D.</option>
              <option value="nicholas-dinubile-m-d">DiNubile, Nicholas M.D.</option>
              <option value="keli-donnelly-d-o">Donnelly, Keli D.O.</option>
              <option value="eugene-elia-m-d">Elia, Eugene M.D.</option>
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