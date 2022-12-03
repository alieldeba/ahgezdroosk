import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const [state, setState] = React.useState(false);

  const navigation = [
    { title: "القائمة الرئيسية", path: "/" },
    { title: "المجموعات", path: "/groups" },
    { title: "دليل الإستخدام", path: "/user-manual" },
  ];

  return (
    <header>
      <nav className="items-center pt-5 px-4 mx-auto max-w-screen-xl sm:px-8 md:flex md:space-x-6 md:space-x-reverse">
        <div className="flex justify-between">
          <Link to="/">
            <img
              src="/images/logo.png"
              width={50}
              height={50}
              alt="logo"
            />
          </Link>
          <button
            className="text-gray-500 outline-none md:hidden"
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
          className={`flex-1 justify-between mt-12 md:flex md:mt-0 ${
            state ? "" : "hidden"
          }`}
        >
          <li className="order-2 pb-5 md:pb-0">

              <Link
                to="/signup"
                className="py-3 px-6 rounded-md shadow-md text-[#fff] text-center bg-primary focus:shadow-none block md:inline"
              >
                إنشاء حساب
              </Link>
          </li>
          <div className="order-1 flex-1 justify-center items-center space-y-5 md:flex md:space-x-6 md:space-x-reverse md:space-y-0">
            {navigation.map((item, idx) => (
              <li className="text-gray-500 hover:text-indigo-600" key={idx}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            ))}
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default React.memo(Header);
