import React, { useState } from "react";
import "./App.css";
import Header from "./navComponent/header";
import Heroimage from "./heroImage/heroImage";
import Services from "./servComp/services";
import Winning from "./winning/winning";
import Patientstories from "./stories/patientStories";
import BlogPost from "./blog/blogPost";
import Footer from "./footer/footerContent";
import Popbox from './popUp/popBox';
import ResPop from './popUp/resPop';



const App = () => {
  const [modal, setModal]=useState(false);
  const modalHandler=()=>{
    setModal(!modal);
  }
  const [resmodal, setresModal]=useState(false);
  const resmodalHandler=()=>{
    setresModal(!resmodal);
  }
  return (
    <>
      <div className="App">
        <div className="movers">
          <button className="btn-fixed btn-purple">
            <strong>MAKE APPOINTMENT</strong>
          </button>
          <button className="btn-fixed btn-blue" onClick={modalHandler}>
            <strong>FIND A SPECIALIST</strong>
          </button>
        </div>
        {modal && 
        <Popbox handler={modalHandler}/>
      }
        <div className="res-movers">
          <button className="btn-fixed btn-purple">
            <strong>MAKE APPOINTMENT</strong>
          </button>
          <button className="btn-fixed btn-blue" onClick={resmodalHandler}>
            <strong>FIND A SPECIALIST</strong>
          </button>
        </div>
        {resmodal && 
        <ResPop handler={resmodalHandler}/>
        }
        <Header />
        <Heroimage />
        <Services />
        <Winning />
        <Patientstories />
        <BlogPost />
        <Footer />
      </div>
    </>
  );
};

export default App;
