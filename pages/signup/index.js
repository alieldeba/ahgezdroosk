import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

function Signup() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  // const [role, setRole] = React.useState("Student");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.length < 6) return;
  };

  return (
    <>
      <Head>
        <title>إنشاء حساب - منصة أحجز دروسك التعليمية</title>
      </Head>
      <main className="w-full h-screen flex flex-col items-center justify-center px-4">
        <div className="max-w-sm w-full text-gray-600">
          <div className="text-center">
            <Image
              src="/images/logo.png"
              alt="احجز دروسك"
              width={150}
              height={150}
              className="mx-auto"
            />
            <div className="mt-5 space-y-2">
              <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
                إنشاء حساب جديد
              </h3>
              <p>
                لديك حساب بالفعل؟{" "}
                <Link href="/login">
                  <p className="font-medium text-primary hover:text-primarysoft cursor-pointer">
                    تسجيل الدخول
                  </p>
                </Link>
              </p>
            </div>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="mt-8 space-y-5">
            <div>
              <label className="font-medium text-dark">البريد الإلكتروني</label>
              <input
                type="email"
                className="w-full mt-2 px-3 py-2 text-dark bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="font-medium text-dark">كلمة السر</label>
              <input
                type="password"
                className="w-full mt-2 px-3 py-2 text-dark bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button className="btn-primary w-full m-auto">إنشاء حساب</button>
          </form>
        </div>
      </main>
    </>
  );
}

export default React.memo(Signup);
