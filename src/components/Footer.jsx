import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const footerNavs = [
    {
      href: "/",
      name: "القائمة الرئيسية",
    },
    {
      href: "/groups",
      name: "المجموعات",
    },
    {
      href: "user-manual",
      name: "دليل الإستخدام",
    },
    {
      href: "/signup",
      name: "إنشاء حساب",
    },

    {
      href: "/login",
      name: "تسجيل الدخول",
    },
  ];

  return (
    <footer className="text-gray-500 bg-white px-4 py-5 max-w-screen-xl mx-auto mt-24">
      <div className="max-w-lg sm:mx-auto sm:text-center">
        <img
          src="/images/logo.png"
          className="m-auto"
          loading="lazy"
          width={100}
          height={100}
        />
      </div>
      <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-x-reverse sm:space-y-0">
        {footerNavs.map((item, idx) => (
          <li className="text-secondary hover:text-dark" key={idx}>
            <Link to={item.href}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <p className="mt-4 sm:mt-0 text-center">
          جميع الحقوق محفوظة لدى &copy; Ahgez {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}

export default React.memo(Footer);
