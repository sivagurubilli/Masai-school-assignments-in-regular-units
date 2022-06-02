import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Feeds from './pages/Feeds'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
<Navbar/>
     <Routes>
       <Route path ="" element={<Home/>}/>
   <Route path ="/login" element={<Login/>}/>
   <Route path ="/feeds" element={<Feeds/>} />
   
   
     </Routes>
    
    </div>
  )
}

export default App
