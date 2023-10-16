"use client";
import React, {useEffect} from "react";
import styles from "./hero.modules.css";

const HeroSection = () => {
 useEffect(() => {
    const checkbox = document.querySelector('input[type="checkbox"]');
    const elementsToChange = document.querySelectorAll('.herosection-toggel-btn, .slider');

    checkbox.addEventListener('change', function() {
      if (this.checked) {
        elementsToChange.forEach(element => {
          element.setAttribute('dir', 'rtl');
        });
      } else {
        elementsToChange.forEach(element => {
          element.removeAttribute('dir');
        });
      }
    });
    return () => {
      checkbox.removeEventListener('change', function() {
        if (this.checked) {
          elementsToChange.forEach(element => {
            element.setAttribute('dir', 'rtl');
          });
        } else {
          elementsToChange.forEach(element => {
            element.removeAttribute('dir');
          });
        }
      });
    }
  }, []);
  return (
  <div className="herosectionMainContainer h-[800px] w-full flex flex-col justify-center items-center  bg-black bg-opacity-80 text-white text-center gap-14 lg:gap-10">
      <div className="herosectionHeadingContainer flex flex-col items-center gap-2.5 pt-20">
        <h1 className="herosectionHeading text-center w-4/5 text-4xl md:text-5xl font-normal xs:leading-[55px] tracking-[0.2px] text-var-Light-text font-[actor] lg:text-6xl md:leading-20 whitespace-pre-line">
          The Best Product{"\n"}Starts With Figma
        </h1>
        <p className="herosectionParagraph w-4/5 text-var-Light-text text-center font-[actor] text-xl font-normal leading-8 tracking-[0.2px] pt-5 ">
          Most calendars are designed for teams.Slate is designed for
          freelancers
        </p>
      </div>
      <div className="herosection-btn-container flex flex-col items-center gap-2.5 pt-5 ">
        <button className="herosection-btn text-var-Light-text text-center font-[actor] text-xl font-normal leading-5 tracking-[0.2px] rounded-full bg-primary w-60 py-4 ">
          Show/Hide Features
        </button>
        <button className="herosection-btn text-var-Light-text text-center font-[actor] text-xl font-normal leading-5 tracking-[0.2px] rounded-full bg-primary w-60 py-4 ">
          Show/Hide Partners
        </button>
        <div className="herosection-toggel-heading flex items-center gap-2">
          <div className="herosection-toggel-btn">
            <label className="switch relative inline-block w-[60px] h-[34px] ">
              <input
                type="checkbox"/>
              <span class="slider round  absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-300 transition duration-[400] rounded-full before:rounded-full before:absolute before:content before:w-6 before:h-6 before:left-1 before:bottom-1 before:bg-white before:transition before:duration-[400]"></span>
            </label>
          </div>
          <h2 className="text-white text-right font-[actor] text-xl font-normal leading-6">
            Show Both
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
