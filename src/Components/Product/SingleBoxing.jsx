import React from 'react'
import {useState, useEffect} from "react"
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import "./single.css"

export const SingleBoxing = () => {
const[state, setState]=useState({});
const {id}=useParams();
const navigate= useNavigate()
console.log(id)
useEffect(()=>{
  getData();
  },[state])




  const getData=()=>{
  axios.get(`https://herofit-app-server.onrender.com/boxing/${id}`).then((res)=>{
  console.log(res.data)
  setState(res.data)
  })
  
    
  
  
  }

  return (
    <div id='singleparent'>

      {
        <div id='singlecard'>
          <div id="singleimg">
          <img src={state.image} alt=""   />
          </div>
          <div id='singletxt'>
          <p>{state.description}</p>
          <h2>{state.price}</h2>
          </div>
        </div>
      }
     <button id="starts"  onClick={()=>navigate("/subscribe")}> Get Started</button>
    </div>
  )
}