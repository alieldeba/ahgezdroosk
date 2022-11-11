// Packages
import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

// Components
const Header = lazy(() => import("./components/Header"));
const Footer = lazy(() => import("./components/Footer"));

// Pages
const Home = lazy(() => import("./pages/Home"));
const UserProfile = lazy(() => import("./pages/UserProfile"));
const Groups = lazy(() => import("./pages/Groups"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const UserManual = lazy(() => import("./pages/UserManual"));
const Admin = lazy(() => import("./pages/Admin"));
const Error = lazy(() => import("./pages/Error"));

export default function App() {
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
