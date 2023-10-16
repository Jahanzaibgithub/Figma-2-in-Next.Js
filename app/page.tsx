import HeroSection from "../components/HeroSection/herosection";
import Navbar from "../components/Navbar/Navbar";
import Features from "../components/Features/features";
import Partners from "../components/Partners/partners";
import MainInformation from "../components/MainInformation/mainInformation";
import Agency from "../components/ Agency/agency";
import InfoBlock from "../components/Info-Block/infoblock";
import DropDown from "../components/Navbar/Dropdown";
import PartnershipProjects from "../components/PartnershipProjects/PartnershipProject";
import "./globals.css";

export default function Home() {
  return (
    <main >
      <div className="page-background w-full bg-banner-bg bg-center relative">
        <Navbar />
        <div className="w-full absolute z-10">
          <DropDown />
        </div>
        <HeroSection />
      </div>
      <Features />
      <Partners />
      <MainInformation />
      <Agency />
      <InfoBlock />
      < PartnershipProjects/>
    </main>
  );
}
