import React from "react";

const MainInformation = () => {
  return (
    <div className="MainInformation-Container bg-gray-200 xs2:flex xs2:p-12 xs2:flex-col xs2:items-center xs2:gap-3 xs2:self-stretch xs:flex xs:flex-col xs:p-6 xs:gap-3 xs:justify-center xs:items-center  xs:self-stretch">
      <div className="MainInformation-Tittle-Container xs2:flex xs2:flex-col xs2:items-center xs2:pt-0 xs2:pr-12 xs2:pb-12 xs2:pl-12 xs2:gap-3 xs:gap-3 xs2:self-stretch">
        <div className="MainInformation-Tittle self-stretch xs2:text-center">
          <h1 className="Tittle-1 xs2:text-center xs2:text-Gray4 font-Gotham xs2:text-2xl xs2:font-bold xs2:leading-8 xs2:tracking-[0.72px] xs2:uppercase inline-block xs2:mr-2 xs:mr-2 xs:text-xl xs:font-bold xs:leading-8 xs:tracking-wider xs:uppercase xs:text-Gray4">
            AKDN |
          </h1>
          <h1 className="Tittle-2 xs2:text-Gray5 xs2:font-Gotham xs2:text-2xl xs2:font-bold xs2:leading-8 xs2:tracking-[0.72px] xs2:uppercase inline-block xs:text-xl xs:text-Gray5  xs:font-Gotham xs:font-bold xs:leading-8 xs:tracking-wide xs:uppercase">
            Education
          </h1>
        </div>
        <div className="MainInformation-Paragaph xs2:text-center xs2:text-Gray5 xs2:p-6 xs2:font-Gotham xs2:text-2xl xs2:font-normal xs2:leading-9 xs2:tracking-[0.72px] xs:text-lg xs:text-Gray5 xs:font-Gotham xs:font-normal xs:leading-7 xs:tracking-wide">
          For over 100 years the Aga Khan Development Network (AKDN) has worked
          to ensure that students of all ages have access to quality learning
          opportunities. The Network operates programmes and institutions that
          span the educational ladder, from early childhood programmes to
          primary and secondary schools, from vocational studies for youth and
          adults to university degrees and continuing professional development.
          Each year, the AKDN reaches 2 million learners across 16 countries.
        </div>
      </div>
      <div className="MainInformation-Status-Container  xs:space-y-4 xs:divide-y xs:divide-slate-400  xs2:divide-x xs2:divide-slate-400 xs2:flex xs2:flex-row xs2:items-center xs2:gap-6 xs2:self-stretch   xs:items-start xs:w-full xs:pt-3 xs:gap-3 xs:self-stretch">
        <div className=" StatusContainer-1 xs2:flex xs2:p-4 xs2:flex-col xs2:items-center xs2:gap-3 xs2:flex-1 xs:flex xs:grid-cols-2 xs:items-start xs:gap-4">
          <div className="StatusIcon w-10 h-10 flex-shrink-0">
            <svg class="w-9 h-9" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M25.875 24.6548L18 29.0844L10.125 24.6548V19.9746L7.875 18.7246V25.9706L18 31.6659L28.125 25.9706V18.7246L25.875 19.9746V24.6548Z"
                fill="#084C61"
              />
              <path
                d="M18 3.23291L2.25 11.3996V13.3496L18 22.0994L31.5 14.5996V20.8127H33.75V11.3996L18 3.23291ZM29.25 13.2757L27 14.5257L18 19.5259L9 14.5257L6.75 13.2757L5.19054 12.4093L18 5.7674L30.8095 12.4093L29.25 13.2757Z"
                fill="#084C61"
              />
            </svg>
          </div>
          <div className="Status ">
            <h2 className="Status-Heading xs2:text-Gray5 xs2:text-center xs2:font-Gotham xs2:text-2xl  xs2:font-medium xs2:leading-9 xs2:tracking-[0.72px] xs:text-Gray5 xs:font-Gotham xs:font-medium xs:text-2xl xs:leading-9 xs:tracking-wider">
              2,000,000
            </h2>
            <p className="Status-Paragraph  xs2:text-Gray4 xs2:text-center xs2:font-Gotham xs2:text-base xs2:font-normal xs2:leading-6 xs2:tracking-[0.48px] xs:text-Gray4 xs:font-Gotham xs:text-sm xs:font-normal xs:leading-5">
              Students reached
            </p>
          </div>
        </div>
        <div className="StatusContainer-2 xs2:flex xs2:p-4 xs2:flex-col xs2:items-center xs2:gap-3 xs2:flex-1 xs:flex xs:grid-cols-2 xs:items-start xs:gap-4">
          <div className="StatusIcon ">
            <svg class="w-9 h-9" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M25.875 24.6548L18 29.0844L10.125 24.6548V19.9746L7.875 18.7246V25.9706L18 31.6659L28.125 25.9706V18.7246L25.875 19.9746V24.6548Z"
                fill="#084C61"
              />
              <path
                d="M18 3.23291L2.25 11.3996V13.3496L18 22.0994L31.5 14.5996V20.8127H33.75V11.3996L18 3.23291ZM29.25 13.2757L27 14.5257L18 19.5259L9 14.5257L6.75 13.2757L5.19054 12.4093L18 5.7674L30.8095 12.4093L29.25 13.2757Z"
                fill="#084C61"
              />
            </svg>
          </div>
          <div className="Status">
            <h2 className="Status-Heading xs2:text-Gray5 xs2:text-center xs2:font-Gotham xs2:text-2xl  xs2:font-medium xs2:leading-9 xs2:tracking-[0.72px] xs:text-Gray5 xs:font-Gotham xs:font-medium xs:text-2xl xs:leading-9 xs:tracking-wider">
              20
            </h2>
            <p className="Status-Paragraph  xs2:text-Gray4 xs2:text-center xs2:font-Gotham xs2:text-base xs2:font-normal xs2:leading-6 xs2:tracking-[0.48px] xs:text-Gray4 xs:font-Gotham xs:text-sm xs:font-normal xs:leading-5">
              Schools
            </p>
          </div>
        </div>
        <div className="StatusContainer-3 xs2:flex xs2:p-4 xs2:flex-col xs2:items-center xs2:gap-3 xs2:flex-1 xs:flex xs:grid-cols-2 xs:items-start xs:gap-4">
          <div className="StatusIcon">
             <svg class="w-9 h-9" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M25.875 24.6548L18 29.0844L10.125 24.6548V19.9746L7.875 18.7246V25.9706L18 31.6659L28.125 25.9706V18.7246L25.875 19.9746V24.6548Z"
                fill="#084C61"
              />
              <path
                d="M18 3.23291L2.25 11.3996V13.3496L18 22.0994L31.5 14.5996V20.8127H33.75V11.3996L18 3.23291ZM29.25 13.2757L27 14.5257L18 19.5259L9 14.5257L6.75 13.2757L5.19054 12.4093L18 5.7674L30.8095 12.4093L29.25 13.2757Z"
                fill="#084C61"
              />
            </svg>
          </div>
          <div className="Status">
            <h2 className="Status-Heading xs2:text-Gray5 xs2:text-center xs2:font-Gotham xs2:text-2xl  xs2:font-medium xs2:leading-9 xs2:tracking-[0.72px] xs:text-Gray5 xs:font-Gotham xs:font-medium xs:text-2xl xs:leading-9 xs:tracking-wider">
              2
            </h2>
            <p className="Status-Paragraph  xs2:text-Gray4 xs2:text-center xs2:font-Gotham xs2:text-base xs2:font-normal xs2:leading-6 xs2:tracking-[0.48px] xs:text-Gray4 xs:font-Gotham xs:text-sm xs:font-normal xs:leading-5">
              Universities
            </p>
          </div>
        </div>
        <div className="StatusContainer-4 xs2:flex xs2:p-4 xs2:flex-col xs2:items-center xs2:gap-3 xs2:flex-1 xs:flex xs:grid-cols-2 xs:items-start xs:gap-4">
          <div className="StatusIcon">
            <svg class="w-9 h-9" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M25.875 24.6548L18 29.0844L10.125 24.6548V19.9746L7.875 18.7246V25.9706L18 31.6659L28.125 25.9706V18.7246L25.875 19.9746V24.6548Z"
                fill="#084C61"
              />
              <path
                d="M18 3.23291L2.25 11.3996V13.3496L18 22.0994L31.5 14.5996V20.8127H33.75V11.3996L18 3.23291ZM29.25 13.2757L27 14.5257L18 19.5259L9 14.5257L6.75 13.2757L5.19054 12.4093L18 5.7674L30.8095 12.4093L29.25 13.2757Z"
                fill="#084C61"
              />
            </svg>
          </div>
          <div className="Status">
            <h2 className="Status-Heading xs2:text-Gray5 xs2:text-center xs2:font-Gotham xs2:text-2xl  xs2:font-medium xs2:leading-9 xs2:tracking-[0.72px] xs:text-Gray5 xs:font-Gotham xs:font-medium xs:text-2xl xs:leading-9 xs:tracking-wider">
              2
            </h2>
            <p className="Status-Paragraph  xs2:text-Gray4 xs2:text-center xs2:font-Gotham xs2:text-base xs2:font-normal xs2:leading-6 xs2:tracking-[0.48px] xs:text-Gray4 xs:font-Gotham xs:text-sm xs:font-normal xs:leading-5">
              Universities
            </p>
          </div>
        </div>
      </div>
      <div className="MainButtonContainer xs2:flex xs2:pt-14 xs2:flex-col xs2:items-start xs2:gap-2.5 xs:flex xs:pt-5 xs:flex-col xs:items-start xs:gap-2.5 xs:justify-center  xs:self-stretch">
        <div className="ToggleButtonContainer  bg-[rgba(8,76,97,0.15)]  flex p-6  justify-center xs2:items-center xs:items-center gap-6">
          <h3 className="ToggleButtonName text-[#084C61] tracking-[0.48px] font-Gotham text-base  font-normal leading-6  inline-block">
            Overview Document: AKDN Afghanistan
          </h3>
          <div className="ToggleButton  flex-shrink-0 inline-block  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="22"
              viewBox="0 0 21 22"
              fill="none"
            >
              <path
                d="M1.1665 11H19.8332"
                stroke="#084C61"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.5 1.6665L19.8333 10.9998L10.5 20.3332"
                stroke="#084C61"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainInformation;
