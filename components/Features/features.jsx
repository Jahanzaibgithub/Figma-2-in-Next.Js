'use client'
import React, { useState, useRef, } from "react";
import Image from "next/image";


 const Features = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

const handlePlayClick = (e) => {
  const val = document.getElementsByClassName('PlayButton');
  console.log("handlePlayClick---------------------------", val,videoRef)
    if (val && videoRef) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().then(() => {
          setIsPlaying(true);
          document.querySelector(".PlayButton").style.display = "none";
        });
      }
    }
  };const handleVideoEnded = () => {
    setIsPlaying(false);
  };
 
  
  return (
    <div className="Features-Main-Container flex flex-col items-center gap-20 self-stretch px-0 pt-40 pb-20  md:text-center gap-50 md:py-40 ">
      <div className="Features-Main-Heading-Container flex flex-col items-center gap-7   ">
       <h1 className="Heading text-custom-text-color  font-actor md:text-5xl font-normal leading-13 md:tracking-[0.2px] md:text-custom-primary text-center text-4xl tracking-tight ">
  Features
</h1>
<p className="Paragraph text-second-text m-auto text-center font-actor text-2xl font-normal leading-7 tracking-tight w-7/12 md:font-actor md:text-2xl md:font-Light md:leading-10 md:tracking-[0.2px] md:w-8/12 ">
  Most calendars are designed for teams.Slate is designed for freelancers.
</p>
      </div>
      <div className="Features-Container flex flex-col p-4 items-start gap-12 text-center lg:flex lg:flex-row  lg:gap-14 order-2 lg:order-1 " >
        <div className="FeaturesBox1 flex flex-col w-64 items-center gap-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="61"
            height="61"
            viewBox="0 0 61 61"
            fill="none"
          >
            <path
              d="M21.6042 7.625C25.3117 7.625 28.8673 9.0978 31.4889 11.7194C34.1105 14.341 35.5833 17.8967 35.5833 21.6042C35.5833 24.9846 34.3888 28.0854 32.3808 30.5H53.375V53.375H30.5V32.3808C28.0854 34.3888 24.9846 35.5833 21.6042 35.5833C17.8967 35.5833 14.341 34.1105 11.7194 31.4889C9.0978 28.8673 7.625 25.3117 7.625 21.6042C7.625 17.8967 9.0978 14.341 11.7194 11.7194C14.341 9.0978 17.8967 7.625 21.6042 7.625Z"
              fill="#2091F9"
            />
          </svg>
          <h2 className="features-heading text-custom-text-color  text-center font-actor text-xl font-normal leading-7 tracking-[0.1px]">
            OpenType Features Variables Fonts
          </h2>
          <p className="features-paragraph text-second-text font-actor text-lg leading-6 tracking-[0.2px]">
            Slate helps you see how many more days you need to work to reach
            your financial goal.
          </p>
        </div>
        <div className="FeaturesBox2 flex flex-col w-64 items-center gap-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="57"
            height="56"
            viewBox="0 0 57 56"
            fill="none"
          >
            <path
              d="M23.2498 48.6502C27.4031 47.0168 26.4931 42.5135 24.3931 39.6668C22.3164 36.7502 19.4464 34.7435 16.5531 32.8068C14.4887 31.5057 12.6454 29.883 11.0931 28.0002C10.4398 27.2302 9.10976 25.8068 10.4631 25.5268C11.8398 25.2468 14.2198 26.6002 15.4331 27.1135C17.5564 28.0002 19.6564 29.0268 21.6164 30.2402L23.9731 26.2735C20.3331 23.8702 15.6664 21.7468 11.3264 21.1168C8.8531 20.7435 6.23976 21.2568 5.39976 23.9402C4.6531 26.2502 5.8431 28.5835 7.19643 30.4035C10.3931 34.6735 15.3631 36.7268 19.0731 40.4135C19.8664 41.1835 20.8231 42.0935 21.2898 43.1668C21.7798 44.1935 21.6631 44.2635 20.5664 44.2635C17.6731 44.2635 14.0564 42.0002 11.6998 40.5068L9.3431 44.4735C12.9131 46.6668 18.8864 50.0968 23.2498 48.6502ZM49.1264 12.2502C49.6398 11.7368 49.6398 10.8968 49.1264 10.4068L46.0931 7.37349C45.8487 7.13795 45.5225 7.00635 45.1831 7.00635C44.8437 7.00635 44.5175 7.13795 44.2731 7.37349L41.8931 9.75349L46.7464 14.6068L49.1264 12.2502ZM26.1664 25.4802V30.3335H31.0198L45.3698 15.9835L40.5164 11.1302L26.1664 25.4802Z"
              fill="#2091F9"
            />
          </svg>
          <h2 className="features-heading text-custom-text-color  text-center font-actor text-xl font-normal leading-7 tracking-[0.1px]">Design with real data</h2>
          <p className="features-paragraph text-second-text font-actor text-lg leading-6 tracking-[0.2px]">
            Slate helps you see how many more days you need to work to reach
            your financial goal.
          </p>
        </div>
        <div className="FeaturesBox3 flex flex-col w-64 items-center gap-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="61"
            height="61"
            viewBox="0 0 61 61"
            fill="none"
          >
            <path
              d="M52.6379 11.7679L49.2321 8.36209C48.2917 7.37084 46.6396 7.37084 45.6483 8.36209L22.875 31.1354L29.8646 38.125L52.6379 15.3517C53.6292 14.3604 53.6292 12.7083 52.6379 11.7679ZM17.7917 35.5833C15.7694 35.5833 13.8299 36.3867 12.4 37.8167C10.97 39.2466 10.1667 41.1861 10.1667 43.2083C10.1667 46.5379 7.21834 48.2917 5.08334 48.2917C7.42167 51.3925 11.4375 53.375 15.25 53.375C17.9464 53.375 20.5323 52.3039 22.4389 50.3973C24.3455 48.4906 25.4167 45.9047 25.4167 43.2083C25.4167 41.1861 24.6133 39.2466 23.1834 37.8167C21.7534 36.3867 19.8139 35.5833 17.7917 35.5833Z"
              fill="#2091F9"
            />
          </svg>
          <h2 className="features-heading text-custom-text-color  text-center font-actor text-xl font-normal leading-7 tracking-[0.1px]">
            Fastest way to take action
          </h2>
          <p className="features-paragraph text-second-text font-actor text-lg leading-6 tracking-[0.2px]">
            Slate helps you see how many more days you need to work to reach
            your financial goal.
          </p>
        </div>
      </div>
      <div className="Features-Video relative order-1 lg:order-2 flex-shrink-0  cursor-pointer" >
        <div className="PlayButton  z-20 absolute inset-0 flex items-center justify-center"  onClick={handlePlayClick}>
          <svg className="lg:w-48 lg:h-48 lg:fill-current lg:text-blue-500 w-20 h-16 fill-current text-blue-500 md:w-32 md:h-28 md:fill-current md:text-blue-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 188 188"
            fill="#2091F9"
              >
            <circle cx="93.8293" cy="94" r="93.6985" fill="#2091F9" />
          </svg>
          <div className="play-icon absolute inset-0 flex items-center justify-center ">
            <svg className="lg:w-12 lg:h-12 lg:fill-current lg:text-white w-5 h-4 fill-current text-white md:w-8 md:h-7 md:fill-current md:text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              fill="none"
            >
              <g clipPath="url(#clip0_5025_2238)">
                <path
                  d="M4.40118 0.59375L43.4422 24.0184L4.40118 47.443V0.59375Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_5025_2238">
                  <rect
                    width="46.8492"
                    height="46.8492"
                    fill="white"
                    transform="translate(0.49704 0.59375)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
       <div  className="Video-Container flex justify-center items-center ">
      <video  className="Video-Player w-9/12  rounded-2xl" 
            src="/assets/features.mp4" 
          poster="/assets/features.jpg" 
          ref={videoRef}
           controls={isPlaying} 
           onEnded={handleVideoEnded}
          />
          </div>
      </div>
    </div>
  );
};
export default Features;