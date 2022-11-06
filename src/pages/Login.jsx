import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <section className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[250px] flex flex-col items-center justify-between bg-[#222] py-5 drop-shadow-2xl">
        <h3 className="text-lg">تسجيل الدخول</h3>
        <form className="w-full flex flex-col items-center mt-5">
          <label className="mb-3 ml-[5rem]">البريد الإلكترونى</label>
          <input
            type="email"
            name="email"
            className="mb-3 px-2 py-1 outline-none"
            style={{ direction: "ltr" }}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="mb-3 ml-[6rem]">الكلمة السرية</label>
          <input
            type="password"
            name="password"
            className="px-2 py-1 outline-none"
            style={{ direction: "ltr" }}
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
        <button className="px-5 py-2.5 mr-2.5 text-white bg-indigo-600 duration-150 bg-success active:shadow-lg" onClick={() => console.log(email, password)}>
          تسجيل الدخول
        </button>
      </section>
    </>
  );
}
