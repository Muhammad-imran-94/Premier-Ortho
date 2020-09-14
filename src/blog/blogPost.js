import React from "react";
import Componentheader from "../compHeader/componentHeader";
import "./blogPost.css";
import BlogCard from "./blogCard";

const BlogPost = (props) => {
  return (
    <>
      <div className="blog-heading">
        <Componentheader
          headingclr="org-clr"
          h4="NEWS & BLOG"
          h1="FROM THE BLOG"
          hr="blogline"
          hr2="blogline2"
        />
      </div>
      <div className="container-fl">
        <div className="blogsection">
          <div className="blogcards">
          <div className="twocards">
            {/**Calling a card */}
            <div className="blgcrd2">
            <BlogCard
            blcardimg="bl-img1"
            date="02"
            month="Apr"
            middletext="Get Ready for Running: Tips to Avoid Foot & Ankle Injuries this Spring"
            endtext="Spring is here and thousands of runners of vari..."
          />
            </div>
            {/**Calling a card ends*/}
            {/**Calling a card */}
            <div className="blgcrd2">
            <BlogCard
            blcardimg="bl-img2"
            date="30"
            month="Mar"
            middletext="Premier Orthopaedics Now Offering Telemedicine Visits"
            endtext="As the coronavirus crisis continues to evolve, ..."
          />

            </div>
            </div>
            <div className="onecard">
            {/**Calling a card ends*/}
            {/**Calling a card */}
            <div className="blgcrd">
            
            <BlogCard
                blcardimg="bl-img3"
                date="31"
                month="Jul"
                middletext="In the midst of a pandemic, when seeing a doctor in person is your only hope"
                endtext="Stay-at-home orders have kept most of the natio..."
              />
              
            </div>
            {/**Calling a card ends*/}
          </div>
          </div>
          </div>
        </div>

    </>
  );
};

export default BlogPost;
