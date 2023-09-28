import HeroSection from "../components/herosection"
import Navbar from "../components/Navbar";
import Features from "../components/features";
import MainInformation from "../components/MainInformation/mainInformation";
import "./globals.css";

export default function Home() {
  return (
    <main> 
      <div className="page-background w-full bg-banner-bg bg-center">
        <div className="w-full bg-black opacity-80 text-white">
          <Navbar />
        </div>
          <HeroSection />
      </div>
      < Features/>
      < MainInformation />
    </main>
  );
}

