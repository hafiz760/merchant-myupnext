import React from "react";
import RouteConfig from "./RouteConfig/index";

// import css
import "./assets/css/remixicon.css";

// import scss
import "./scss/style.scss";

// set skin on load
window.addEventListener("load", function () {
  let skinMode = localStorage.getItem("skin-mode");
  let HTMLTag = document.querySelector("html");

  if (skinMode) {
    HTMLTag.setAttribute("data-skin", skinMode);
  }
});

export default function App() {
  return (
    <React.Fragment>
      <RouteConfig />
    </React.Fragment>
  );
}
