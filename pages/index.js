import React from "react";
import Head from "next/head";

import Hero from "../components/Hero";
import Futures from "../components/Futures";
import OurGoal from "../components/OurGoal";
import HowItWorks from "../components/HowItWorks";
import FAQ from "../components/FAQ.js";
import Team from "../components/Team";
// const Futures = React.lazy(() => import("../components/Futures"));
// const OurGoal = React.lazy(() => import("../components/OurGoal"));
// const HowItWorks = React.lazy(() => import("../components/HowItWorks"));
// const FAQ = React.lazy(() => import("../components/FAQ"));
// const Team = React.lazy(() => import("../components/Team"));
// const Subscriptions = React.lazy(() => import("./Subscriptions"));
// const Contact = React.lazy(() => import("../components/Contact"));

function Home() {
  return (
    <>
      <Head>
        <title>منصة أحجز دروسك - الصفحة الرئيسية</title>
      </Head>
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

export default Home;
