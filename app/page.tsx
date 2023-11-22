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
import SubscribeHeroSection from "../components/SubscribeHeroSection/SubscribeHeroSection";
import Footer from "../components/Footer/Footer";
import StatBlock from "../components/StatBlock/statBlock";


import "./globals.css";

export default function Home() {
  const [isRTL, setIsRTL] = useState(false);

  const toggleDirection = () => {
    setIsRTL(!isRTL);
  };
 const fourBlockArray = [
                    
                    {
                      title: '10 million',
                      image: 'assets/StatBlock1.png',
                      description: 'Generates electricity for 10 million people',
                 
                    },
                    {
                      title: '5 million',
                      image: 'assets/StatBlock2.png',
                      description: 'Provides quality health care to 5 million people',
                    },
                    {
                      title: '2 million',
                      image: 'assets/StatBlock3.png',
                      description: 'Reaches 2 million students pre-school to university level',
                    },
                    {
                      title: '5 million',
                      image: 'assets/StatBlock4.png',
                      description: 'Receives 5 million visitors in its various parks and gardens',
                    },
                  ];
                   const threeBlockArray = [
                    
                  
                    {
                      title: '5 million',
                      image: 'assets/StatBlock2.png',
                      description: 'Provides quality health care to 5 million people',
                    },
                    {
                      title: '2 million',
                      image: 'assets/StatBlock3.png',
                      description: 'Reaches 2 million students pre-school to university level',
                    },
                    {
                      title: '5 million',
                      image: 'assets/StatBlock4.png',
                      description: 'Receives 5 million visitors in its various parks and gardens',
                    },
                  ];
                   const twoBlockArray = [
                
                    {
                      title: '2 million',
                      image: 'assets/StatBlock3.png',
                      description: 'Reaches 2 million students pre-school to university level',
                    },
                    {
                      title: '5 million',
                      image: 'assets/StatBlock4.png',
                      description: 'Receives 5 million visitors in its various parks and gardens',
                    },
                  ];
                   const oneBlockArray = [
                    
                   
                    {
                      title: '5 million',
                      image: 'assets/StatBlock4.png',
                      description: 'Receives 5 million visitors in its various parks and gardens',
                    },
                  ];
  return (
    <main  dir={`${isRTL ? 'rtl' : 'ltr'}`}>
      
      <div className="page-background bg-banner-bg bg-center relative">
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
      < PartnershipProjects  isRTL={true}/>
    < PartnershipProjects  isRTL={false}/> 
     <Footer   isRTL={isRTL}/>
     < StatBlock isRTL={isRTL} statsArray={fourBlockArray}/>
     < StatBlock isRTL={isRTL} statsArray={threeBlockArray}/>
     < StatBlock isRTL={isRTL} statsArray={twoBlockArray}/>
     < StatBlock isRTL={isRTL} statsArray={oneBlockArray}/>
    </main>
  );
}