import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "aos/dist/aos.css";
import AOS from "aos";
AOS.init();
import "bootstrap/dist/css/bootstrap.min.css";
import Tilt from "react-parallax-tilt";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Tilt glareEnable={true} glareMaxOpacity={-5} scale={0.8}>
      <App className=""/>
    </Tilt>
  </React.StrictMode>
);
