import { Link } from "react-router-dom";
import React from "react";
const Hero = React.lazy(() => import("../components/Hero"));
const Futures = React.lazy(() => import("../components/Futures"));
// const License = React.lazy(() => import("../components/License"));

function Home() {
  return (
    <>
      <Hero />
      <Futures />
      <h3 className="heading">هدف المنصة</h3>
    </>
  );
}

export default React.memo(Home);
