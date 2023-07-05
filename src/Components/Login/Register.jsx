import React, { useState } from 'react';
import "./mix.css"
const Register = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const handleToggleMode = () => {
    setIsSignUpMode(!isSignUpMode);
  };

  return (
    <div className={`container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" className="btn solid" />
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                {/* <i className="fab fa-facebook-f"></i> */}
              </a>
              <a href="#" className="social-icon">
                {/* <i className="fab fa-twitter"></i> */}
              </a>
              <a href="#" className="social-icon">
                {/* <i className="fab fa-google"></i> */}
              </a>
              <a href="#" className="social-icon">
                {/* <i className="fab fa-linkedin-in"></i> */}
              </a>
            </div>
          </form>
          <form action="#" className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" className="btn" value="Sign up" />
            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                {/* <i className="fab fa-facebook-f"></i> */}
              </a>
              <a href="#" className="social-icon">
                {/* <i className="fab fa-twitter"></i> */}
              </a>
              <a href="#" className="social-icon">
                {/* <i className="fab fa-google"></i> */}
              </a>
              <a href="#" className="social-icon">
                {/* <i className="fab fa-linkedin-in"></i> */}
              </a>
            </div>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
            Don't have an account, Click here to Sign Up!{"        "}
            </p>
            <button className="btn transparent" onClick={handleToggleMode}>
              Sign up
            </button>
          </div>
          <img src="img/log.svg" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us?</h3>
            <p>
             Already have an account, Click here to Login In!{"     "}
            </p>
            <button className="btn transparent" onClick={handleToggleMode}>
              Sign in
            </button>
          </div>
          <img src="img/register.svg" className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Register;
