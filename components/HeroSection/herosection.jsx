"use client";
import React, { useState } from "react";
import styles from "./hero.modules.css";

const HeroSection = (props) => {
  // Initialize the toggle state
  const [isRTL, setIsRTL] = useState(false);

  // Function to toggle RTL
  const toggleRTL = () => {
    setIsRTL(!isRTL);
  };

  return (
    <div className="herosectionMainContainer  flex flex-col justify-center items-center bg-black bg-opacity-80 text-white text-center gap-14 lg:gap-10">
      <div className="herosectionHeadingContainer flex flex-col items-center gap-2.5 pt-20">
        <h1 className="herosectionHeading text-center text-4xl font-normal text-var-Light-text  lg:text-6xl md:leading-20 whitespace-pre-line">
          The Best Product{"\n"}Starts With Figma
        </h1>
        <p className="herosectionParagraph text-var-Light-text text-center font-normal leading-10 pt-5">
          Most calendars are designed for teams. Slate is designed for freelancers
        </p>
      </div>
      <div className="herosection-btn-container flex flex-col items-center gap-2.5 pt-5">
        <button className="herosection-btn text-var-Light-text text-center text-xl font-normal leading-5 rounded-full bg-primary w-60 py-4">
          Show/Hide Features
        </button>
        <button className="herosection-btn text-var-Light-text text-center font-[actor] text-xl font-normal leading-5 rounded-full bg-primary w-60 py-4">
          Show/Hide Partners
        </button>
        <div className="herosectionToggelHeading flex items-center gap-2 ">
          <div className="HerosectionToggelBtn1 text-white">
            <label className="switch rtl:left rtl:bg-primary rtl:rounded-3xl"  >
              <input type="checkbox rtl:left rtl:bg-primary"  onClick={props.toggleDirection} />
              <span className="slider round rtl:left rtl:bg-primary"></span>
            </label>
          </div>
 
  <h2 className=" text-white  text-base font-normal leading-6">
    RTL
  </h2>
        </div>
        <div className="herosectionToggelHeading flex items-center gap-2">
          <div className="HerosectionToggelBtn2 ">
          <label className="switch"  >
              <input type="checkbox" />
              <span className="slider round"></span>
            </label> 
          </div>
          <h2 className="text-white text-base font-normal leading-6">
            Show Both
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;