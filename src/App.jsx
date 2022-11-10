// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import BeginningScreen from "./pages/BeginningScreen";
import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";
import Groups from "./pages/Groups";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import UserManual from "./pages/UserManual";
import Admin from "./pages/Admin";
import Error from "./pages/Error";

// Packages
import { Route, Routes } from "react-router-dom";

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
