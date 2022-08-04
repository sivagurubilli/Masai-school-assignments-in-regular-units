


import React from 'react'
import {Routes,Route} from "react-router-dom"
import Reqauth from '../components/Reqauth'
import Editmusicrecord from './Editmusicrecord'
import Homepage from './Homepage'
import Login from './Login'
import Singlemusicrecord from './Singlemusicrecord'
const Routesall = () => {
  return (
    <div>
        <Routes>
            <Route path ="/" element ={<Homepage/>}></Route>
            <Route path ="/music/:id" element ={
            
            <Reqauth ><Singlemusicrecord/></Reqauth>

            
            }></Route>
            <Route path ="/music/:id/edit" element ={<Editmusicrecord/>}></Route>
        <Route path ="/login" element ={<Login/>}></Route>
        <Route path="*" element ={<h3>page not found</h3>}
        ></Route>
        </Routes>





    </div>
  )
}

export default Routesall