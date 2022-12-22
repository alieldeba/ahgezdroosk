import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const footerNavs = [
    {
      href: "/",
      name: "القائمة الرئيسية",
    },
    {
      href: "/user-manual",
      name: "دليل الإستخدام",
    },
    {
      href: "/subscriptions",
      name: "الإشتراكات",
    },

    {
      href: "/license",
      name: "الحقوق",
    },
  ];

  return (
    <footer className="text-gray-500 px-4 py-4 max-w-screen-xl mx-auto mt-10">
      <div className="max-w-lg sm:mx-auto sm:text-center">
        <img
          src="/images/logo.png"
          alt="أحجز دروسك"
          className="m-auto"
          loading="lazy"
          width={80}
          height={80}
        />
        <p className="leading-relaxed text-secondary mt-2 text-[15px]">
          منصة أحجز دروسك تعتبر هى المنصة الأولى من نوعها لتنظيم نظام حجز الطلاب
          فى مجموعات المعلمين و يتم العمل على هذه المنصة دائماً و تطويرها
        </p>
      </div>
      <ul className="items-center justify-center mt-5 space-y-5 sm:flex sm:space-x-4 sm:space-x-reverse sm:space-y-0">
        {footerNavs.map((item, idx) => (
          <li className="text-secondary hover:text-dark" key={idx}>
            <Link to={item.href}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <p className="mt-4 sm:mt-0 text-center">
          الحقوق محفوظة لمنصة احجز دروسك © 2022 - {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}

export default React.memo(Footer);
