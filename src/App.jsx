// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import BeginningScreen from "./pages/BeginningScreen";
import Home from "./pages/Home";
import Groups from "./pages/Groups";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Error from "./pages/Error";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BeginningScreen />,
  },
  {
    path: "/home",
    element: <Home />,
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
    path: "*",
    element: <Error />,
  },
]);

export default function App() {
  return (
    <>
      {/* <Header /> */}
      <RouterProvider router={router} />
      {/* <Footer /> */}
    </>
  );
}
