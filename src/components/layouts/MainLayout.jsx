import React, { useRef } from "react";

// organisms
import Navbar from "../organisms/Navbar";
import HeroSection from "../organisms/HeroSection";

const MainLayout = (props) => {
  const { children } = props;
  const aboutRef = useRef(null);
  const heroRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToHero = () => {
    heroRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header>
        <Navbar scrollToAbout={scrollToAbout} scrollToHero={scrollToHero} />
        <HeroSection />
      </header>
      <main className="bg-gradient-to-b from-black to-red-950">{children}</main>
      <footer></footer>
    </>
  );
};

export default MainLayout;
