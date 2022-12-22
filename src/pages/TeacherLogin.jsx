import React from "react";
import axios from "axios";

function TeacherLogin() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;

  function submit(e) {
    e.preventDefault();

    axios
      .post(`${BASE_API_URL}/users/login`)
      .then((res) => alert(res.data))
      .catch((e) => alert(e.response.data.err));
  }

  return (
    <section>
      <h1 className="heading">تسجيل الدخول إلى حساب معلم</h1>
      <form
        method="post"
        className="bg-[#fff] m-auto h-[350px] flex flex-col justify-between px-10 py-5"
      >
        <h3 className="text-xl text-center mb-5">تسجيل الدخول</h3>
        <div className="flex flex-col mb-2">
          <label htmlFor="email" className="text-lg">
            البريد الإلكترونى
          </label>
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col mb-2">
          <label htmlFor="password" className="text-lg">
            كلمة المرور
          </label>
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="btn-success"
          onClick={(e) => submit(e)}
        >
          تسجيل الدخول
        </button>
      </form>
    </section>
  );
}

export default React.memo(TeacherLogin);
