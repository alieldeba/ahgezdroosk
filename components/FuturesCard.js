import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { boxShowVariant } from "../variants/elementVariants";

function FuturesCard(props) {
  return (
    <motion.div
      className="p-5 w-full h-[220px] bg-[#e6e6e6] rounded-sm text-center m-auto"
      variants={boxShowVariant}
      initial="hidden"
      whileInView="visible"
    >
      <Image
        src={props.img}
        className="m-auto mb-2"
        alt={props.alt}
        width={props.imgWidth || 50}
        height={props.imgWidth || 50}
      />
      <h3 className="text-xl mb-1">{props.title}</h3>
      <p className="text-secondary">{props.desc}</p>
    </motion.div>
  );
}

export default React.memo(FuturesCard);
