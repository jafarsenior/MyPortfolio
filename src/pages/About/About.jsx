import React from "react";
import ProfileImg from "../../assets/images/myImg.jpg"; // Rasmni import qilish
import ProgressBar from "react-bootstrap/ProgressBar";

const About = () => {
  return (
    <>
      <div className="container">
        <section id="about" className="about section mx-5"  style={{ minHeight: "100vh", backdropFilter: "blur(3px)" }}>
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-4 mt-5">
              <div
                className="col-md-6 d-flex flex-column justify-content-center align-items-center"
                style={{ minHeight: "100%" }}
              >
                <div className="row justify-content-between">
                  <div className="col-lg-5">
                    <img
                      src={ProfileImg}
                      className="img-fluid rounded"
                      alt="Profile"
                    />
                  </div>
                  <div className="col-lg-7 about-info text-start">
                    <p>
                      <strong>Name: </strong> <span>Ja'far Jabborov</span>
                    </p>
                    <p>
                      <strong>Profile: </strong> <span>FrontEnd Developer</span>
                    </p>
                    <p>
                      <strong>Email: </strong>{" "}
                      <span>jafarseniornumber0605@gmail.com</span>
                    </p>
                    <p>
                      <strong>Phone: </strong> <span>+998 (97) 779 61 77</span>
                    </p>
                  </div>
                </div>

                {/* Skills section markazdan chiqadi */}
                <div
                  className="skills-content skills-animation mt-5 w-100 d-flex flex-column align-items-center"
                  style={{ minHeight: "300px"}}
                >
                  <h5 className="mb-3 fs-1 fw-bold">Skills</h5>

                  <div className=" w-100">
                    <label htmlFor="#">HTML</label>
                    <ProgressBar striped variant="success" now={90} />
                    <label htmlFor="#">CSS</label>
                    <ProgressBar striped variant="success" now={85} />
                    <label htmlFor="#">JAVASCRIPT</label>
                    <ProgressBar striped variant="info" now={75} />
                    <label htmlFor="#">REACTJS</label>
                    <ProgressBar striped variant="info" now={75} />
                  </div>
                </div>
              </div>

              <div className="col-md-6 d-flex flex-column justify-content-center">
                <div className="about-me">
                  <h4>About me</h4>
                  <p>
                    Hello there! My name is Ja'far and I am a web developer.
                  </p>
                  <p>
                    I am currently gaining experience. Information technology is becoming popular in the developing world, so I want to become a strong programmer in my field of study. I studied at NAJOT TALIM in 2023-2024.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
