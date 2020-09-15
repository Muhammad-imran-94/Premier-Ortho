import React from "react";
import "./services.css";
import Componentheader from "../compHeader/componentHeader";
import Card from "./card";
const Services = (props) => {
  return (
    <>
      <div className="services-heading">
        <Componentheader headingclr="lb-clr" h4="PREMIER ORTHOPAEDICS" h1="SERVICES" hr="hr-50" />
      </div>
      <div className="container-fl">
        <div className="services-cards">
          <div className="cards-row">
            {/**Creating a card by calling a card component */}
            <div className="fullcard">
              <Card
                cardimg="card-img1"
                cardheading="PHYSICAL THERAPY"
                headingcolor="blue-heading"
                padt="pad-t"
                cardpara="At Premier Orthopedics, we recognize that every person’s injury is unique."
              />
            </div>
            {/**calling ends a card component */}
            {/**Creating a card by calling a card component */}
            <div className="fullcard">
              <Card
                cardimg="card-img2"
                cardheading="MRI"
                headingcolor="green-heading"
                padt="pad-t"
                cardpara="Premier’s radiologists specialize in the diagnosis of orthopaedic injuries and ailments."
              />
            </div>
            {/**calling ends a card component */}
            {/**Creating a card by calling a card component */}
            <div className="fullcard">
              <Card
                cardimg="card-img3"
                cardheading="ORTHOPAEDIC URGENT CARE"
                headingcolor="orange-heading"
                cardpara="Some orthopaedic injuries can’t wait."
              />
            </div>
            {/**calling ends a card component */}
            {/**Creating a card by calling a card component */}
            <div className="fullcard">
              <Card
                cardimg="card-img4"
                cardheading="ORTHOPAEDICS"
                headingcolor="lblue-heading"
                padt="pad-t"
                cardpara="There’s no reason to put life on pause because of knee, hip or shoulder pain."
              />
            </div>
            {/**calling ends a card component */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
