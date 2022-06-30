import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Books from './Books'
import Editbook from './Editbook'
import Singlebook from './Singlebook'
import Requiredauth from '../components/Requiredauth'
import Login from './Login'
const Mainroutes = () => {



  return (
    <div>

<Routes >

<Route path ="/" element={<Books />}>
    </Route>
    <Route path ="/books/:id" element={<Singlebook />}>
    </Route>
    <Route path ="/books/:id/edit" element={
    <Requiredauth>
 <Editbook />

    </Requiredauth>
   
    
    
    }>
    </Route>
    <Route path ="/login" element={<Login />}>
    </Route>
    <Route path='*' element={<h2>page not found</h2>}></Route>

</Routes>

    </div>
  )
}

export default Mainroutes