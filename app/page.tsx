import HeroSection from "../components/HeroSection/herosection"
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
         <div className="lg:hidden">
           < DropDown />
           </div>
          <div className="page-background w-full bg-banner-bg bg-center">
        <div className="w-full bg-black opacity-80 text-white">
          <Navbar />
        </div>
          <HeroSection />
      </div>
      < Features/>
      < MainInformation />
      <Agency />
      <InfoBlock />
    </main>
  );
}

