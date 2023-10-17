
import React from "react";

const Partners = () => {
  return (
    <div className="PartnersContainer flex py-12 px-5 flex-col items-center gap-20 self-stretch lg:py-20 lg:px-0 lg:flex-col lg:items-center " >
      <div className="PartnersMainHeading flex flex-col items-center gap-7">
        <h1 class="text-custom-text-color  text-center font-[actor] text-5xl font-normal leading-[55px] tracking-normal">
          Partners
        </h1>
        <p class="text-second-text text-center font-[actor] text-[28px] font-normal leading-10 tracking-normal ">
          Most calendars are designed for teams. Slate is designed for
          freelancers
        </p>
      </div>
      <div className="PartnersSocialContainer flex flex-col p-4 items-center gap-8 lg:gap-0 lg:p-0 sm:flex sm:flex-wrap sm:flex-row sm:justify-center sm:items-center sm:w-11/12 lg:max-w-4xl xl:max-w-6xl">
        <div className="PartnersSocial1 flex py-6 px-10 flex-col items-center gap-4 border border-solid border-gray-300 bg-var-light-background bg-white w-[273px] h-[151px] lg:w-[213px] lg:h-[131px] xl:w-[273px] xl:h-[163px] lg:py-8">
          <h1 clasName="text-second-text font-[actor] text-base font-normal leading-6 tracking-normal">
            Client Name
          </h1>
          <div className="SocialImage ">
            <img src="/assets/Google.png" alt="" className="lg:w-48" />
          </div>
        </div>
        <div className="PartnersSocial2 flex py-6 px-10 flex-col items-center gap-4 border border-solid border-gray-300 bg-var-light-background bg-white w-[273px] h-[151px] lg:w-[203px] lg:h-[128px] xl:w-[273px] xl:h-[160px] lg:py-8">
          <h1 clasName="text-second-text font-[actor] text-base font-normal leading-6 tracking-normal">
            Client Name
          </h1>
          <div className="SocialImage ">
            <img src="/assets/Amazon.png" alt="" className="lg:w-52" />
          </div>
        </div>
        <div className="PartnersSocial3 flex py-6 px-10 flex-col items-center gap-4 border border-solid border-gray-300 bg-var-light-background bg-white w-[273px] h-[151px] lg:w-[215px] lg:h-[133px] xl:w-[300px] xl:h-[165px] lg:py-8">
          <h1 clasName="text-second-text font-[actor] text-base font-normal leading-6 tracking-normal">
            Client Name
          </h1>
          <div className="SocialImage ">
            <img src="/assets/Microsoft.png" alt="" className="lg:w-56" />
          </div>
        </div>
        <div className="PartnersSocial4 flex py-6 px-10 flex-col items-center gap-4 border border-solid border-gray-300 bg-var-light-background bg-white w-[273px] h-[151px] lg:w-[185px] lg:h-[133px] xl:w-[220px] xl:h-[165px] lg:py-8">
          <h1 clasName="text-second-text font-[actor] text-base font-normal leading-6 tracking-normal">
            Client Name
          </h1>
          <div className="SocialImage ">
            <img src="/assets/Uber.png" alt="" className="lg:w-36" />
          </div>
        </div>
        <div className="PartnersSocial5 flex py-6 px-10 flex-col items-center gap-4 border border-solid border-gray-300 bg-var-light-background bg-white w-[273px] h-[151px] lg:w-[225px] lg:h-[133px] xl:w-[300px] xl:h-[165px] lg:py-8">
          <h1 clasName="text-second-text font-[actor] text-base font-normal leading-6 tracking-normal">
            Client Name
          </h1>
          <div className="SocialImage ">
            <img src="/assets/Dropbox.png" alt=""  className="lg:w-56" />
          </div>
        </div>
        <div className="PartnersSocial6 flex py-6 px-10 flex-col items-center gap-4 border border-solid border-gray-300 bg-var-light-background bg-white  w-[273px] h-[151px] lg:w-[205px] lg:h-[131px] xl:w-[273px] xl:h-[163px] lg:py-8">
          <h1 clasName="text-second-text font-[actor] text-base font-normal leading-6 tracking-normal">
            Client Name
          </h1>
          <div className="SocialImage "> 
            <img src="/assets/Google.png" alt="" className="lg:w-48" />
          </div>
        </div>
        <div className="PartnersSocial7 flex py-6 px-10 flex-col items-center gap-4 border border-solid border-gray-300 bg-var-light-background bg-white w-[273px] h-[151px] lg:w-[185px] lg:h-[131px] xl:w-[220px] xl:h-[165px] lg:py-8">
          <h1 clasName="text-second-text font-[actor] text-base font-normal leading-6 tracking-normal">
            Client Name
          </h1>
          <div className="SocialImage ">
            <img src="/assets/Uber.png" alt="" className="lg:w-36" />
          </div>
        </div>
        <div className="PartnersSocial8 flex py-6 px-10 flex-col items-center gap-4 border border-solid border-gray-300 bg-var-light-background bg-white w-[273px] h-[151px] lg:w-[205px] lg:h-[126px] xl:w-[273px] xl:h-[158px] lg:py-8">
          <h1 clasName="text-second-text font-[actor] text-base font-normal leading-6 tracking-normal">
            Client Name
          </h1>
          <div className="SocialImage ">
            <img src="/assets/Amazon.png" alt="" className="lg:w-52" />
          </div>
        </div>
      </div>
      <a className="PartnersButton flex w-60 py-4 flex-col items-center rounded-full bg-var-Primary bg-blue-500"  href="#" >
        <button className="text-white font-[actor] text-xl font-normal leading-7 tracking-tighter">
          Try For Free
        </button>
      </a>
    </div>
  );
};

export default Partners;
