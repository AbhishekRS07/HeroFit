import React, { useState } from 'react'
import Login from './Login'
import Signup from './Signup'
import "./reg.css"
const Register = () => {

    const[render, setRender]= useState("Signup") 
    const[active, setActive]= useState(true)

 const handlerender=()=>{
    switch(render){
        case "Login":
            return <Login/>
            default :
            return <Signup/>
    }
 }
  return (
   <div id='regmain' >
     <div id='regbtn'>
      <button  id='renderbtn1' onClick={()=>{
        setRender("Signup")
        setActive(true)
      }}
     
      className={active ? "active" : ""}

      >
        SIGNUP
      </button>

      <button  id='renderbtn2' onClick={()=>{
        setRender("Login")
        setActive(false)
      }}
      className={!active ? "active" : ""}
     
      >
        LOGIN{" "}
      </button>
      {handlerender()}
    </div>
   </div>

  )
}

export default Register