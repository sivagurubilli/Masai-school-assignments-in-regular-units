import { Stack } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ReqAuth from '../components/requiredauth'
import Homepage from './Homepage'
import Login from './Login'
import Signup from './Signup'

const Mainroutes = () => {


  return (
    <div>

        <Routes>
 <Route path="/" element ={
<Stack direction="row">

<Homepage/>
</Stack>
  

 
 }>
     
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