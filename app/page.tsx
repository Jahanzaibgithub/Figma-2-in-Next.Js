import HeroSection from "../components/HeroSection/herosection";
import Navbar from "../components/Navbar/Navbar";
import Features from "../components/Features/features";
import MainInformation from "../components/MainInformation/mainInformation";
import Agency from "../components/ Agency/agency";
import InfoBlock from "../components/Info-Block/infoblock";
import DropDown from "../components/Navbar/Dropdown";
import "./globals.css";

export default function Home() {
  return (
    <main>
   <div className="page-background w-full bg-banner-bg bg-center relative">
  <Navbar />
  <div className="w-full absolute z-10">
    <DropDown />
  </div>
  <HeroSection />
</div>

      <Features />
      <MainInformation />
      <Agency />
      <InfoBlock />
    </main>
  );
}
