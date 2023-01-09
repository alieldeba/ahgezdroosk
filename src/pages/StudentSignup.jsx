import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TeacherSignup = () => {
  const [name, setName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const nameError = React.useRef(null);
  const telephoneError = React.useRef(null);
  const emailError = React.useRef(null);
  const passwordError = React.useRef(null);

  const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;

  function handleSubmit(e) {
    let isDataOk = true;
    e.preventDefault();

    // Resetting values of error texts
    nameError.current.textContent = "";
    telephoneError.current.textContent = "";
    emailError.current.textContent = "";
    passwordError.current.textContent = "";

    // Name length [3, 25]
    // Telephone must be 11 characters starting with 010 or 012
    // Email must be unique

    // Making Errors
    // Name Error
    if (!name || name.length < 3 || name.length > 25) {
      nameError.current.textContent = " الأسم ليس ما بين 3 إلى 25 حرف";
      isDataOk = false;
    }
    // Telephone Error
    if (
      !telephone ||
      telephone.length != 11 ||
      (!telephone.startsWith("010") &&
        !telephone.startsWith("012") &&
        !telephone.startsWith("011") &&
        !telephone.startsWith("015"))
    ) {
      telephoneError.current.textContent = "رقم الهاتف غير صحيح";
      isDataOk = false;
    }
    // Email Error
    if (
      !email ||
      !email.match(
        /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/
      )
    ) {
      emailError.current.textContent = "البريد الإلكترونى ليس صحيحاً";
      isDataOk = false;
    }
    // Password Error
    if (!password || password.length < 6) {
      passwordError.current.textContent = "يجب ان تكون 6 حروف فأكثر";
      isDataOk = false;
    }

    // Submiting data
    if (isDataOk) {
      toast.success("تم إنشاء الحساب بنجاح 🎉", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      addStudent();
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

  function addStudent() {
    axios
      .post(`${BASE_API_URL}/users/register`, {
        name,
        telephone,
        email,
        password,
      })
      .then((res) => {
        console.log(res.data.errors);
      })
      .catch((e) => console.log(e.message));
  }

  return (
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
      <Link to="/signup" class="btn-back" title="الرجوع">
        👈
      </Link>
      <form
        className="bg-white shadow-md rounded-md p-4"
        onSubmit={handleSubmit}
      >
        <h1 className="text-xl text-center font-bold text-gray-800 my-4">
          إنشاء حساب
        </h1>
        <label htmlFor="name" className="block font-bold text-gray-800 mb-2">
          الأسم
        </label>
        <input
          type="text"
          id="name"
          className="border rounded-md p-2 w-full"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <p className="text-danger" ref={nameError}></p>
        <label
          htmlFor="telephone"
          className="block font-bold text-gray-800 my-2"
        >
          رقم الهاتف
        </label>
        <input
          type="tel"
          id="telephone"
          className="border rounded-md p-2 w-full"
          value={telephone}
          onChange={(event) => setTelephone(event.target.value)}
        />
        <p className="text-danger" ref={telephoneError}></p>
        <label htmlFor="email" className="block font-bold text-gray-800 my-2">
          البريد الإلكتروني
        </label>
        <input
          id="email"
          className="border rounded-md p-2 w-full"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <p className="text-danger" ref={emailError}></p>
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
        <p className="text-danger" ref={passwordError}></p>
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

export default React.memo(TeacherSignup);
