

import React from 'react'
import {useState, useEffect} from "react"
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import "./single.css"
export const SingleCardio = () => {
const[state, setState]=useState({});
const {id}=useParams();
const navigate= useNavigate()
console.log(id)
useEffect(()=>{
  getData();
  },[id])




  const getData=()=>{
  axios.get(`http://localhost:8080/cardio/${id}`).then((res)=>{
  console.log(res.data)
  setState(res.data.cardio)
  })
  
    
  
  
  }

  return (
    <div id='singleparent'>
     
      {
        <div id='singlecard'>
          <div id="singleimg">
           <img src={state.image} alt=""  width="200" height="200" />
           </div>
           <div id='singletxt'>
           <p style={{fontSize:"24px"}} > Exercise Description:-</p><br />
          <p>{state.description}</p>
          <h2>{state.price}</h2>
          </div>
        </div>
      }
     <button id="starts"  onClick={()=>navigate("/subscribe")}> Get Started</button>
    </div>
  )
}