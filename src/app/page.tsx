"use client"

import Offering from "@/components/offering/offering";
import About from "@/components/sections/about/about";
import HeroSection from "@/components/sections/hero-section/heroSection";
import Timeline from "@/components/sections/timeline/timeline";
import React from "react";

const Home = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <About />
      <Timeline />
      <Offering />
    </React.Fragment>
  );
}

export default Home
