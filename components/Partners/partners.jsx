import React from "react";

const Partners = () => {
  return (
    <div className="PartnersContainer flex py-12 px-5 flex-col items-center gap-20 self-stretch lg:py-20 lg:px-0 lg:flex-col lg:items-center">
      <div className="PartnersMainHeading flex flex-col items-center gap-7">
        <h1 class="text-custom-text-color  text-center font-[actor] text-5xl font-normal leading-[55px] tracking-normal">
          Partners
        </h1>
        <p class="text-second-text text-center font-[actor] text-[28px] font-normal leading-10 tracking-normal ">
          Most calendars are designed for teams. Slate is designed for
          freelancers
        </p>
      </div>
<div className="PartnersSocialContainer flex flex-col p-4 items-center gap-8 lg:gap-0 lg:p-0 lg:flex lg:flex-wrap lg:flex-row lg:justify-center xl:w-10/12 2xl:w-8/12">
        <div className="PartnersSocial1 flex py-6 px-10 flex-col items-center gap-4 border border-solid border-gray-300 bg-var-light-background bg-white  w-[273px] h-[151px] lg:w-[273px] lg:h-[163px] lg:py-8">
          <h1 clasName="text-second-text font-[actor] text-base font-normal leading-6 tracking-normal">
            Client Name
          </h1>
          <div className="SocialImage ">
            <img src="/assets/Google.png" alt="" />
          </div>
        </div>
        <div className="PartnersSocial2 flex py-6 px-10 flex-col items-center gap-4 border border-solid border-gray-300 bg-var-light-background bg-white  w-[273px] h-[151px] lg:w-[273px] lg:h-[160px] lg:py-8">
          <h1 clasName="text-second-text font-[actor] text-base font-normal leading-6 tracking-normal">
            Client Name
          </h1>
          <div className="SocialImage ">
            <img src="/assets/Amazon.png" alt=""  />
          </div>
        </div>
        <div className="PartnersSocial3 flex py-6 px-10 flex-col items-center gap-4 border border-solid border-gray-300 bg-var-light-background bg-white w-[273px] h-[151px] lg:w-[300px] lg:h-[165px] lg:py-8">
          <h1 clasName="text-second-text font-[actor] text-base font-normal leading-6 tracking-normal">
            Client Name
          </h1>
          <div className="SocialImage ">
            <img src="/assets/Microsoft.png" alt=""  />
          </div>
        </div>  
        <div className="PartnersSocial4 flex py-6 px-10 flex-col items-center gap-4 border border-solid border-gray-300 bg-var-light-background bg-white w-[273px] h-[151px] lg:w-[220px] lg:h-[165px] lg:py-8">
          <h1 clasName="text-second-text font-[actor] text-base font-normal leading-6 tracking-normal">
            Client Name
          </h1>
          <div className="SocialImage ">
            <img src="/assets/Uber.png" alt="" />
          </div>
        </div>
        <div className="PartnersSocial5 flex py-6 px-10 flex-col items-center gap-4 border border-solid border-gray-300 bg-var-light-background bg-white w-[273px] h-[151px] lg:w-[309px] lg:h-[164px] lg:py-8">
          <h1 clasName="text-second-text font-[actor] text-base font-normal leading-6 tracking-normal">
            Client Name
          </h1>
          <div className="SocialImage ">
            <img src="/assets/Dropbox.png" alt=""/>
          </div>
        </div>
        <div className="PartnersSocial6 flex py-6 px-10 flex-col items-center gap-4 border border-solid border-gray-300 bg-var-light-background bg-white w-[273px] h-[151px] lg:w-[273px] lg:h-[163px] lg:py-8">
          <h1 clasName="text-second-text font-[actor] text-base font-normal leading-6 tracking-normal">
            Client Name
          </h1>
          <div className="SocialImage ">
            <img src="/assets/Google.png" alt="" />
          </div>
        </div>
        <div className="PartnersSocial7 flex py-6 px-10 flex-col items-center gap-4 border border-solid border-gray-300 bg-var-light-background bg-white w-[273px] h-[151px] lg:w-[220px] lg:h-[165px] lg:py-8">
          <h1 clasName="text-second-text font-[actor] text-base font-normal leading-6 tracking-normal">
            Client Name
          </h1>
          <div className="SocialImage ">
            <img src="/assets/Uber.png" alt="" />
          </div>
        </div>
        <div className="PartnersSocial8 flex py-6 px-10 flex-col items-center gap-4 border border-solid border-gray-300 bg-var-light-background bg-white w-[273px] h-[151px] lg:w-[273px] lg:h-[160px] lg:py-8">
          <h1 clasName="text-second-text font-[actor] text-base font-normal leading-6 tracking-normal">
            Client Name
          </h1>
          <div className="SocialImage ">
            <img src="/assets/Amazon.png" alt="" />
          </div>
        </div>
      </div>
        <div className="PartnersButton flex w-60 py-4 flex-col items-center rounded-full bg-var-Primary bg-blue-500">
                    <h1 className="text-white font-[actor] text-xl font-normal leading-7 tracking-tighter">Try For Free</h1>
        </div>
    </div>
  );
};

export default Partners;
