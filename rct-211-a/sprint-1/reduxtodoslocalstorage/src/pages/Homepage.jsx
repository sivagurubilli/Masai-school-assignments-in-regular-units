import React from 'react'
import Todos from '../components/Todos'
import {useSelector} from "react-redux"
import Login from './Login'
import { useState } from 'react'

const Homepage = () => {
 

  var isAuth = useSelector((store)=>store.Authreducer.isAuth)
   
  const [isau,setiasau] = useState(isAuth)


  const handlogout=()=>{
    
  localStorage.setItem("isauth",false)
  var r =localStorage.getItem("isauth")
  setiasau(r)
  }

  
  return (
    <div>
      <Login/>
      <button onClick={()=>handlogout()}>logout</button>




       {isau===true ? <Todos />:""}


    </div>
  )
}

export default Homepage