import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminDashboard = React.lazy(() => import("./AdminDashboard"));

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const ADMIN_EMAIL = import.meta.env.VITE_ADMIN_EMAIL;
  const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD;

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) {
      toast.info("يرجى ملء جميع البيانات 🙄", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      setIsLoggedIn(true);
    } else {
      toast.error("خطأ فى تسجيل الدخول ❌", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  }

  return (
    <>
      {isLoggedIn ? (
        <AdminDashboard />
      ) : (
        <div className="bg-gradient-to-br from-primary to-primarysoft min-h-screen flex flex-col justify-center items-center fixed top-0 w-full h-full z-50">
          <ToastContainer
            position="top-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
          <Link to="/" class="btn-back" title="الرجوع">
            👈
          </Link>
          <form
            className="bg-white shadow-md rounded-md p-4"
            onSubmit={handleSubmit}
          >
            <h1 className="text-xl text-center font-bold text-gray-800 my-4">
              تسجيل الدخول إلى صفحة المالك
            </h1>
            <label
              htmlFor="email"
              className="block font-bold text-gray-800 mb-2"
            >
              البريد الإلكتروني
            </label>
            <input
              id="email"
              className="border rounded-md p-2 w-full"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <label
              htmlFor="password"
              className="block font-bold text-gray-800 my-2"
            >
              كلمة المرور
            </label>
            <input
              type="password"
              id="password"
              className="border rounded-md p-2 w-full"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4 btn-primary m-auto"
            >
              تأكيد
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default React.memo(AdminLogin);
