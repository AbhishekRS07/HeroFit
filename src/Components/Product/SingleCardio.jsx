import React from 'react'
import {useState, useEffect} from "react"
import axios from 'axios'
import { useParams } from 'react-router-dom'
export const SingleCardio = () => {
const[state, setState]=useState({});
const {id}=useParams();
console.log(state)
useEffect(()=>{
  getData();
  },[])




  const getData=()=>{
  axios.get(`https://herofit-app-server.onrender.com/cardio_products/${id}`).then((res)=>{
  console.log(res.data)
  setState(res.data)
  })
  
    
  
  
  }

  return (
    <div>
      {
        <div>
          <img src={state.image} alt="" />
          <p>{state.description}</p>
          <h2>{state.price}</h2>
        </div>
      }
      <button>Buy</button>
    </div>
  )
}