import React from "react"

function Loader() {
  return (
    <div id="loader">
      <div id="shadow"></div>
      <div id="box"></div>
    </div>
  );
}


export default React.memo(Loader)
