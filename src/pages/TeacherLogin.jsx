import React, { useState } from "react";
import { Link } from "react-router-dom";

const TeacherLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // // Password
    // if (!password) {
    // } else if (password.length < 6) {
    // }

    // // Email
    // if (!email) {
    // } else if (
    //   !email.match(
    //     /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/
    //   )
    // ) {
    // }
  };

  return (
    <div className="bg-gradient-to-br from-primary to-primarysoft min-h-screen flex flex-col justify-center items-center fixed top-0 w-full h-full z-50">
      <Link to="/login" class="btn-back" title="الرجوع">👈</Link>
      <form
        className="bg-white shadow-md rounded-md p-4"
        onSubmit={handleSubmit}
      >
        <h1 className="text-xl text-center font-bold text-gray-800 my-4">
          تسجيل الدخول
        </h1>
        <label htmlFor="email" className="block font-bold text-gray-800 mb-2">
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
  );
};

export default React.memo(TeacherLogin);
