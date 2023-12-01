import React from "react";
import "./SubscribeHerosection.modules.css";

const SubscribeHeroSection = ({ isRTL }) => {
  return (
    <div className="SubscribeHeroSection  flex md:py-12 md:px-20 lg:py-16 lg:px-24 justify-center items-center">
    <div className="SubscribeHeroSectionMainContainer flex flex-col h-auto md:h-[760px]  lg:h-[620px] md:flex-wrap p-4 sm:pr-16 sm:pt-32 rounded-tl-[48px] rounded-tr-[48px] rounded-br-[300px] rounded-bl-[48px] rtl:rounded-tl-[48px] rtl:rounded-tr-[48px] rtl:rounded-br-[48px] rtl:rounded-bl-[300px] ">
      <div className="SubscribeHeroSectionContainer pt-20 md:pt-0 md:pl-10">
        <h1 class="SubscribeHeroHeading text-white font-[roboto] text-xl xs:text-3xl sm:text-6xl font-semibold p-2 xs-p5 md:p-0 md:w-8/12  xl:w-8/12 flex justify-center text-center md:text-start md:justify-start ">Practice your Photography skills with ease</h1>
        <p class="SubscribeHeroParagraph text-white font-[poppins] text-lg sm:text-xl style-normal p-2 xs-p5 md:p-0 font-semibold md:w-4/12 flex justify-center text-center md:text-start md:justify-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. </p>
     <div className="MainButtonContainer mt-5 flex flex-col md:flex-row  justify-center items-center md:items-start md:justify-start ">
      <button  className="Button1 m-2 rounded-[10px] w-40 h-12 flex-shrink-0">
        <h1 className="text-white font-[poppins] text-20 font-bold">Get Started</h1>
      </button>
       <button className="Button2 m-2">
        <h1 class="Button2Heading font-[poppins] text-xl font-bold">Discount</h1>
       </button>
     </div>
      </div>
       {isRTL ? ( 
  <div className="Image rtl:flex rtl:justify-center rtl:items-center rtl:md:absolute rtl:md:z-10">
  <div className="rtl:md:pr-[335px] rtl:lg:pr-[300px] rtl:xl:pr-[500px]">
    <img
      src="/assets/SubscribeHeroSection (1).png"
      alt=""
      className="rtl:h-96 rtl:md:w-[300px] rtl:md:h-[350px] rtl:lg:w-[350px] rtl:lg:h-[490px] rtl:xl:w-[500px] rtl:xl:h-[490px]"
    />
  </div>
</div>

       ):(
  
   <div className="Image flex justify-center md:absolute md:z-10">
  <div className="md:pl-[335px] lg:pl-[400px] xl:pl-[500px]">
    <img src="/assets/SubscribeHeroSection.png" alt="" className="h-96 md:w-[300px] md:h-[350px] lg:w-[350px] lg:h-[490px] xl:w-[500px] xl:h-[490px] " />
  </div>
</div>
       )}
    </div>
    </div>
  );
};

export default SubscribeHeroSection;
