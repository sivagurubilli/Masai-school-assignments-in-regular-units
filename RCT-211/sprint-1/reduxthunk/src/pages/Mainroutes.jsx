import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {Todos} from "../components/Todos"
const Mainroutes = () => {
  return (
    
    <Routes>
        <Route path ="/" element={<Todos/>}></Route>
    <Route path='/:id' element={<Singletodos/>}></Route>
    
    
    </Routes>
  )
}

export default Mainroutes