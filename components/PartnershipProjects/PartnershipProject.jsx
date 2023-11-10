"use client";
import { useState } from "react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const PartnershipProject = ({ isRTL }) => {
  const [isTextVisibleArray, setIsTextVisibleArray] = useState([false]);

  const toggleTextVisibility = (index) => {
    const updatedArray = [...isTextVisibleArray];
    updatedArray[index] = !updatedArray[index];
    setIsTextVisibleArray(updatedArray);
  };
  return (
    <div className="MainContainerPartnership">
      <div className="PartnershipHeading flex flex-col justify-center items-center pb-10">
        <h1 className="text-red-600 font-[open-sans] text-xl lg:text-[28px] font-bold leading-normal p-5 whitespace-nowrap">
          Our Partnership Projects
        </h1>
        <div className="border lg:w-3/12 lg:border-b lg:border-slate-800 w-2/12 border-b border-red-600"></div>
      </div>
      <div className="flex flex-row p-5 gap-5 ">
       <button className="arrow-left arrow hidden lg:block">  
       <div className="rtl:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <rect width="40" height="40" fill="#D12D2D" />
            <path d="M18.6678 10.6665L9.33447 19.9998L18.6678 29.3332" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M9.33447 20H30.6678" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
</div>
           <div className="ltr:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <rect width="40" height="40" transform="matrix(-1 0 0 1 40 0)" fill="#D12D2D" />
            <path d="M21.3322 10.6665L30.6655 19.9998L21.3322 29.3332" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M30.6655 20H9.33219" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
           </div></button>
      <Swiper 
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={100}
        slidesPerView={1}
        navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
        pagination={{ clickable: true }}
        dir={isRTL ? "rtl" : "ltr"}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide className="lg:h-96  h-auto ">
          {" "}
          <div className="slide slide_1 flex flex-col lg:m-0 lg:flex-row justify-center items-center text-start gap-10">
            <div className="PartnershipContainer1  lg:w-3/6 ">
              <h1 className="text-black font-[open-sans] text-xl lg:text-[28px] font-bold leading-normal">
                Early Childhood Development
              </h1>
              <p className="text-black font-[open-sans] text-base font-normal">
                The Tanzania Comprehensive Cancer Care Project (TCCP) is a €13.3
                million private-public four-year evidence-based project funded
                by Agence Française de Développement (AFD) and Aga Khan
                Foundation (AKF). It aims to strengthen and expand the quality,
                access, and capacity of cancer care services across the cancer
                continuum in Dar es Salaam and Mwanza regions of Tanzania.
              </p>
              <p className="text-gray-600 font-open-sans text-base font-normal">
                The project is a joint initiative led by the Aga Khan Health
                Services Tanzania (AKHST) together with the Aga Khan Foundation
                Tanzania (AKFT).
              </p>
              <div className="SeeMoreLinkContainer">
                {isTextVisibleArray[0] ? null : (
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
                  <div className="SeeLessLink2 flex flex-col items-center gap-2">
                    <p className="Paragraph text-gray-600 font-open-sans text-base font-normal">
                      The project is a joint initiative led by the Aga Khan
                      Health Services Tanzania (AKHST) together with the Aga
                      Khan Foundation Tanzania (AKFT).
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
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="PartnershipContainer2">
              <img
                src="/assets/partnership2.jpg"
                alt=""
                className="lg:w-[420px] lg:h-80"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="lg:h-96  h-auto ">
          {" "}
          <div className="slide slide_2 flex flex-col lg:m-0 lg:flex-row justify-center items-center text-start gap-10">
            <div className="PartnershipContainer1  lg:w-3/6 ">
              <h1 className="text-black font-[open-sans] text-xl lg:text-[28px] font-bold leading-normal">
                    The Tanzania Cancer Care Project (TCCP)
              </h1>
              <p className="text-black font-[open-sans] text-base font-normal">
                 The Tanzania Comprehensive Cancer Care Project (TCCP) is a €13.3
                million private-public four-year evidence-based project funded
                by Agence Française de Développement (AFD) and Aga Khan
                Foundation (AKF). It aims to strengthen and expand the quality,
                access, and capacity of cancer care services across the cancer
                continuum in Dar es Salaam and Mwanza regions of Tanzania.
              </p>
              <p className="text-gray-600 font-open-sans text-base font-normal">
                The project is a joint initiative led by the Aga Khan Health
                Services Tanzania (AKHST) together with the Aga Khan Foundation
                Tanzania (AKFT).
              </p>
              <div className="SeeMoreLinkContainer">
                {isTextVisibleArray[0] ? null : (
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
                  <div className="SeeLessLink2 flex flex-col items-center gap-2">
                    <p className="Paragraph text-gray-600 font-open-sans text-base font-normal">
                       The project is a joint initiative led by the Aga Khan Health
                Services Tanzania (AKHST) together with the Aga Khan Foundation
                Tanzania (AKFT).
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
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="PartnershipContainer2">
               <img
                src="/assets/Partnership.jpg"
                alt=""
                className="lg:max-w-sm lg:h-80"
              />
            </div>
          </div>
        </SwiperSlide>
         <SwiperSlide className="lg:h-96  h-auto ">
          {" "}
          <div className="slide slide_3 flex flex-col lg:m-0 lg:flex-row justify-center items-center text-start gap-10">
            <div className="PartnershipContainer1  lg:w-3/6 ">
              <h1 className="text-black font-[open-sans] text-xl lg:text-[28px] font-bold leading-normal">
                Early Childhood Development
              </h1>
              <p className="text-black font-[open-sans] text-base font-normal">
                The Tanzania Comprehensive Cancer Care Project (TCCP) is a €13.3
                million private-public four-year evidence-based project funded
                by Agence Française de Développement (AFD) and Aga Khan
                Foundation (AKF). It aims to strengthen and expand the quality,
                access, and capacity of cancer care services across the cancer
                continuum in Dar es Salaam and Mwanza regions of Tanzania.
              </p>
              <p className="text-gray-600 font-open-sans text-base font-normal">
                The project is a joint initiative led by the Aga Khan Health
                Services Tanzania (AKHST) together with the Aga Khan Foundation
                Tanzania (AKFT).
              </p>
              <div className="SeeMoreLinkContainer">
                {isTextVisibleArray[0] ? null : (
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
                  <div className="SeeLessLink2 flex flex-col items-center gap-2">
                    <p className="Paragraph text-gray-600 font-open-sans text-base font-normal">
                      The project is a joint initiative led by the Aga Khan
                      Health Services Tanzania (AKHST) together with the Aga
                      Khan Foundation Tanzania (AKFT).
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
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="PartnershipContainer2">
              <img
                src="/assets/partnership2.jpg"
                alt=""
                className="lg:w-[420px] lg:h-80"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="lg:h-96  h-auto ">
          {" "}
          <div className="slide slide_4 flex flex-col lg:m-0 lg:flex-row justify-center items-center text-start gap-10">
            <div className="PartnershipContainer1  lg:w-3/6 ">
              <h1 className="text-black font-[open-sans] text-xl lg:text-[28px] font-bold leading-normal">
                    The Tanzania Cancer Care Project (TCCP)
              </h1>
              <p className="text-black font-[open-sans] text-base font-normal">
                 The Tanzania Comprehensive Cancer Care Project (TCCP) is a €13.3
                million private-public four-year evidence-based project funded
                by Agence Française de Développement (AFD) and Aga Khan
                Foundation (AKF). It aims to strengthen and expand the quality,
                access, and capacity of cancer care services across the cancer
                continuum in Dar es Salaam and Mwanza regions of Tanzania.
              </p>
              <p className="text-gray-600 font-open-sans text-base font-normal">
                The project is a joint initiative led by the Aga Khan Health
                Services Tanzania (AKHST) together with the Aga Khan Foundation
                Tanzania (AKFT).
              </p>
              <div className="SeeMoreLinkContainer">
                {isTextVisibleArray[0] ? null : (
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
                  <div className="SeeLessLink2 flex flex-col items-center gap-2">
                    <p className="Paragraph text-gray-600 font-open-sans text-base font-normal">
                       The project is a joint initiative led by the Aga Khan Health
                Services Tanzania (AKHST) together with the Aga Khan Foundation
                Tanzania (AKFT).
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
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="PartnershipContainer2">
               <img
                src="/assets/Partnership.jpg"
                alt=""
                className="lg:max-w-sm lg:h-80"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      
        <button className="arrow-right arrow hidden lg:block">   
         <div className="rtl:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <rect width="40" height="40" transform="matrix(-1 0 0 1 40 0)" fill="#D12D2D" />
            <path d="M21.3322 10.6665L30.6655 19.9998L21.3322 29.3332" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M30.6655 20H9.33219" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          </div>
            <div className="ltr:hidden">
             <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <rect width="40" height="40" fill="#D12D2D" />
            <path d="M18.6678 10.6665L9.33447 19.9998L18.6678 29.3332" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M9.33447 20H30.6678" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
           </div></button>
           </div>
    </div>
  );
};

export default PartnershipProject;

