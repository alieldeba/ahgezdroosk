import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { shadeTextVariant } from "../variants/textVariants";
import { shadeButtonVariant } from "../variants/buttonVariants";

function Hero() {
  return (
    <>
      <section className="relative mx-auto max-w-screen-xl pb-4 px-4 sm:px-8">
        {/* <img
          src="/3d/donut.png"
          className="absolute left-1/2 top-0 -translate-x-1/2 hidden sm:block -z-10"
          alt="قطعة دونت"
          loading="lazy"
        /> */}
        <main className="pt-[7rem] md:pt-[11rem]">
          <div className="text-center space-y-4">
            <motion.h1
              className="text-gray-800 font-bold text-4xl md:text-5xl"
              variants={shadeTextVariant}
              initial="hidden"
              whileInView="visible"
            >
              منصة أحجز دروسك لتعليم
              <span className="text-primary"> أفضل</span>
            </motion.h1>
            <motion.p
              className="max-w-xl mx-auto leading-relaxed"
              variants={shadeTextVariant}
              initial="hidden"
              whileInView="visible"
            >
              هنالك الكثير ممن يعانون من الكسل الذى لا يدفعهم الى النزول من
              بيتهم لحجز دروسهم, لهذا تم تصميم و تجهيز هذا الموقع لكى تحجز جميع
              دروسك من بيتك
            </motion.p>
          </div>
          <div className="mt-12 flex justify-center items-center">
            <Link href="/signup">
              <motion.button
                className="btn-primary ml-5"
                variants={shadeButtonVariant}
                initial="hidden"
                whileInView="visible"
              >
                إنشاء حساب
              </motion.button>
            </Link>

            <Link href="/login">
              <motion.button
                className="btn-secondary"
                variants={shadeButtonVariant}
                initial="hidden"
                whileInView="visible"
              >
                تسجيل الدخول
              </motion.button>
            </Link>
          </div>
        </main>
      </section>
    </>
  );
}

export default React.memo(Hero);
