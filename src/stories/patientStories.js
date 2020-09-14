import React from "react";
import Componentheader from "../compHeader/componentHeader";
import "./patientStories.css";
import PatientCard from "./patientCard";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Patientstories = (props) => {
  return (
    <>
      <div className="container-fl">
        <Componentheader
          headingclr="purple-clr"
          h4="PICTURES OF HEALTH"
          h1="PATIENT STORIES"
          hr="hr-30"
        />
      </div>
      <div className="container-fl">
        <div className="stories-cards ">
          <div className="stories-row stories-row-pd-t">
            <div className="story-card">
              <PatientCard
                cardimage="card1-img"
                imagetext="When you’ve spent your life helping others see the good in everything a..."
              />
            </div>
            <div className="story-card">
              <PatientCard
                cardimage="card2-img"
                imagetext="I knew I could call anytime if I had a question or an issue, and I would be a..."
              />
            </div>
            <div className="story-card">
              <PatientCard
                cardimage="card3-img"
                imagetext="I started physical therapy for pain and tingling in my arm and fingers in Aug..."
              />
            </div>
          </div>
        </div>
        <div className="stories-cards">
          <div className="stories-row">
            <div className="story-card">
              <PatientCard
                cardimage="card4-img"
                imagetext="I started physical therapy for pain and tingling in my arm and fingers in Aug..."
              />
            </div>
          </div>
          <div className="blue-button-div">
            <button className="blue-btn"> READ MORE </button>
          </div>
        </div>
      </div>
              {/**Carousel Main div */}
      <div className="container-fl">
              <div className="stories-cards-res">
              <div className="stories-row-res">
                <div className="story-card-res">
                  {/**Creating Carousel*/}
                  <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    ArrowNext={true}
                    renderIndicator={false}
                    showStatus={false}
                  >
                    <div className="carousel-iamges">
                      <img src="https://premierortho-assets.s3.amazonaws.com/dickstarly-header.jpeg" alt="DickStarly"/>
                    </div>
                    <div className="carousel-iamges">
                      <img src="https://premierortho-assets.s3.amazonaws.com/tom-holland.jpeg" alt="Tom Holland"/>
                    </div>
                    <div className="carousel-iamges">
                      <img src="https://premierortho-assets.s3.amazonaws.com/sheilahoist.jpeg" alt="Shiela"/>
                    </div>
                    <div className="carousel-iamges">
                    <img src="https://www.premierortho.com/static/images/blog-placeholder.jpg" alt="Blog Post"/>
                  </div>
                  </Carousel>
                  {/**Carousel call end*/}
                </div>
              </div>
            </div>
            </div>
            {/**Carousel Main div end */}
    </>
  );
};

export default Patientstories;
