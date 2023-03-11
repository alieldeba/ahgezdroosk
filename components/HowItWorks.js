import React from "react";
import { motion } from "framer-motion";
import { textSlideVariant } from "../variants/textVariants";
import { boxShowVariant } from "../variants/elementVariants";

function HowItWorks() {
  return (
    <>
      <motion.h3
        className="heading"
        variants={textSlideVariant}
        initial="hidden"
        whileInView="visible"
      >
        كيف تعمل المنصة؟
      </motion.h3>
      <motion.iframe
        variants={boxShowVariant}
        initial="hidden"
        whileInView="visible"
        className="m-auto mt-5 aspect-video md:w-[560px] md:h-[315px]"
        src="https://www.youtube.com/embed/kvO_nHnvPtQ"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></motion.iframe>
    </>
  );
}

export default React.memo(HowItWorks);
