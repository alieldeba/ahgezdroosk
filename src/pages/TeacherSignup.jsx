import axios from "axios";
import React from "react";

function TeacherSignup() {
  const [name, setName] = React.useState(undefined);
  const [email, setEmail] = React.useState(undefined);
  const [password, setPassword] = React.useState(undefined);

  const nameError = React.useRef(null);
  const emailError = React.useRef(null);
  const passwordError = React.useRef(null);

  const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;

  function validation(e) {
    let isDataOk = true;
    e.preventDefault();

    // Resetting values of error texts
    nameError.current.textContent = "";
    emailError.current.textContent = "";
    passwordError.current.textContent = "";

    // Email must be unique

    // Making Errors
    // Name Error
    if (!name || name.length < 3 || name.length > 25) {
      nameError.current.textContent = "ما بين 3 إلى 25 حرف";
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
      submit();
    } else {
      return;
    }
  }

  function submit() {
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
    <section>
      <h1 className="heading">إنشاء حساب معلم</h1>
      <form
        method="post"
        className="bg-[#fff] m-auto min-h-[500px] flex flex-col justify-between px-10 py-5"
      >
        <h3 className="text-xl text-center mb-5">إنشاء حساب</h3>
        <div className="flex flex-col mb-2">
          <label htmlFor="name" className="text-lg">
            الأسم
          </label>
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
          <p className="text-danger" ref={nameError}></p>
        </div>
        <div className="flex flex-col mb-2">
          <label htmlFor="email" className="text-lg">
            البريد الإلكترونى
          </label>
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="text-danger" ref={emailError}></p>
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
          <p className="text-danger" ref={passwordError}></p>
        </div>
        <button className="btn-success" onClick={(e) => validation(e)}>
          إنشاء حساب
        </button>
      </form>
    </section>
  );
}

export default React.memo(TeacherSignup);
