import React from "react";
import Card from "./Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { motion } from "framer-motion";
import student from "../../assets/studentX.jpg";
import flipkart from "../../assets/Flipkart.jpg";
import image from "../../assets/image.png";
import priest from "../../assets/priest.jpg";
import instagram from "../../assets/instagram.jpg";
import tracker from "../../assets/tracker.png";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1155 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1155, min: 700 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 700, min: 0 },
    items: 1,
  },
};
const Projects = () => {
  return (
    <section id="project" className="project">
      <div className="project-heading">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h2>My Projects</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        >
          <p>Check Out My Projects.</p>
        </motion.div>
      </div>
      <motion.div
        className="max-carousel"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.7, ease: "easeOut" }}
      >
        <Carousel responsive={responsive}>
            <div>
                <a href="https://tourist-guide-ashen.vercel.app/">
                    <Card
                    image={priest}
                    title={'The Priest Finder'}
                    discription={'devotee can find the priests in vrindavan-mathura,Popular temples with their timings,best restourants,priests profile management.'}
                    />
                </a>
            </div>
          <div>
            <a href="https://bsa-hostle-website.vercel.app/">
              {" "}
              <Card
                image={image}
                title={"Hostle Website For College"}
                discription={
                  "A website for the BSA College Hoslte. Which includes a dedicated section for hostler and admin "
                }
              />
            </a>
          </div>
          <div >
            <a href="https://colleges-notes-websites.vercel.app/">
              {" "}
              <Card
                image={student}
                title={"Study Material Sharing Website"}
                discription={
                  "Web app for students to share notes and other study material."
                }
              />
            </a>
          </div>
          <div>
            <a href="https://github.com/vikashmishra1234/Flipkart-clone">
              <Card
                image={flipkart}
                title={"E-commerce clone"}
                discription={
                  "A clone of the Flipkart,which has fuctionality to search,add to cart ,filter and Place the order."
                }
              />
            </a>
          </div>

          <div>
            <a href="https://social-app-psi-six.vercel.app/">
              <Card
                image={instagram}
                title={"social media web app"}
                discription={
                  "Social media web app ,where you can connect with with many people ,make vedio calls, share post add stories , also you can like dislike the post "
                }
              />
            </a>
          </div>
          <div>
            <a href="https://expense-tracker-tan-three.vercel.app/">
              <Card
                image={tracker}
                title={"Expense Tracker"}
                discription={
                  "A website to track expenses and income of an indivisual."
                }
              />
            </a>
          </div>
        </Carousel>
      </motion.div>
    </section>
  );
};

export default Projects;
