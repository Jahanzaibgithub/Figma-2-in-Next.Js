import React from "react";
import "./Subscribe.modules.css";

const SubscribeSection = ({ isRTL }) => {
  return (
    <div className="SubscribeSectionMainContainer sm:pt-20 sm:pr-20 sm:pb-28 sm:pl-2 ">
 <div className="SubscribeSectionContainer sm:pt-5 sm:pr-10 sm:pl-10 sm:pb-8 flex  flex-col justify-center items-center">
  <div className="SubscribeSection1 h-[680px] sm:h-[650px] lg:h-[465px] w-38 sm:w-[580px] lg:w-[840px] 2xl:w-[1100px] rounded-tl-[129px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[20px] rtl:rounded-tl-[20px] rtl:rounded-tr-[129px] rtl:rounded-br-[20px] rtl:rounded-bl-[20px]">
     <div className="GroupDesiContainer flex flex-row justify-between">
      <div className="GroupDesign1 rtl:hidden flex justify-end items-end mt-52 xs:mt-36 sm:pt-40 lg:mt-7 ">
      <img src="/assets/Group 41.png" alt="" className=" xs:pt-64 sm:pt-16 lg:pt-0"/>
    </div>
     <div className="GroupDesign1 ltr:hidden flex justify-end items-end mt-52 xs:pt-36 sm:pt-40 lg:mt-7">
      <img src="/assets/Group 41 (1).png" alt="" className=" xs:pt-12 sm:pt-0 lg:pt-0"/>
    </div>
     <div className="GroupDesign2 rtl:hidden flex justify-start items-start mb-28">
      <img src="/assets/Group 42.png" alt="" className=""/>
     </div>
       <div className="GroupDesign2 ltr:hidden flex justify-start items-start mb-28">
      <img src="/assets/Group 42 (1).png" alt="" className=""/>
     </div>
     </div>
  </div>
      <div className="SubscribeSection2  xs:w-80 sm:w-[744px] lg:w-[1020px] 2xl:w-[1280px] pt-10 pb-10 sm:pt-32">
        <div className="Block1">
        <div className="SvgIcon flex justify-end mr-14 rtl:ml-10 pb-10 rtl:pb-14 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="70"
            height="70"
            viewBox="0 0 70 70"
            fill="none"
          >
            <circle cx="35" cy="35" r="35" fill="#FF8C6C" />
            <path
              d="M52.6105 23.9904C53.3018 25.1878 53.2092 26.6136 52.3677 27.711L33.8939 51.8182C33.1321 52.8123 31.8776 53.3191 30.5948 53.0729C29.3387 52.8313 28.3427 51.9156 27.997 50.6841L25.2635 40.9555L24.9789 39.9435L24.2449 39.191L17.1864 31.9595C16.2927 31.0444 15.9977 29.724 16.4166 28.5154C16.8311 27.3206 17.8708 26.4536 19.1527 26.2856L49.267 22.3404C50.6381 22.1604 51.9192 22.793 52.6105 23.9904Z"
              fill="white"
            />
            <path
              d="M25.2636 40.9552L27.9971 50.6839C28.3427 51.9154 29.3387 52.831 30.5949 53.0727C31.8777 53.319 33.1321 52.8121 33.894 51.818L52.3678 27.7109C53.2092 26.6134 53.3019 25.1876 52.6106 23.9902L24.979 39.9433L25.2636 40.9552Z"
              fill="white"
            />
            <path
               d="M36.2232 33.4515C36.5043 33.9385 36.3379 34.5616 35.8503 34.8431L25.2636 40.9553L24.9789 39.9434L24.2449 39.1909L34.8316 33.0787C35.3192 32.7973 35.9421 32.9646 36.2232 33.4515Z"
              fill="black"
            />
            <path
              d="M25.2637 40.9554L35.8504 34.8432C36.3379 34.5617 36.5044 33.9387 36.2232 33.4517L24.979 39.9435L25.2637 40.9554Z"
              fill="url(#paint0_linear_3473_2444)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_3473_2444"
                x1="32.9028"
                y1="35.4017"
                x2="33.5069"
                y2="36.5259"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" />
                <stop offset="1" stop-color="#F7F7F7" />
              </linearGradient>
            </defs>
          </svg>
        
        </div>
        <div className="Heading  flex justify-center text-center ">
          <h1 class="text-center text-[26px] lg:text-[33px] font-semibold leading-[54px]  w-8/12 ">
            Subscribe to get information, latest news, and other interesting
            offers about WindTravel
          </h1>
        </div>
        <div className="InputAndButton flex lg:flex-row flex-col justify-center items-center gap-5 pt-20">
            <div className="BorderContainer flex flex-row xs:justify-start justify-center items-center text-center gap-2  m-3 py-4 px-3  xs:py-5 xs:pl-8 xs:pr-12">
                <span className=" ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="18"
                  viewBox="0 0 21 18"
                  fill="none"
                  className=" " 
                >
                  <path
                    d="M4 6L9.4 10.05C9.75556 10.3167 10.2444 10.3167 10.6 10.05L16 6"
                    stroke="#39425D"
                    stroke-linecap="round"
                  />
                  <rect
                    x="0.5"
                    y="0.5"
                    width="20"
                    height="17"
                    rx="4.5"
                    stroke="#39425D"
                  />
                </svg>
                </span>
               <span className="border-0"> <input 
                  type="text"
                  id="inputField"
                  name="inputField"
                  className=" "
                  placeholder="Your email"
                /></span>
               
             
          </div>
          <button class="SubscribeButton px-12 py-5 flex-shrink-0 rounded-lg " >
            <h1 className="text-white text-center font-[open-sans] text-[17px] font-semibold">
              Subscribe
            </h1>
          </button>
        </div>
        </div>
       <div className="Block2 rtl:hidden hidden sm:flex sm:justify-end sm:items-end pb-14 ">
  <img src="/assets/Group 43.jpg" alt="" className="" />
</div>
<div className="Block2 ltr:hidden hidden sm:flex sm:justify-end sm:items-end ">
  <img src="/assets/Group 43 (1).jpg" alt="" className="" />
</div>

        </div>
      </div>
</div>

       
  );
};

export default SubscribeSection;