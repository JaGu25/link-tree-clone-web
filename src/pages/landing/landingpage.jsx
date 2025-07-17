import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import ProfilePreview from "../../components/ProfilePreview/ProfilePreview";
import Features from "../../components/Features/Features";
import FAQ from "../../components/FAQ/FAQ";


const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ProfilePreview />
      <Features />
      <FAQ/>
    <footer style={{
        backgroundColor: "#f9f9f9",
        color: "#666",
        textAlign: "center",
        padding: "20px 0",
        fontSize: "0.9rem",
        borderTop: "1px solid #e0e0e0",
        marginTop: "40px"
      }}>
        © 2025 LinkTreePro. Todos los derechos reservados.
      </footer>
    </>
  );
};

export default LandingPage;
