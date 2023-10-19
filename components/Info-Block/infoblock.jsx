"use client";
import React, { useState } from "react";

const InfoBlock = () => {
  const [isTextVisibleArray, setIsTextVisibleArray] = useState([
    false,
    false,
    false,
    false,
  ]);
  const toggleTextVisibility = (index) => {
    const updatedArray = [...isTextVisibleArray];
    updatedArray[index] = !updatedArray[index];
    setIsTextVisibleArray(updatedArray);
  };
  return (
    <div className="InfoBlockMainContainer bg-white md:flex md:p-12 md:flex-col md:items-start md:gap-6 p-6 flex flex-col items-start gap-6 self-stretch" >
      <div className="InfoBlockTittle md:flex md:flex-col md:justify-center md:self-stretch ">
        <h1 className="Heading text-Gray5 font-Gotham uppercase leading-8 text-lg font-semibold tracking-[0.54px] md:text-2xl md:font-bold md:tracking-wide">
          Our Work
        </h1>
      </div>
      <div className="InfoBlockContainer flex flex-col items-start gap-11 self-stretch">
        <div className="InfoBlock1 flex flex-col items-start self-stretch gap-2 md:flex-row md:gap-12 ">
          <h2 className="InFoBlockHeading text-Gray5 font-Gotham uppercase text-base font-bold leading-6 self-stretch xl:whitespace-nowrap md:font-normal md:w-2/6">
            Early Childhood Development
          </h2>
          <div className="InFoBlockParagraphAndLink md:w-3/4">
            <p className="InFoBlockPargraph text-Gray5 text-lg font-Gotham font-normal leading-7 tracking-wider self-stretch md:text-xl">
              Globally, the AKDN’s activities in early childhood development
              provide 750,000 children aged pre-natal-8 with quality early
              learning opportunities, annually.{" "}
            </p>
            <div className="SeeMoreLinkContainer">
              {isTextVisibleArray[0] ? null : ( // Text is visible, so we don't render the SVG and title
                <div
                  className="SeeMoreLink1 flex items-center gap-2 "
                  onClick={() => toggleTextVisibility(0)}
                >
                  <div className="SeeMoreLinkTittle whitespace-nowrap text-blue-custom font-Gotham text-base font-medium leading-6 tracking-[0.48px] ">
                    <h2>See More</h2>
                  </div>
                  <div className="SeeMoreLinkArrow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M6 9L12 15L18 9"
                        stroke="#084C61"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              )}
              {isTextVisibleArray[0] && (
                <div className="SeeLessLink2 flex flex-col gap-2 ">
                  <p className="Paragraph  text-Gray5 text-lg font-Gotham font-normal leading-7 tracking-wider self-stretch md:text-xl ">
                    Globally, the AKDN’s activities in early childhood
                    development provide 750,000 children aged pre-natal-8 with
                    quality early learning opportunities, annually.
                  </p>
                  <div
                    className="flex fex-row gap-2"
                    onClick={() => toggleTextVisibility(0)}
                  >
                    <div className="SeeLessLinkTittle whitespace-nowrap text-blue-custom font-Gotham text-base font-medium leading-6 tracking-[0.48px] ">
                      <h2>See Less</h2>
                    </div>
                    <div className="SeeLessLinkArrow">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M6 15L12 9L18 15"
                          stroke="#084C61"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="InfoBlock2 flex flex-col items-start self-stretch gap-2 md:flex-row md:gap-12 ">
          <h2 className="InFoBlockHeading text-Gray5 font-Gotham uppercase text-base font-bold leading-6 self-stretch whitespace-nowrap md:font-normal md:w-2/6">
            {" "}
            Primary & Secondary
          </h2>
          <div className="InFoBlockParagraphAndLink md:w-3/4">
            {" "}
            <p className="InFoBlockPargraph text-Gray5 text-lg font-Gotham font-normal leading-7 tracking-wider self-stretch md:text-xl">
              {" "}
              Globally, the AKDN’s activities in early childhood development
              provide 750,000 children aged pre-natal-8 with quality early
              learning opportunities, annually.{" "}
            </p>
            <div className="SeeMoreLinkContainer">
              {isTextVisibleArray[1] ? null : ( // Text is visible, so we don't render the SVG and title
                <div
                  className="SeeMoreLink1 flex items-center gap-2 "
                  onClick={() => toggleTextVisibility(1)}
                >
                  <div className="SeeMoreLinkTittle whitespace-nowrap text-blue-custom font-Gotham text-base font-medium leading-6 tracking-[0.48px] ">
                    <h2>See More</h2>
                  </div>
                    <div className="SeeMoreLinkArrow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M6 9L12 15L18 9"
                        stroke="#084C61"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              )}
              {isTextVisibleArray[1] && (
                <div className="SeeLessLink2 flex flex-col gap-2">
                  <p className="Paragraph  text-Gray5 text-lg font-Gotham font-normal leading-7 tracking-wider self-stretch md:text-xl ">
                    Globally, the AKDN’s activities in early childhood
                    development provide 750,000 children aged pre-natal-8 with
                    quality early learning opportunities, annually.
                  </p>

                  <div
                    className="flex fex-row gap-2"
                    onClick={() => toggleTextVisibility(1)}
                  >
                    <div className="SeeLessLinkTittle whitespace-nowrap text-blue-custom font-Gotham text-base font-medium leading-6 tracking-[0.48px] ">
                      <h2>See Less</h2>
                    </div>
                    <div className="SeeLessLinkArrow">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M6 15L12 9L18 15"
                          stroke="#084C61"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="InfoBlock3 flex flex-col items-start self-stretch gap-2 md:flex-row md:gap-12  ">
          <h2 className="InFoBlockHeading text-Gray5 font-Gotham uppercase text-base font-bold leading-6 self-stretch whitespace-nowrap md:font-normal md:w-2/6 ">
            Higher Education
          </h2>
          <div className="InFoBlockParagraphAndLink md:w-3/4">
            {" "}
            <p className="InFoBlockPargraph text-Gray5 text-lg font-Gotham font-normal leading-7 tracking-wider self-stretch md:text-xl">
              {" "}
              Globally, the AKDN’s activities in early childhood development
              provide 750,000 children aged pre-natal-8 with quality early
              learning opportunities, annually.{" "}
            </p>
            <div className="SeeMoreLinkContainer">
              {isTextVisibleArray[2] ? null : ( // Text is visible, so we don't render the SVG and title
                <div
                  className="SeeMoreLink1 flex items-center gap-2"
                  onClick={() => toggleTextVisibility(2)}
                >
                  <div className="SeeMoreLinkTittle whitespace-nowrap text-blue-custom font-Gotham text-base font-medium leading-6 tracking-[0.48px] ">
                    <h2>See More</h2>
                  </div>
                    <div className="SeeMoreLinkArrow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M6 9L12 15L18 9"
                        stroke="#084C61"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              )}
              {isTextVisibleArray[2] && (
                <div className="SeeLessLink2 flex  flex-col  gap-2">
                  <p className="Paragraph  text-Gray5 text-lg font-Gotham font-normal leading-7 tracking-wider self-stretch md:text-xl ">
                    Globally, the AKDN’s activities in early childhood
                    development provide 750,000 children aged pre-natal-8 with
                    quality early learning opportunities, annually.
                  </p>

                  <div
                    className="flex fex-row gap-2"
                    onClick={() => toggleTextVisibility(2)}
                  >
                    <div className="SeeLessLinkTittle whitespace-nowrap text-blue-custom font-Gotham text-base font-medium leading-6 tracking-[0.48px] ">
                      <h2>See Less</h2>
                    </div>
                    <div className="SeeLessLinkArrow">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M6 15L12 9L18 15"
                          stroke="#084C61"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="InfoBlock4 flex flex-col items-start self-stretch gap-2 md:flex-row md:gap-12  ">
          <h2 className="InFoBlockHeading text-Gray5 font-Gotham uppercase text-base font-bold leading-6 self-stretch  md:font-normal md:w-2/6 ">
            {" "}
            Continuing Education
          </h2>
          <div className="InFoBlockParagraphAndLink md:w-3/4">
            <p className="InFoBlockPargraph text-Gray5 text-lg font-Gotham font-normal leading-7 tracking-wider self-stretch md:text-xl">
              The AKDN views continuing education as a key driver to advancing
              the professional and vocational skills of any workforce. For
              instance, since 2006, UCA’s School of Continuing and Professional
              Education has engaged 74,000 youth and adults in vocational and
              professional development courses.
            </p>
            <div className="SeeMoreLinkContainer">
              {isTextVisibleArray[3] ? null : ( // Text is visible, so we don't render the SVG and title
                <div
                  className="SeeMoreLink1 flex items-center gap-2 "
                  onClick={() => toggleTextVisibility(3)}
                >
                  <div className="SeeMoreLinkTittle whitespace-nowrap text-blue-custom font-Gotham text-base font-medium leading-6 tracking-[0.48px] ">
                    <h2>See More</h2>
                  </div>
                  <div className="SeeMoreLinkArrow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M6 9L12 15L18 9"
                        stroke="#084C61"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              )}
              {isTextVisibleArray[3] && (
                <div className="SeeLessLink2 flex  flex-col  gap-2">
                  <p className="Paragraph  text-Gray5 text-lg font-Gotham font-normal leading-7 tracking-wider self-stretch md:text-xl ">
                    The AKDN views continuing education as a key driver to
                    advancing the professional and vocational skills of any
                    workforce. For instance, since 2006, UCA’s School of
                    Continuing and Professional Education has engaged 74,000
                    youth and adults in vocational and professional development
                    courses.
                  </p>

                  <div
                    className="flex fex-row gap-2"
                    onClick={() => toggleTextVisibility(3)}
                  >
                    <div className="SeeLessLinkTittle whitespace-nowrap text-blue-custom font-Gotham text-base font-medium leading-6 tracking-[0.48px] ">
                      <h2>See Less</h2>
                    </div>
                    <div className="SeeLessLinkArrow">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M6 15L12 9L18 15"
                          stroke="#084C61"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoBlock;
