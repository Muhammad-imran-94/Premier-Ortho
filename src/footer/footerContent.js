import React from "react";
import "./footer.css";

const Footer = (props) => {
  return (
    <>
      <div className="container-fl">
        <div className="footer-container">
          <div className="footer-data">
            <div className="footer-head">
              <p>ABOUT US </p>
            </div>
            <div className="footer-content">
              <div className="footer-para  ">
                <p>
                  With over 35 locations in the Greater Philadelphia region,
                  Premier Orthopaedics provides the full spectrum of orthopaedic
                  services – including bone, muscle and joint care; physical
                  therapy, MRI and urgent care. Patients trust our specialists
                  for their experience, expertise and commitment to exceptional
                  care
                </p>
              </div>
              <div className="footer-nav pd-nav ">
                <ul className="footer-nav-list">
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Carrers</li>
                  <li>Non-discrimination Notice</li>
                </ul>
              </div>
              <div className="footer-nav pd-nav ">
                <ul className="footer-nav-list">
                  <li>Events</li>
                  <li>Events Premier News</li>
                  <li> Blog</li>
                  <li>Patient Testimonials</li>
                </ul>
              </div>
              <div className="footer-nav pd-nav">
                <ul className="footer-nav-list">
                  <li>Appointments</li>
                  <li>Physicians</li>
                  <li>Find a Specialist</li>
                  <li>Locations</li>
                </ul>
              </div>

              <div className="footer-nav pd-lastnav">
                <ul className="footer-nav-list">
                  <li>Specialties</li>
                  <li> Services</li>
                  <li>Physical Therapy</li>
                </ul>
                <div className="contact">
                <p className="text">APPOINTMENTS IN 24 HOURS</p>
                <p className="number">1.855.ORTHO24</p>
                <div className="contact-row">
                <div className="contact-icons">
                 <div className="icon-div mr-10">
                 <i className="fa fa-twitter fa-2x" aria-hidden="true"></i>
                 </div>
                 <div className="icon-div mr-10">
                 <i className="fa fa-facebook-official fa-2x" aria-hidden="true"></i>
                 </div>
                 <div className="icon-div mr-10">
                 <i className="fa fa-linkedin fa-2x" aria-hidden="true"></i>
                 </div>
                 <div className="icon-div mr-10">
                 <i className="fa fa-instagram fa-2x" aria-hidden="true"></i>
                 </div>
                 <div className="icon-div ">
                 <i className="fa fa-youtube-play fa-2x" aria-hidden="true"></i>
                 </div>
              </div>
              </div>
              </div>
              </div>
            </div>
          </div>
          <div className="footer-data">
           <div className="copy-right">
           <div className="copy-data">
           <div className="copy-right1">
           <p>© 2020 Premier Orthopaedics. All rights reserved</p>
           </div>
           <div className="copy-right2"><p>Non-discrimination Notice</p></div>
           <div className="copy-right3"><p>Privacy Policy</p></div>
           <div className="copy-right4"><p>Site map</p></div>
           </div>
           <div className="back-top">
           <p><a href="#top-web">Back to Top</a></p>
        </div>
        </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
