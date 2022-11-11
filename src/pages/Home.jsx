import { Link } from "react-router-dom";
import React from "react";
const Hero = React.lazy(() => import("../components/Hero"));
const Futures = React.lazy(() => import("../components/Futures"));
const License = React.lazy(() => import("../components/License"));

function Home() {
  return (
    <>
      <Hero />
      <Futures />
      <License
        links={[
          <a
            href="https://www.flaticon.com/free-icons/clock"
            title="clock icons"
          >
            Clock icons created by Freepik - Flaticon
          </a>,
          <a href="https://www.flaticon.com/free-icons/home" title="home icons">
            Home icons created by Freepik - Flaticon
          </a>,
          <a
            href="https://www.flaticon.com/free-icons/emoji"
            title="emoji icons"
          >
            Emoji icons created by Freepik - Flaticon
          </a>,
          <a href="https://www.flaticon.com/free-icons/easy" title="easy icons">
            Easy icons created by Freepik - Flaticon
          </a>,
        ]}
      />
    </>
  );
}

export default React.memo(Home);
