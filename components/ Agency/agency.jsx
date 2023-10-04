import React from "react"
import Image from "next/image";

const Agency = () => {
  return (
    <div className="AgencyMainContainer bg-white xs2:inline-flex xs2:p-12 xs2:flex-col w-full xs2:gap-2.5">
      <div className="AgencyMainHeader xs2:flex xs2:items-center xs2:gap-2  xs:flex xs:items-center xs:gap-3 xs:self-stretch xs:pt-6 xs:pr-6 xs:pl-6">
        <div className="HeadingContainer flex flex-col items-start flex-1  ">
          <h1 className="Heading whitespace-nowrap xs2:text-Gray5 xs2:font-Gotham xs2:text-2xl xs2:not-italic xs2:font-bold xs2:uppercase xs2:leading-9 xs:text-Gray5 xs:text-lg xs:font-Gotham xs:font-bold xs:leading-8 xs:tracking-[0.54px] xs:uppercase">
            OUR AGENCIES
          </h1>{" "}
        </div>
        <div className="HoWeWork flex justify-end items-end gap-2  ">
          <a className="Tittle whitespace-nowrap xs2:text-blue-custom xs2:font-Gotham xs2:text-base xs2:font-medium xs2:leading-6 xs2:tracking-[0.48px] xs:hidden" href="#">
            How We Work
          </a>
          <a className="Tittle whitespace-nowrap xs:text-blue-custom xs:font-Gotham xs:text-base xs:font-medium xs:leading-6 xs:tracking-[0.48px] xs2:hidden" href="#">
            See More
          </a>
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
        </div>
      </div>
      <div className="AgencyList lg:flex lg:flex-wrap lg:flex-shrink-0 lg:pt-10  xs:pb-5 md:pb-1">
        <div className="Agency-1 lg:flex lg:w-1/5  lg:h-32 lg:p-12 lg:flex-col lg:justify-center lg:items-center lg:gap-5 lg:flex-shrink-0 lg:border-2  xs:flex xs:pt-4 xs:pl-5 xs:flex-row xs:items-center xs:gap-5 xs:flex-shrink-0 xs:border-b-2  md:flex md:pt-4 md:pl-1 md:flex-row md:items-center md:gap-5 md:flex-shrink-0 md:border-b-2">
          <div class="Image xs:items-start  md:items-start">
            <img src="/assets/Agency-1.png" alt="" class="lg:w-20 xs:w-12 md:w-12 " />
          </div>
              <div className="Tittle lg:hidden xs:text-Gray5 xs:font-Arial xs:text-xs xs:font-bold xs:leading-4 xs:tracking-tighter xs:capitalize  xs:items-start md:text-Gray5 md:font-Arial md:text-sm md:font-bold md:leading-4 md:tracking-tighter md:capitalize  md:items-start">
            <h1 class="xs:whitespace-nowrap">Aga Khan Academies</h1>
          </div>
        </div>
        <div className="Agency-2 lg:flex lg:w-1/5 lg:h-32 lg:p-12 lg:flex-col lg:justify-center lg:items-center lg:gap-5 lg:flex-shrink-0 lg:border-2 lg:border-l-0 xs:flex xs:pt-4 xs:pl-5 xs:flex-row xs:items-center xs:gap-5 xs:flex-shrink-0 xs:border-b-2  md:flex md:pt-4 md:flex-row md:items-center md:gap-5 md:flex-shrink-0 md:border-b-2 xs:m-0">
          <div class="Image xs:items-start md:items-start ">
            <img src="/assets/Agency-2.png" alt="" class="lg:w-100 xs:w-10 md:w-10" />
          </div>
          <div className="Tittle lg:text-Gray-5 lg:font-Arial lg:text-xs lg:font-normal lg:leading-4 lg:tracking-tighter lg:capitalize  xs:text-Gray5 xs:font-Arial xs:text-xs xs:font-bold xs:leading-4 xs:tracking-tighter xs:capitalize  xs:items-start md:text-Gray5 md:font-Arial md:text-sm md:font-bold md:leading-4 md:tracking-tighter md:capitalize  md:items-start">
            <h1 class="whitespace-nowrap">Agha Khan Agency of Habitat</h1>
          </div>
        </div>
        <div className="Agency-3 lg:flex lg:w-1/5 lg:h-32 lg:p-12 lg:flex-col lg:justify-center lg:items-center lg:gap-5 lg:flex-shrink-0 lg:border-2 lg:border-l-0 xs:flex xs:pt-4 xs:pl-5 xs:flex-row xs:items-center xs:gap-5 xs:flex-shrink-0 xs:border-b-2 md:flex md:pt-4 md:pl-1 md:flex-row md:items-center md:gap-5 md:flex-shrink-0 md:border-b-2">
          <div class="Image xs:items-start md:items-start ">
           <img src="/assets/Agency-3.png" alt="" class="lg:w-14 xs:w-10 md:w-10" />
          </div>

          <div className="Tittle lg:text-Gray5 lg:font-Arial lg:text-xs lg:font-normal lg:leading-4 lg:tracking-tighter lg:capitalize  xs:text-Gray5 xs:font-Arial xs:text-xs xs:font-bold xs:leading-4 xs:tracking-tighter xs:capitalize  xs:items-start md:text-Gray5 md:font-Arial md:text-sm md:font-bold md:leading-4 md:tracking-tighter md:capitalize  md:items-start">
            <h1 class="xl:whitespace-nowrap lg:text-center ">Aga Khan Agency for Microfinance</h1>
          </div>
        </div>
        <div className="Agency-4 lg:flex lg:w-1/5  lg:h-32 lg:p-12 lg:flex-col lg:justify-center lg:items-center lg:gap-5 lg:flex-shrink-0 lg:border-2 lg:border-l-0 xs:flex xs:pt-4 xs:pl-5 xs:flex-row xs:items-center xs:gap-5 xs:flex-shrink-0 xs:border-b-2 md:flex md:pt-4 md:pl-1 md:flex-row md:items-center md:gap-5 md:flex-shrink-0 md:border-b-2">
          <div class="Image xs:items-start md:items-start">
            <img src="/assets/Agency-4.png" alt="" class="lg:w-12 xs:w-10 md:w-10" />
          </div>

          <div className="Tittle lg:text-Gray5 lg:font-Arial lg:text-xs lg:font-normal lg:leading-4 lg:tracking-tighter lg:capitalize  xs:text-Gray5 xs:font-Arial xs:text-xs xs:font-bold xs:leading-4 xs:tracking-tighter xs:capitalize  xs:items-start md:text-Gray5 md:font-Arial md:text-sm md:font-bold md:leading-4 md:tracking-tighter md:capitalize  md:items-start">
            <h1 class="whitespace-nowrap">Aga Khan Education Services</h1>
          </div>
        </div>
        <div className="Agency-5 lg:flex lg:w-1/5  lg:h-32 lg:p-12  lg:flex-col lg:justify-center lg:items-center lg:gap-5 lg:flex-shrink-0 lg:border-2 lg:border-l-0 xs:flex xs:pt-4 xs:pl-5 xs:flex-row xs:items-center xs:gap-5 xs:flex-shrink-0 xs:border-b-2 md:flex md:pt-4 md:pl-1 md:flex-row md:items-center md:gap-5 md:flex-shrink-0 md:border-b-2">
          <div class="Image xs:items-start md:items-start">
            <img src="/assets/Agency-5.png" alt="" class="lg:w-16 xs:w-12 md:w-12" />
          </div>

          <div className="Tittle lg:text-Gray5 lg:font-Arial lg:text-xs lg:font-normal lg:leading-4 lg:tracking-tighter lg:capitalize  xs:text-Gray5 xs:font-Arial xs:text-xs xs:font-bold xs:leading-4 xs:tracking-tighter xs:capitalize  xs:items-start md:text-Gray5 md:font-Arial md:text-sm md:font-bold md:leading-4 md:tracking-tighter md:capitalize  md:items-start">
            <h1 class="whitespace-nowrap">Aga Khan Foundation</h1>
          </div>
        </div>
          <div className="Agency-6 lg:flex lg:w-1/5 lg:h-32 lg:p-12 lg:mt-10 lg:flex-col lg:justify-center lg:items-center lg:gap-5 lg:flex-shrink-0 lg:border-2 xs:flex xs:pt-4 xs:pl-6 xs:flex-row xs:items-center xs:gap-5 xs:flex-shrink-0 xs:border-b-2 md:flex md:pt-4 md:pl-2 md:flex-row md:items-center md:gap-5 md:flex-shrink-0 md:border-b-2">
          <div class="Image xs:items-start md:items-start">
            <img src="/assets/Agency-6.png" alt="" class="lg:w-12 xs:w-8 md:w-8" />
          </div>

          <div className="Tittle text-Gray5 lg:font-Arial lg:text-xs lg:font-normal lg:leading-4 lg:tracking-tighter lg:capitalize xs:font-Arial xs:text-xs xs:font-bold xs:leading-4 xs:tracking-tighter xs:capitalize  xs:items-start md:font-Arial md:text-sm md:font-bold md:leading-4 md:tracking-tighter md:capitalize  md:items-start">
            <h1 class="xl:whitespace-nowrap lg:text-center">Aga Khan Fund for Economic Development</h1>
          </div>
        </div>
        <div className="Agency-7 lg:flex lg:w-1/5 lg:h-32 lg:p-12 lg:mt-10 lg:flex-col lg:justify-center lg:items-center lg:gap-5 lg:flex-shrink-0 lg:border-2 lg:border-l-0 xs:flex xs:pt-4 xs:pl-5 xs:flex-row xs:items-center xs:gap-5 xs:flex-shrink-0 xs:border-b-2 md:flex md:pt-4 md:pl-1 md:flex-row md:items-center md:gap-5 md:flex-shrink-0 md:border-b-2">
          <div class="Image xs:items-start md:items-start">
            <img src="/assets/Agency-7.png" alt="" class="lg:w-20 xs:w-12 md:w-12" />
          </div>

          <div className="Tittle lg:text-Gray5 lg:font-Arial lg:text-xs lg:font-normal lg:leading-4 lg:tracking-tighter lg:capitalize  xs:text-Gray5 xs:font-Arial xs:text-xs xs:font-bold xs:leading-4 xs:tracking-tighter xs:capitalize  xs:items-start md:text-Gray5 md:font-Arial md:text-sm md:font-bold md:leading-4 md:tracking-tighter md:capitalize  md:items-start">
            <h1 class="whitespace-nowrap">Aga Khan Health Services</h1>
          </div>
        </div>
        <div className="Agency-8  lg:flex lg:w-1/5  lg:h-32 lg:p-12 lg:mt-10 lg:flex-col lg:justify-center lg:items-center lg:gap-5 lg:flex-shrink-0 lg:border-2 lg:border-l-0 xs:flex xs:pt-4 xs:pl-5 xs:flex-row xs:items-center xs:gap-5 xs:flex-shrink-0 xs:border-b-2 md:flex md:pt-4 md:pl-1 md:flex-row md:items-center md:gap-5 md:flex-shrink-0 md:border-b-2">
          <div class="Image xs:items-start md:items-start">
            <img src="/assets/Agency-8.png" alt="" class="lg:w-14 xs:w-10 md:w-10" />
          </div>

          <div className="Tittle lg:text-Gray5 lg:font-Arial lg:text-xs lg:font-normal lg:leading-4 lg:tracking-tighter lg:capitalize xs:text-Gray5 xs:font-Arial xs:text-xs xs:font-bold xs:leading-4 xs:tracking-tighter xs:capitalize  xs:items-start md:text-Gray5 md:font-Arial md:text-sm md:font-bold md:leading-4 md:tracking-tighter md:capitalize  md:items-start">
            <h1 class="whitespace-nowrap">Aga Khan Trust for Culture</h1>
          </div>
        </div>
        <div className="Agency-9 lg:flex lg:w-1/5  lg:h-32 lg:p-12 lg:flex-col lg:mt-10 lg:justify-center lg:items-center lg:gap-5 lg:flex-shrink-0 lg:border-2 lg:border-l-0 xs:flex xs:pt-4 xs:pl-5 xs:flex-row xs:items-center xs:gap-5 xs:flex-shrink-0 xs:border-b-2 md:flex md:pt-4 md:pl-1 md:flex-row md:items-center md:gap-5 md:flex-shrink-0 md:border-b-2">
          <div class="Image xs:items-start md:items-start">
            <img src="/assets/Agency-9.png" alt=""  class="lg:w-16 xs:w-10  md:w-10"/>
          </div>

          <div className="Tittle lg:text-Gray5 lg:font-Arial lg:text-xs lg:font-normal lg:leading-4 lg:tracking-tighter lg:capitalize  xs:text-Gray5 xs:font-Arial xs:text-xs xs:font-bold xs:leading-4 xs:tracking-tighter xs:capitalize  xs:items-start md:text-Gray5 md:font-Arial md:text-sm md:font-bold md:leading-4 md:tracking-tighter md:capitalize  md:items-start">
            <h1 class="whitespace-nowrap">Aga Khan University</h1>
          </div>
        </div>
       
        <div className="Agency-10 lg:flex lg:w-1/5  lg:h-32 lg:p-12 lg:flex-col lg:mt-10 lg:justify-center lg:items-center lg:gap-5 lg:flex-shrink-0 lg:border-2 lg:border-l-0 xs:flex xs:pt-4 xs:pl-5 xs:flex-row xs:items-center xs:gap-5 xs:flex-shrink-0  md:flex md:pt-4 md:pl-1 md:flex-row md:items-center md:gap-5 md:flex-shrink-0 ">
          <div class="Image xs:items-start md:items-start">
            <img src="/assets/Agency-10.png" alt="" class="lg:w-16 xs:w-10 md:w-10" />
          </div>

          <div className="Tittle lg:text-Gray5 lg:font-Arial lg:text-xs lg:font-normal lg:leading-4 lg:tracking-tighter lg:capitalize  xs:text-Gray5 xs:font-Arial xs:text-xs xs:font-bold xs:leading-4 xs:tracking-tighter xs:capitalize  xs:items-start md:text-Gray5 md:font-Arial md:text-sm md:font-bold md:leading-4 md:tracking-tighter md:capitalize  md:items-start">
            <h1 class="whitespace-nowrap">University of Central Asia</h1>
          </div>
        </div>
       
      </div>
    </div>
  );
};
export default Agency;
