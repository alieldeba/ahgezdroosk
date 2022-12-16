// Packages
import { Route, Routes } from "react-router-dom";
import React from "react";
import axios from "axios";

// Components
const Header = React.lazy(() => import("./components/Header"));
const Footer = React.lazy(() => import("./components/Footer"));

// Pages
const Home = React.lazy(() => import("./pages/Home"));
const UserProfile = React.lazy(() => import("./pages/UserProfile"));
const Groups = React.lazy(() => import("./pages/Groups"));
const Login = React.lazy(() => import("./pages/Login"));
const StudentLogin = React.lazy(() => import("./pages/StudentLogin"));
const TeacherLogin = React.lazy(() => import("./pages/TeacherLogin"));
const Signup = React.lazy(() => import("./pages/Signup"));
const StudentSignup = React.lazy(() => import("./pages/StudentSignup"));
const TeacherSignup = React.lazy(() => import("./pages/TeacherSignup"));
const UserManual = React.lazy(() => import("./pages/UserManual"));
const Admin = React.lazy(() => import("./pages/Admin"));
const License = React.lazy(() => import("./pages/License"));
const Error = React.lazy(() => import("./pages/Error"));

function App() {
  const [users, setUsers] = React.useState([]);

  const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;

  React.useEffect(() => {
    axios
      .get(`${BASE_API_URL}/users`)
      .then((res) => setUsers(res.data.users))
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="profile" element={<UserProfile />} /> */}
        <Route path="groups" element={<Groups />} />
        <Route path="signup" element={<Signup />} />
        <Route path="signup/student" element={<StudentSignup />} />
        <Route path="signup/teacher" element={<TeacherSignup />} />
        <Route path="login" element={<Login />} />
        <Route path="login/student" element={<StudentLogin />} />
        <Route path="login/teacher" element={<TeacherLogin />} />
        <Route path="user-manual" element={<UserManual />} />
        <Route path="license" element={<License />} />
        <Route path="admin" element={<Admin />} />
        {/* {users &&
            users.map((user, index) => (
              <Route
                path={`users/${user.name}`}
                element={<UserProfile info={user} />}
                key={index}
              />
            ))} */}
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default React.memo(App);
