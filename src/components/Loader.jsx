import React from "react"

import "../styles/loader.css";

function Loader() {
  return (
    <div id="loader">
      <div id="shadow"></div>
      <div id="box"></div>
    </div>
  );
}


export default React.memo(Loader)