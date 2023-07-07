
import {Route, Routes} from "react-router-dom"

import { SingleBoxing } from "../Product/SingleBoxing";
import { SingleYoga } from "../Product/SingleYoga";
import Boxing from "../Product/Boxing";
import Yoga from "../Product/Yoga";
import Cardio from "../Product/Cardio";
import { SingleCardio } from "../Product/SingleCardio";
import WaightFree from "../Product/WaightFree";
import { SinglWaightFree } from "../Product/SingleWaightFree";
import Home from "../Homepage/Home";


import Login from "../Product/TempLogin/TempLogin";

import PrivateRout from "./PrivateRout";

const AllRoutes = () => {
  return(

<Routes>
  <Route  path="/" element={<Home/>}></Route>
  <Route path="boxing" element={<Boxing/>}></Route>
  <Route path="/boxing/singleboxing/:id" element={<PrivateRout><SingleBoxing/></PrivateRout>}></Route>
  <Route path="yoga" element={<Yoga/>}></Route>
  <Route path="/yoga/singleyoga/:id" element={<SingleYoga/>}></Route>
  <Route path="cardio" element={<Cardio/>}></Route>
  <Route path="/cardio/singlecardio/:id" element={<SingleCardio/>}></Route>
  <Route path="waightfree" element={<WaightFree/>}></Route>
  <Route path="/waightfree/singlewaightfree/:id" element={<SinglWaightFree/>}></Route>

  <Route  path="/login" element={<Login/>}/>   


</Routes>
  )
};

export default AllRoutes;