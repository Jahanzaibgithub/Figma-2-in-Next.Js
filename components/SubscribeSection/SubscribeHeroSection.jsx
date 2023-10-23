import React from "react";
import "./SubscribeHerosection.modules.css";

const SubscribeHeroSection = ({ isRTL }) => {
  return (
    <div className="HeroSectionMainContainer flex flex-col md:flex-wrap p-4 sm:pr-16 sm:pt-32  ">
      <div className="SubscribeContainer  ">
        <h1 class="Heading text-white font-[roboto] text-6xl font-semibold md:w-8/12  flex justify-center text-center md:text-start md:justify-start">Practice your Photography skills with ease</h1>
        <p class="Paragraph text-neutral-50 font-[poppins] text-xl style-normal font-semibold md:w-4/12 flex justify-center text-center md:text-start md:justify-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. </p>
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
  <div className="rtl:md:pr-[350px] rtl:lg:pr-[400px] rtl:xl:pr-[550px]">
    <img
      src="/assets/SubscribeHeroSection.png"
      alt=""
      className="rtl:h-96 rtl:md:w-[400px] rtlm:d:h-[490px] rtl:lg:w-[450px] rtl:lg:h-[590px] rtl:xl:w-[600px] rtl:xl:h-[590px]"
    />
  </div>
</div>

       ):(
  
   <div className="Image flex justify-center md:absolute md:z-10">
  <div className="md:pl-[350px] lg:pl-[400px] xl:pl-[550px]">
    <img src="/assets/SubscribeHeroSection.png" alt="" className="h-96 md:w-[400px] md:h-[490px] lg:w-[450px] lg:h-[590px] xl:w-[600px] xl:h-[590px] " />
  </div>
</div>
       )}
    </div>
  );
};

export default SubscribeHeroSection;
