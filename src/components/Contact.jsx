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

    emailjs
      .sendForm("service_u636c7q", "template_pi4mh7a", form.current, {
        publicKey: "Ff0ehUacs-SPxliQT",
      })
      .then(
        () => {
          Swal.fire({
            icon: "success",
            title: "message sent",
          });
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
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

      {/* <div className="contact-page-container">
        <motion.h2
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 1 }}
         className="contact-page-heading">Our Address</motion.h2>
        <motion.div
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         transition={{ duration: 1,delay:1 }}
         className="contact-page-details">
          <div className="contact-page-detail-item">
            <FaEnvelope className="contact-page-icon" />
            <a href="mailto:vikashmishra8371@gmail.com">
              vikashmishra8371@gmail.com
            </a>
          </div>
          <div className="contact-page-detail-item">
            <FaPhoneAlt className="contact-page-icon" />
            <a href="tel:+918979481819">+91 8979481819</a>
          </div>
          <div className="contact-page-detail-item">
            <FaMapMarkerAlt className="contact-page-icon" />
            <span>1032 Mathura, Uttar Pradesh, India</span>
          </div>
        </motion.div>
      </div> */}
    </div>
  );
};
export default Contact;
