import React from "react"
import Image from "next/image";

const Agency = ({isRTL}) => {
  return (
    <div className="AgencyMainContainer bg-white inline-flex p-6 flex-col w-full gap-2.5 md:p-12">
      <div className="AgencyMainHeader md:flex md:items-center md:gap-2 flex items-center gap-3 self-stretch pt-6 ">
        <div className="HeadingContainer flex flex-col items-start flex-1  ">
          <h1 className="Heading whitespace-nowrap text-Gray5 font-Gotham text-lg leading-8 tracking-[0.54px] md:text-2xl md:not-italic font-bold uppercase md:leading-9">
            OUR AGENCIES
          </h1>{" "}
        </div>
        <div className="HoWeWork flex justify-end items-end gap-2  ">
          <a className="Tittle whitespace-nowrap lg:text-blue-custom lg:font-Gotham lg:text-base lg:font-medium lg:leading-6 lg:tracking-[0.48px] hidden lg:block" href="#">
            How We Work
          </a>
          <a className="Tittle whitespace-nowrap text-blue-custom font-Gotham text-base font-medium leading-6 tracking-[0.48px] lg:hidden" href="#">
            See More
          </a>
          {isRTL ? (
          <a className="Button"href="#">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="#084C61"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

          </a>
   ) : (
     <a className="Button"href="#">
           
  <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
>
  <path
    d="M15 18L9 12L15 6"
    stroke="#084C61"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>

          </a>
          )}
        </div>
      </div>
      <div className="AgencyList lg:flex lg:flex-wrap lg:flex-shrink-0 lg:pt-10  pb-5">
        <div className="Agency-1 lg:flex lg:w-1/5  lg:h-32 lg:p-12 lg:flex-col lg:justify-center lg:items-center lg:gap-5 lg:flex-shrink-0 lg:border-2  flex pt-4 pb-3 flex-row items-center gap-5 flex-shrink-0 border-b-2">
          <div class="Image items-start">
            <img src="/assets/Agency-1.png" alt="" class="lg:w-16 w-10"/>
          </div>
              <div className="Tittle lg:hidden text-Gray5 font-Arial text-xs font-bold leading-4 tracking-tighter capitalize text-left items-start">
            <h1 class=" whitespace-nowrap">Aga Khan Academies</h1>
          </div>
        </div>
        <div className="Agency-2 lg:flex lg:w-1/5  lg:h-32 lg:p-12 lg:flex-col lg:justify-center lg:items-center lg:gap-5 lg:flex-shrink-0 lg:border-2 flex pt-4 pb-3 flex-row items-center gap-5 flex-shrink-0 border-b-2 ">
          <div class="Image items-start ">
            <img src="/assets/Agency-2.png" alt="" class="lg:w-14 w-10 " />
          </div>
          <div className="Tittle lg:text-Gray5 lg:font-Arial lg:text-xs lg:font-normal lg:leading-4 lg:tracking-tighter lg:capitalize lg:bottom-align text-Gray5 font-Arial text-xs font-bold leading-4 tracking-tighter capitalize items-start">
            <h1 class="whitespace-nowrap">Agha Khan Agency of Habitat</h1>
          </div>
        </div>
        <div className="Agency-3 lg:flex lg:w-1/5  lg:h-32 lg:p-10 lg:flex-col lg:justify-center lg:items-center lg:gap-5 lg:flex-shrink-0 lg:border-2  flex pt-4 pb-3 flex-row items-center gap-5 flex-shrink-0 border-b-2">
          <div class="Image items-start lg:mt-3 ">
           <img src="/assets/Agency-3.png" alt="" class="lg:w-14 xl:w-12 w-10" />
          </div>
          <div className="Tittle lg:text-Gray5 lg:font-Arial lg:text-xs lg:font-normal lg:leading-4 lg:tracking-tighter lg:capitalize lg:bottom-align text-Gray5 font-Arial text-xs font-bold leading-4 tracking-tighter capitalize items-start">
            <h1 class="xl:whitespace-nowrap lg:text-center ">Aga Khan Agency for Microfinance</h1>
          </div>
        </div>
        <div className="Agency-4 lg:flex lg:w-1/5  lg:h-32 lg:p-12 lg:flex-col lg:justify-center lg:items-center lg:gap-5 lg:flex-shrink-0 lg:border-2  flex pt-4 pb-3 flex-row items-center gap-5 flex-shrink-0 border-b-2">
          <div class="Image items-start">
            <img src="/assets/Agency-4.png" alt="" class="lg:w-14 w-10" />
          </div>

          <div className="Tittle lg:text-Gray5 lg:font-Arial lg:text-xs lg:font-normal lg:leading-4 lg:tracking-tighter lg:capitalize lg:bottom-align text-Gray5 font-Arial text-xs font-bold leading-4 tracking-tighter capitalize items-start">
            <h1 class="whitespace-nowrap">Aga Khan Education Services</h1>
          </div>
        </div>
        <div className="Agency-5 lg:flex lg:w-1/5  lg:h-32 lg:p-12 lg:flex-col lg:justify-center lg:items-center lg:gap-5 lg:flex-shrink-0 lg:border-2  flex pt-4 pb-3 flex-row items-center gap-5 flex-shrink-0 border-b-2">
          <div class="Image items-start">
            <img src="/assets/Agency-5.png" alt="" class="lg:w-14 w-10" />
          </div>

          <div className="Tittle lg:text-Gray5 lg:font-Arial lg:text-xs lg:font-normal lg:leading-4 lg:tracking-tighter lg:capitalize lg:bottom-align text-Gray5 font-Arial text-xs font-bold leading-4 tracking-tighter capitalize items-start">
            <h1 class="whitespace-nowrap">Aga Khan Foundation</h1>
          </div>
        </div>
          <div className="Agency-6 lg:flex lg:w-1/5  lg:h-32 lg:p-8 lg:flex-col lg:justify-center lg:items-center lg:gap-5 lg:flex-shrink-0 lg:border-2  flex pt-4 pb-3 flex-row items-center gap-5 flex-shrink-0 border-b-2">
          <div class="Image items-start">
            <img src="/assets/Agency-6.png" alt="" class=" xl:w-12 xs:w-10 w-12  " />
          </div>

          <div className="Tittle lg:text-Gray5 lg:font-Arial lg:text-xs lg:font-normal lg:leading-4 lg:tracking-tighter lg:capitalize lg:bottom-align text-Gray5 font-Arial text-xs font-bold leading-4 tracking-tighter capitalize items-start">
            <h1 class="lg:text-center">Aga Khan Fund for Economic Development</h1>
          </div>
        </div>
        <div className="Agency-7 lg:flex lg:w-1/5 lg:h-32 lg:p-12 lg:flex-col lg:justify-center lg:items-center lg:gap-5 lg:flex-shrink-0 lg:border-2 flex pt-4 pb-3 flex-row items-center gap-5 flex-shrink-0 border-b-2">
          <div class="Image items-start">
            <img src="/assets/Agency-7.png" alt="" class="lg:w-16 w-10" />
          </div>

          <div className="Tittle lg:text-Gray5 lg:font-Arial lg:text-xs lg:font-normal lg:leading-4 lg:tracking-tighter lg:capitalize lg:bottom-align text-Gray5 font-Arial text-xs font-bold leading-4 tracking-tighter capitalize items-start">
            <h1 class="whitespace-nowrap">Aga Khan Health Services</h1>
          </div>
        </div>
        <div className="Agency-8 lg:flex lg:w-1/5  lg:h-32 lg:p-12 lg:flex-col lg:justify-center lg:items-center lg:gap-5 lg:flex-shrink-0 lg:border-2  flex pt-4  pb-3 flex-row items-center gap-5 flex-shrink-0 border-b-2">
          <div class="Image items-start">
            <img src="/assets/Agency-8.png" alt="" class="lg:w-14 w-10" />
          </div>

          <div className="Tittle lg:text-Gray5 lg:font-Arial lg:text-xs lg:font-normal lg:leading-4 lg:tracking-tighter lg:capitalize lg:bottom-align text-Gray5 font-Arial text-xs font-bold leading-4 tracking-tighter capitalize items-start">
            <h1 class="whitespace-nowrap">Aga Khan Trust for Culture</h1>
          </div>
        </div>
        <div className="Agency-9 lg:flex lg:w-1/5  lg:h-32 lg:p-12 lg:flex-col lg:justify-center lg:items-center lg:gap-5 lg:flex-shrink-0 lg:border-2  flex pt-4 pb-3 flex-row items-center gap-5 flex-shrink-0 border-b-2">
          <div class="Image items-start">
            <img src="/assets/Agency-9.png" alt=""  class="lg:w-14 w-10"/>
          </div>

          <div className="Tittle lg:text-Gray5 lg:font-Arial lg:text-xs lg:font-normal lg:leading-4 lg:tracking-tighter lg:capitalize lg:bottom-align text-Gray5 font-Arial text-xs font-bold leading-4 tracking-tighter capitalize items-start">
            <h1 class="whitespace-nowrap">Aga Khan University</h1>
          </div>
        </div>
       
        <div className="Agency-10 lg:flex lg:w-1/5  lg:h-32 lg:p-12 lg:flex-col lg:justify-center lg:items-center lg:gap-5 lg:flex-shrink-0 lg:border-2  flex pt-4 pb-3 flex-row items-center gap-5 flex-shrink-0 border-b-2">
          <div class="Image items-start">
            <img src="/assets/Agency-10.png" alt="" class="lg:w-14 w-10" />
          </div>

          <div className="Tittle lg:text-Gray5 lg:font-Arial lg:text-xs lg:font-normal lg:leading-4 lg:tracking-tighter lg:capitalize lg:bottom-align text-Gray5 font-Arial text-xs font-bold leading-4 tracking-tighter capitalize items-start">
            <h1 class="whitespace-nowrap">University of Central Asia</h1>
          </div>
        </div>
       
      </div>
    </div>
  );
};
export default Agency;