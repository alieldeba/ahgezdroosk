import React from "react";
import { textShadeVariant, textSlideVariant } from "../variants/textVariants";
import { motion } from "framer-motion";

function OurGoal() {
  return (
    <>
      <motion.h3
        className="heading"
        variants={textSlideVariant}
        initial="hidden"
        whileInView="visible"
      >
        هدف المنصة
      </motion.h3>
      <div className="bg-primary text-center py-10 text-white max-w-full">
        <motion.p
          className="container"
          variants={textShadeVariant}
          initial="hidden"
          whileInView="visible"
        >
          هدف المنصة هو تطوير التعليم فى مصر و سهولة إقامة المجموعات للمدرسين و
          سهولة الحجز للطلاب فيها
        </motion.p>
      </div>
    </>
  );
}

export default React.memo(OurGoal);
