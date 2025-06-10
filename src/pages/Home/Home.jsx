import React, { useEffect } from "react";
import Typed from "typed.js";
import Personal from "../../assets/images/personal.png";

const Home = () => {
  useEffect(() => {
    const typed = new Typed(".typed", {
      strings: ["FrontEnd developer", "Freelancer", "Mentor"],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1500,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div style={{ minHeight: "100vh", backdropFilter: "blur(10px)" }}>
        <section
          id="hero"
          className="hero section d-flex flex-column justify-content-center align-items-center text-center"
          style={{ minHeight: "100vh", backdropFilter: "blur(7px)" }}
        >
          <img
            src={Personal}
            alt="Personal"
            style={{
              width: "500px",
              maxWidth: "100%",
              marginBottom: "20px",
              borderRadius: "50%",
            }}
          />
          <h2 className="text-info-emphasis fs-1 fw-bold">
            I am Ja'far Developer
          </h2>
          <p>
            <span className="typed font-monospace text-success fs-2 fw-bold"></span>
          </p>
        </section>
      </div>
    </>
  );
};

export default Home;
