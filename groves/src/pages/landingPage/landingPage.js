import React from "react";
import "./LandingPage.scss";
import Header from "../../components/Header/Header";
import HeroSection from "../../components/HeroSection/HeroSection";
import Video from "../../components/video/video";
import FeaturedSection from "../../components/featureSection/featuredSection";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Video />
      <FeaturedSection/>
    </div>
  );
};

export default LandingPage;
