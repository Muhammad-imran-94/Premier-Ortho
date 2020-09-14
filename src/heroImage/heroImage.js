import React, { useState }  from "react";
import "./heroImage.css";


const Heroimage = (props) => {
const [resnavlist, setresnavlist]=useState(false);

const navbar=()=>{
  setresnavlist(!resnavlist);
}

  return (
    <>
    {resnavlist &&
      <div className="res-navlist">
        <div className="nav-closer">
          <i className="fa fa-times" aria-hidden="true" onClick={navbar}></i>
        </div>
        <div className="res-search">
        <input type="text"  />
        <i className="fa fa-search fa-2x" aria-hidden="true" ></i>
        </div>
        <div className="mobile-list">
        <ul><li><a href="navlink">PHYSICIANS</a></li></ul>
        <ul><li><a href="navlink">LOCATIONS</a></li></ul>
        <ul><li><a href="navlink">SPECIALTIES</a></li></ul>
        <ul><li><a href="navlink">PHYSICAL THERAPY</a></li></ul>
        <ul><li><a href="navlink">PATIENT RESOURCES</a></li></ul>
        <ul><li><a href="navlink">CAREERS</a></li></ul>
      </div>
      </div>
    }
      <div className="mobile-nav">
        <div className="res-nav-logo">
          <img src="premier-logo-resp.png" alt="res-nav-logo" />
        </div>
        <div className="toggler">
          <img src="group-2.png" alt="res-nav-toggler" onClick={navbar}/>
        </div>
      </div>
      <div className="Hero-image">
        <div className="img-text">
          <div className="text-content">
            <span>GOODBYE PAIN.</span>
            <span>HELLO PLAYTIME.</span>
            <div className="text-para">
              <p>
                Get back to what you love doing most. With a full spectrum of
                orthopaedic services in locations throughout the Greater
                Philadelphia region, we'll help you through it.
              </p>
            </div>
            <div className="button">
              <button className="btn"> FIND A SPECIALIST</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Heroimage;
