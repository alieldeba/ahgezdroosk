import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminDashboard = React.lazy(() => import("./AdminDashboard"));

function Admin() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const ADMIN_EMAIL = import.meta.env.VITE_ADMIN_EMAIL;
  const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD;

  function submit(e) {
    e.preventDefault();
    if (!email || !password) {
      toast.info("يرجى ملء جميع البيانات 🙄", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      setIsLoggedIn(true);
    } else {
      toast.error("خطأ فى تسجيل الدخول ❌", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  }

  return (
    <>
      {isLoggedIn ? (
        <AdminDashboard />
      ) : (
        <>
          <section>
            <ToastContainer
              position="top-left"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
            <h1 className="heading">تسجيل الدخول إلى صفحة المالك</h1>
            <main>
              <form
                method="post"
                className="bg-[#fff] m-auto h-[350px] flex flex-col justify-between px-10 py-5"
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
                  className="btn-success"
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
