import React from "react";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  const [state, setState] = React.useState(false);

  const navigation = [
    { title: "الصفحة الرئيسية", path: "/" },
    { title: "دليل الإستخدام", path: "/user-manual" },
    { title: "المعلمون", path: "/teachers" },
    { title: "الإشتراكات", path: "/subscriptions" },
  ];

  return (
    <header className="h-[80px]">
      <nav className="items-center fixed pt-5 md:pt-0 w-full px-4 bg-white h-[80px] mx-auto z-10 sm:px-8 md:flex md:space-x-6 md:space-x-reverse">
        <div className="flex justify-between items-center">
          <Link href="/">
            <div>
              <Image
                src="/images/logo.png"
                width={50}
                height={50}
                alt="أحجز دروسك"
                className="cursor-pointer"
              />
            </div>
          </Link>
          <button
            className="outline-none md:hidden"
            onClick={() => setState(!state)}
          >
            {state ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
        <ul
          className={`md:flex-1 md:justify-between md:flex z-[9] bg-white w-full absolute md:static text-center h-screen md:h-auto left-0 md:left-auto pt-10 md:pt-0 md:mt-0 ${
            state ? "" : "hidden"
          }`}
        >
          <li className="order-2 pb-5 md:pb-0">
            <Link href="/signup">
              <button className="btn-primary m-auto md:m-0">إنشاء حساب</button>
            </Link>
          </li>
          <div className="order-1 flex-1 justify-center items-center space-y-5 md:flex md:space-x-6 md:space-x-reverse md:space-y-0">
            {navigation.map((item, idx) => (
              <li
                className="text-gray-500 hover:text-black"
                key={idx}
                onClick={() => setState(false)}
              >
                <Link href={item.path}>{item.title}</Link>
              </li>
            ))}
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default React.memo(Navbar);
