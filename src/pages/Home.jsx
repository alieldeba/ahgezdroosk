import { Link } from "react-router-dom";
import { lazy } from "react";
const Hero = lazy(() => import("../components/Hero"));
const Futures = lazy(() => import("../components/Futures"));

export default function Home() {
  return (
    <>
      <Hero />
      <Futures />
    </>
  );
}
