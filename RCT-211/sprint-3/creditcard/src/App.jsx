import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Pin from "./components/Pin"


function App() {
  const [otp, setotp] = useState("")

  return (
    <div className="App">
    <Pin length ={4} 
    setotphandler ={(value)=>setotp(value)}></Pin>
    
    <h3>the value of otp is {otp}</h3>
    </div>
  )
}

export default App
