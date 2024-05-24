import React, { useState } from 'react';
import './style/style1.css';
import { GiHamburgerMenu } from "react-icons/gi";
import {motion, useMotionTemplate} from 'framer-motion'
const navbarAnimation = {
    hidden:{
        opacity:0,
        y:-20
    },
    show:{
        opacity:1,
        y:0,
        
    },
}
const Navbar = () => {
    const [isOpened,setOpened] = useState(false);
  return (
    <motion.nav
    initial="hidden"
    whileInView="show"
    variants={navbarAnimation}
    transition={{duration:1.3,ease:"easeOut",type:'spring'}}
     className="navbar">
        <div className="logo">
            <h2>VM</h2>
        </div>
        <motion.ul
        
         className={isOpened?'open':''}> 
            <li><a onClick={()=>setOpened(false)} href="#home">Home</a></li>
            <li><a onClick={()=>setOpened(false)} href="#project">Projects</a></li>
            <li><a onClick={()=>setOpened(false)} href="#skill">Skills</a></li>
            <li><a onClick={()=>setOpened(false)} href="#contact">Contact</a></li>
        </motion.ul>
        <div className='ham'>
        <GiHamburgerMenu onClick={()=>setOpened(!isOpened)} size={34} />
        </div>
    </motion.nav>
  )
}

export default Navbar