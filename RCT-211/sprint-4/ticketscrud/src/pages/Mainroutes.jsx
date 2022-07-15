import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './Homepage'
import Login from './Login'
import Signup from './Signup'

const Mainroutes = () => {
  return (
    <div>

        <Routes>
 <Route path="/" element ={<Homepage/>}>
     
 </Route>

 <Route path="/login" element ={<Login/>}>
     
     </Route>
     <Route path="/signup" element ={<Signup/>}>
     
 </Route>
        </Routes>



    </div>
  )
}

export default Mainroutes