import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify"; // ⬅️ qo‘shildi
import 'react-toastify/dist/ReactToastify.css'; // ⬅️ kerakli CSS

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const BOT_TOKEN = "7169662666:AAGgjFzWPypZwEhit-01km66K6WC9at7LBc";
  const CHAT_ID = "6544340479";

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const text = `
New Contact:
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}
Message: ${formData.message}
    `;

    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURIComponent(text)}`;

    // Toast: sending
    const toastId = toast.loading("Sending message...");

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log("Telegram response:", data);

      if (res.ok && data.ok) {
        toast.update(toastId, {
          render: "✅ Message sent successfully!",
          type: "success",
          isLoading: false,
          autoClose: 3000,
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.update(toastId, {
          render: "❌ Failed to send message.",
          type: "error",
          isLoading: false,
          autoClose: 3000,
        });
      }
    } catch (err) {
      toast.update(toastId, {
        render: "⚠️ Network error. Please try again.",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
      console.error(err);
    }
  };

  return (
    <section id="contact" className="contact section py-5 mx-5">
      <ToastContainer /> {/* ⬅️ Toast component */}
      
      <div className="container section-title text-center" data-aos="fade-up">
        <h2 className="text-info-emphasis">Contact</h2>
        <p className="text-secondary">
          Feel free to contact me anytime.
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <form onSubmit={handleSubmit} className="php-email-form mt-5">
          <div className="row gy-4">
            <div className="col-md-6">
              <input
                type="text"
                name="name"
                className="form-control rounded-0 py-3 px-4"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6">
              <input
                type="email"
                name="email"
                className="form-control rounded-0 py-3 px-4"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-12">
              <input
                type="text"
                name="subject"
                className="form-control rounded-0 py-3 px-4"
                placeholder="Subject"
                required
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-12">
              <textarea
                name="message"
                className="form-control rounded-0 py-3 px-4"
                rows="6"
                placeholder="Message"
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-md-12 text-center">
              <button
                type="submit"
                className="btn px-5 py-3 mt-3 rounded-pill fw-bold text-white"
                style={{ backgroundColor: "#685032", border: "1px solid #685032" }}
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
