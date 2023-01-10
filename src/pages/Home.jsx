import { Link } from "react-router-dom";
import React from "react";
const Hero = React.lazy(() => import("../components/Hero"));
const Futures = React.lazy(() => import("../components/Futures"));
const OurGoal = React.lazy(() => import("../components/OurGoal"));
const HowItWorks = React.lazy(() => import("../components/HowItWorks"));
const FAQ = React.lazy(() => import("../components/FAQ"));
const Team = React.lazy(() => import("../components/Team"));

function Home() {
  return (
    <>
      <Hero />
      <Futures />
      <OurGoal />
      <HowItWorks />
      <FAQ />
      {/* <Team /> */}
    </>
  );
}

export default React.memo(Home);
