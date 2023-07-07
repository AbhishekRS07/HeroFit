

import React from 'react'
import {useState, useEffect} from "react"
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
export const SingleYoga = () => {
const[state, setState]=useState({});
const {id}=useParams();
const navigate= useNavigate()
console.log(id)
useEffect(()=>{
  getData();
  },[state])




  const getData=()=>{
  axios.get(`https://herofit-app-server.onrender.com/floating/${id}`).then((res)=>{
  console.log(res.data)
  setState(res.data)
  })
  
    
  
  
  }

  return (
    <div>
       
      {
        <div>
          <img src={state.image} alt=""  width="200" height="200" />
          <p>{state.description}</p>
          <h2>{state.price}</h2>
        </div>
      }
     <button id="start"  onClick={()=>navigate("/subscribe")}> Get Started</button>
    </div>
  )
}