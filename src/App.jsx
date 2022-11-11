// Packages
import { Route, Routes } from "react-router-dom";
import React from "react";

// Components
const Header = React.lazy(() => import("./components/Header"));
const Footer = React.lazy(() => import("./components/Footer"));

// Pages
const Home = React.lazy(() => import("./pages/Home"));
const UserProfile = React.lazy(() => import("./pages/UserProfile"));
const Groups = React.lazy(() => import("./pages/Groups"));
const Login = React.lazy(() => import("./pages/Login"));
const Signup = React.lazy(() => import("./pages/Signup"));
const UserManual = React.lazy(() => import("./pages/UserManual"));
const Admin = React.lazy(() => import("./pages/Admin"));
const Error = React.lazy(() => import("./pages/Error"));

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="profile" element={<UserProfile />} />
          <Route path="groups" element={<Groups />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="user-manual" element={<UserManual />} />
          <Route path="admin" element={<Admin />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default React.memo(App)
