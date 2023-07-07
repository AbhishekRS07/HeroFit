import React from 'react'
import {useState, useEffect} from "react"
import axios from 'axios'
import { useParams } from 'react-router-dom'
export const SingleBoxing = () => {
const[state, setState]=useState({});
const {id}=useParams();
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
    <div>
        <h1>hello</h1>
      {
        <div>
          <img src={state.image} alt=""  width="200" height="200" />
          <p>{state.description}</p>
          <h2>{state.price}</h2>
        </div>
      }
      <button>Buy</button>
    </div>
  )
}