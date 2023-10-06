import React from "react";

const MainInformation = () => {
  return (
    <div className="MainInformation-Container bg-slate-200 lex flex-col p-6 gap-3 justify-center items-center self-stretch md:p-12 ">
      <div className="MainInformation-Tittle-Container md:flex gap-3 md:flex-col md:items-center md:pt-0 md:pr-12 md:pb-12 md:pl-12 md:self-stretch">
        <div className="MainInformation-Tittle self-stretch md:text-center">
          <h1 className="Tittle-1  text-Gray4 font-Gotham inline-block  mr-2 text-lg font-bold leading-8 tracking-wider uppercase md:text-2xl  md:text-center md:tracking-[0.72px]">
            AKDN |
          </h1>
          <h1 className="Tittle-2 text-Gray5 font-Gotham inline-block text-lg font-Gotham font-bold leading-8 tracking-wide uppercase md:text-2xl md:tracking-[0.72px]">
            Education
          </h1>
        </div>
        <div className="MainInformation-Paragaph text-Gray5 text-lg leading-7 tracking-wide md:text-center md:p-6 font-Gotham md:text-2xl font-normal md:leading-9 md:tracking-[0.72px]">
          For over 100 years the Aga Khan Development Network (AKDN) has worked
          to ensure that students of all ages have access to quality learning
          opportunities. The Network operates programmes and institutions that
          span the educational ladder, from early childhood programmes to
          primary and secondary schools, from vocational studies for youth and
          adults to university degrees and continuing professional development.
          Each year, the AKDN reaches 2 million learners across 16 countries.
        </div>
      </div>
      <div className="MainInformation-Status-Container divide-y space-y-4 divide-slate-400 md:divide-y-0 md:space-y-0  items-start w-full pt-3 gap-3 self-stretch md:divide-x md:divide-slate-400 md:flex md:flex-row md:items-center md:gap-6">
        <div className=" StatusContainer-1 md:flex md:p-4 md:flex-col md:items-center md:gap-3 md:flex-1 flex grid-cols-2 items-start gap-4">
          <div className="StatusIcon w-10 h-10 flex-shrink-0">
            <svg class="md:w-9 md:h-9 w-10 h-10" xmlns="http://www.w3.org/2000/svg">
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
            <h2 className="Status-Heading text-Gray5 font-Gotham text-2xl  font-medium leading-9  tracking-wider md:text-center md:tracking-[0.72px]">
              2,000,000
            </h2>
            <p className="Status-Paragraph  text-Gray4 font-Gotham font-normal text-sm leading-5 md:text-base md:text-center md:leading-6 md:tracking-[0.48px]">
              Students reached
            </p>
          </div>
        </div>
        <div className="StatusContainer-2 md:flex md:p-4 md:pl-10 md:flex-col md:items-center md:gap-3 md:flex-1 flex grid-cols-2 items-start pt-5 gap-4">
          <div className="StatusIcon ">
            <svg class="md:w-9 md:h-9 w-10 h-10" xmlns="http://www.w3.org/2000/svg">
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
            <h2 className="Status-Heading text-Gray5 font-Gotham text-2xl  font-medium leading-9  tracking-wider md:text-center md:tracking-[0.72px]">
              20
            </h2>
            <p className="Status-Paragraph text-Gray4 font-Gotham font-normal text-sm leading-5 md:text-base md:text-center md:leading-6 md:tracking-[0.48px]">
              Schools
            </p>
          </div>
        </div>
        <div className="StatusContainer-3 md:flex md:p-4 md:pl-10 md:flex-col md:items-center md:gap-3 md:flex-1 flex grid-cols-2 items-start pt-5 gap-4">
          <div className="StatusIcon">
             <svg class="md:w-9 md:h-9 w-10 h-10" xmlns="http://www.w3.org/2000/svg">
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
            <h2 className="Status-Heading text-Gray5 font-Gotham text-2xl  font-medium leading-9  tracking-wider md:text-center md:tracking-[0.72px]">
              2
            </h2>
            <p className="Status-Paragraph text-Gray4 font-Gotham font-normal text-sm leading-5 md:text-base md:text-center md:leading-6 md:tracking-[0.48px]">
              Universities
            </p>
          </div>
        </div>
        <div className="StatusContainer-4 md:flex md:p-4 md:flex-col md:items-center md:gap-3 md:flex-1 flex grid-cols-2 items-start pt-5 gap-4">
          <div className="StatusIcon">
            <svg class="md:w-9 md:h-9 w-10 h-10" xmlns="http://www.w3.org/2000/svg">
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
            <h2 className="Status-Heading text-Gray5 font-Gotham text-2xl  font-medium leading-9  tracking-wider md:text-center md:tracking-[0.72px]">
              2
            </h2>
            <p className="Status-Paragraph  text-Gray4 font-Gotham font-normal text-sm leading-5 md:text-base md:text-center md:leading-6 md:tracking-[0.48px]">
              Universities
            </p>
          </div>
        </div>
      </div>
    <div className="MainButtonContainer flex flex-col pt-5 items-start gap-2.5 justify-center self-stretch md:pt-14 md:items-center ">
        <div className="ToggleButtonContainer bg-[rgba(8,76,97,0.15)]  flex p-6 justify-center items-center gap-6 md:items-center">
          <a className="ToggleButtonName text-[#084C61] tracking-[0.48px] font-Gotham text-base font-normal leading-6 inline-block" href="#">
            Overview Document: AKDN Afghanistan
          </a>
          <a className="ToggleButton  flex-shrink-0 inline-block" href="#">
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
          </a>
        </div>
      </div>
    </div>
  );
};
export default MainInformation;