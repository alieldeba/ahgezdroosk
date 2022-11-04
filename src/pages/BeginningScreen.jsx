import { Link } from "react-router-dom";

export default function BeginningScreen() {
  return (
    <section className="text-center h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl mb-3">مرحبا بكم فى منصة احجز اونلاين</h1>
      <p className="text-lg">يرجى تسجيل الدخول او إنشاء حساب للبدء</p>
      <div className="flex mt-5">
        <Link
          to="/login"
          className="px-5 py-2.5 mr-2.5 text-white bg-indigo-600 duration-150 hover:bg-indigo-700 active:shadow-lg"
        >
          تسجيل الدخول
        </Link>
        <Link
          to="/signup"
          className="px-5 py-2.5 ml-2.5 text-white bg-indigo-600 duration-150 hover:bg-indigo-700 active:shadow-lg"
        >
          إنشاء حساب
        </Link>
      </div>
    </section>
  );
}
