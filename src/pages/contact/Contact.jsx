import React from "react";

const Contact = () => {
  return (
    <>
      <div>
        <section id="contact" className="contact section py-5 mx-5">
          <div className="container section-title text-center" data-aos="fade-up">
            <h2 className="text-info-emphasis">Contact</h2>
            <p className="text-secondary">
              Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
              consectetur velit
            </p>
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="info-wrap" data-aos="fade-up" data-aos-delay="200">
              <div className="row gy-5">
                <div className="col-lg-4">
                  <div className="info-item d-flex align-items-center">
                    <i className="bi bi-geo-alt flex-shrink-0 me-3 fs-3 text-primary"></i>
                    <div>
                      <h5 className="text-info-emphasis">Address</h5>
                      <p className="text-secondary">Uzbekistan, Tashkent, Chilanzar</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="info-item d-flex align-items-center">
                    <i className="bi bi-telephone flex-shrink-0 me-3 fs-3 text-primary"></i>
                    <div>
                      <h5 className="text-info-emphasis">Call Us</h5>
                      <p className="text-secondary">+998 97 779 61 77</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="info-item d-flex align-items-center">
                    <i className="bi bi-envelope flex-shrink-0 me-3 fs-3 text-primary"></i>
                    <div>
                      <h5 className="text-info-emphasis">Email Us</h5>
                      <p className="text-secondary">jafarseniornumber0605@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <form
              method="post"
              className="php-email-form mt-5"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="row gy-4">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="name"
                    className="form-control rounded-0 py-3 px-4"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div className="col-md-6">
                  <input
                    type="email"
                    className="form-control rounded-0 py-3 px-4"
                    name="email"
                    placeholder="Your Email"
                    required
                  />
                </div>

                <div className="col-md-12">
                  <input
                    type="text"
                    className="form-control rounded-0 py-3 px-4"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </div>

                <div className="col-md-12">
                  <textarea
                    className="form-control rounded-0 py-3 px-4"
                    name="message"
                    rows="6"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>

                <div className="col-md-12 text-center">
                  <div className="error-message"></div>
                  <div className="sent-message text-secondary">
                    Your message has been sent. Thank you!
                  </div>

                  <button
                    type="submit"
                    className="btn px-5 py-3 mt-3 rounded-pill fw-bold text-white"
                    style={{backgroundColor: "#685032", border: "1px solid #685032"}}>
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
