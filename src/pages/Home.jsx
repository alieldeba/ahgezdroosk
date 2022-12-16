import { Link } from "react-router-dom";
import React from "react";
const Hero = React.lazy(() => import("../components/Hero"));
const Futures = React.lazy(() => import("../components/Futures"));

function Home() {
  return (
    <>
      <Hero />
      <Futures />
      <h3 className="heading">هدف المنصة</h3>
      <div className="bg-primary text-center py-10 text-[#fff]">
        <p>
          هدفنا هو تطوير التعليم فى مصر و سهولة إقامة المجموعات للمدرسين و سهولة
          الحجز للطلاب فيها
        </p>
      </div>
    </>
  );
}

export default React.memo(Home);
