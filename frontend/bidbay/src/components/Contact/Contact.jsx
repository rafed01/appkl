/* eslint-disable no-unused-vars */
import { React, useState } from "react";
import "./Contact.css";
import logo from "../../assets/logo.gif";
import mailicon from "../../assets/mailicon.svg";
import phone from "../../assets/phone.svg";
import api from "../../api";

const Contact = () => {
  const [formData, setFormData] = useState({
    c_name: "",
    c_email: "",
    c_message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
      const response = await api.post("/api/contact/", formData);
      if (response.status === 201) {
        alert("contact  submitted successfully!");
      } else {
        alert("Failed to submit contact");
      }
    
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <img src={logo} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>WELCOME</h1>
          <p>Get in touch</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mailicon} alt="" />
              <p>bidbay369@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={phone} alt="" />
              <p>+216 50 021 071</p>
            </div>
          </div>
        </div>
        <form className="contact-right" onSubmit={handleSubmit}>
          <label htmlFor="">Your Name</label>
          <input
            type="text"
            placeholder="Enter you name"
            name="c_name"
            id="c_name"
            onChange={handleChange}
            value={formData.c_name}
          />
          <label htmlFor="Your Email">Your Email</label>
          <input
            type="text"
            placeholder="Enter you email"
            name="c_email"
            id="c_email"
            onChange={handleChange}
            value={formData.c_email}
          />
          <label htmlFor="">Write you msg here</label>
          <textarea
            name="c_message"
            id="c_message"
            rows="8"
            placeholder="Enter your message"
            onChange={handleChange}
            value={formData.c_message}
          />
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
