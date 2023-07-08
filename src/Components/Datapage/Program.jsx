// import { colors } from "@mui/material";
import React, { useState } from "react";

const Program = () => {
  const [state, setState] = useState([]);
  const [data, setData] = useState([]);
  const [state2, setState2] = useState([]);
  const [float, setFloat] = useState([]);
  const getData = async () => {
    try {
      let res = await fetch(`https://herofit-app-server.onrender.com/boxing`);
      let data = await res.json();
      setState(data);
    } catch (error) {
      console.log(error);
    }
  };
  const cardioData = async () => {
    try {
      let res = await fetch(`https://herofit-app-server.onrender.com/cardio`);
      let data = await res.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };
  const weightData = async () => {
    try {
      let res = await fetch(`https://herofit-app-server.onrender.com/weight`);
      let data = await res.json();
      setState2(data);
    } catch (error) {
      console.log(error);
    }
  };

  const floatingData = async () => {
    try {
      let res = await fetch(`https://herofit-app-server.onrender.com/floating`);
      let data = await res.json();
      setFloat(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {state.map((e) => (
          <div style={{ border: "2px solid black" }}>
            <h1 style={{ color: "black" }}>Title:{e.title}</h1>
            <img src={e.image} alt={e.title} width={"100%"} height={400} />
            <p>category:{e.category}</p>
          </div>
        ))}
        <button onClick={getData}>getdata</button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {data.map((e) => (
          <div style={{ border: "2px solid black" }}>
            <h1 style={{ color: "black" }}>Title:{e.title}</h1>
            <img src={e.image} alt={e.title} width={"100%"} height={400} />
            <p>category:{e.category}</p>
          </div>
        ))}
        <button onClick={cardioData}>cardio</button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {state2.map((e) => (
          <div style={{ border: "2px solid black" }}>
            <h1 style={{ color: "black" }}>Title:{e.title}</h1>
            <img src={e.image} alt={e.title} width={"100%"} height={400} />
            <p>category:{e.category}</p>
          </div>
        ))}
        <button onClick={weightData}>weight</button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {float.map((e) => (
          <div style={{ border: "2px solid black" }}>
            <h1 style={{ color: "black" }}>Title:{e.title}</h1>
            <img src={e.image} alt={e.title} width={"100%"} height={400} />
            <p>category:{e.category}</p>
          </div>
        ))}
        <button onClick={floatingData}>Floatingdata</button>
      </div>
    </>
  );
};

export default Program;
