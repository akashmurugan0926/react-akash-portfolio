import React, { useState } from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  // 1. State variables to store user input
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // State to handle the "Sending" status
  const [status, setStatus] = useState(""); // '', 'sending', 'success'

  // 2. Function to handle typing
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value, // Update the specific field being typed in
    }));
  };

  // 3. Function to handle the Send button click
  const handleSubmit = (e) => {
    e.preventDefault(); // Stop the page from reloading
    setStatus("sending");

    // Simulate a delay to make it look professional
    setTimeout(() => {
      // Construct the mailto link
      const subject = `Portfolio Contact from ${formData.name}`;
      const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;

      // Open the user's email client
      window.location.href = `mailto:akashmurugan0926@gmail.com?subject=${subject}&body=${body}`;

      // Show success message and clear form
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });

      // Remove success message after 5 seconds
      setTimeout(() => setStatus(""), 5000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="container"
      style={{ padding: "100px 20px", marginBottom: "50px" }}
    >
      <h2 className="section-title">Contact Me</h2>
      <div className="contact-wrapper">
        {/* Contact Info Side */}
        <div className="contact-info">
          <h3>Let's Talk</h3>
          <p>
            I'm open to freelance work or job opportunities. Feel free to reach
            out!
          </p>

          <div className="info-item">
            <FaEnvelope className="icon" />
            <span>akashmurugan0220@gmail.com</span>
          </div>

          <div className="info-item">
            <FaPhone className="icon" />
            <span>+91 9080490859</span>
          </div>

          <div className="info-item">
            <FaMapMarkerAlt className="icon" />
            <span>1/124A,MGR Street,Irumathur,Dharmapuri,Tamil Nadu, India-635201.</span>
          </div>
        </div>

        {/* Interactive Form Side */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn-primary"
            disabled={status === "sending"}
          >
            {status === "sending" ? (
              "Sending..."
            ) : (
              <>
                Send Message <FaPaperPlane style={{ marginLeft: "10px" }} />
              </>
            )}
          </button>

          {/* Success Message Popup */}
          {status === "success" && (
            <div className="success-msg">
              Message prepared! check your email app.
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
