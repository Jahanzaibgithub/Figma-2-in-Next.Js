import React from "react";
import styles from "./hero.modules.css";

const HeroSection = () => {
  return (
    <div className="herosection-main-container max-w-screen-4xl flex flex-col justify-center items-center">
      <div className="herosection-heading-container">
      <h1 className="herosection-heading text-center whitespace-pre-line">
        The Best Product{'\n'}Starts With Figma
      </h1>
      <p className="herosection-paragraph">
        Most calendars are designed for teams.Slate is designed  <br></br>for freelancers
      </p>
      
      </div>
      <div className="herosection-btn-container">
        <button className="herosection-btn ">Show/Hide Features</button>
        <button className="herosection-btn">Show/Hide Features</button>
        <div className="herosection-toggel-heading">
          <div className="herosection-toggel-btn">
            <label className="switch">
              <input type="checkbox" checked />
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

