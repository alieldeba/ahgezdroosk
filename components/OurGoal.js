import React from "react";
import {shadeVariant} from "../variants/textVariants";
import {motion} from "framer-motion"

function OurGoal() {
  return (
    <>
      <h3 className="heading">هدف المنصة</h3>
      <div className="bg-primary text-center py-10 text-white max-w-full">
        <motion.p className="container" variants={shadeVariant} initial="initial" animate="animate">
          هدف المنصة هو تطوير التعليم فى مصر و سهولة إقامة المجموعات للمدرسين و سهولة
          الحجز للطلاب فيها
        </motion.p>
      </div>
    </>
  );
}

export default React.memo(OurGoal);
