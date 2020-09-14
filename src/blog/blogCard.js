import React from "react";
import "./blgCrd.css";

function BlogCard(props) {
  return (
    <>
      <div className="blcard">
        <div className="blcontent">
          <div className="blpara-img">
            <img src="group-6.png" alt="circle-img" className="iamge-pos" />
          </div>
          <div className="blpara-post">
           <p>Post by <span>Admin</span></p>
        </div>
        <div className="blpara-middle">
         <p>{props.middletext}</p>
        </div>
        <div className="blpara-end">
        <p>{props.endtext}</p>
       </div>
        </div>
        <div className={props.blcardimg}></div>
        <div className="card-yellow">
          {props.date} <span>{props.month}</span>
        </div>
        <div className="card-white"> 20 20</div>
        <div className="card-dots"> . . .</div>
      </div>
    </>
  );
}

export default BlogCard;





