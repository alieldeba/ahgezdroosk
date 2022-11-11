import axios from "axios";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit() {
    const allSystemUsers = await axios
      .get("https://ahgez.onrender.com/users")
      .then((res) => res.data)
      .catch((error) => console.log(error.message));

    const logingUser = allSystemUsers.filter(
      (user) => user.email === email && user.password === password
    );

    setLogingUser(logingUser);

    if (logingUser.length > 0) {
      alert("تم تسجيل الدخول ✔");
      window.location.href = "/profile";
    } else {
      alert("لم يتم تسجيل الدخول ❌");
    }
    console.log(logingUser);
  }

  return (
    <section>
      <h3 className="heading">تسجيل الدخول</h3>
      <main className="flex flex-col items-center justify-between rounded-md py-5 drop-shadow-2xl">
        <form className="w-full flex flex-col md:flex-row justify-evenly items-center mt-5">
          <div className="flex flex-col">
            <label className="mb-3 ml-[5rem]">البريد الإلكترونى</label>
            <input
              type="email"
              name="email"
              className="px-2 py-1 outline-none"
              style={{ direction: "ltr" }}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-3 ml-[5rem]">الكلمة السرية</label>
            <input
              type="password"
              name="password"
              className="px-2 py-1 outline-none"
              style={{ direction: "ltr" }}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </form>
        <button
          className="px-5 py-2.5 mr-2.5 mt-24 text-white bg-indigo-600 duration-150 bg-success active:shadow-lg text-[#fff]"
          onClick={() => submit()}
        >
          تسجيل الدخول
        </button>
      </main>
    </section>
  );
}
