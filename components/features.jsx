'use client'
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import styles from "./features.modules.css";
// import { useClient } from "next/client";


 const Features = () => {
   const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const handleClickOutsideVideo = (e) => {
      // Check if the click target is the clip icon button
      if (!e.target.closest(".play-icon")) {
        // If not, pause the video
        if (isPlaying) {
          handlePlayClick();
        }
      }
    };

    // Add click event listener to the document
    document.addEventListener("click", handleClickOutsideVideo);

    return () => {
      // Remove the event listener when the component unmounts
      document.removeEventListener("click", handleClickOutsideVideo);
    };
  }, [isPlaying]);

  return (
    <div className="Features-Main-Container ]flex flex-col items-center gap-20 self-stretch text-centergap-50 py-80 sm:py-0 sm:flex sm:flex-col sm:items-center sm:w-full  md:gap-50 md:flex md:px-0 md:py-80 md:flex-col md:items-center md:self-stretch">
      <div className="Features-Main-Heading-Container flex flex-col items-center gap-7 ">
       <h1 className="text-var(--text, #252b42) text-center font-actor text-4xl font-normal leading-55 tracking-0.2px">
  Features
</h1>
<p className="text-var(--second-text, #374754) text-center font-actor text-xl font-Light leading-40 tracking-0.2px">
  Most calendars are designed for teams.<br />Slate is designed for freelancers.
</p>
      </div>
      <div className="Features-Container flex items-start gap-10 text-center order-2 md:order-1 " >
        <div className="Features-Right-Box  flex flex-col items-center gap-10 w-255">
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
          <h2 className="features-heading  font-actor text-20 leading-28 tracking-0.1 ">
            OpenType Features Variables Fonts
          </h2>
          <p className="features-paragraph text-center font-actor text-xs md:text-base  font-light leading-tight tracking-tighter text-second-text ">
            Slate helps you see how many more days you need to work to reach
            your financial goal.
          </p>
        </div>
        <div className="Features-Mid-Box w-255 flex flex-col items-center gap-10">
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
          <h2 className="features-heading  font-actor text-20 leading-28 tracking-0.1">Design with real data</h2>
          <p className="features-paragraph text-center font-actor text-xs md:text-base font-light leading-tight tracking-tighter text-second-text">
            Slate helps you see how many more days you need to work to reach
            your financial goal.
          </p>
        </div>
        <div className="Features-Left-Box w-255 flex flex-col items-center gap-10">
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
          <h2 className="features-heading  font-actor text-20 leading-28 tracking-0.1">
            Fastest way to take action
          </h2>
          <p className="features-paragraph text-center font-actor text-xs md:text-base font-light  leading-tight tracking-tighter text-second-text">
            Slate helps you see how many more days you need to work to reach
            your financial goal.
          </p>
        </div>
      </div>
      <div className="Features-Video relative order-1 md:order-2 w-90% flex-shrink-0" >
        <div className="Circle absolute inset-0 flex items-center justify-center" onClick={handlePlayClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="188"
            height="188"
            viewBox="0 0 188 188"
            fill="#2091F9"
              style={{ display: isPlaying ? 'none' : 'block' }}
          >
            <circle cx="93.8293" cy="94" r="93.6985" fill="#2091F9" />
          </svg>
          <div className="play-icon absolute " >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
            >
              <g clip-path="url(#clip0_5025_2238)">
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

        <video className="Video-Player "
            
          id="videoPlayer"
            src="/assets/features.mp4" 
            width={1177}
            height={658}
            controls
          poster="/assets/features.jpg" 
              ref={videoRef}
          />
      
       
      </div>
    </div>
  );
};
export default Features;
