"use client";
import { useState } from "react";
import "./Footer.modules.css";

export const Footer = ({ isRTL }) => {
  const [isTextVisibleArray, setIsTextVisibleArray] = useState([false]);

  const toggleTextVisibility = (index) => {
    const updatedArray = [...isTextVisibleArray];
    updatedArray[index] = !updatedArray[index];
    setIsTextVisibleArray(updatedArray);
  };
  return (
    <div className="FooterMainContainer">
      <div className="FooterHeaderContainer flex flex-col  xl:items-center lg:flex-row lg:justify-between">
        <div className="FooterHeaderBlock1 lg:w-9/12 ml-6 rtl:mr-6 pt-10 lg:ml-12 rtl:lg:mr-10 pb-5 lg:pb-0 ">
          <div className="FooterHeaderLogoContainer flex flex-row items-center gap-4 sm:gap-5">
            <div className="FooterHeaderLogo1 flex flex-row lg:w-40 h-11 justify-start items-center shrink-0">
              <a href="#">
                {" "}
                <img
                  src="/assets/FooterLogo 1.png"
                  alt=""
                  className="w-7 xs:w-9 sm:w-auto "
                />{" "}
              </a>
              <a href="#">
                <img
                  src="/assets/FooterLogo 2.png"
                  alt=""
                  className="w-8 xs:w-16 sm:w-auto "
                />
              </a>
            </div>
            <div className="FooterHeaderLogo2 flex h-8 shrink-0 gap-3">
              <div className="FooterLogoBorder2"></div>
              <img
                src="/assets/FooterLogo 3.png"
                alt=""
                className="w-14 xs:w-36 sm-auto"
              />
            </div>
          </div>
          <div className="FooterHeaderParagraph mr-4 lg:w-72 pt-9">
            <p className="font-[Gotham] text-sm font-normal text-white leading-5 tracking-tight">
              We work with communities to address the inter-related dimensions
              of poverty in order to improve quality of life, promote pluralism,
              and enhance self-reliance.
            </p>
          </div>
        </div>
        <div className="FooterHeaderBlockBorderCenter lg:hidden"></div>
        <div className="FooterHeaderBlock2 lg:w-[22%] xl:w-3/12 2xl:w-[28%] gap-6 flex flex-col lg:items-start pt-10  justify-center text-center items-center">
          <div className="FooterHeaderSocialIconContainer flex flex-row gap-4 items-center">
            <a className="SocialIcon1" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M13.397 20.997V12.801H16.162L16.573 9.59205H13.397V7.54805C13.397 6.62205 13.655 5.98805 14.984 5.98805H16.668V3.12705C15.8487 3.03924 15.0251 2.99684 14.201 3.00005C11.757 3.00005 10.079 4.49205 10.079 7.23105V9.58605H7.33203V12.795H10.085V20.997H13.397Z"
                  fill="white"
                />
              </svg>
            </a>
            <a className="SocialIcon2" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M22.5 5.99999L20.25 6.37499L21.75 4.49999L19.125 5.24999C15.75 1.49999 10.5 5.62499 12 8.99999C6 8.99999 3 4.49999 3 4.49999C3 4.49999 0.75 7.87499 4.5 10.5L2.25 9.74999C2.25 12 3.75 13.5 6.375 14.25H3.75C5.25 17.25 7.875 17.25 7.875 17.25C7.875 17.25 5.625 19.125 1.5 19.125C13.875 25.125 21.375 13.875 20.25 7.87499L22.5 5.99999Z"
                  fill="white"
                />
              </svg>
            </a>
            <a className="SocialIcon3" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M11.9996 8.87579C10.2793 8.87579 8.8754 10.2797 8.8754 12C8.8754 13.7203 10.2793 15.1242 11.9996 15.1242C13.7199 15.1242 15.1238 13.7203 15.1238 12C15.1238 10.2797 13.7199 8.87579 11.9996 8.87579ZM21.3699 12C21.3699 10.7063 21.3817 9.42423 21.309 8.13283C21.2363 6.63283 20.8942 5.30158 19.7973 4.2047C18.6981 3.10548 17.3692 2.76564 15.8692 2.69298C14.5754 2.62033 13.2934 2.63204 12.002 2.63204C10.7082 2.63204 9.42619 2.62033 8.13478 2.69298C6.63478 2.76564 5.30353 3.10783 4.20665 4.2047C3.10744 5.30392 2.76759 6.63283 2.69494 8.13283C2.62228 9.42658 2.634 10.7086 2.634 12C2.634 13.2914 2.62228 14.5758 2.69494 15.8672C2.76759 17.3672 3.10978 18.6985 4.20665 19.7953C5.30587 20.8945 6.63478 21.2344 8.13478 21.307C9.42853 21.3797 10.7106 21.368 12.002 21.368C13.2957 21.368 14.5777 21.3797 15.8692 21.307C17.3692 21.2344 18.7004 20.8922 19.7973 19.7953C20.8965 18.6961 21.2363 17.3672 21.309 15.8672C21.384 14.5758 21.3699 13.2938 21.3699 12ZM11.9996 16.807C9.33947 16.807 7.19259 14.6602 7.19259 12C7.19259 9.33986 9.33947 7.19298 11.9996 7.19298C14.6598 7.19298 16.8067 9.33986 16.8067 12C16.8067 14.6602 14.6598 16.807 11.9996 16.807ZM17.0035 8.11876C16.3824 8.11876 15.8809 7.6172 15.8809 6.99611C15.8809 6.37501 16.3824 5.87345 17.0035 5.87345C17.6246 5.87345 18.1262 6.37501 18.1262 6.99611C18.1264 7.14359 18.0975 7.28966 18.0411 7.42595C17.9848 7.56224 17.9021 7.68607 17.7978 7.79036C17.6935 7.89464 17.5697 7.97733 17.4334 8.03368C17.2971 8.09004 17.151 8.11895 17.0035 8.11876Z"
                  fill="white"
                />
              </svg>
            </a>
            <a className="SocialIcon4" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M29.4098 9.25995C29.2504 8.66799 28.9384 8.12826 28.5049 7.69479C28.0715 7.26131 27.5317 6.94929 26.9398 6.78995C24.7598 6.19995 15.9998 6.19995 15.9998 6.19995C15.9998 6.19995 7.23978 6.19995 5.05978 6.78995C4.46782 6.94929 3.92809 7.26131 3.49461 7.69479C3.06113 8.12826 2.74911 8.66799 2.58978 9.25995C2.18272 11.4832 1.98519 13.7398 1.99978 16C1.98519 18.2601 2.18272 20.5167 2.58978 22.74C2.74911 23.3319 3.06113 23.8716 3.49461 24.3051C3.92809 24.7386 4.46782 25.0506 5.05978 25.2099C7.23978 25.7999 15.9998 25.7999 15.9998 25.7999C15.9998 25.7999 24.7598 25.7999 26.9398 25.2099C27.5317 25.0506 28.0715 24.7386 28.5049 24.3051C28.9384 23.8716 29.2504 23.3319 29.4098 22.74C29.8168 20.5167 30.0144 18.2601 29.9998 16C30.0144 13.7398 29.8168 11.4832 29.4098 9.25995ZM13.1998 20.2V11.8L20.4698 16L13.1998 20.2Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
          <div
            className="FooterHeaderSignUpContainer flex flex-col justify-center items-center  text-start lg:items-start"
            
          >
            <h1 className="FooterHeaderSignUpHeading1 font-[Gotham] text-sm font-normal  text-white leading-5">
              Subscribe to our newsletter
            </h1>
            <a className="FooterHeaderSignUpButton flex flex-row h-8 mt-2  pt-2 pr-2 pb-2 pl-3 justify-center items-center gap-1" href="#">
              <h2 className="FooterHeaderSignUpHeading1 w-20 h-4 font-[Gotham] text-xs font-normal text-white leading-4 tracking-tighter capitalize">
                Sign up
              </h2>
              <div className="FooterHeaderSignUpArrow">
                <svg
                  className="rtl:hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M6 12L10 8L6 4"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg
                  className="ltr:hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  transform="rotate(180)"
                >
                  <path
                    d="M6 12L10 8L6 4"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </a>
          </div>
          <div className="FooterHeaderContactUsContainer">
            <a className="FooterHeaderContactUsButton flex flex-row h-8  pt-2 pr-2 pb-2 pl-3 justify-center items-center  text-start gap-1" href="#">
              <h2 className="FooterHeaderContactUsHeading1 w-20 h-4 font-[Gotham] text-xs font-normal text-white leading-4 tracking-tighter  capitalize">
                Contact Us
              </h2>
              <div className="FooterHeaderContactUsArrow">
                <svg
                  className="rtl:hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M6 12L10 8L6 4"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg
                  className="ltr:hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  transform="rotate(180)"
                >
                  <path
                    d="M6 12L10 8L6 4"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="FooterHeaderBlockBorderBottom mt-10 mb-10 mr-6 ml-6 "></div>
      <div className="FooterFeaturesContainer flex flex-col lg:flex-row gap-3 ">
        <div className="FooterFeaturesBlock1 lg:w-2/12 flex flex-col items-start ml-6 rtl:mr-6 lg:ml-12 lg:rtl:mr-12">
          <h1 className="FooterFeaturesBlock1Heading font-[Gotham] font-sm text-white text-base leading-6 tracking-wider uppercase">
            Quick Links
          </h1>
          <ul className="">
            <li
              className="FooterFeaturesBlock1List text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal"
             
            > <a href="#">
              Careers at AKDN
              </a>
            </li>
            <li
              className="FooterFeaturesBlock1List text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3"
             
            >
              <a  href="#">
              Partner with Us
              </a>
            </li>
            <li
              className="FooterFeaturesBlock1List text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3"
              
            >
              <a  href="#">
              Donate
              </a>
            </li>
            <li
              className="FooterFeaturesBlock1List text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3"
              
            >
              <a  href="#">
              Frequently Asked Questions
              </a>
            </li>
            <li
              className="FooterFeaturesBlock1List text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3"
                        >
                          <a  href="#">
              COVID-19 Resources Library
              </a>
            </li>
            <li
              className="FooterFeaturesBlock1List text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3"
            
            >
              <a  href="#">
              International Scholarship Programme
              </a>
            </li>
          </ul>
        </div>
        <div className="FooterFeaturesBlock2 w-12/12 lg:w-2/12 lg:flex lg:flex-col lg:items-start">
          <h1 className="FooterFeaturesBlock2Heading hidden lg:block font-[Gotham] font-sm text-white text-base leading-6 tracking-wider uppercase">
            who we are
          </h1>
          <div className="lg:hidden ">
            {isTextVisibleArray[1] ? null : (
              <div className=" flex flex-row p-6 rtl:p-6 lg:p-0 rtl:lg-p-0">
                <h1 className="FooterFeaturesBlock2Heading w-full font-[Gotham] font-sm text-white text-base leading-6 tracking-wider uppercase">
                  who we are
                </h1>
                <div
                  className="SeeMoreLinkArrow flex justify-center gap-4"
                  onClick={() => toggleTextVisibility(1)}
                >
                  <div className="FooterFeaturesBlock5Border lg:hidden"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M4 6L8 10L12 6"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            )}
            {isTextVisibleArray[1] && (
              <div className="SeeLessLink2 flex flex-col gap-2 bg-neutral-700  p-6 rtl:p-6 lg:p-0 rtl:lg-p-0">
                <div className="flex flex-row gap-2 ">
                  <h1 className="FooterFeaturesBlock2Heading w-full font-[Gotham] font-sm text-white text-base leading-6 tracking-wider uppercase">
                    who we are
                  </h1>

                  <div
                    className="SeeMoreLinkArrow flex justify-center gap-4"
                    onClick={() => toggleTextVisibility(1)}
                  >
                    <div className="FooterFeaturesBlock5Border lg:hidden"></div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M4 10L8 6L12 10"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="rou/nd"
                      />
                    </svg>
                  </div>
                </div>

                <ul className="flex flex-col items-start ">
                  <li
                    className="FooterFeaturesBlock2List text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal"
                   
                  >
                    <a  href="#">
                    Founder & Chairman
                    </a>
                  </li>
                  <li
                    className="FooterFeaturesBlock2List text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3"
                   
                  >
                    <a  href="#">
                    Leadership
                    </a>
                  </li>
                  <li
                    className="FooterFeaturesBlock2List text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3"
                    
                  >
                    <a  href="#">
                    Awards Received by AKDN
                    </a>
                  </li>
                  <li
                    className="FooterFeaturesBlock2List text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3"
                    
                  >
                    <a  href="#">
                    Our Partners
                    </a>
                  </li>
                  <li
                    className="FooterFeaturesBlock2List text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3"
                   
                  >
                    <a  href="#">
                    Fact Sheet
                       </a>
                  </li>
                  <li
                    className="FooterFeaturesBlock2List text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3"
                    
                  >
                    <a  href="#">
                    Frequently Asked Questions
                    </a>
                  </li>
                  <li
                    className="FooterFeaturesBlock2List text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3"
                   
                  >
                    <a  href="#">
                    Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <ul className="hidden lg:block">
            <li
                    className="FooterFeaturesBlock2List text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal"
                   
                  >
                    <a  href="#">
                    Founder & Chairman
                    </a>
                  </li>
                  <li
                    className="FooterFeaturesBlock2List text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3"
                   
                  >
                    <a  href="#">
                    Leadership
                    </a>
                  </li>
                  <li
                    className="FooterFeaturesBlock2List text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3"
                    
                  >
                    <a  href="#">
                    Awards Received by AKDN
                    </a>
                  </li>
                  <li
                    className="FooterFeaturesBlock2List text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3"
                    
                  >
                    <a  href="#">
                    Our Partners
                    </a>
                  </li>
                  <li
                    className="FooterFeaturesBlock2List text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3"
                   
                  >
                    <a  href="#">
                    Fact Sheet
                       </a>
                  </li>
                  <li
                    className="FooterFeaturesBlock2List text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3"
                    
                  >
                    <a  href="#">
                    Frequently Asked Questions
                    </a>
                  </li>
                  <li
                    className="FooterFeaturesBlock2List text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3"
                   
                  >
                    <a  href="#">
                    Contact Us
                    </a>
                  </li>
          </ul>
        </div>
        <div className="FooterFeaturesBlock3 w-12/12 lg:w-2/12 lg:flex lg:flex-col lg:items-start">
          <h1 className="FooterFeaturesBlock3Heading hidden lg:block w-4/5 font-[Gotham] font-sm text-white text-base leading-6 tracking-wider uppercase">
            What we do
          </h1>
          <div className="lg:hidden ">
            {isTextVisibleArray[2] ? null : (
              <div className=" flex flex-row p-6 rtl:p-6 lg:p-0 rtl:lg-p-0">
                <h1 className="FooterFeaturesBlock3Heading w-full font-[Gotham] font-sm text-white text-base leading-6 tracking-wider uppercase">
                  What we do
                </h1>
                <div
                  className="SeeMoreLinkArrow flex justify-center gap-4"
                  onClick={() => toggleTextVisibility(2)}
                >
                  <div className="FooterFeaturesBlock5Border lg:hidden"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M4 6L8 10L12 6"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            )}
            {isTextVisibleArray[2] && (
              <div className="SeeLessLink2 flex flex-col bg-neutral-700 p-6 rtl:p-6 lg:p-0 rtl:lg-p-0 gap-2">
                <div className="flex flex-row">
                  <h1 className="FooterFeaturesBlock3Heading w-full font-[Gotham] font-sm text-white text-base leading-6 tracking-wider uppercase">
                    What we do
                  </h1>

                  <div
                    className="SeeMoreLinkArrow flex justify-center gap-4"
                    onClick={() => toggleTextVisibility(2)}
                  >
                    <div className="FooterFeaturesBlock5Border lg:hidden"></div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M4 10L8 6L12 10"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="rou/nd"
                      />
                    </svg>
                  </div>
                </div>
                <ul className="flex flex-col items-start">
                  <li
                    className="FooterFeaturesBlock3List text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal"
                   
                  >
                    <a href="#">
                    Education
                    </a>
                  </li>
                  <li
                    className="FooterFeaturesBlock3List text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3"
                    
                  >
                     <a href="#">Health</a>
                  </li>
                  <li
                    className="FooterFeaturesBlock3List text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3"
                   
                  >
                      <a href="#">
                    Architecture
                    </a>
                  </li>
                  <li
                    className="FooterFeaturesBlock3List text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3"
                    
                  >
                      <a href="#">
                    Culture
                    </a>
                  </li>
                  <li
                    className="FooterFeaturesBlock3List text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3"
                    
                  >
                      <a href="#">
                    Climate & Environment
                    </a>
                  </li>
                  <li
                    className="FooterFeaturesBlock3List text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3"
                   
                  >
                      <a href="#">
                    Civil Society
                    </a>
                  </li>
                  <li
                    className="FooterFeaturesBlock3List flex flex-row text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3 gap-2"
                    
                  >
                    <div className=" ">
                      {isTextVisibleArray[4] ? null : (
                        <div className="flex flex-row gap-2">
                          {" "}
                          <h3> See More</h3>
                          <div
                            className="SeeMoreLinkArrow flex justify-center items-center gap-2"
                            onClick={() => toggleTextVisibility(4)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M4 6L8 10L12 6"
                                stroke="white"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                      )}
                      {isTextVisibleArray[4] && (
                        <div className="SeeLessLink2 flex flex-col items-center gap-2">
                          <div
                            className="SeeMoreLinkArrow flex flex-row items-center gap-2"
                            onClick={() => toggleTextVisibility(4)}
                          >
                            <h3>See More</h3>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M4 10L8 6L12 10"
                                stroke="white"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </div>
                          <ul className="">
                            <li
                              className="FooterFeaturesBlock3List flex flex-row text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal gap-2"
                             
                            >
                                <a href="#">
                              <h3 className="">Eastern Africa</h3>
                              </a>{" "}
                            </li>
                            <li
                              className="FooterFeaturesBlock3List flex flex-row text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3 gap-2"
                              
                            >
                                <a href="#">
                              <h3 className="">West Africa</h3>{" "}
                              </a>
                            </li>
                            <li
                              className="FooterFeaturesBlock3List flex flex-row text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3 gap-2"
                             
                            >
                                <a href="#">
                              <h3 className="">Middle East</h3>{" "}
                              </a>
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <ul className="hidden lg:block">
             <li
                    className="FooterFeaturesBlock3List text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal"
                   
                  >
                    <a href="#">
                    Education
                    </a>
                  </li>
                  <li
                    className="FooterFeaturesBlock3List text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3"
                    
                  >
                     <a href="#">Health</a>
                  </li>
                  <li
                    className="FooterFeaturesBlock3List text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3"
                   
                  >
                      <a href="#">
                    Architecture
                    </a>
                  </li>
                  <li
                    className="FooterFeaturesBlock3List text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3"
                    
                  >
                      <a href="#">
                    Culture
                    </a>
                  </li>
                  <li
                    className="FooterFeaturesBlock3List text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3"
                    
                  >
                      <a href="#">
                    Climate & Environment
                    </a>
                  </li>
                  <li
                    className="FooterFeaturesBlock3List text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3"
                   
                  >
                      <a href="#">
                    Civil Society
                    </a>
                  </li>
                  <li
                    className="FooterFeaturesBlock3List flex flex-row text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3 gap-2"
                    
                  >
                    <div className=" ">
                      {isTextVisibleArray[4] ? null : (
                        <div className="flex flex-row gap-2">
                          {" "}
                          <h3> See More</h3>
                          <div
                            className="SeeMoreLinkArrow flex justify-center items-center gap-2"
                            onClick={() => toggleTextVisibility(4)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M4 6L8 10L12 6"
                                stroke="white"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                      )}
                      {isTextVisibleArray[4] && (
                        <div className="SeeLessLink2 flex flex-col items-center gap-2">
                          <div
                            className="SeeMoreLinkArrow flex flex-row items-center gap-2"
                            onClick={() => toggleTextVisibility(4)}
                          >
                            <h3>See More</h3>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M4 10L8 6L12 10"
                                stroke="white"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </div>
                          <ul className="">
                            <li
                              className="FooterFeaturesBlock3List flex flex-row text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal gap-2"
                             
                            >
                                <a href="#">
                              <h3 className="">Eastern Africa</h3>
                              </a>{" "}
                            </li>
                            <li
                              className="FooterFeaturesBlock3List flex flex-row text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3 gap-2"
                              
                            >
                                <a href="#">
                              <h3 className="">West Africa</h3>{" "}
                              </a>
                            </li>
                            <li
                              className="FooterFeaturesBlock3List flex flex-row text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3 gap-2"
                             
                            >
                                <a href="#">
                              <h3 className="">Middle East</h3>{" "}
                              </a>
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </li>
          </ul>
        </div>
        <div className="FooterFeaturesBlock4 w-12/12 lg:w-2/12 lg:flex lg:flex-col items-start">
          <h1 className="FooterFeaturesBlock4Heading hidden lg:block font-[Gotham] font-sm text-white text-base leading-6 tracking-wider uppercase">
            OUR AGENCIES
          </h1>
          <div className="lg:hidden ">
            {isTextVisibleArray[3] ? null : (
              <div className=" flex flex-row p-6 rtl:p-6 lg:p-0 rtl:lg-p-0 ">
                <h1 className="FooterFeaturesBlock4Heading w-full font-[Gotham] font-sm text-white text-base uppercase">
                  OUR AGENCIES
                </h1>
                <div
                  className="SeeMoreLinkArrow flex justify-center gap-4"
                  onClick={() => toggleTextVisibility(3)}
                >
                  <div className="FooterFeaturesBlock5Border lg:hidden"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M4 6L8 10L12 6"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            )}
            {isTextVisibleArray[3] && (
              <div className="SeeLessLink2 flex flex-col bg-neutral-700 p-6 rtl:p-6 lg:p-0 rtl:lg-p-0 gap-2">
                <div className="flex flex-row">
                  <h1 className="FooterFeaturesBlock4Heading w-full font-[Gotham] font-sm text-white text-base uppercase">
                    OUR AGENCIES
                  </h1>

                  <div
                    className="SeeMoreLinkArrow flex justify-center gap-4"
                    onClick={() => toggleTextVisibility(3)}
                  >
                    <div className="FooterFeaturesBlock5Border lg:hidden"></div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M4 10L8 6L12 10"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="rou/nd"
                      />
                    </svg>
                  </div>
                </div>

                <ul className="flex flex-col items-start">
                   <li
                    className="FooterFeaturesBlock4List  text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal gap-2"
                  
                  >
                    <a  className="flex flex-row" href="#">
                    <h2 className=" uppercase  w-14">AKAH</h2>{" "}
                    <h2 className="">Aga Khan Agency for Habitat</h2>
                    </a>
                  </li>
                  <li
                    className="FooterFeaturesBlock4List  text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3 gap-2"
                    >
                   <a  className="flex flex-row" href="#">
                    <h2 className=" uppercase w-14">AKAM</h2>{" "}
                    <h2 className="">Aga Khan Agency for Microfinance</h2>
                    </a>
                  </li>
                  <li
                    className="FooterFeaturesBlock4List flex flex-row text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3 gap-2"
                    >
                   <a className="flex flex-row" href="#">
                    <h2 className=" uppercase w-14">AKF</h2>{" "}
                    <h2 className="">Aga Khan Foundation</h2>
                    </a>
                  </li>
                  <li
                    className="FooterFeaturesBlock4List text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3 gap-2"
                    >
                   <a className="flex flex-row" href="#">
                    <h2 className=" uppercase w-14">AKFED</h2>{" "}
                    <h2 className="">Aga Khan Fund for Economic Development</h2>
                    </a>
                  </li>
                  <li
                    className="FooterFeaturesBlock4List text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3 gap-2 "
                    
                  >
                    <a className="flex flex-row" href="#">
                    <h2 className=" uppercase w-14">AKHS</h2>{" "}
                    <h2 className="">Aga Khan Health Services</h2>
                    </a>
                  </li>
                  <li
                    className="FooterFeaturesBlock4List text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3 gap-2"
                  
                  >
                    <a className="flex flex-row" href="#">
                    <h2 className=" uppercase w-14">AKS</h2>{" "}
                    <h2 className="">Aga Khan Schools</h2>
                    </a>
                  </li>
                  <li
                    className="FooterFeaturesBlock4List text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3 gap-2"
                    
                  >
                    <a className="flex flex-row" href="#">
                    <h2 className=" uppercase w-14">AKTC</h2>{" "}
                    <h2 className="">Aga Khan Trust for Culture</h2>
                    </a>
                  </li>
                  <li
                    className="FooterFeaturesBlock4List text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3 gap-2"
                    
                  >
                    <a className="flex flex-row" href="#">
                    <h2 className=" uppercase w-14">AKU</h2>{" "}
                    <h2 className="">Aga Khan University</h2>
                    </a>
                  </li>
                  <li
                    className="FooterFeaturesBlock4List text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3 gap-2"
                   
                  >
                    <a className="flex flex-row" href="#">
                    <h2 className=" uppercase w-14">UCA</h2>{" "}
                    <h2 className="">University of Central Asia</h2>
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <ul className="hidden lg:block">
                <li
                    className="FooterFeaturesBlock4List  text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal gap-2"
                  
                  >
                    <a  className="flex flex-row" href="#">
                    <h2 className=" uppercase w-1/4">AKAH</h2>{" "}
                    <h2 className="w-3/4">Aga Khan Agency for Habitat</h2>
                    </a>
                  </li>
                  <li
                    className="FooterFeaturesBlock4List  text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3 gap-2"
                    >
                   <a  className="flex flex-row" href="#">
                    <h2 className=" uppercase w-1/4">AKAM</h2>{" "}
                    <h2 className="w-3/4">Aga Khan Agency for Microfinance</h2>
                    </a>
                  </li>
                  <li
                    className="FooterFeaturesBlock4List  text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3 gap-2"
                    >
                   <a className="flex flex-row" href="#">
                    <h2 className=" uppercase w-1/4">AKF</h2>
                    <h2 className=" w-3/4">Aga Khan Foundation</h2>
                    </a>
                  </li>
                  <li
                    className="FooterFeaturesBlock4List text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3 gap-2"
                    >
                   <a className="flex flex-row" href="#">
                    <h2 className=" uppercase w-1/4">AKFED</h2>{" "}
                    <h2 className="w-3/4">Aga Khan Fund for Economic Development</h2>
                    </a>
                  </li>
                  <li
                    className="FooterFeaturesBlock4List text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3 gap-2 "
                    
                  >
                    <a className="flex flex-row" href="#">
                    <h2 className=" uppercase w-1/4">AKHS</h2>{" "}
                    <h2 className="w-3/4">Aga Khan Health Services</h2>
                    </a>
                  </li>
                  <li
                    className="FooterFeaturesBlock4List text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3 gap-2"
                  
                  >
                    <a className="flex flex-row" href="#">
                    <h2 className=" uppercase w-1/4">AKS</h2>{" "}
                    <h2 className="w-3/4">Aga Khan Schools</h2>
                    </a>
                  </li>
                  <li
                    className="FooterFeaturesBlock4List text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3 gap-2"
                    
                  >
                    <a className="flex flex-row" href="#">
                    <h2 className=" uppercase w-1/4">AKTC</h2>{" "}
                    <h2 className="w-3/4">Aga Khan Trust for Culture</h2>
                    </a>
                  </li>
                  <li
                    className="FooterFeaturesBlock4List text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3 gap-2"
                    
                  >
                    <a className="flex flex-row" href="#">
                    <h2 className=" uppercase w-1/4">AKU</h2>{" "}
                    <h2 className="w-3/4">Aga Khan University</h2>
                    </a>
                  </li>
                  <li
                    className="FooterFeaturesBlock4List text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3 gap-2"
                   
                  >
                    <a className="flex flex-row" href="#">
                    <h2 className=" uppercase w-1/4">UCA</h2>{" "}
                    <h2 className="w-3/4">University of Central Asia</h2>
                    </a>
                  </li>
          </ul>
        </div>
        <div className="FooterFeaturesBlock5 w-12/12 lg:w-1/6 lg:flex lg:flex-col items-start lg:pl-6 rtl:lg:pr-6 "
          
        >
          <h1 className="FooterFeaturesBlock5Heading hidden lg:block  font-[Gotham] font-sm text-white text-base leading-6 tracking-wider uppercase">
            Where we work
          </h1>
          <div className="lg:hidden ">
            {isTextVisibleArray[4] ? null : (
              <div className=" flex flex-row p-6 rtl:p-6">
                <h1 className="FooterFeaturesBlock5Heading w-full font-[Gotham] font-sm text-white text-base leading-6 tracking-wider uppercase">
                  Where we work
                </h1>
                <div
                  className="SeeMoreLinkArrow flex justify-center gap-4"
                  onClick={() => toggleTextVisibility(4)}
                >
                  <div className="FooterFeaturesBlock5Border lg:hidden"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M4 6L8 10L12 6"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            )}
            {isTextVisibleArray[4] && (
              <div className="SeeLessLink2 flex flex-col bg-neutral-700 p-6 rtl:p-6 gap-2">
                <div className="flex flex-row ">
                  <h1 className="FooterFeaturesBlock5Heading w-full font-[Gotham] font-sm text-white text-base leading-6 tracking-wider uppercase">
                    Where we work
                  </h1>
                  <div
                    className="SeeMoreLinkArrow flex justify-center gap-4"
                    onClick={() => toggleTextVisibility(4)}
                  >
                    <div className="FooterFeaturesBlock5Border "></div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M4 10L8 6L12 10"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="rou/nd"
                      />
                    </svg>
                  </div>
                </div>
                <ul className=" ">
                  <li className="FooterFeaturesBlock5List flex flex-row text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal  gap-2">
                    <div className=" ">
                      {isTextVisibleArray[5] ? null : (
                        <div className="flex flex-row gap-2">
                          {" "}
                          <h3 className="w-36" >
                            <a href="#"> Eastern Africa </a>
                          </h3>
                          <div
                            className="SeeMoreLinkArrow flex justify-center items-center gap-2"
                            onClick={() => toggleTextVisibility(5)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M4 6L8 10L12 6"
                                stroke="white"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                      )}
                      {isTextVisibleArray[5] && (
                        <div className="SeeLessLink2 flex flex-col gap-2">
                          <div
                            className="SeeMoreLinkArrow flex flex-row items-center gap-2"
                            onClick={() => toggleTextVisibility(5)}
                          >
                            <a className="w-36" href="#">
                              Eastern Africa </a>
                          
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M4 10L8 6L12 10"
                                stroke="white"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </div>
                          <ul className="">
                            <li
                              className="FooterFeaturesBlock3List flex flex-row text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal gap-2"
                             
                            >
                                <a href="#">
                              <h3 className="">Eastern Africa</h3>
                              </a>{" "}
                            </li>
                            <li
                              className="FooterFeaturesBlock3List flex flex-row text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3 gap-2"
                              
                            >
                                <a href="#">
                              <h3 className="">West Africa</h3>{" "}
                              </a>
                            </li>
                            <li
                              className="FooterFeaturesBlock3List flex flex-row text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3 gap-2"
                             
                            >
                                <a href="#">
                              <h3 className="">Middle East</h3>{" "}
                              </a>
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </li>
                  <li className="FooterFeaturesBlock5List flex flex-row text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3 gap-2">
                    <div className="  ">
                      {isTextVisibleArray[7] ? null : (
                        <div className="flex flex-row gap-2">
                          <h3 className="w-36" >
                            <a href="#">Middle East </a>
                          </h3>
                          <div
                            className="SeeMoreLinkArrow flex justify-center items-center gap-2"
                            onClick={() => toggleTextVisibility(7)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M4 6L8 10L12 6"
                                stroke="white"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                      )}
                      {isTextVisibleArray[7] && (
                        <div className="SeeLessLink2 flex flex-col gap-2">
                          <div
                            className="SeeMoreLinkArrow flex flex-row items-center gap-2"
                            onClick={() => toggleTextVisibility(7)}
                          >
                            <h3 className="w-36" href="#">
                              West Africa
                            </h3>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M4 10L8 6L12 10"
                                stroke="white"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </div>
                          <ul className="">
                            <li className="FooterFeaturesBlock3List flex flex-row text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal gap-2">
                              <h3 className="" href="#">
                                <a href="#">Eastern Africa </a>
                              </h3>{" "}
                            </li>
                            <li className="FooterFeaturesBlock3List flex flex-row text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3 gap-2">
                              <h3 className="" href="#">
                                <a href="#"> West Africa </a>
                              </h3>{" "}
                            </li>
                            <li className="FooterFeaturesBlock3List flex flex-row text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3 gap-2">
                              <h3 className="" href="#">
                                <a href="#"> Middle East </a>
                              </h3>{" "}
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </li>
                  <li className="FooterFeaturesBlock5List flex flex-row text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3 gap-2">
                    <div className="  ">
                      {isTextVisibleArray[8] ? null : (
                        <div className="flex flex-row gap-2">
                          <h3 className="w-36" href="#">
                            Central Asia
                          </h3>
                          <div
                            className="SeeMoreLinkArrow flex justify-center items-center gap-2"
                            onClick={() => toggleTextVisibility(8)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M4 6L8 10L12 6"
                                stroke="white"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                      )}
                      {isTextVisibleArray[8] && (
                        <div className="SeeLessLink2 flex flex-col gap-2">
                          <div
                            className="SeeMoreLinkArrow flex flex-row items-center gap-2"
                            onClick={() => toggleTextVisibility(8)}
                          >
                            <h3 className="w-36" href="#">
                              Central Asia
                            </h3>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M4 10L8 6L12 10"
                                stroke="white"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </div>
                          <ul className="">
                            <li
                              className="FooterFeaturesBlock3List flex flex-row text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal gap-2"
                              href="#"
                            >
                              <h3 className="">Eastern Africa</h3>{" "}
                            </li>
                            <li
                              className="FooterFeaturesBlock3List flex flex-row text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3 gap-2"
                              href="#"
                            >
                              <h3 className="">West Africa</h3>{" "}
                            </li>
                            <li
                              className="FooterFeaturesBlock3List flex flex-row text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3 gap-2"
                              href="#"
                            >
                              <h3 className="">Middle East</h3>{" "}
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </li>
                  <li className="FooterFeaturesBlock5List flex flex-row text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3 gap-2">
                    {" "}
                    <div className=" ">
                      {isTextVisibleArray[9] ? null : (
                        <div className="flex flex-row gap-2">
                          <h3 className="w-36" href="#">
                            South Asia
                          </h3>
                          <div
                            className="SeeMoreLinkArrow flex justify-center items-center gap-2"
                            onClick={() => toggleTextVisibility(9)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M4 6L8 10L12 6"
                                stroke="white"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                      )}
                      {isTextVisibleArray[9] && (
                        <div className="SeeLessLink2 flex flex-col gap-2">
                          <div
                            className="SeeMoreLinkArrow flex flex-row items-center gap-2"
                            onClick={() => toggleTextVisibility(9)}
                          >
                            <h3 className="w-36" href="#">
                              South Asia
                            </h3>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M4 10L8 6L12 10"
                                stroke="white"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </div>
                          <ul className="">
                            <li
                              className="FooterFeaturesBlock3List flex flex-row text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal gap-2"
                              href="#"
                            >
                              <h3 className="">Eastern Africa</h3>{" "}
                            </li>
                            <li
                              className="FooterFeaturesBlock3List flex flex-row text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3 gap-2"
                              href="#"
                            >
                              <h3 className="">West Africa</h3>{" "}
                            </li>
                            <li
                              className="FooterFeaturesBlock3List flex flex-row text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3 gap-2"
                              href="#"
                            >
                              <h3 className="">Middle East</h3>{" "}
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </li>
                  <li className="FooterFeaturesBlock5List flex flex-row text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3 gap-2">
                    <div className=" ">
                      {isTextVisibleArray[10] ? null : (
                        <div className="flex flex-row gap-2">
                          <h3 className="w-36" href="#">
                            Asia-Pacific
                          </h3>
                          <div
                            className="SeeMoreLinkArrow flex justify-center items-center gap-2"
                            onClick={() => toggleTextVisibility(10)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M4 6L8 10L12 6"
                                stroke="white"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                      )}
                      {isTextVisibleArray[10] && (
                        <div className="SeeLessLink2 flex flex-col gap-2">
                          <div
                            className="SeeMoreLinkArrow flex flex-row items-center gap-2"
                            onClick={() => toggleTextVisibility(10)}
                          >
                            <h3 className="w-36" href="#">
                              Asia-Pacific
                            </h3>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M4 10L8 6L12 10"
                                stroke="white"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </div>
                          <ul className="">
                            <li
                              className="FooterFeaturesBlock3List flex flex-row text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal gap-2"
                              href="#"
                            >
                              <h3 className="">Eastern Africa</h3>{" "}
                            </li>
                            <li
                              className="FooterFeaturesBlock3List flex flex-row text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3 gap-2"
                              href="#"
                            >
                              <h3 className="">West Africa</h3>{" "}
                            </li>
                            <li
                              className="FooterFeaturesBlock3List flex flex-row text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3 gap-2"
                              href="#"
                            >
                              <h3 className="">Middle East</h3>{" "}
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </li>
                  <li className="FooterFeaturesBlock5List flex flex-row text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3 gap-2">
                    <div className=" ">
                      {isTextVisibleArray[11] ? null : (
                        <div className="flex flex-row gap-2">
                          <h3 className="w-36" href="#">
                            North America
                          </h3>
                          <div
                            className="SeeMoreLinkArrow flex justify-center items-center gap-2"
                            onClick={() => toggleTextVisibility(11)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M4 6L8 10L12 6"
                                stroke="white"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                      )}
                      {isTextVisibleArray[11] && (
                        <div className="SeeLessLink2 flex flex-col gap-2">
                          <div
                            className="SeeMoreLinkArrow flex flex-row items-center gap-2"
                            onClick={() => toggleTextVisibility(11)}
                          >
                            <h3 className="w-36" href="#">
                              North America
                            </h3>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M4 10L8 6L12 10"
                                stroke="white"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </div>
                          <ul className="">
                            <li
                              className="FooterFeaturesBlock3List flex flex-row text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal gap-2"
                              href="#"
                            >
                              <h3 className="">Eastern Africa</h3>{" "}
                            </li>
                            <li
                              className="FooterFeaturesBlock3List flex flex-row text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3 gap-2"
                              href="#"
                            >
                              <h3 className="">West Africa</h3>{" "}
                            </li>
                            <li
                              className="FooterFeaturesBlock3List flex flex-row text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3 gap-2"
                              href="#"
                            >
                              <h3 className="">Middle East</h3>{" "}
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </li>
                  <li className="FooterFeaturesBlock5List flex flex-row text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3 gap-2">
                    {" "}
                    <div className=" ">
                      {isTextVisibleArray[12] ? null : (
                        <div className="flex flex-row gap-2">
                          <h3 className="w-36" href="#">
                            Europe
                          </h3>
                          <div
                            className="SeeMoreLinkArrow flex justify-center items-center gap-2"
                            onClick={() => toggleTextVisibility(12)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M4 6L8 10L12 6"
                                stroke="white"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                      )}
                      {isTextVisibleArray[12] && (
                        <div className="SeeLessLink2 flex flex-col gap-2">
                          <div
                            className="SeeMoreLinkArrow flex flex-row items-center gap-2"
                            onClick={() => toggleTextVisibility(12)}
                          >
                            <h3 className="w-36" href="#">
                              Europe
                            </h3>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <path
                                d="M4 10L8 6L12 10"
                                stroke="white"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </div>
                          <ul className="">
                            <li
                              className="FooterFeaturesBlock3List flex flex-row text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal gap-2"
                              href="#"
                            >
                              <h3 className="">Eastern Africa</h3>{" "}
                            </li>
                            <li
                              className="FooterFeaturesBlock3List flex flex-row text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3 gap-2"
                              href="#"
                            >
                              <h3 className="">West Africa</h3>{" "}
                            </li>
                            <li
                              className="FooterFeaturesBlock3List flex flex-row text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3 gap-2"
                              href="#"
                            >
                              <h3 className="">Middle East</h3>{" "}
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <ul className="hidden lg:block">
               <li className="FooterFeaturesBlock5List flex flex-row text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal  gap-2">
              <div className=" ">
                {isTextVisibleArray[5] ? null : (
                  <div className="flex flex-row gap-2">
                    {" "}
                    <h3 className="w-36" >
                     <a href="#"> Eastern Africa </a>
                    </h3>
                    <div
                      className="SeeMoreLinkArrow flex justify-center items-center gap-2"
                      onClick={() => toggleTextVisibility(5)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M4 6L8 10L12 6"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                )}
                {isTextVisibleArray[5] && (
                  <div className="SeeLessLink2 flex flex-col gap-2">
                    <div
                      className="SeeMoreLinkArrow flex flex-row items-center gap-2"
                      onClick={() => toggleTextVisibility(5)}
                    >
                      <h3 className="w-36" >
                        <a href="#"> Eastern Africa </a>
                      </h3>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M4 10L8 6L12 10"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                     <ul className="">
                            <li
                              className="FooterFeaturesBlock3List flex flex-row text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal gap-2"
                             
                            >
                                <a href="#">
                              <h3 className="">Eastern Africa</h3>
                              </a>{" "}
                            </li>
                            <li
                              className="FooterFeaturesBlock3List flex flex-row text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3 gap-2"
                              
                            >
                                <a href="#">
                              <h3 className="">West Africa</h3>{" "}
                              </a>
                            </li>
                            <li
                              className="FooterFeaturesBlock3List flex flex-row text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3 gap-2"
                             
                            >
                                <a href="#">
                              <h3 className="">Middle East</h3>{" "}
                              </a>
                            </li>
                          </ul>
                  </div>
                )}
              </div>
            </li>
            <li className="FooterFeaturesBlock5List flex flex-row text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3 gap-2">
              <div className="">
                {isTextVisibleArray[6] ? null : (
                  <div className="flex flex-row gap-2">
                    {" "}
                    <h3 className="w-36" >
                      <a href="#"> West Africa </a>
                    </h3>
                    <div
                      className="SeeMoreLinkArrow flex justify-center items-center gap-2"
                      onClick={() => toggleTextVisibility(6)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M4 6L8 10L12 6"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                )}
                {isTextVisibleArray[6] && (
                  <div className="SeeLessLink2 flex flex-col gap-2">
                    <div
                      className="SeeMoreLinkArrow flex flex-row items-center gap-2"
                      onClick={() => toggleTextVisibility(6)}
                    >
                      <h3 className="w-36" >
                       <a href="#"> West Africa </a>
                      </h3>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M4 10L8 6L12 10"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                     <ul className="">
                            <li
                              className="FooterFeaturesBlock3List flex flex-row text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal gap-2"
                             
                            >
                                <a href="#">
                              <h3 className="">Eastern Africa</h3>
                              </a>{" "}
                            </li>
                            <li
                              className="FooterFeaturesBlock3List flex flex-row text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3 gap-2"
                              
                            >
                                <a href="#">
                              <h3 className="">West Africa</h3>{" "}
                              </a>
                            </li>
                            <li
                              className="FooterFeaturesBlock3List flex flex-row text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3 gap-2"
                             
                            >
                                <a href="#">
                              <h3 className="">Middle East</h3>{" "}
                              </a>
                            </li>
                          </ul>
                  </div>
                )}
              </div>
            </li>
            <li className="FooterFeaturesBlock5List flex flex-row text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3 gap-2">
              <div className="">
                {isTextVisibleArray[7] ? null : (
                  <div className="flex flex-row gap-2">
                    <h3 className="w-36">
                     <a href="#">Middle East </a>
                    </h3>
                    <div
                      className="SeeMoreLinkArrow flex justify-center items-center gap-2"
                      onClick={() => toggleTextVisibility(7)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M4 6L8 10L12 6"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                )}
                {isTextVisibleArray[7] && (
                  <div className="SeeLessLink2 flex flex-col gap-2">
                    <div
                      className="SeeMoreLinkArrow flex flex-row items-center gap-2"
                      onClick={() => toggleTextVisibility(7)}
                    >
                      <h3 className="w-36" >
                       <a href="#"> West Africa </a>
                      </h3>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M4 10L8 6L12 10"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                     <ul className="">
                            <li
                              className="FooterFeaturesBlock3List flex flex-row text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal gap-2"
                             
                            >
                                <a href="#">
                              <h3 className="">Eastern Africa</h3>
                              </a>{" "}
                            </li>
                            <li
                              className="FooterFeaturesBlock3List flex flex-row text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3 gap-2"
                              
                            >
                                <a href="#">
                              <h3 className="">West Africa</h3>{" "}
                              </a>
                            </li>
                            <li
                              className="FooterFeaturesBlock3List flex flex-row text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3 gap-2"
                             
                            >
                                <a href="#">
                              <h3 className="">Middle East</h3>{" "}
                              </a>
                            </li>
                          </ul>
                  </div>
                )}
              </div>
            </li>
            <li className="FooterFeaturesBlock5List flex flex-row text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3 gap-2">
              <div className=" ">
                {isTextVisibleArray[8] ? null : (
                  <div className="flex flex-row gap-2">
                    <h3 className="w-36" >
                     <a href="#"> Central Asia </a>
                    </h3>
                    <div
                      className="SeeMoreLinkArrow flex justify-center items-center gap-2"
                      onClick={() => toggleTextVisibility(8)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M4 6L8 10L12 6"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                )}
                {isTextVisibleArray[8] && (
                  <div className="SeeLessLink2 flex flex-col gap-2">
                    <div
                      className="SeeMoreLinkArrow flex flex-row items-center gap-2"
                      onClick={() => toggleTextVisibility(8)}
                    >
                      <h3 className="w-36" >
                       <a href="#">  Central Asia </a>
                      </h3>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M4 10L8 6L12 10"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                      <ul className="">
                            <li
                              className="FooterFeaturesBlock3List flex flex-row text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal gap-2"
                             
                            >
                                <a href="#">
                              <h3 className="">Eastern Africa</h3>
                              </a>{" "}
                            </li>
                            <li
                              className="FooterFeaturesBlock3List flex flex-row text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3 gap-2"
                              
                            >
                                <a href="#">
                              <h3 className="">West Africa</h3>{" "}
                              </a>
                            </li>
                            <li
                              className="FooterFeaturesBlock3List flex flex-row text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3 gap-2"
                             
                            >
                                <a href="#">
                              <h3 className="">Middle East</h3>{" "}
                              </a>
                            </li>
                          </ul>
                  </div>
                )}
              </div>
            </li>
            <li className="FooterFeaturesBlock5List flex flex-row text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3 gap-2">
              {" "}
              <div className="">
                {isTextVisibleArray[9] ? null : (
                  <div className="flex flex-row gap-2">
                    <h3 className="w-36" >
                    <a href="#"> South Asia  </a>
                    </h3>
                    <div
                      className="SeeMoreLinkArrow flex justify-center items-center gap-2"
                      onClick={() => toggleTextVisibility(9)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M4 6L8 10L12 6"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                )}
                {isTextVisibleArray[9] && (
                  <div className="SeeLessLink2 flex flex-col gap-2">
                    <div
                      className="SeeMoreLinkArrow flex flex-row items-center gap-2"
                      onClick={() => toggleTextVisibility(9)}
                    >
                      <h3 className="w-36" >
                       <a href="#"> South Asia </a>
                      </h3>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M4 10L8 6L12 10"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <ul className="">
                            <li
                              className="FooterFeaturesBlock3List flex flex-row text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal gap-2"
                             
                            >
                                <a href="#">
                              <h3 className="">Eastern Africa</h3>
                              </a>{" "}
                            </li>
                            <li
                              className="FooterFeaturesBlock3List flex flex-row text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3 gap-2"
                              
                            >
                                <a href="#">
                              <h3 className="">West Africa</h3>{" "}
                              </a>
                            </li>
                            <li
                              className="FooterFeaturesBlock3List flex flex-row text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3 gap-2"
                             
                            >
                                <a href="#">
                              <h3 className="">Middle East</h3>{" "}
                              </a>
                            </li>
                          </ul>
                  </div>
                )}
              </div>
            </li>
            <li className="FooterFeaturesBlock5List flex flex-row text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3 gap-2">
              <div className="  ">
                {isTextVisibleArray[10] ? null : (
                  <div className="flex flex-row gap-2">
                    <h3 className="w-36">
                     <a href="#">Asia-Pacific </a>
                    </h3>
                    <div
                      className="SeeMoreLinkArrow flex justify-center items-center gap-2"
                      onClick={() => toggleTextVisibility(10)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M4 6L8 10L12 6"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                )}
                {isTextVisibleArray[10] && (
                  <div className="SeeLessLink2 flex flex-col gap-2">
                    <div
                      className="SeeMoreLinkArrow flex flex-row items-center gap-2"
                      onClick={() => toggleTextVisibility(10)}
                    >
                      <h3 className="w-36" >
                       <a href="#">Asia-Pacific </a>
                      </h3>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M4 10L8 6L12 10"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                     <ul className="">
                            <li
                              className="FooterFeaturesBlock3List flex flex-row text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal gap-2"
                             
                            >
                                <a href="#">
                              <h3 className="">Eastern Africa</h3>
                              </a>{" "}
                            </li>
                            <li
                              className="FooterFeaturesBlock3List flex flex-row text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3 gap-2"
                              
                            >
                                <a href="#">
                              <h3 className="">West Africa</h3>{" "}
                              </a>
                            </li>
                            <li
                              className="FooterFeaturesBlock3List flex flex-row text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3 gap-2"
                             
                            >
                                <a href="#">
                              <h3 className="">Middle East</h3>{" "}
                              </a>
                            </li>
                          </ul>
                  </div>
                )}
              </div>
            </li>
            <li className="FooterFeaturesBlock5List flex flex-row text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3 gap-2">
              <div className="  ">
                {isTextVisibleArray[11] ? null : (
                  <div className="flex flex-row gap-2">
                    <h3 className="w-36" >
                     <a href="#"> North America </a>
                    </h3>
                    <div
                      className="SeeMoreLinkArrow flex justify-center items-center gap-2"
                      onClick={() => toggleTextVisibility(11)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M4 6L8 10L12 6"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                )}
                {isTextVisibleArray[11] && (
                  <div className="SeeLessLink2 flex flex-col gap-2">
                    <div
                      className="SeeMoreLinkArrow flex flex-row items-center gap-2"
                      onClick={() => toggleTextVisibility(11)}
                    >
                      <h3 className="w-36" >
                       <a href="#"> North America</a>
                      </h3>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M4 10L8 6L12 10"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                      <ul className="">
                            <li
                              className="FooterFeaturesBlock3List flex flex-row text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal gap-2"
                             
                            >
                                <a href="#">
                              <h3 className="">Eastern Africa</h3>
                              </a>{" "}
                            </li>
                            <li
                              className="FooterFeaturesBlock3List flex flex-row text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3 gap-2"
                              
                            >
                                <a href="#">
                              <h3 className="">West Africa</h3>{" "}
                              </a>
                            </li>
                            <li
                              className="FooterFeaturesBlock3List flex flex-row text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3 gap-2"
                             
                            >
                                <a href="#">
                              <h3 className="">Middle East</h3>{" "}
                              </a>
                            </li>
                          </ul>
                  </div>
                )}
              </div>
            </li>
            <li className="FooterFeaturesBlock5List flex flex-row text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3 gap-2">
              {" "}
              <div className=" ">
                {isTextVisibleArray[12] ? null : (
                  <div className="flex flex-row gap-2">
                    <h3 className="w-36" >
                     <a href="#"> Europe </a>
                    </h3>
                    <div
                      className="SeeMoreLinkArrow flex justify-center items-center gap-2"
                      onClick={() => toggleTextVisibility(12)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M4 6L8 10L12 6"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                )}
                {isTextVisibleArray[12] && (
                  <div className="SeeLessLink2 flex flex-col gap-2">
                    <div
                      className="SeeMoreLinkArrow flex flex-row items-center gap-2"
                      onClick={() => toggleTextVisibility(12)}
                    >
                      <h3 className="w-36" >
                        <a href="#"> Europe </a>
                      </h3>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M4 10L8 6L12 10"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                      <ul className="">
                            <li
                              className="FooterFeaturesBlock3List flex flex-row text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal gap-2"
                             
                            >
                                <a href="#">
                              <h3 className="">Eastern Africa</h3>
                              </a>{" "}
                            </li>
                            <li
                              className="FooterFeaturesBlock3List flex flex-row text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3 gap-2"
                              
                            >
                                <a href="#">
                              <h3 className="">West Africa</h3>{" "}
                              </a>
                            </li>
                            <li
                              className="FooterFeaturesBlock3List flex flex-row text-white font-[Gotham] text-xs font-normal leading-5 tracking-normal pt-3 gap-2"
                             
                            >
                                <a href="#">
                              <h3 className="">Middle East</h3>{" "}
                              </a>
                            </li>
                          </ul>
                  </div>
                )}
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="FooterFeaturesBlockBorderBottom mt-2.5 lg:mt-10 mb-4 lg:mb-10 mr-6 ml-6 "></div>
      <div className="FooterContainer h-40 lg:h-24 xl:mr-10 rtl:xl:ml-10 ">
        <div className="FooterBlock1 text-white text-center font-Gotham text-sm font-normal leading-5 mr-5 ml-5 ">
          <p>
            © 2021 Aga Khan Foundation, an agency of the Aga Khan Development
            Network. All rights reserved.
          </p>
        </div>
        <div className="FooterBlock2 flex flex-row justify-center items-center gap-3 pt-2">
          <h2
            className="FooterBlock2Link1 text-white font-Gotham text-sm font-normal leading-5"
            href="#"
          >
            Terms & Conditions
          </h2>
          <div className="FooterRadioIcon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="3"
              height="4"
              viewBox="0 0 3 4"
              fill="none"
            >
              <circle cx="1.5" cy="2" r="1.5" fill="white" />
            </svg>
          </div>
          <h2
            className="FooterBlock2Link1 text-white font-Gotham text-sm font-normal leading-5"
            href="#"
          >
            Privacy Policy
          </h2>
        </div>
      </div>
    </div>
  );
};
export default Footer;
