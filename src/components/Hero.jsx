import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <section className="relative mx-auto max-w-screen-xl h-[calc(100vh_-_100px)] pb-4 px-4 sm:px-8">
        <img
          src="/3d/donut.png"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 hidden sm:block"
          alt="خلفية"
          loading="lazy"
        />
        <main className="pt-[11rem]">
          <div className="text-center space-y-4">
            <h1 className="text-gray-800 font-bold text-4xl md:text-5xl">
              منصة أحجز لتعليم
              <span className="text-primary"> أفضل</span>
            </h1>
            <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
              هنالك الكثير ممن يعانون من الكسل الذى لا يدفعهم الى النزول من
              بيتهم و حجز دروسهم, لهذا تم تصميم و تجهيز هذا الموقع لكى تحجز جميع
              دروسك من بيتك
            </p>
          </div>
          <div className="mt-12 justify-center items-center space-y-3 sm:space-x-6 sm:space-x-reverse sm:space-y-0 sm:flex">
            <Link
              to="/signup"
              className="px-10 py-3.5 w-full text-[#fff] text-white text-center rounded-md shadow-md block sm:w-auto bg-primary"
            >
              إنشاء حساب
            </Link>
            <Link
              to="/login"
              className="px-10 py-3.5 w-full text-gray-500 text-center border rounded-md duration-300 hover:text-indigo-600 hover:shadow block sm:w-auto"
            >
              تسجيل الدخول
            </Link>
          </div>
        </main>
      </section>
    </>
  );
}

export default React.memo(Hero);
