import axios from "axios";
import { useState } from "react";

export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [telephone, setTelephone] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function submit() {
    if (
      !firstName ||
      !lastName ||
      !telephone ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      return alert("يرجى ملء جميع البيانات");
    } else if (password !== confirmPassword) {
      return alert("الرقم السرى ليس مطابقا للتأكيد");
    } else {
      return axios
        .post("https://ahgez.onrender.com/users/", {
          firstName,
          lastName,
          telephone,
          email,
          password,
        })
        .then(alert("تم إنشاء الحساب بنجاح"))
        // .then((window.location.href = "/login"))
        .catch((e) => console.error(e.message));
    }
  }

  return (
    <>
      <h1 className="heading">إنشاء حساب</h1>
      <form className="grid justify-center items-center gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-h-[300px] md:mr-[3rem]">
        <div className="flex flex-col">
          <label className="mb-2">الأسم الاول</label>
          <input
            type="text"
            name="firstName"
            className="outline-none px-2 py-1 w-[300px]"
            style={{ direction: "ltr" }}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2">الأسم الاخير</label>
          <input
            type="text"
            name="secondName"
            className="outline-none px-2 py-1 w-[300px]"
            style={{ direction: "ltr" }}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2">رقم الهاتف</label>
          <input
            type="tel"
            name="telephone"
            className="outline-none px-2 py-1 w-[300px]"
            style={{ direction: "ltr" }}
            onChange={(e) => setTelephone(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2">البريد الإلكترونى</label>
          <input
            type="email"
            name="email"
            className="outline-none px-2 py-1 w-[300px]"
            style={{ direction: "ltr" }}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2">الكلمة السرية</label>
          <input
            type="password"
            name="password"
            className="outline-none px-2 py-1 w-[300px]"
            style={{ direction: "ltr" }}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2">تأكيد الكلمة السرية</label>
          <input
            type="password"
            name="password"
            className="outline-none px-2 py-1 w-[300px]"
            style={{ direction: "ltr" }}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
      </form>
      <div className="flex w-full justify-center">
        <button
          className="px-5 py-2.5 mr-2.5 text-[#fff] bg-success duration-150 active:shadow-lg mt-5 lg:mt-0"
          onClick={() => submit()}
        >
          إنشاء حساب
        </button>
      </div>
    </>
  );
}
