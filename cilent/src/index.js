import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import * as mdb from "mdb-ui-kit"; // lib
import Phone from "./Page/NavbarElement/Contact/Phone/Phone";
import OtelMap from "./Page/NavbarElement/Contact/OtelMap/OtelMap";
import FirstHome from "./Page/Homes/FirstHome/FirstHome";
import Oteller from "./Page/Homes/SecondHome/Otel/Oteller";
import Otelincele from "./Page/Homes/SecondHome/Otelincele/Otelincele";
import Filteroteller from "./Page/Homes/SecondHome/Otel/Filteroteller";

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
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
