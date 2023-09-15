import HeroSection from "../components/herosection"
import Navbar from "../components/Navbar";
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
    </main>
  );
}

