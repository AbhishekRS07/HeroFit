import React from 'react'
import {Link as RouterLink} from "react-router-dom"


export const TempNav = () => {

    let mylink=[
        {
            title: "Home",
            path: "/"
        },
        {
            title: "Boxing",
            path: "/boxing"
        },
        {
            title: "cardio",
            path: "/cardio"
        },
        {
            title: "Yoga",
            path: "/yoga"
        },
        {
            title: "WaightFree",
            path: "/waightfree"
        },
        {
            title: "Music",
            path: "/song"
        },
        {
            path:"/login",
            title: "Login"
        },
    ]
  return (
<div>
   {
    mylink.map((e)=>(<RouterLink key={e.path} to={e.path}>{e.title}</RouterLink>))
   }

</div>
  )
}
