import React from "react";
const AdminDashboard = React.lazy(() => import("./AdminDashboard"));

function Admin() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const ADMIN_EMAIL = import.meta.env.VITE_ADMIN_EMAIL;
  const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD;

  function submit(e) {
    e.preventDefault();
    if ((!email, !password)) {
      alert("يرجى إدخال جميع البيانات 🙄");
    } else if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      setIsLoggedIn(true);
    } else {
      alert("هنالك خطأ فى البريد الإلكترونى او كلمة المرور 😔");
    }
  }

  return (
    <>
      {isLoggedIn ? (
        <AdminDashboard />
      ) : (
        <>
          <section>
            <h1 className="heading">تسجيل الدخول إلى صفحة المالك</h1>
            <main>
              <form
                method="post"
                className="bg-[#fff] m-auto w-[300px] h-[350px] flex flex-col justify-between px-10 py-5"
              >
                <h3 className="text-xl text-center mb-5">تسجيل الدخول</h3>
                <div className="flex flex-col mb-2">
                  <label htmlFor="email" className="text-lg">
                    البريد الإلكترونى
                  </label>
                  <input
                    type="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
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
                </div>
                <button
                  className="px-5 py-2.5 mr-2.5 mt-5 text-white bg-indigo-600 duration-150 bg-success active:shadow-lg text-[#fff]"
                  onClick={(e) => submit(e)}
                >
                  تسجيل الدخول
                </button>
              </form>
            </main>
          </section>
        </>
      )}
    </>
  );
}

export default React.memo(Admin);
