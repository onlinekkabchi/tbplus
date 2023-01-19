import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "./style/style.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import SectionFirst from "./section/section1";
import SectionSecond from "./section/section2";
import SectionThird from "./section/section3";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/section-1", element: <SectionFirst /> },
      { path: "/section-2", element: <SectionSecond /> },
      { path: "/section-3", element: <SectionThird /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
