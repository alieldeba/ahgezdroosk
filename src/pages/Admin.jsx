import React from "react";
const FuturesCard = React.lazy(() => import("../components/FuturesCard"));
const License = React.lazy(() => import("../components/License"));

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
        <>
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
                <FuturesCard
                  img="/images/users.png"
                  imgWidth="150"
                  alt="users"
                />
              </div>
            </main>
          </section>
          <License
            links={[
              <a
                href="https://www.flaticon.com/free-icons/people"
                title="people icons"
              >
                People icons created by Freepik - Flaticon
              </a>,
              <a
                href="https://www.flaticon.com/free-icons/new-post"
                title="new post icons"
              >
                New post icons created by Freepik - Flaticon
              </a>,
            ]}
          />
        </>
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
                  إنشاء حساب
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
