import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Swal from "sweetalert2";
const serviceId = import.meta.env.VITE_GMAIL_SERVICEID;
const publicId = import.meta.env.VITE_GMAIL_PUBLICID;
const temId = import.meta.env.VITE_GMAIL_TEMID;

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const form = useRef()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(serviceId, temId, form.current, {
        publicKey:publicId,
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
    // Here you would typically send the form data to your backend or a service like EmailJS
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
 
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-[#f0d4a8] to-[#deb887]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-[#9b5808] mb-6">
            Get in <span className="text-[#c07107]">Touch</span>
          </h2>
          <p className="text-xl md:text-2xl text-[#6b3d05] max-w-3xl mx-auto">
            I'd love to hear from you! Whether you have a question or just want to say hi, feel free to drop a message.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <form onSubmit={handleSubmit} ref={form} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-[#6b3d05] mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white border border-[#deb887] focus:outline-none focus:border-[#c07107]"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-[#6b3d05] mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white border border-[#deb887] focus:outline-none focus:border-[#c07107]"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-medium text-[#6b3d05] mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white border border-[#deb887] focus:outline-none focus:border-[#c07107]"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#c07107] text-white py-3 px-6 rounded-lg text-lg font-medium hover:bg-[#9b5808] transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 space-y-8"
          >
            <div className="flex items-start space-x-4">
              <FaEnvelope className="text-3xl text-[#c07107]" />
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-[#9b5808]">Email</h3>
                <p className="text-[#6b3d05] md:text-lg">vikashmishra8371@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaPhone className="text-3xl text-[#c07107]" />
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-[#9b5808]">Phone</h3>
                <p className="text-[#6b3d05] md:text-lg">+91 8979481819</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaMapMarkerAlt className="text-3xl text-[#c07107]" />
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-[#9b5808]">Location</h3>
                <p className="text-[#6b3d05] md:text-lg">Mathura, Uttar Pradesh, India</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;

