import dynamic from "next/dynamic";
import React from "react";
import Head from "next/head";

const Hero = dynamic(() => import("../components/Hero"));
const Futures = dynamic(() => import("../components/Futures"));
const OurGoal = dynamic(() => import("../components/OurGoal"));
const HowItWorks = dynamic(() => import("../components/HowItWorks"));
const FAQ = dynamic(() => import("../components/FAQ"));
const Team = dynamic(() => import("../components/Team"));
// const Subscriptions = React.lazy(() => import("./Subscriptions"));
// const Contact = React.lazy(() => import("../components/Contact"));

function Home() {
  return (
    <>
      <Head>
        <title>منصة أحجز دروسك التعليمية</title>
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

export default React.memo(Home);
