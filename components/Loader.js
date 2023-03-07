import React from "react";

function Loader() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#eee] z-10">
      <div id="loader">
        <div id="shadow"></div>
        <div id="box"></div>
      </div>
    </div>
  );
}

export default React.memo(Loader);
