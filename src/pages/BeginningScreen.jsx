import React from "react"
import { Link } from "react-router-dom";

function BeginningScreen() {
  return (
    <section className="text-center h-screen flex flex-col justify-center items-center">
      <h1 className="text-xl lg:text-3xl mb-3">مرحبا بكم فى منصة احجز اونلاين</h1>
      <p className="text-sm lg:text-lg">يرجى تسجيل الدخول او إنشاء حساب للبدء</p>
      <div className="flex mt-5">
        <Link
          to="/login"
          className="btn-primary"
        >
          تسجيل الدخول
        </Link>
        <Link
          to="/signup"
          className="btn-primary"
        >
          إنشاء حساب
        </Link>
      </div>
    </section>
  );
}

export default React.memo(BeginningScreen)
