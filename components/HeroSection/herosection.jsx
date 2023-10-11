import React from "react";
import styles from "./hero.modules.css";

const HeroSection = () => {
  return (
    <div className="herosectionMainContainer h-[800px] w-full flex flex-col justify-center items-center px-12 gap-16   bg-black bg-opacity-80 text-white text-center md:gap-10 md:px-20">
      <div className="herosectionHeadingContainer flex flex-col items-center gap-2.5">
      <h1 className="herosectionHeading text-center text-4xl font-normal leading-[55px] tracking-[0.2px] text-var-Light-text font-[actor] md:text-7xl  md:leading-20  whitespace-pre-line">
        The Best Product{'\n'}Starts With Figma
      </h1>
      <p className="herosection-paragraph text-var-Light-text text-center font-[actor] text-[26px] font-normal leading-10 tracking-[0.2px] pt-5">
        Most calendars are designed for teams.Slate is designed for freelancers
      </p>
      </div>
      <div className="herosection-btn-container">
        <button className="herosection-btn ">Show/Hide Features</button>
        <button className="herosection-btn">Show/Hide Features</button>
        <div className="herosection-toggel-heading">
          <div className="herosection-toggel-btn">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>
          <h2>Show Both</h2>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

