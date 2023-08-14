import React from 'react'
import {useState, useEffect} from "react"
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import "./single.css"
import { border } from '@chakra-ui/react';

export const SingleBoxing = () => {
const[state, setState]=useState({});
const {id}=useParams();
const navigate= useNavigate()
console.log(id)
useEffect(()=>{
  getData();
  },[id])




  const getData=()=>{
  axios.get(`http://localhost:8080/boxing/${id}`).then((res)=>{
  console.log(res.data)
  setState(res.data.boxing)
  })
  
    
  
  
  }

  return (
    <div id='singleparent'>
      <div style={{marginRight:"100%"}}>
      <button id="starts" onClick={()=>navigate('/boxing')}>Back to boxing</button>
      </div>
    
      {
        <div id='singlecard'>
          
          <div id="singleimg">
          <img src={state.image} alt=""   />
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