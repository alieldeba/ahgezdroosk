import React from "react";

function HowItWorks() {
  return (
    <>
      <h3 className="heading">كيف تعمل المنصة ؟</h3>
      <iframe
        className="m-auto mt-5 aspect-video md:w-[560px] md:h-[315px]"
        src="https://www.youtube.com/embed/kvO_nHnvPtQ"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </>
  );
}

export default React.memo(HowItWorks);
