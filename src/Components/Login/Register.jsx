import React, { useState } from 'react';
import "./mix.css"
import image from "../Images/logo.png"
const Register = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const handleToggleMode = () => {
    setIsSignUpMode(!isSignUpMode);
  };

  return (
    <div className={`containerA ${isSignUpMode ? 'sign-up-modeA' : ''}`}>
      <div className="forms-containerA">
        <div className="signin-signupA">
          <form action="#" className="sign-in-formA">
            <h2 className="titleA">Sign in</h2>
            <div className="input-fieldA">
             
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-fieldA">
             
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" className="btnA solidA" />
           
          </form>
          <form action="#" className="sign-up-formA">
            <h2 className="titleA">Sign up</h2>
            <div className="input-fieldA">
            
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-fieldA">
            
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-fieldA">
              
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" className="btnA" value="Sign up" />
            
            
          </form>
        </div>
      </div>

      <div className="panels-containerA">
        <div className="panelA left-panelA">
          <div className="contentA">
            <h3>New here ?</h3>
            <p>
            Don't have an account, Click here to Sign Up!{"        "}
            </p>
            <button className="btnA transparentA" onClick={handleToggleMode}>
              Sign up
            </button>
          </div>
          <img src={image} className="imageA" alt="" />
        </div>
        <div className="panelA right-panelA">
          <div className="contentA">
            <h3>One of us?</h3>
            <p>
             Already have an account, Click here to Login In!{"     "}
            </p>
            <button className="btnA transparentA" onClick={handleToggleMode}>
              Sign in
            </button>
          </div>
          <img src={image} className="imageA" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Register