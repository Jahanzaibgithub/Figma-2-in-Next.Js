"use client";
import React, { useState } from "react";
import Image from "next/image";

function DropDown({ isRTL }) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = (e) => {
    if (!e.target.matches(".dropbtn")) {
      setDropdownOpen(false);
    }
  };
  const baseContainerClass = "NavigationContainer text-white lg:hidden w-full divide-y-2";
 
  const containerClasses = `${baseContainerClass} ${
    isDropdownOpen ? "bg-primary" : ""
  }`;


  return (
     <div className={containerClasses}>
      <div className={baseContainerClass}>
    <div className="NavigationContainer text-white lg:hidden w-full divide-y-2 ">
      <div className="MainHeader flex justify-between items-center self-stretch pt-10 pb-5">
        <div className="LogoImage flex items-start ml-5">
      <Image src="/assets/Rectangle 4.png" alt="" width={186} height={58} />
        </div>
        <div className="ToggleDropDown flex items-end ">
          <svg
            onClick={toggleDropdown}
            className=" w-24 h-10 pt-2 rounded-full focus:outline-none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 40 32"
            fill="none"
          >
            <path
              d="M6.66663 8H33.3333V10.6667H6.66663V8ZM13.3333 14.6667H33.3333V17.3333H13.3333V14.6667ZM21.6666 21.3333H33.3333V24H21.6666V21.3333Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      {isDropdownOpen && (
        <div className="Icons  mt-2 items-start h-96 gap-5 ml-6 mr-6 ">
          <a href="#" className="block font-medium text-lg text-white pt-7 ">
            Home
          </a>
          <a href="#" className="block font-medium text-lg text-white pt-7">
            Product
          </a>
          <a href="#" className="block font-medium text-lg text-white pt-7">
            Pricing
          </a>
          <a href="#" className="block font-medium text-lg text-white pt-7">
            About
          </a>
          <a href="#" className="block font-medium text-l text-white pt-7">
            Contact
          </a>
          <div className="SocialMedia flex flex-row justify-center items-center gap-5 pt-10">
            <a className="w-8 h-8 sm:w-10 sm:h-10" href="https://twitter.com/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 42 42"
                fill="none"
              >
                <path
                  d="M37.6852 10.6853C36.4604 11.2136 35.1275 11.5939 33.7546 11.742C35.18 10.8952 36.2474 9.55736 36.7566 7.97954C35.419 8.77521 33.9538 9.33315 32.4257 9.62861C31.7871 8.94587 31.0147 8.40197 30.1567 8.0308C29.2987 7.65963 28.3734 7.46914 27.4385 7.47121C23.6561 7.47121 20.6141 10.5372 20.6141 14.2996C20.6141 14.828 20.6781 15.3563 20.7822 15.8647C15.1185 15.5685 10.0672 12.8627 6.70906 8.72002C6.09717 9.76516 5.77651 10.9552 5.78046 12.1663C5.78046 14.5358 6.98524 16.6251 8.82243 17.8539C7.73975 17.8113 6.68242 17.5137 5.73643 16.9854V17.0694C5.73643 20.3876 8.08196 23.1374 11.208 23.7698C10.621 23.9222 10.0172 24.0002 9.41082 24.0019C8.96653 24.0019 8.54626 23.9579 8.12198 23.8979C8.98654 26.6036 11.5042 28.5689 14.5021 28.6329C12.1566 30.4701 9.21869 31.5508 6.02862 31.5508C5.45625 31.5508 4.92791 31.5308 4.37955 31.4668C7.40552 33.408 10.9958 34.5288 14.8624 34.5288C27.4145 34.5288 34.283 24.13 34.283 15.1042C34.283 14.808 34.283 14.5118 34.2629 14.2156C35.5918 13.243 36.7566 12.0382 37.6852 10.6853Z"
                  fill="white"
                />
              </svg>
            </a>

            <a className="w-8 h-8 sm:w-10 sm:h-10" href="https://www.facebook.com/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 42 42"
                fill="none"
              >
                <path
                  d="M35.7505 4.98975H6.29142C5.58296 4.98975 5.01059 5.56212 5.01059 6.27058V35.7297C5.01059 36.4382 5.58296 37.0105 6.29142 37.0105H35.7505C36.459 37.0105 37.0314 36.4382 37.0314 35.7297V6.27058C37.0314 5.56212 36.459 4.98975 35.7505 4.98975ZM32.0521 14.3358H29.4945C27.4892 14.3358 27.1009 15.2884 27.1009 16.6893V19.7753H31.888L31.2636 24.6065H27.1009V37.0105H22.1097V24.6105H17.935V19.7753H22.1097V16.213C22.1097 12.0783 24.6353 9.82488 28.3257 9.82488C30.0949 9.82488 31.6119 9.95697 32.0561 10.017V14.3358H32.0521Z"
                  fill="white"
                />
              </svg>
            </a>
            <a className="w-8 h-8 sm:w-10 sm:h-10" href="https://www.linkedin.com/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 42 42"
                fill="none"
              >
                <path
                  d="M35.7383 4.98975H6.2792C5.57074 4.98975 4.99837 5.56212 4.99837 6.27058V35.7297C4.99837 36.4382 5.57074 37.0105 6.2792 37.0105H35.7383C36.4468 37.0105 37.0191 36.4382 37.0191 35.7297V6.27058C37.0191 5.56212 36.4468 4.98975 35.7383 4.98975ZM14.4965 32.2755H9.74545V16.9935H14.4965V32.2755ZM12.123 14.9042C11.5783 14.9042 11.0459 14.7427 10.5931 14.4401C10.1402 14.1375 9.78725 13.7074 9.57882 13.2042C9.3704 12.701 9.31586 12.1473 9.42212 11.6132C9.52837 11.079 9.79065 10.5883 10.1758 10.2032C10.5609 9.81805 11.0516 9.55577 11.5858 9.44952C12.1199 9.34326 12.6736 9.3978 13.1768 9.60623C13.68 9.81465 14.1101 10.1676 14.4127 10.6205C14.7153 11.0733 14.8768 11.6057 14.8768 12.1504C14.8728 13.6714 13.64 14.9042 12.123 14.9042ZM32.2841 32.2755H27.537V24.8426C27.537 23.0695 27.505 20.792 25.0674 20.792C22.5978 20.792 22.2175 22.7213 22.2175 24.7145V32.2755H17.4745V16.9935H22.0294V19.0829H22.0935C22.7259 17.8821 24.2749 16.6133 26.5884 16.6133C31.3995 16.6133 32.2841 19.7793 32.2841 23.894V32.2755Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
        </div>
      )}
      </div>
    </div>
    </div>
  );
}

export default DropDown;
