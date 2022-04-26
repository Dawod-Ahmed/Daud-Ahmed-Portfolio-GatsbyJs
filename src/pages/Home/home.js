import React from "react";
import {
  HeroSection,
  ShortIntroSection,
  HomeCardsSec,
} from "../components/pagesExport";
const Home = () => {
  return (
    <main className="theme-background-second-layer d-flex-direction  ">
      <HeroSection />
      <ShortIntroSection />
      <HomeCardsSec />
    </main>
  );
};

export default Home;
