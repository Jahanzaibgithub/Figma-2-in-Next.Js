import "./StatBlockContainer.modules.css";

 const StatBlock = (props) => {
  console.log("kkkkkkkk---", props.statsArray);
  
  return (
    <div className="StatBlockMainContainer flex flex-col pt-10 md:p-12  justify-center items-center gap-3 self-stretch ">
      <div className="StatBlockMainContainerHeader text-2xl flex  px-12 pb-12"><h1 className="StatBlockMainContainerHeading text-center font-bold leading-8 uppercase self-stretch">IMPACT OF AKDN</h1></div>
    
    <div className="StatBlockContainer4Block flex flex-col md:flex-row  gap-6 md:max-w-3xl">
      {props.statsArray.map((block, index) => (
     <div
      key={index} 
      className={`SingleStatBlock flex justify-center ${index != props.statsArray.length  -1 ? 'ltr:md:border-r rtl:md:border-l' : ''}`}
      >
          <SingleStatBlock {...block} />
    </div>
      ))}
   
    </div>
    </div>
         
  );
};
 const SingleStatBlock = ({ title, image, description }) => (
<div className="StatBlockContainer px-5 xs:px-20 md:px-0 md:py-4 ltr:md:pl-4 ltr:md:pr-10 rtl:md:pl-10 rtl:md:pr-4 max-w-xs flex flex-col items-center  "> 
    <div className="StateBlockContainerBlock1 flex flex-col justify-center items-center gap-2">
    <img src={image} alt={title} className="StateBlockContainerBlock1Image w-9 h-9" />
      <div className="StateBlockContainerBlock1Title text-center text-2xl font-medium leading-9" >{title}</div>
    </div>
    <div className="StateBlockContainerBlock2">
      <p className="StateBlockContainerBlock2Description text-center text-base font-normal leading-6 ">{description}</p>
      </div>
  </div>
  
);

export default StatBlock;