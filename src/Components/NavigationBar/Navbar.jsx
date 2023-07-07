import React, { useState,useEffect } from 'react'
import logo from "../Images/logo.png"

import "./Navbar.css"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      // console.log(scrolled)
      if (scrolled > 20) {
        document.querySelector(".Navbar").style.backgroundColor = "black";
      }
        if(scrolled<20){
     
      document.querySelector(".Navbar").style.background= "transparent";
     
  }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  

  


  return (
    <div className="Navbar">
        <img id='logo1' src={logo} alt="" />
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/home">Home</a>
        <a href="/about">Program</a>
        <a href="/service">About</a>
        <a href="/contact">Blog</a>
      </div>
      <div id='btns'>
       
      <button id='signin'>SignIn</button>
      <button id='register'>Register</button>
      </div>
      
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
}

export default Navbar