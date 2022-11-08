import {Link} from "react-router-dom"

export default function Hero() {
  return (
    <section className="my-24 mx-auto max-w-screen-xl pb-4 px-4 sm:px-8">
        <div className="text-center space-y-4">
          <h1 className="text-gray-800 font-bold text-4xl md:text-5xl">
            أحجز اونلاين لتعليم
            <span className="text-primary"> أفضل</span>
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            هنالك الكثير ممن يعانون من الكسل الذى لا يدفعهم الى النزول من بيتهم
            و حجز دروسهم, لهذا تم تصميم و تجهيز هذا الموقع لكى تحجز جميع دروسك
            من بيتك
          </p>
        </div>
        <div className="mt-12 justify-center items-center space-y-3 sm:space-x-6 sm:space-x-reverse sm:space-y-0 sm:flex">
          <Link
            to="/signup"
            className="px-10 py-3.5 w-full bg-indigo-600 text-white text-center rounded-md shadow-md block sm:w-auto bg-primary"
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
      </section>
  );
}
