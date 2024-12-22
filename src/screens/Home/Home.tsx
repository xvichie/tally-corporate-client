import React from "react";
import MainLanding from "../../components/Sections/MainLanding/MainLanding";
import HeaderSpace from "../../components/Utils/HeaderSpace";
import StatsLanding from "../../components/Sections/StatsLanding/StatsLanding";
import VideoSectionLanding from "../../components/Sections/VideoSectionLanding/VideoSectionLanding";
import PartnersLanding from "../../components/Sections/PartnersLanding/PartnersLanding";
import ReviewsLanding from "../../components/Sections/ReviewsLanding/ReviewsLanding";
import CareerLanding from "../../components/Sections/CareerLanding/CareerLanding";
import ServicesLanding from "../../components/Sections/ServicesLanding/ServicesLanding";
import ProjectsLanding from "../../components/Sections/ProjectsLanding/ProjectsLanding";
import ProjectShowcaseLanding from "../../components/Sections/ProjectShowcaseLanding/ProjectShowcaseLanding";
import MainLandingAlternate from "../../components/Sections/MainLandingAlternate/MainLandingAlternate";
import MainLandingBigStats from "../../components/Sections/MainLandingBigStats/MainLandingBigStats";

function Home() {
  return (
    <div>
      <MainLandingAlternate></MainLandingAlternate>
      {/* <MainLanding /> */}
      <MainLandingBigStats />
      <StatsLanding />
      <VideoSectionLanding />
      {/* <ProjectShowcaseLanding /> */}
      {/* <PartnersLanding /> */}
      <ReviewsLanding />
      <ServicesLanding />
      <ProjectsLanding />
      <CareerLanding />
    </div>
  );
}

export default Home;
