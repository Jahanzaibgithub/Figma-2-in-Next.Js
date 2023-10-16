"use client";
import React, { useState } from "react";

const PartnershipProject = () => {
  const [isTextVisibleArray, setIsTextVisibleArray] = useState([false]);
  const [isSwapped, setIsSwapped] = useState(false);
   const [isArrowClicked, setIsLeftArrowClicked] = useState(false); 

   const toggleTextVisibility = (index) => {
     const updatedArray = [...isTextVisibleArray];
     updatedArray[index] = !updatedArray[index];
     setIsTextVisibleArray(updatedArray);
    };
    
    const toggleSwapped = () => {
      setIsSwapped(!isSwapped);
    };
    
    const toggleContainerOrder = () => {
        setIsLeftArrowClicked(!isArrowClicked);
      };

  return (
    <div className="MainPartnershipContainer pt-10 lg:m-20 ">
      <div className="PartnershipHeading flex flex-col justify-center items-center ">
        <h1 className="text-red-600 font-[open-sans] text-xl lg:text-[28px] font-bold leading-normal p-5 whitespace-nowrap">
          Our Partnership Projects
        </h1>
        <div className="border lg:w-3/12 lg:border-b lg:border-slate-800  w-2/12 border-b border-red-600"></div>
      </div>
      <div className="PartnershipContainer flex flex-col lg:flex lg:flex-row lg:justify-center lg:items-center gap-10 pt-5 ">
        <div className="LeftArrow hidden lg:block order-1" onClick={toggleSwapped} >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <rect width="40" height="40" fill="#D12D2D" />
            <path
              d="M18.6678 10.6665L9.33447 19.9998L18.6678 29.3332"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.33447 20H30.6678"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
       
        <div className={`PartnershipContainer1 ${isSwapped ? 'lg:order-2' : 'lg:order-3'} flex flex-col w-4/6 xl:w-2/5 2xl:w-4/12`}>

          <h1 class=" text-black font-[open-sans] text-xl lg:text-[28px] font-bold leading-normal">
            The Tanzania Cancer Care Project (TCCP)
          </h1>
          <p class="text-black font-[open-sans] text-base font-normaleading-[149%]">
            The Tanzania Comprehensive Cancer Care Project (TCCP) is a €13.3
            million private-public four-year evidence-based project funded by
            Agence Française de Développement (AFD) and Aga Khan Foundation
            (AKF). It aims to strengthen and expand the quality, access, and
            capacity of cancer care services across the cancer continuum in Dar
            es Salaam and Mwanza regions of Tanzania.
          </p>
          <p class="text-gray-600 font-open-sans text-base font-normal leading-[149%]">
            The project is a joint initiative led by the Aga Khan Health
            Services Tanzania (AKHST) together with the Aga Khan Foundation
            Tanzania (AKFT),
          </p>
          <div className="SeeMoreLinkContainer hidden lg:block">
            {isTextVisibleArray[0] ? null : ( // Text is visible, so we don't render the SVG and title
              <div
                className="SeeMoreLinkArrow flex justify-center"
                onClick={() => toggleTextVisibility(0)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="#084C61"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            )}
            {isTextVisibleArray[0] && (
              <div className="SeeLessLink2 flex flex-col items-center gap-2 ">
                <p className="Paragraph text-gray-600 font-open-sans text-base font-normal leading-[149%]">
                  The project is a joint initiative led by the Aga Khan Health
                  Services Tanzania (AKHST) together with the Aga Khan
                  Foundation Tanzania (AKFT),
                </p>
                <div
                  className="SeeMoreLinkArrow"
                  onClick={() => toggleTextVisibility(0)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M6 15L12 9L18 15"
                      stroke="#084C61"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className={`PartnershipContainer2  ${isSwapped ? 'lg:order-3' : 'lg:order-2'}`}>
          <img src="/assets/Partnership.png" alt="" class="hidden lg:block lg:w-full lg:h-80" />
        </div>
     {isArrowClicked ? (  
      <div className=""> 
            <img src="/assets/Partnership.png" alt="" class="lg:hidden w-full h-80" />
            </div>
            ) : (
              <div className="">
            <img src="/assets/features.jpg" alt="" class="lg:hidden w-full h-80" />
            </div>
            )}
    
        <div className="RightArrow hidden lg:block order-4" onClick={toggleSwapped}  >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <rect
              width="40"
              height="40"
              transform="matrix(-1 0 0 1 40 0)"
              fill="#D12D2D"
            />
            <path
              d="M21.3322 10.6665L30.6655 19.9998L21.3322 29.3332"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M30.6655 20H9.33219"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <div className="DotCarousel lg:hidden flex justify-center order-3" onClick={toggleContainerOrder}
 >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="8"
            viewBox="0 0 30 8"
            fill="none"
          >
            <circle cx="2.79881" cy="4.09922" r="2.61814" fill="#C4C4C4" />
            <circle cx="15.8898" cy="4.09926" r="3.49086" fill="black" />
            <circle cx="27.2348" cy="4.09922" r="2.61814" fill="#C4C4C4" />
          </svg>
        </div>
      </div>
    </div>
  );
};
export default PartnershipProject;