import React, { useState } from "react";
import "./nav.css";

const Nav = (props) => {
  const [showHide, setShowide] = useState(false);

  const clickHandler = () => {
    setShowide(!showHide);
  };
  return (
    <>
      <div className="nav">
        <div className="logo-img">
          <img src="new-bigger-logo.jpg" alt="Preimer Logo" />
        </div>
        <div className="Nav-list f-s-14">
          <ul>
            <li>
              <a href="link">PHYSICIANS</a>
            </li>
            <li>
              <a href="link">LOCATIONS</a>
            </li>
            <li>
              <a href="link">SPECIALTIES</a>
            </li>
            <li>
              <a href="link">PHYSICAL THERAPY</a>
            </li>
            <li>
              <div className="dropdown">
                <a href="link">PATIENT RESOURCES</a>
                <div className="dropdown-content">
                  <div className="drop-nav">
                    <ul className="drop-navlist">
                      <li className="list-drop">
                        <a href="linked">Blog</a>
                      </li>
                      <li className="list-drop">
                        <a href="linked">News</a>
                      </li>
                      <li className="list-drop">
                        <a href="linked">Patient Testimonials</a>
                      </li>
                      <li className="list-drop">
                        <a href="linked">Educational Videos</a>
                      </li>
                      <li className="list-drop">
                        <a href="linked">Provider Numbers</a>
                      </li>
                      <li className="list-drop">
                        <a href="linked">Insurances Accepted</a>
                      </li>
                      <li className="list-drop">
                        <a href="linked">Request Medical Records</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href="link">CAREERS</a>
            </li>
          </ul>

          <div className="search-box" onClick={clickHandler}>
            <i className="fa fa-search" aria-hidden="true"></i>
          </div>
        </div>
        {showHide && (
          <div className="search-textbox">
            <input type="text"></input>
          </div>
        )}
      </div>

      {/** */}

    </>
  );
};

export default Nav;
