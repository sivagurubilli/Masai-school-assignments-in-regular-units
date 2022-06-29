import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from './Admin'
import Books from './Books'
import Editbook from './Editbook'
import Singlebook from './Singlebook'

const Mainroutes = () => {



  return (
    <div>

<Routes >

<Route path ="/" element={<Books />}>
    </Route>
    <Route path ="/books/:id" element={<Singlebook />}>
    </Route>
    <Route path ="/books/:id/edit" element={<Editbook />}>
    </Route>
    <Route path ="/admin" element={<Admin />}>
    </Route>
    <Route path='*' element={<h2>page not found</h2>}></Route>

</Routes>

    </div>
  )
}

export default Mainroutes