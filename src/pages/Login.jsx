import React from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [role, setRole] = React.useState("Student");

  const handleSubmit = (e) => {
    e.preventDefault();
    // do something with email, password and role
  };

  return (
    <main className="w-full h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-sm w-full text-gray-600">
        <div className="text-center">
          <img
            src="/images/logo.png"
            alt="احجز دروسك"
            width={150}
            className="mx-auto"
          />
          <div className="mt-5 space-y-2">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
              تسجيل الدخول إلى حسابك
            </h3>
            <p className="">
              ليس لديك حساب؟{" "}
              <Link
                to="/signup"
                className="font-medium text-primary hover:text-primarysoft"
              >
                تسجيل
              </Link>
            </p>
          </div>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="mt-8 space-y-5">
          <div>
            <label className="font-medium text-dark">البريد الإلكتروني</label>
            <input
              type="email"
              className="w-full mt-2 px-3 py-2 text-secondary bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium text-dark">كلمة السر</label>
            <input
              type="password"
              className="w-full mt-2 px-3 py-2 text-secondary bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
          <button className="btn-primary w-full m-auto">تسجيل الدخول</button>
        </form>
      </div>
    </main>
  );
}

export default React.memo(Login);
