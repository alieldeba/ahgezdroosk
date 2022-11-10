import { useState } from "react";
import FuturesCard from "../components/FuturesCard";

export default function Admin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  function submit() {
    if ((!email, !password)) {
      alert("يرجى إدخال جميع البيانات");
    } else if (
      email === "alieldeba375@gmail.com" &&
      password === "alieldeba123"
    ) {
      setLoggedIn(true);
    } else {
      alert("الكلمة السرية او البريد الإلكترونى غير صحيح");
    }
  }

  return (
    <>
      {loggedIn ? (
        <section>
          <h1 className="heading">أهلا بك أيها المعلم</h1>
          <main className="flex flex-col sm:flex-row justify-center items-center h-[calc(100vh_-_75px)] sm:h-[calc(100vh_-_100px)] md:h-[calc(100vh_-_150px)] ">
            <div className="cursor-pointer ml-0 mb-10 sm:ml-10 sm:mb-0">
              <FuturesCard
                img="/images/groups.png"
                imgWidth="150"
                alt="groups"
              />
            </div>
            <div className="cursor-pointer">
              <FuturesCard img="/images/users.png" imgWidth="150" alt="users" />
            </div>
          </main>
        </section>
      ) : (
        <section className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[250px] flex flex-col items-center justify-between bg-[#b6b6b6] rounded-md py-5 drop-shadow-2xl">
          <h3 className="text-lg">تسجيل الدخول الى صفحة المعلم</h3>
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
          <button
            className="px-5 py-2.5 mr-2.5 text-white bg-indigo-600 duration-150 bg-success active:shadow-lg"
            onClick={() => submit()}
          >
            تسجيل الدخول
          </button>
        </section>
      )}
    </>
  );
}
