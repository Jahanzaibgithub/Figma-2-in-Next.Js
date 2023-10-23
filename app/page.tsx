"use client";
import React, { useState } from "react";
import HeroSection from "../components/HeroSection/herosection";
import Navbar from "../components/Navbar/Navbar";
import Features from "../components/Features/features";
import Partners from "../components/Partners/partners";
import MainInformation from "../components/MainInformation/mainInformation";
import Agency from "../components/ Agency/agency";
import InfoBlock from "../components/Info-Block/infoblock";
import DropDown from "../components/Navbar/Dropdown";
import PartnershipProjects from "../components/PartnershipProjects/PartnershipProject";
import SubscribeSection from "../components/SubscribeSection/SubscribeSection";
import SubscribeHeroSection from "../components/SubscribeSection/SubscribeHeroSection";

import "./globals.css";

export default function Home() {
  const [isRTL, setIsRTL] = useState(false);

  const toggleDirection = () => {
    setIsRTL(!isRTL);
  };
  return (
    <main  dir={`${isRTL ? 'rtl' : 'ltr'}`}>
      
      <div className="page-background w-full bg-banner-bg bg-center relative">
        <Navbar isRTL={isRTL}/>
        <div className="w-full absolute z-10">
          <DropDown isRTL={isRTL} />
        </div>
        <HeroSection toggleDirection={toggleDirection} />
      </div>
      <Features  isRTL={isRTL}/>
      <Partners  isRTL={isRTL} />
       <SubscribeSection  isRTL={isRTL}/>
       <SubscribeHeroSection  isRTL={isRTL}/>
      <MainInformation  isRTL={isRTL} />
      <Agency  isRTL={isRTL} />
      <InfoBlock   isRTL={isRTL}/>
      < PartnershipProjects  isRTL={isRTL}/>
    </main>
  );
}