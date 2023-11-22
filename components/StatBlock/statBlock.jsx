import "./StatBlockContainer.modules.css";

 const StatBlock = (props) => {
  console.log("kkkkkkkk---", props.statsArray);
  
  return (
    <div className="StatBlockMainContainer flex flex-col pt-10 md:p-12 items-center gap-3 self-stretch ">
      <div className="StatBlockMainContainerHeader text-2xl flex justify-center px-12 pb-12"><h1 className="StatBlockMainContainerHeading text-center font-bold leading-8 uppercase self-stretch">IMPACT OF AKDN</h1></div>
    <div className="StatBlockContainer4Block flex flex-col md:flex-row justify-center items-center  self-stretch ">
      {props.statsArray.map((block, index) => (
     <div
      key={index} 
      className={`SingleStatBlock ${index != props.statsArray.length  -1 ? 'border-r' : ''}`}
      >
          <SingleStatBlock {...block} />
    </div>
      ))}
    </div>
    </div>
  
  );
};
 const SingleStatBlock = ({ title, image, description }) => (
  <div className="StatBlockContainer px-5 xs:px-20 sm:px-64  md:px-6 md:w-40 flex flex-col justify-center items-center self-stretch "> 
    <div className="StateBlockContainerBlock1 flex flex-col justify-center items-center gpa-2 self-stretch">
    <img src={image} alt={title} className="StateBlockContainerBlock1Image w-9 h-9" />
      <div className="StateBlockContainerBlock1Title text-center text-2xl font-medium leading-9 self-stretch" >{title}</div>
    </div>
    <div className="StateBlockContainerBlock2">
      <p className="StateBlockContainerBlock2Description text-center text-base font-normal leading-6 self-stretch">{description}</p>
      </div>
  </div>
  
);

export default StatBlock;