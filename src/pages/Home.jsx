import { Link } from "react-router-dom";
import React from "react";
const Hero = React.lazy(() => import("../components/Hero"));
const Futures = React.lazy(() => import("../components/Futures"));
const OurGoal = React.lazy(() => import("../components/OurGoal"));
const HowItWorks = React.lazy(() => import("../components/HowItWorks"));
const FAQ = React.lazy(() => import("../components/FAQ"));
const Team = React.lazy(() => import("../components/Team"));
const Subscriptions = React.lazy(() => import("./Subscriptions"));
// const Contact = React.lazy(() => import("../components/Contact"));

function Home() {
  return (
    <>
      <Hero />
      <Futures />
      <OurGoal />
      <HowItWorks />
      {/* <Subscriptions /> */}
      <Team />
      <FAQ />
      {/* <Contact /> */}
    </>
  );
}

export default React.memo(Home);
