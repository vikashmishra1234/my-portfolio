import React from "react";
import Card from "./Card";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import {motion} from 'framer-motion'
import student from '../../assets/studentX.jpg'
import flipkart from '../../assets/Flipkart.jpg'
import image from '../../assets/image.png'
import instagram from '../../assets/instagram.jpg'
import tracker from '../../assets/tracker.png'
const Projects = () => {
  return (
    <section id="project" className="project">
      <div className="project-heading">
        <motion.div
         initial={{opacity:0}}
         whileInView={{opacity:1}}
         transition={{duration:1.2,ease:'easeOut'}}
        >
          <h2>My Projects</h2>
        </motion.div>
        <motion.div
         initial={{opacity:0}}
         whileInView={{opacity:1}}
         transition={{duration:1.4,ease:'easeOut'}}
        >
          <p>Check Out My Projects.</p>
        </motion.div>
      </div>
      <motion.div className="max-carousel"
       initial={{opacity:0}}
       whileInView={{opacity:1}}
       transition={{duration:1.7,ease:'easeOut'}}
      >
        <Carousel
          swipeable={false}
          autoPlay={true}
          infiniteLoop={true}
          showIndicators={true}
        >
          <div className="cards">
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
          <div className="cards">
          <a href="https://social-app-psi-six.vercel.app/">

<Card
  image={instagram}
  title={"social media web app"}
  discription={
    "Social media web app ,where you can connect with with many people ,make vedio calls, share post add stories , also you can like dislike the post "
  }
/>
</a>
<a href="https://expense-tracker-tan-three.vercel.app/">

<Card
  image={tracker}
  title={"Expense Tracker"}
  discription={
    "A website to track expenses and income of an indivisual."
  }
/>
</a>
<a href="https://github.com/vikashmishra1234/Employee-management">

<Card
  image={""}
  title={"Employee Management webapp"}
  discription={
    "WebSite for managing the employee details,where you can add ,delete and update employee details."
  }
/>
</a>
          </div>
        </Carousel>
      </motion.div>
      <div className="min-carousel">
        <Carousel
          swipeable={true}
          autoPlay={true}
          infiniteLoop={true}
          showIndicators={true}
        >
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
          <a href="https://github.com/vikashmishra1234/Flipkart-clone">

          <Card
            image={flipkart}
            title={"E-commerce clone"}
            discription={
              "A clone of the Flipkart,which has fuctionality to search,add to cart ,filter and Place the order."
            }
          />
          </a>


          <a href="https://social-app-psi-six.vercel.app/">

<Card
  image={instagram}
  title={"social media web app"}
  discription={
    "Social media web app ,where you can connect with with many people ,make vedio calls, share post add stories , also you can like dislike the post "
  }
/>
</a>
<a href="https://expense-tracker-tan-three.vercel.app/">

<Card
  image={tracker}
  title={"Expense Tracker"}
  discription={
    "A website to track expenses and income of an indivisual."
  }
/>
</a>
<a href="https://github.com/vikashmishra1234/Employee-management">

<Card
  image={""}
  title={"Employee Management webapp"}
  discription={
    "WebSite for managing the employee details,where you can add ,delete and update employee details."
  }
/>
</a>
        
        
        </Carousel>
      </div>
    
    </section>
  );
};

export default Projects;
