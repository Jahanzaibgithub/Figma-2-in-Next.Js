"use client";
import React, { useState } from "react";
import styles from "./PartnershipProject.modules.css"

function PartnershipProject ({ isRTL }) {
   const [slideIndex, setSlideIndex] = useState(0);
    const [isTextVisibleArray, setIsTextVisibleArray] = useState([false]);

    const toggleTextVisibility = (index) => {
    const updatedArray = [...isTextVisibleArray];
    updatedArray[index] = !updatedArray[index];
    setIsTextVisibleArray(updatedArray);
  };

   const toggleContainerOrder = (direction) => {
    console.log("toggleContainerOrder called with direction:", direction);
    if (direction === "left") {
      setSlideIndex((slideIndex - 1 + 4) % 4);
    } else if (direction === "right") {
      setSlideIndex((slideIndex + 1) % 4);
    }
  };
 
  return (
      <div className="SliderMainContainer flex flex-wrap justify-center items-center  gap-10">
     <div className="LeftArrow hidden lg:block cursor-pointer" 
           onClick={() => toggleContainerOrder("left")}
>
           {isRTL ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <rect width="40" height="40" transform="matrix(-1 0 0 1 40 0)" fill="#D12D2D" />
            <path d="M21.3322 10.6665L30.6655 19.9998L21.3322 29.3332" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M30.6655 20H9.33219" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          
           ):(
           <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <rect width="40" height="40" fill="#D12D2D" />
            <path d="M18.6678 10.6665L9.33447 19.9998L18.6678 29.3332" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M9.33447 20H30.6678" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
           )}
        </div>
    <div className="SliderContainer">
       <div className="PartnershipHeading flex flex-col justify-center items-center">
        <h1 className="text-red-600 font-[open-sans] text-xl lg:text-[28px] font-bold leading-normal p-5 whitespace-nowrap">
          Our Partnership Projects
        </h1>
        <div className="border lg:w-3/12 lg:border-b lg:border-slate-800 w-2/12 border-b border-red-600"></div>
      </div>
    <div id="slider">
      
      <input type="radio" name="slider" id="slide1" defaultChecked />
      <input type="radio" name="slider" id="slide2" />
      <input type="radio" name="slider" id="slide3" />
      <input type="radio" name="slider" id="slide4" />
      <div id="slides">
        <div id="overflow">
          <div className="inner ">
            <div className="slide slide_1">
              <div className="slide-content">
              <div className="Block1 flex flex-col m-5 lg:m-0 lg:flex-row text-start gap-20">
              <div className="PartnershipContainer1 lg:w-4/6 ">
                <h1 className="text-black font-[open-sans] text-xl lg:text-[28px] font-bold leading-normal">
                  Early Childhood Development
                </h1>
                <p className="text-black font-[open-sans] text-base font-normal">
                  The Tanzania Comprehensive Cancer Care Project (TCCP) is a €13.3 million private-public four-year evidence-based project funded by Agence Française de Développement (AFD) and Aga Khan Foundation (AKF). It aims to strengthen and expand the quality, access, and capacity of cancer care services across the cancer continuum in Dar es Salaam and Mwanza regions of Tanzania.
                </p>
                <p className="text-gray-600 font-open-sans text-base font-normal">
                  The project is a joint initiative led by the Aga Khan Health Services Tanzania (AKHST) together with the Aga Khan Foundation Tanzania (AKFT).
                </p>
                <div className="SeeMoreLinkContainer">
                  {isTextVisibleArray[0] ? null : (
                    <div className="SeeMoreLinkArrow flex justify-center" onClick={() => toggleTextVisibility(0)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M6 9L12 15L18 9" stroke="#084C61" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </div>
                  )}
                  {isTextVisibleArray[0] && (
                    <div className="SeeLessLink2 flex flex-col items-center gap-2">
                      <p className="Paragraph text-gray-600 font-open-sans text-base font-normal">
                        The project is a joint initiative led by the Aga Khan Health Services Tanzania (AKHST) together with the Aga Khan Foundation Tanzania (AKFT).
                      </p>
                      <div className="SeeMoreLinkArrow" onClick={() => toggleTextVisibility(0)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M6 15L12 9L18 15" stroke="#084C61" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="PartnershipContainer2">
                <img src="/assets/partnership2.jpg" alt="" className="lg:w-[420px] lg:h-80" />
              </div>
            </div>
              </div>
            </div>
            <div className="slide slide_2">
              <div className="slide-content">
                 <div className="Block2 flex flex-col m-5 lg:m-0 lg:flex-row text-start gap-20">
              <div className="PartnershipContainer1 w-4/6">
                <h1 className="text-black font-[open-sans] text-xl lg:text-[28px] font-bold leading-normal">
                  The Tanzania Cancer Care Project (TCCP)
                </h1>
                <p className="text-black font-[open-sans] text-base font-normal">
                  The Tanzania Comprehensive Cancer Care Project (TCCP) is a €13.3 million private-public four-year evidence-based project funded by Agence Française de Développement (AFD) and Aga Khan Foundation (AKF). It aims to strengthen and expand the quality, access, and capacity of cancer care services across the cancer continuum in Dar es Salaam and Mwanza regions of Tanzania.
                </p>
                <p className="text-gray-600 font-open-sans text-base font-normal leading-[149%]">
                  The project is a joint initiative led by the Aga Khan Health Services Tanzania (AKHST) together with the Aga Khan Foundation Tanzania (AKFT).
                </p>
                <div className="SeeMoreLinkContainer">
                  {isTextVisibleArray[1] ? null : (
                    <div className="SeeMoreLinkArrow flex justify-center" onClick={() => toggleTextVisibility(1)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M6 9L12 15L18 9" stroke="#084C61" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </div>
                  )}
                  {isTextVisibleArray[1] && (
                    <div className="SeeLessLink2 flex flex-col items-center gap-2">
                      <p className="Paragraph text-gray-600 font-open-sans text-base font-normal">
                        The project is a joint initiative led by the Aga Khan Health Services Tanzania (AKHST) together with the Aga Khan Foundation Tanzania (AKFT).
                      </p>
                      <div className="SeeMoreLinkArrow" onClick={() => toggleTextVisibility(1)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M6 15L12 9L18 15" stroke="#084C61" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="PartnershipContainer2" style={{ direction: "rtl" }}>
                <img src="/assets/Partnership.png" alt="" className="w-full lg:h-80" />
              </div>
            </div>
              </div>
            </div>
            <div className="slide slide_3">
              <div className="slide-content">
               <div className="Block3 flex flex-col m-5 lg:m-0 lg:flex-row text-start gap-20">
              <div className="PartnershipContainer1 w-4/6">
                <h1 className="text-black font-[open-sans] text-xl lg:text-[28px] font-bold leading-normal">
                  Early Childhood Development
                </h1>
                <p className="text-black font-[open-sans] text-base font-normal">
                  The Tanzania Comprehensive Cancer Care Project (TCCP) is a €13.3 million private-public four-year evidence-based project funded by Agence Française de Développement (AFD) and Aga Khan Foundation (AKF). It aims to strengthen and expand the quality, access, and capacity of cancer care services across the cancer continuum in Dar es Salaam and Mwanza regions of Tanzania.
                </p>
                <p className="text-gray-600 font-open-sans text-base font-normal">
                  The project is a joint initiative led by the Aga Khan Health Services Tanzania (AKHST) together with the Aga Khan Foundation Tanzania (AKFT).
                </p>
                <div className="SeeMoreLinkContainer">
                  {isTextVisibleArray[2] ? null : (
                    <div className="SeeMoreLinkArrow flex justify-center" onClick={() => toggleTextVisibility(2)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M6 9L12 15L18 9" stroke="#084C61" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </div>
                  )}
                  {isTextVisibleArray[2] && (
                    <div className="SeeLessLink2 flex flex-col items-center gap-2">
                      <p className="Paragraph text-gray-600 font-open-sans text-base font-normal">
                        The project is a joint initiative led by the Aga Khan Health Services Tanzania (AKHST) together with the Aga Khan Foundation Tanzania (AKFT).
                      </p>
                      <div className="SeeMoreLinkArrow" onClick={() => toggleTextVisibility(2)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M6 15L12 9L18 15" stroke="#084C61" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="PartnershipContainer2">
                <img src="/assets/partnership2.jpg" alt="" className="lg:w-[420px] lg:h-80" />
              </div>
            </div>
              </div>
            </div>
            <div className="slide slide_4">
              <div className="slide-content">
                 <div className="Block4 flex flex-col m-5 lg:m-0 lg:flex-row text-start gap-20">
              <div className="PartnershipContainer1 w-4/6">
                <h1 className="text-black font-[open-sans] text-xl lg:text-[28px] font-bold leading-normal">
                  The Tanzania Cancer Care Project (TCCP)
                </h1>
                <p className="text-black font-[open-sans] text-base font-normal">
                  The Tanzania Comprehensive Cancer Care Project (TCCP) is a €13.3 million private-public four-year evidence-based project funded by Agence Française de Développement (AFD) and Aga Khan Foundation (AKF). It aims to strengthen and expand the quality, access, and capacity of cancer care services across the cancer continuum in Dar es Salaam and Mwanza regions of Tanzania.
                </p>
                <p className="text-gray-600 font-open-sans text-base font-normal leading-[149%]">
                  The project is a joint initiative led by the Aga Khan Health Services Tanzania (AKHST) together with the Aga Khan Foundation Tanzania (AKFT).
                </p>
                <div className="SeeMoreLinkContainer">
                  {isTextVisibleArray[3] ? null : (
                    <div className="SeeMoreLinkArrow flex justify-center" onClick={() => toggleTextVisibility(3)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M6 9L12 15L18 9" stroke="#084C61" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </div>
                  )}
                  {isTextVisibleArray[3] && (
                    <div className="SeeLessLink2 flex flex-col items-center gap-2">
                      <p className="Paragraph text-gray-600 font-open-sans text-base font-normal">
                        The project is a joint initiative led by the Aga Khan Health Services Tanzania (AKHST) together with the Aga Khan Foundation Tanzania (AKFT).
                      </p>
                      <div className="SeeMoreLinkArrow" onClick={() => toggleTextVisibility(3)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M6 15L12 9L18 15" stroke="#084C61" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="PartnershipContainer2" style={{ direction: "rtl" }}>
                <img src="/assets/Partnership.png" alt="" className="w-full lg:h-80" />
              </div>
            </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="controls">
        <label htmlFor="slide1"></label>
        <label htmlFor="slide2"></label>
        <label htmlFor="slide3"></label>
        <label htmlFor="slide4"></label>
      </div>
      <div id="bullets">
        <label htmlFor="slide1"></label>
        <label htmlFor="slide2"></label>
        <label htmlFor="slide3"></label>
        <label htmlFor="slide4"></label>
      </div>
    </div>
    </div>
    <div className="RightArrow hidden lg:block cursor-pointer" onClick={toggleContainerOrder} style={{ direction: "LTR" }}>
           {isRTL ? (
           <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <rect width="40" height="40" fill="#D12D2D" />
            <path d="M18.6678 10.6665L9.33447 19.9998L18.6678 29.3332" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M9.33447 20H30.6678" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
           ):(
          
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <rect width="40" height="40" transform="matrix(-1 0 0 1 40 0)" fill="#D12D2D" />
            <path d="M21.3322 10.6665L30.6655 19.9998L21.3322 29.3332" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M30.6655 20H9.33219" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
           )}
        </div>
    </div>
  );
}

export default PartnershipProject;

