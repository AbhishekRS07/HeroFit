import React, { useState } from "react";
import "./try.css";
import phone from "./../Images/phone.png"
import {motion} from "framer-motion"
const TrySection = () => {
  const[rotate,setrotate]= useState(false)
  return (
    <div id="try">
      <div id="try1">
        <p style={{color:"lightgreen"}}>Make your easily anywhere!</p>
        <h1>Platform to make it easier for the users</h1>
        <p>
          We want to help you live a fit and healthy lifestyle! We do this by
          helping you find the most suitable equipment for your home gym, studio
          or commercial gym, keeping your budget, lifestyle and fitness goals in
          mind.
        </p>
        <button id="buttonss">Try Now!</button>
      </div>
      <motion.div 
      animate={{rotate:rotate?360:0}}
      onClick={()=>{setrotate(!rotate)}}
      id="try2">
      <img src={phone} alt="" />
      </motion.div>
     
    </div>
  );
};

export default TrySection;
