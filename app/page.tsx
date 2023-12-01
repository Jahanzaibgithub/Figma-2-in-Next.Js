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
import Header from "../components/Header/header";

import "./globals.css";

export default function Home() {
  const [isRTL, setIsRTL] = useState(false);
    const [isFeaturesVisible, setIsFeaturesVisible] = useState(true);
     const [isPartnersVisible, setIsPartnersVisible] = useState(true);
     const [isToggleButton2On, setIsToggleButton2On] = useState(false);
     
      

  const hidePartners = () => {
    setIsPartnersVisible(false);
  };

  const showPartners = () => {
    setIsPartnersVisible(true);
  };

  const hideFeatures = () => {
    setIsFeaturesVisible(false);
  };

  const showFeatures = () => {
    setIsFeaturesVisible(true);
  };

  const toggleDirection = () => {
    setIsRTL(!isRTL);
  };


  const handleToggleButton2 = () => {
    setIsToggleButton2On(!isToggleButton2On);

    if (isToggleButton2On) {
      // If ToggelButton2 is on/true
      showFeatures();
      showPartners();
    }
     // If ToggelButton2 is off/false 
     else if (isPartnersVisible && isFeaturesVisible) {
      showFeatures();
      hidePartners();
    } else if (isPartnersVisible && !isFeaturesVisible) {
      showFeatures();
      hidePartners();
    } else if (!isPartnersVisible && !isFeaturesVisible) {
      showFeatures();
      hidePartners();
    } else if (isFeaturesVisible && !isPartnersVisible) {
      showPartners();
      hideFeatures();
    }
  }



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
      <HeroSection
        toggleDirection={toggleDirection}
        onFeaturesButtonClick={isFeaturesVisible ? hideFeatures : showFeatures}
        onPartnersButtonClick={isPartnersVisible ? hidePartners : showPartners}
            onToggleButton2Click={handleToggleButton2}
      />
      </div>
         {isFeaturesVisible && <Features isRTL={isRTL} />}
       {isPartnersVisible && <Partners isRTL={isRTL} />}
        < Header  isRTL={isRTL}/>
      <MainInformation  isRTL={isRTL} />
      <InfoBlock   isRTL={isRTL}/>
     < StatBlock isRTL={isRTL} statsArray={fourBlockArray}/>
     < StatBlock isRTL={isRTL} statsArray={threeBlockArray}/>
     < StatBlock isRTL={isRTL} statsArray={twoBlockArray}/>
     < StatBlock isRTL={isRTL} statsArray={oneBlockArray}/>
      <Agency  isRTL={isRTL} />
       <SubscribeSection  isRTL={isRTL}/>
       <SubscribeHeroSection  isRTL={isRTL}/>
      < PartnershipProjects  isRTL={true}/>
    < PartnershipProjects  isRTL={false}/> 
     <Footer   isRTL={isRTL}/> 
    </main>
  );
}