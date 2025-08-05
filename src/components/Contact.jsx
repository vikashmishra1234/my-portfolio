import React, { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import "./style/style2.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
const Contact = () => {
  const [isSend, setSend] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    
  };
  return (
    <div id="contact" className="contact-page-wrapper">
      <div className="contact-page-container">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="contact-page-heading"
        >
          Contact Us
        </motion.h2>
        <motion.form
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         transition={{ duration: 1,delay:.2 }}
         onSubmit={sendEmail} ref={form} className="contact-page-form">
          <label htmlFor="name" className="contact-page-label">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="contact-page-input"
            required
          />

          <label htmlFor="email" className="contact-page-label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="contact-page-input"
            required
          />

          <label htmlFor="message" className="contact-page-label">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            className="contact-page-textarea"
            required
          ></textarea>

          <button type="submit" className="contact-page-button">
            Send Message
          </button>
        </motion.form>
      </div>

     
    </div>
  );
};
export default Contact;
