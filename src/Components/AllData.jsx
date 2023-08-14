import React from 'react'

import Home from "./Homepage/Home";

import Main from "./Main/Main";

import News from ".//News/News";

import Slider from "./Slider/Slider";

import TrySection from "./TrySection/TrySection";

import {motion } from "framer-motion"

const AllData = () => {
  return (
    <motion.div 

    initial={{width:"0"}}
    animate={{width:"100%"}}
    exit={{x: window.innerWidth , transition:{duration: 0.2}}}
    >
         <Home/>
    <Main/>
    <TrySection />
    <News />
    <Slider/>
    </motion.div>

  )
}

export default AllData