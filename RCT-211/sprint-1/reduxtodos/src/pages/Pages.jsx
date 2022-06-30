import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Requiredauth from '../components/Requiredauth'
import Homepage from './Homepage'
import Login from './Login'
import Singletodo from './Singletodo'




const Pages = () => {
  return (
    
    <Routes>

        <Route path ="/" element={
        <Requiredauth>
      <Homepage />
        </Requiredauth>
  
        
        }>
            
        </Route>
<Route path ="/todo/:id" element={<Singletodo/>}>

</Route>

<Route path ="login" element={
  <Login/>
}>

</Route>
    </Routes>
  )
}

export default Pages