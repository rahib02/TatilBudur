import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import * as mdb from "mdb-ui-kit";
import Phone from "./Page/NavbarElement/Contact/Phone/Phone";
import OtelMap from "./Page/NavbarElement/Contact/OtelMap/OtelMap";
import FirstHome from "./Page/Homes/FirstHome/FirstHome";
import Oteller from "./Page/Homes/SecondHome/Otel/Oteller";
import Otelincele from "./Page/Homes/SecondHome/Otelincele/Otelincele";
import Filteroteller from "./Page/Homes/SecondHome/Otel/Filteroteller";
import Rezervasyon from "./Page/Homes/FirstHome/Rezervasyon/Rezervasyon";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Login from "./Page/NavbarElement/Register/Login";
import Register from "./Page/NavbarElement/Register/Register";
import Error404 from "./Page/Erorr404/Error404";
import AdminLogin from "./Page/Adminlogin/AdminLogin";
import Admin from "./Page/AdminPanel/Admin/Admin";
import Otels from "./Page/AdminPanel/Admin/Otel/Otels";
import Oteladd from "./Page/AdminPanel/Admin/Otel/Oteladd/Oteladd";
import Users from "./Page/AdminPanel/Admin/User/Users/Users";
import Useradd from "./Page/AdminPanel/Admin/User/Useradd/Useradd";
import Otelview from "./Page/AdminPanel/Admin/Otel/Otelview/Otelview";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <FirstHome />,
      },
      {
        path: "phone",
        element: <Phone />,
      },
      {
        path: "otelmap",
        element: <OtelMap />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "oteller",
        element: <Oteller />,
      },
      {
        path: "oteller/:isim",
        element: <Oteller />,
      },
      {
        path: "oteller/:isim/:otelkonum",
        element: <Filteroteller />,
      },
      {
        path: "oteller/:isim/:otelkonum/:oteldetal",
        element: <Otelincele />,
      },
      {
        path: "rezervasyon/:rezervotel",
        element: <Rezervasyon />,
      },
      {
        path: "admin",
        element: <AdminLogin />,
      },
    ],
  },

  {
    path: "adminpaneltatilbudur",
    element: <Admin />,
    children: [
      {
        path: "otels",
        element: <Otels />,
        children: [
          {
            path: ":otelkonum",
            element: <Otels />,
          },
        ],
      },
      {
        path: "otel/:id",
        element: <Otelview />,
      },

      {
        path: "oteladd",
        element: <Oteladd />,
      },
      {
        path: "user",
        element: <Users />,
        children: [
          {
            path: ":position",
            element: <Users />,
          },
        ],
      },
      {
        path: "useradd",
        element: <Useradd />,
      },
    ],
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
