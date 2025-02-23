import React from "react";
import { motion } from "framer-motion";
import Card from "./Card";

// Import your images here
import student from "../../assets/studextX1.jpg";
import flipkart from "../../assets/Flipkart.jpg";
import image from "../../assets/image.png";
import scrap from "../../assets/scrap.png"
import books from "../../assets/books.png"
import priest from "../../assets/priest.jpg";
import instagram from "../../assets/instagram.jpg";
import tracker from "../../assets/tracker.png";

const projectData = [
  {
    image: priest,
    title: "The Priest Finder",
    description: "Devotees can find priests in Vrindavan-Mathura, view popular temples and timings, and manage priests' profiles.",
    link1: "https://priest-finder-web-app.onrender.com/",
    link2: "https://github.com/vikashmishra1234/Tourist-guide",
  },
  {
    image: image,
    title: "Hostel Website for College",
    description: "A website for BSA College Hostel. It includes a section for both hostlers and administrators.",
    link1: "https://bsacollegehostel.vercel.app/",
    link2: "https://github.com/vikashmishra1234/Hostle-Nextjs",
  },
  {
    image: scrap,
    title: "ChatGpt Conversation to pdf Converter",
    description: "Save your Conversation with chat gpt in a pdf formate.this is a scraping project...",
    link1: "https://chatgptpdf.vercel.app/",
    link2: "https://github.com/vikashmishra1234/scrape-gpt",
  },
  {
    image: books,
    title: "Books Selling Website With Payment Gateway",
    description: "In this website i am selling books,previous year papers and notes to the college student with realtime razor pay gateway",
    link1: "https://books-selling.vercel.app/",
    link2: "https://github.com/vikashmishra1234/books-selling",
  },
  {
    image: student,
    title: "E-Learning Platform",
    description: "Web app for students to share notes, with an integrated AI chatbot using Google Gemini.",
    link1: "https://student-study-website.vercel.app/",
    link2: "https://github.com/vikashmishra1234/Student-Study-website",
  },
  {
    image: flipkart,
    title: "E-commerce Clone",
    description: "A clone of Flipkart with functionality to search, add to cart, filter, and place orders.",
    link1: "https://github.com/vikashmishra1234/Flipkart-clone",
    link2: "https://github.com/vikashmishra1234/Flipkart-clone",
  },
  // {
  //   image: instagram,
  //   title: "Social Media Web App",
  //   description: "Social media web app to connect with people, make video calls, share posts, add stories, and like or dislike posts.",
  //   link1: "https://social-app-psi-six.vercel.app/",
  //   link2: "https://github.com/vikashmishra1234/backend-expense-tracker",
  // },
  // {
  //   image: tracker,
  //   title: "Expense Tracker",
  //   description: "A website to track expenses and income of individuals.",
  //   link1: "https://expense-tracker-tan-three.vercel.app/",
  //   link2: "https://github.com/vikashmishra1234/Expense-Tracker",
  // },
];

const Projects = () => {
  return (
    <section  className="py-24 bg-gradient-to-b from-[#f0d4a8] to-[#deb887]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-[#9b5808] mb-6">
            My <span className="text-[#c07107]">Projects</span>
          </h2>
          <p className="text-xl md:text-2xl text-[#6b3d05] max-w-3xl mx-auto">
            Explore my latest work and see how I bring ideas to life through code and creativity.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                image={project.image}
                title={project.title}
                discription={project.description}
                link1={project.link1}
                link2={project.link2}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

