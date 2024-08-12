import React from "react";
import Card from "./Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { motion } from "framer-motion";
import student from "../../assets/studextX1.jpg";
import flipkart from "../../assets/Flipkart.jpg";
import image from "../../assets/image.png";
import priest from "../../assets/priest.jpg";
import instagram from "../../assets/instagram.jpg";
import tracker from "../../assets/tracker.png";

const Projects = () => {
  return (
    <section id="project" className="project">
      <div className="project-heading">
        <motion.div>
          <h2>My Projects</h2>
        </motion.div>
        <motion.div>
          <p>Check Out My Projects.</p>
        </motion.div>
      </div>
      <motion.div className="max-carousel">
        <motion.div
         initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
        
        >
          <Card
          
            image={priest}
            title={"The Priest Finder"}
            discription={
              "devotee can find the priests in vrindavan-mathura,Popular temples with their timings,best restourants,priests profile management."
            }
            link1={"https://tourist-guide-ashen.vercel.app/"}
            link2={"https://github.com/vikashmishra1234/Tourist-guide"}
          />
        </motion.div>
        <motion.div
         initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
        
        >
          
          <Card
          
            image={image}
            title={"Hostle Website For College"}
            discription={
              "A website for the BSA College Hoslte. Which includes a dedicated section for hostler and admin "
            }
            link1={"https://bsa-hostle-website.vercel.app/"}
            link2={"https://github.com/vikashmishra1234/Hostle-management"}
          />
        </motion.div>
        <motion.div
         initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
        
        >
          <Card
          
            image={student}
            title={"E-Learning Platform"}
            discription={
              "Web app for students to share notes,Integrated AI chatbot using google gemini."
            }
            link1={"https://colleges-notes-websites.vercel.app/"}
            link2={"https://github.com/vikashmishra1234/StudentX"}
          />
        </motion.div>
        <motion.div
         initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
        
        >
          <Card
          
            image={flipkart}
            title={"E-commerce clone"}
            discription={
              "A clone of the Flipkart,which has fuctionality to search,add to cart ,filter and Place the order."
            }
            link1={"https://github.com/vikashmishra1234/Flipkart-clone"}
            link2={"https://github.com/vikashmishra1234/Flipkart-clone"}
          />
        </motion.div>

        <motion.div
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         transition={{ duration: 1.6, ease: "easeOut" }}
        >
          <Card
          
            image={instagram}
            title={"social media web app"}
            discription={
              "Social media web app ,where you can connect with with many people ,make vedio calls, share post add stories , also you can like dislike the post "
            }
            link1={"https://social-app-psi-six.vercel.app/"}
            link2={
              "https://github.com/vikashmishra1234/backend-expense-tracker"
            }
          />
        </motion.div>
        <motion.div
         initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
        
        >
          <Card
          
            image={tracker}
            title={"Expense Tracker"}
            discription={
              "A website to track expenses and income of an indivisual."
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
