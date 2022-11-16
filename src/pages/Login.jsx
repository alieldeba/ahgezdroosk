import axios from "axios";
import React from "react";

function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const USERS_API = import.meta.env.VITE_USERS_API;

  function submit(e) {
    e.preventDefault();
    // const allSystemUsers = await axios
    //   .get(USERS_API)
    //   .then((res) => res.data)
    //   .catch((error) => console.log(error.message));

    // const logingUser = allSystemUsers.filter(
    //   (user) => user.email === email && user.password === password
    // );

    // if (logingUser.length > 0) {
    //   alert("تم تسجيل الدخول ✔");
    //   window.location.href = "/profile";
    // } else {
    //   alert("لم يتم تسجيل الدخول ❌");
    // }
    // console.log(logingUser);
  }

  return (
    <section>
      <h1 className="heading">تسجيل الدخول</h1>
      <form
        method="post"
        className="bg-[#fff] m-auto w-[300px] h-[350px] flex flex-col justify-between px-10 py-5"
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
        <button className="px-5 py-2.5 mr-2.5 mt-5 text-white bg-indigo-600 duration-150 bg-success active:shadow-lg text-[#fff]" onClick={(e) => submit(e)}>
         تسجيل الدخول
        </button>
      </form>
    </section>
  );
}

export default React.memo(Login);
