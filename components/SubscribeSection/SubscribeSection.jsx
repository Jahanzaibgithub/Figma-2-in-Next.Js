import React from "react";
import "./Subscribe.modules.css";

const SubscribeSection = ({ isRTL }) => {
  return (
    <div className="SubscribeMainContainer flex flex-col pt-20 pr-20 pb-28 pl-2 items-center ">
  <div className="Background h-[820px] xs:h-[620px] md:h-96 w-full xl:max-w-7xl "></div>
      <div className="SubscribeContainer absolute z-10">
        <div className="SvgIcon flex justify-end">
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
          <h1 class="text-center text-[22px] sm:text-[33px] font-semibold leading-[54px]  w-7/12 ">
            Subscribe to get information, latest news, and other interesting
            offers about WindTravel
          </h1>
        </div>
        <div className="InputAndButton flex md:flex-row flex-col justify-center items-center">
         
            <div className="Border p-4 flex-shrink-0 rounded-[10px] sm:w-[421px]">
              <div className="relative ">
                <input 
                  type="text"
                  id="inputField"
                  name="inputField"
                  className="w-full pl-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200 placeholder-gray-400   h-16"
                  placeholder="Your email"
                />
                <div className="Svg ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="18"
                  viewBox="0 0 21 18"
                  fill="none"
                  className="absolute top-1/2 left-3 transform -translate-y-1/2 h-5 w-5 text-gray-400"
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
                </div>
              </div>
          </div>
          <button class="SubscribeButton w-44 h-16 flex-shrink-0 rounded-lg " >
            <h1 className="text-white text-center font-[open-sans] text-[17px] font-semibold">
              Subscribe
            </h1>
          </button>
        </div>
        </div>
        </div>
  );
};

export default SubscribeSection;