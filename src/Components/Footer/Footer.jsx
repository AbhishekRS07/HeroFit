import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div id="parentfooter">
      <div id="child1">
        <h1>HeroFit.</h1>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem, ipsum dolor.</p>
        <label>Subscribe to our NewsLetter!</label>
        <input type="text" placeholder="        Your Email" /> 
      </div>
      <div  id="child2">
        <h2>About</h2>
        <p>About Us</p>
        <p>Features</p>
        <p>News & Blog</p>
        <p>Why Herofit</p>
      </div>
      <div id="child3">
        <h2>Support</h2>
        <p>FAQ</p>
        <p>Support Center</p>
        <p>Contact US</p>
      </div>
      <div id="child4">
        <h2>Partner</h2>
        <p>Our Partner</p>
        <p>Become Partner</p>
      </div>
    </div>
  );
};

export default Footer;
