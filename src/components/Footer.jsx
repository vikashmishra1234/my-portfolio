import React, { useRef, useState } from 'react';
const service = import.meta.env.GMAIL_SERVICEID
import { FaTwitter, FaLinkedin, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt, FaGithub } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(import.meta.env.VITE_GMAIL_SERVICEID, import.meta.env.VITE_GMAIL_TEMID, form.current, {
        publicKey: import.meta.env.VITE_GMAIL_PUBLICID,
      })
      .then(
        () => {
          Swal.fire({
            icon: 'success',
            title: 'Message sent',
          });
          console.log('SUCCESS!');
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Unable to send',
          });
          console.log('FAILED...', error);
        }
      );
  };

  return (
    <footer id='contact' className="bg-gray-900 text-gray-300 py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Vikash Mishra</h2>
            <p className="text-md sm:text-xl mb-4">
              Passionate web developer creating beautiful and functional websites.
              Let's work together to bring your ideas to life!
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://twitter.com/VikashMish23321" icon={<FaTwitter className="h-5 w-5 " />} label="Twitter" />
              <SocialLink href="https://wa.me/8979481819" icon={<FaPhone className="h-5 w-5" />} label="WhatsApp" />
              <SocialLink href="https://www.instagram.com/v.i.k.a.s.h.123" icon={<FaInstagram className="h-5 w-5" />} label="Instagram" />
              <SocialLink href="https://www.linkedin.com/in/vikash-mishra-099478277" icon={<FaLinkedin className="h-5 w-5" />} label="LinkedIn" />
              <SocialLink href="https://github.com/vikashmishra1234" icon={<FaGithub className="h-5 w-5" />} label="GitHub" />
            </div>
          </div>
          <div>
            <h3 className="text-lg md:text-2xl font-semibold mb-4 text-white">Quick Links</h3>
            <nav>
              <ul className="md:text-xl space-y-2">
                <NavItem href="#home" label="Home" />
                <NavItem href="#projects" label="Projects" />
                <NavItem href="#skill" label="Skills" />
                <NavItem href="#contact" label="Contact" />
              </ul>
            </nav>
          </div>
          <div>
            <h3 className="text-lg md:text-2xl font-semibold mb-4 text-white">Contact Us</h3>
            <address className="text-md sm:text-xl not-italic">
              <ContactItem href="mailto:vikashmishra8371@gmail.com" icon={<FaEnvelope className="h-5 w-5" />} label="vikashmishra8371@gmail.com" />
              <ContactItem href="tel:+918979481819" icon={<FaPhone className="h-5 w-5" />} label="+91 8979481819" />
              <ContactItem icon={<FaMapMarkerAlt className="h-5 w-5" />} label="Mathura, Uttar Pradesh, India" />
            </address>
          </div>
          <div>
            <h3 className="text-lg md:text-2xl font-semibold mb-4 text-white">Newsletter</h3>
            <form onSubmit={sendEmail} ref={form} className="space-y-4">
              <div>
                <input 
                  type="email" 
                  name="email"
                  placeholder="Your email" 
                  aria-label="Email for newsletter" 
                  className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
                />
              </div>
              <div>
                <textarea 
                  name="message"
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your message (optional)" 
                  aria-label="Optional message" 
                  className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
                  rows={3}
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; {currentYear} Vikash Mishra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon, label }) => (
  <a href={href} className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
    {icon}
    <span className="sr-only">{label}</span>
  </a>
);

const NavItem = ({ href, label }) => (
  <li>
    <a href={href} className="text-gray-400 hover:text-white transition-colors">
      {label}
    </a>
  </li>
);

const ContactItem = ({ href, icon, label }) => (
  <p className="flex items-center space-x-2 mb-2">
    {icon}
    {href ? (
      <a href={href} className="text-gray-400 hover:text-white transition-colors">
        {label}
      </a>
    ) : (
      <span>{label}</span>
    )}
  </p>
);

export default Footer;
