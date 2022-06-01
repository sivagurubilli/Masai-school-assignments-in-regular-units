import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Allproducts from './components/Allproducts'
import Product from './components/Product'
import Home from './components/Home'



function App() {

  return (
    <div className="App">
     <Routes>
       <Route path = ""  element ={<Home/>}/>
       <Route path = "/products"  element= {<Allproducts />}/>
       <Route path = "/products/:id"  element = {<Product />}/>
     
     </Routes>
    </div>
  )
}

export default App
