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
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <BeginningScreen />,
  // },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/profile",
    element: <UserProfile />,
  },
  {
    path: "/groups",
    element: <Groups />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/user-manual",
    element: <UserManual />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

export default function App() {
  return (
    <>
      <Header />
      <div className="container">
        <RouterProvider router={router} />
      </div>
      <Footer />
    </>
  );
}
