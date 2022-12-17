import { Link } from "react-router-dom";
import React from "react";
const Hero = React.lazy(() => import("../components/Hero"));
const Futures = React.lazy(() => import("../components/Futures"));
const OurGoal = React.lazy(() => import("../components/OurGoal"));

function Home() {
  return (
    <>
      <Hero />
      <Futures />
      <OurGoal />
      <h3 className="heading">كيف تعمل المنصة ؟</h3>
      <iframe
      className="m-auto mt-5 max-w-[560px] aspect-video"
        src="https://www.youtube.com/embed/NeHu899_uYA"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </>
  );
}

export default React.memo(Home);
