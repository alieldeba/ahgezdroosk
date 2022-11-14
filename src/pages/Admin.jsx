import React from "react";
const FuturesCard = React.lazy(() => import("../components/FuturesCard"));
const License = React.lazy(() => import("../components/License"));

function Admin() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loggedIn, setLoggedIn] = React.useState(false);

  const ADMIN_EMAIL = import.meta.env.VITE_ADMIN_EMAIL
  const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD

  function submit() {
    if ((!email, !password)) {
      alert("يرجى إدخال جميع البيانات");
    } else if (
      email === ADMIN_EMAIL &&
      password === ADMIN_PASSWORD
    ) {
      setLoggedIn(true);
    } else {
      alert("الكلمة السرية او البريد الإلكترونى غير صحيح");
    }
  }

  return (
    <>
      {loggedIn ? (
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
          <h3 className="heading">تسجيل الدخول إالى صفحة المالك</h3>
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
        </>
      )}
    </>
  );
}

export default React.memo(Admin);
