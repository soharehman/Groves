import React from "react";
import "./LandingPage.scss";
import Header from "../../components/Header/Header";
import HeroSection from "../../components/HeroSection/HeroSection";
import Video from "../../components/video/video";
import FeaturedSection from "../../components/featureSection/featuredSection";
import CardSection from "../../components/CardSection/cardSection";
import InfoSection from "../../components/InfoSection/InfoSection";
import Footer from "../../components/footer/footer";
import ExpCard from "../../components/expCard/expCard";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Video />
      <FeaturedSection/>
      <CardSection/>
        <ExpCard/>
      <InfoSection/>
      <Footer/>
    </div>
  );
};

export default LandingPage;
