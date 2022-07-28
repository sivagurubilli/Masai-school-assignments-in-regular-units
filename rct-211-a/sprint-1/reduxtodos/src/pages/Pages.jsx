import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Editodo from './Editodo'

import Homepage from './Homepage'

import Singletodo from './Singletodo'




const Pages = () => {
  return (
    
    <Routes>

        <Route path ="/" element={
        
      <Homepage />
       
  
        
        }>
            
        </Route>
<Route path ="/todo/:id" element={<Singletodo/>}>

</Route>
<Route path ="/todo/:id/edit" element={<Editodo />}>

</Route>


    </Routes>
  )
}

export default Pages