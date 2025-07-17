import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import ProfilePreview from "../../components/ProfilePreview/ProfilePreview";
import Features from "../../components/Features/Features";
import FAQ from "../../components/FAQ/FAQ";
import Footer from "../../components/Footer/Footer"; 

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ProfilePreview />
      <Features />
      <FAQ />
      <Footer /> 
    </>
  );
};

export default LandingPage;
