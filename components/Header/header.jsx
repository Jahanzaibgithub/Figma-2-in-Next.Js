"use client";
import React, { useState } from "react";
import "./header.modules.css";
import { DownOutlined } from '@ant-design/icons';


const Header = ({ isRTL }) => {
   
  return (
    <div className=" flex flex-row m-1 xs:m-5 justify-between lg:m-0 lg:justify-center lg:items-center">
      <div className="HeaderMainContainerLogo xs:px-2">
        <a href="#">
          {" "}
          <img src="/assets/Headerlogo-1.png" alt="" className=" py-9 w-24 sm:w-auto" />{" "}
        </a>
      </div>
      <div className="HeaderComponentContainerNavigation hidden lg:block  lg:justify-center lg:items-center lg:px-2 ">
        <ul className="HeaderComponentContainerNavigationList flex flex-row gap-5 xl:gap-8 lg:pl-5 lg:mx-8 xl:pl-10 xl:mx-16">
          <li className="HeaderMainContainerNavigationList1 py-5">
            <a className="hover:text-primary2 flex flex-row justify-center items-center gap-1" href="#">
              <h1 className="text-base font-medium">Home</h1>
              <DownOutlined  />
            </a>
            <div className="dropdown-menu ">
                    <div className="flex flex-row text-base font-medium gap-6 p-3 ">
    <ul className="whitespace-nowrap ltr:border-r  rtl:border-l">
      <li className=" ltr:mr-9 rtl:ml-9 hover:text-primary2"><a href="#">Creative Agency</a></li>
      <li className="ltr:mr-9 rtl:ml-9 hover:text-primary2 "><a href="#">Corporate Agency</a></li>
      <li className="ltr:mr-9 rtl:ml-9"><a href="#">StartUp Agency</a></li>
      <li className="ltr:mr-9 rtl:ml-9 hover:text-primary2"><a href="#">Digital Agency</a></li>
      <li className="ltr:mr-9 rtl:ml-9 hover:text-primary2"><a href="#">Portfolio Agency</a></li>
      <li className=" ltr:mr-9 rtl:ml-9 hover:text-primary2"><a href="#">Full Screen Slider</a></li>
      <li className="ltr:mr-9 rtl:ml-9 hover:text-primary2"><a href="#">Portfolio Show Case</a></li>
    </ul>
    
      <ul className="whitespace-nowrap ">
      <li  className="ltr:mr-3 rtl:ml-3 mt-10 hover:text-primary2"> <a href="#">Creative OnePage</a></li>
      <li className=" ltr:mr-3 rtl:ml-3 hover:text-primary2"><a href="#">Corporate OnePage</a></li>
      <li className="ltr:mr-3 rtl:ml-3 hover:text-primary2"><a href="#">StartUp OnePage </a></li>
      <li className="ltr:mr-3 rtl:ml-3 hover:text-primary2"><a href="#">Digital OnePage</a></li>
      <li className="ltr:mr-3 rtl:ml-3 hover:text-primary2"><a href="#">Portfolio OnePage</a></li>
    </ul>
   
    </div>
  </div>
          </li>
          <li className="HeaderMainContainerNavigationList2 py-5">
            <a className=" hover:text-primary2 flex flex-row items-center gap-1" href="#">
              <h1 className="text-base font-medium">About</h1>
            </a>
          </li>
          <li className="HeaderMainContainerNavigationList3 py-5">
            <a className=" hover:text-primary2 flex flex-row justify-center items-center gap-1" href="#">
              <h1 className="text-base font-medium">Services</h1>
               <DownOutlined  />
            </a>
             <div className="dropdown-menu p-3  text-base font-medium">
    <ul className="whitespace-nowrap ">
      <li className="ltr:mr-24 rtl:ml-24 hover:text-primary2 "><a href="#">Our Services</a></li>
      <li className="ltr:mr-24 rtl:ml-24 hover:text-primary2"><a href="#">Services Details</a></li>
    </ul>
    </div>
          </li>
          <li className="HeaderMainContainerNavigationList4 py-5">
            <a className=" hover:text-primary2 flex flex-row justify-center items-center gap-1" href="#">
              <h1 className="text-base font-medium">Pages</h1>
               <DownOutlined  />
            </a>
              <div className="dropdown-menu4 ">
                    <div className="flex flex-row text-base font-medium gap-6 p-3">
    <ul className="whitespace-nowrap ltr:border-r rtl:border-l ">
      <li className="ltr:mr-20 rtl:ml-20 hover:text-primary2"><a href="#">Appointment</a></li>
      <li className="ltr:mr-20 rtl:ml-20 hover:text-primary2"><a href="#">About Us</a></li>
      <li className="ltr:mr-20 rtl:ml-20 hover:text-primary2"><a href="#">Price Plans</a></li>
      <li className="ltr:mr-20 rtl:ml-20 hover:text-primary2"><a href="#">FAQ Pag</a></li>
      <li className="ltr:mr-20 rtl:ml-20 hover:text-primary2"><a href="#">Testimonial</a></li>
      <li className="ltr:mr-20 rtl:ml-20 hover:text-primary2"><a href="#">404 Page</a></li>
    </ul>
    
      <ul className="whitespace-nowrap ltr:border-r rtl:border-l">
      <li className="ltr:mr-20 rtl:ml-20 hover:text-primary2"><a href="#">Portfolio Style 1</a></li>
      <li className="ltr:mr-20 rtl:ml-20 hover:text-primary2"><a href="#">Portfolio Style 2</a></li>
      <li className="ltr:mr-20 rtl:ml-20 hover:text-primary2"><a href="#">Portfolio Style 3</a></li>
      <li className="ltr:mr-20 rtl:ml-20 hover:text-primary2"><a href="#">Portfolio Style 4</a></li>
      <li className="ltr:mr-20 rtl:ml-20 hover:text-primary2"><a href="#">Portfolio Style 5</a></li>
       <li className="ltr:mr-20 rtl:ml-20 hover:text-primary2"><a href="#">Portfolio Details</a></li>
    </ul>

    <ul className="whitespace-nowrap ">
      <li className="ltr:mr-20 rtl:ml-20 hover:text-primary2"><a href="#">Team Style 1 </a></li>
      <li className="ltr:mr-20 rtl:ml-20 hover:text-primary2"><a href="#">Team Style 2</a></li>
      <li className="ltr:mr-20 rtl:ml-20 hover:text-primary2"><a href="#">Team Style 3</a></li>
      <li className="ltr:mr-20 rtl:ml-20 hover:text-primary2"><a href="#">Team Style 4</a></li>
      <li className="ltr:mr-20 rtl:ml-20 hover:text-primary2"><a href="#">Team Style 5</a></li>
      <li className="ltr:mr-20 rtl:ml-20 hover:text-primary2"><a href="#">Team Details</a></li>
    </ul>
   
    </div>
  </div>
          </li>
          <li className="HeaderMainContainerNavigationList5 py-5"> 
            <a className=" hover:text-primary2 flex flex-row justify-center items-center gap-1" href="#">
              <h1 className="text-base font-medium">Blog</h1>
              <DownOutlined  />
            </a>
                <div className="dropdown-menu p-3  text-base font-medium">
    <ul className="whitespace-nowrap  ">
      <li className="ltr:mr-36 rtl:ml-36 hover:text-primary2"><a href="#">Blog List </a></li>
      <li className="ltr:mr-36 rtl:ml-36 hover:text-primary2"><a href="#">Blog Grid</a></li>
        <li className="ltr:mr-36 rtl:ml-36 hover:text-primary2"><a href="#">Blog Details</a></li>
    </ul>
    </div>
          </li>
          <li className="HeaderMainContainerNavigationList6 py-5">
            <a className="hover:text-primary2 flex flex-row items-center gap-1 " href="#">
              {" "}
              <h1 className="text-base font-medium">Contact </h1>
            </a>
          </li>
        </ul>
      </div>
      <div className="HeaderMainContainerButton  flex flex-row items-center xl:ml-16 gap-2 xs:gap-5 lg:gap-3 xl:gap-5 ">
        <a className="HeaderMainContainerButton1 px-2 py-2 sm:px-5 sm:py-6 lg:px-6 lg:py-4"   href="#">
          <div
            className="HeaderContainerButton1 flex flex-row items-center gap-2"
          
          >
            <h1 className=" text-xs xs:text-sm sm:text-base font-semibold whitespace-nowrap">Let's Talk</h1>

            <svg
              className="HeaderContainerButton1SVG"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path d="M5.96875 7C5.96875 6.46875 5.5 6 4.96875 6H4.5C3.375 6 2.5 6.90625 2.5 8.03125V9.5C2.5 10.625 3.375 11.5 4.5 11.5H5C5.53125 11.5 6 11.0625 6 10.5L5.96875 7ZM8 0C3.5 0 0.125 3.75 0 8V9.25C0 9.6875 0.3125 10 0.71875 10C1.09375 10 1.5 9.6875 1.5 9.25V8C1.5 4.4375 4.40625 1.53125 8 1.53125C11.5625 1.53125 14.5 4.4375 14.5 8V12.5C14.5 13.2188 13.9375 13.75 13.25 13.75H9.78125C9.53125 13.3125 9.03125 13 8.5 13H7.53125C6.8125 13 6.15625 13.5 6 14.2188C5.84375 15.1875 6.5625 16 7.46875 16H8.5C9.03125 16 9.53125 15.7188 9.78125 15.25H13.25C14.75 15.25 16 14.0312 16 12.5V8C15.8438 3.75 12.4688 0 8 0ZM11.5 11.5C12.5938 11.5 13.5 10.625 13.5 9.5V8.03125C13.5 6.90625 12.5938 6 11.5 6H11C10.4375 6 10 6.46875 10 7.03125V10.5C10 11.0625 10.4375 11.5 11 11.5H11.5Z" fill="#3B38EB"></path>
            </svg>
          </div>
        </a>
        <div className="HeaderMainContainerButton2  px-2 py-2 sm:px-5 sm:py-7 lg:px-5  lg:py-5">
       <a className="HeaderMainContainerButton2Nav" href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="14"
            viewBox="0 0 18 14"
            fill="none"
          >
            <rect y="12" width="18" height="2" fill="#3B38EB"></rect>
            <rect x="5" y="6" width="8" height="2" fill="#3B38EB"></rect>
            <rect width="18" height="2" fill="#3B38EB"></rect>
          </svg>
          </a>
          </div>
        
      </div>
    </div>
  );
};

export default Header;
