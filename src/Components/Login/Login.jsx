import React, { useState } from "react";
import { useContext, useEffect } from "react";
import { MyAuthContext } from "../Context/AuthContextProvider";
import "./reg.css"
import { Navigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {login,logout, isAuth} = useContext(MyAuthContext);
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form submission
    if (!email || !password) {
      alert('Please fill in all the fields.');
      return;
    }

    const payload = {
      email,
      password,
    };

    try {
      const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      console.log(data);
      localStorage.setItem('token', data.token);
      localStorage.setItem('username', data.username);
    } catch (error) {
      console.error('Error occurred:', error);
    }

    const token = localStorage.getItem("token");
    if (token) {
      login(true);
    }
  
  };
  if(isAuth){
    return <Navigate to = "/" />;
   }
   

  
  return (
    <div>
      {" "}
      <form id='regform' onSubmit={handleSubmit}>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="    email"
          value={email}
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="    password"
          value={password}
        />
        <button id='formbtn' type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
