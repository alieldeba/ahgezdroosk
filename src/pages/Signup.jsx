import axios from "axios";
import React from "react";

function Signup() {
  const [name, setName] = React.useState(undefined);
  const [telephone, setTelephone] = React.useState(undefined);
  const [email, setEmail] = React.useState(undefined);
  const [password, setPassword] = React.useState(undefined);

  const nameError = React.useRef(null);
  const telephoneError = React.useRef(null);
  const emailError = React.useRef(null);
  const passwordError = React.useRef(null);

  const USERS_API = import.meta.env.VITE_USERS_API;

  function submit(e) {
    e.preventDefault();
    axios
      .post(USERS_API, {
        name,
        telephone,
        email,
        password,
      })
      .then((res) => {
        console.log(res.data.errors);
        if (res.data.errors) {
          // resetting values of error texts
          nameError.current.textContent = "";
          telephoneError.current.textContent = "";
          emailError.current.textContent = "";
          passwordError.current.textContent = "";

          // getting the server errors
          const nameErrorText = res.data.errors.name;
          const telephoneErrorText = res.data.errors.telephone;
          const emailErrorText = res.data.errors.email;
          const passwordErrorText = res.data.errors.password;

          // inserting errors to user
          nameError.current.textContent = nameErrorText;
          telephoneError.current.textContent = telephoneErrorText;
          emailError.current.textContent = emailErrorText;
          passwordError.current.textContent = passwordErrorText;
        } else {
          alert("تم إنشاء الحساب بنجاح 🎉");
        }
      })
      .catch((e) => console.log(e.message));
  }

  return (
    <section>
      <h1 className="heading">إنشاء حساب</h1>
      <form
        method="post"
        className="bg-[#fff] m-auto w-[300px] h-[500px] flex flex-col justify-between px-10 py-5"
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
          <label htmlFor="telephone" className="text-lg">
            رقم الهاتف
          </label>
          <input
            type="tel"
            name="telephone"
            onChange={(e) => setTelephone(e.target.value)}
          />
          <p className="text-danger text-md" ref={telephoneError}></p>
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
        <button
          className="px-5 py-2.5 mr-2.5 mt-5 text-white bg-indigo-600 duration-150 bg-success active:shadow-lg text-[#fff]"
          onClick={(e) => submit(e)}
        >
          إنشاء حساب
        </button>
      </form>
    </section>
  );
}

export default React.memo(Signup);
