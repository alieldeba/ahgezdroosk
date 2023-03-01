import React from "react";

function HowItWorks() {
  return (
    <>
      <h3 className="heading">كيف تعمل المنصة؟</h3>
      <iframe
        className="m-auto mt-5 aspect-video md:w-[560px] md:h-[315px]"
        src="https://www.youtube.com/embed/kvO_nHnvPtQ"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </>
  );
}

export default React.memo(HowItWorks);
