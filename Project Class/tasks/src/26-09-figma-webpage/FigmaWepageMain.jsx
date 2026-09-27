import React from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Contents from "./components/Contents";
import Footer from "./components/Footer";

const FigmaWepageMain = () => {
  return (
    <div className="relative bg-black">
      <Navbar />
      <main>
        <HeroSection />

        <Contents />

        <Footer />
      </main>
    </div>
  );
};

export default FigmaWepageMain;
