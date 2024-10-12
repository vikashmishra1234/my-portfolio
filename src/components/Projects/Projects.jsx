import React from "react";
import Card from "./Card";
import { motion } from "framer-motion";
import student from "../../assets/studextX1.jpg";
import flipkart from "../../assets/Flipkart.jpg";
import image from "../../assets/image.png";
import priest from "../../assets/priest.jpg";
import instagram from "../../assets/instagram.jpg";
import tracker from "../../assets/tracker.png";

const Projects = () => {
  return (
    <section id="projects" className="py-12 bg-gray-700">
      <div className="text-center mb-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <h2 className="text-6xl font-bold text-white">My Projects</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.4 }}
        >
          <p className="text-2xl text-gray-100 mt-2">
            Check out my latest work.
          </p>
        </motion.div>
      </div>

      <motion.div
        className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
      >
        <motion.div>
          <Card
            image={priest}
            title={"The Priest Finder"}
            discription={
              "Devotees can find priests in Vrindavan-Mathura, view popular temples and timings, and manage priests' profiles."
            }
            link1={"https://priest-finder-web-app.onrender.com/"}
            link2={"https://github.com/vikashmishra1234/Tourist-guide"}
          />
        </motion.div>

        <motion.div>
          <Card
            image={image}
            title={"Hostel Website for College"}
            discription={
              "A website for BSA College Hostel. It includes a section for both hostlers and administrators."
            }
            link1={"https://bsa-hostle-website.vercel.app/"}
            link2={"https://github.com/vikashmishra1234/Hostle-management"}
          />
        </motion.div>

        <motion.div>
          <Card
            image={student}
            title={"E-Learning Platform"}
            discription={
              "Web app for students to share notes, with an integrated AI chatbot using Google Gemini."
            }
            link1={"https://colleges-notes-websites.vercel.app/"}
            link2={"https://github.com/vikashmishra1234/StudentX"}
          />
        </motion.div>

        <motion.div>
          <Card
            image={flipkart}
            title={"E-commerce Clone"}
            discription={
              "A clone of Flipkart with functionality to search, add to cart, filter, and place orders."
            }
            link1={"https://github.com/vikashmishra1234/Flipkart-clone"}
            link2={"https://github.com/vikashmishra1234/Flipkart-clone"}
          />
        </motion.div>

        <motion.div>
          <Card
            image={instagram}
            title={"Social Media Web App"}
            discription={
              "Social media web app to connect with people, make video calls, share posts, add stories, and like or dislike posts."
            }
            link1={"https://social-app-psi-six.vercel.app/"}
            link2={
              "https://github.com/vikashmishra1234/backend-expense-tracker"
            }
          />
        </motion.div>

        <motion.div>
          <Card
            image={tracker}
            title={"Expense Tracker"}
            discription={
              "A website to track expenses and income of individuals."
            }
            link1={"https://expense-tracker-tan-three.vercel.app/"}
            link2={"https://github.com/vikashmishra1234/Expense-Tracker"}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
