import React from "react";
import "./winner.css";
const Winning = (props) => {
  return (
    <>
      <div className="winnings">
        <div className="winnig-left">
          <img src="winning-img.jpeg" alt="Winning" />
        </div>
        <div className="winnig-right">
          <div className="right-content">
            <div className="right-top-para">
              <h4>
                PREMIER SPORTS MEDICINE. <span>THE PHILADELPHIA UNION.</span>
              </h4>
            </div>
            <div className="winning-head">
              <h1>A WINNING TEAM</h1>
            </div>
            <div className="head-hr">
              <hr />
            </div>
            <div className="winning-para">
              <p>
                Premier Orthopaedics has been the official orthopaedic and
                physical therapy provider of the Philadelphia Union since the
                team's founding, in 2010. Our orthopaedic surgeons are on the
                sidelines of every home game, ready to assist at a moment's
                notice. Our specialists provide expert care to these elite
                athletes, keeping them in top physical form and playing at their
                best. We'll treat you and your family with the same level of
                high-quality care and personalized attention.
              </p>
            </div>
            <div className="buttons">
            <button className="btn">PREMIER SPORTS MEDICINE</button>
            <button className="btn">MEET THE TEAM</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Winning;
