import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import useTimeout from './Hooks/useTimeout'

function App() {
  const ready = useTimeout(5000)
  return (
    <div className="App">
     
         <h1>Timeout</h1>
         <div>{ready ? "ready -- false":"ready--true"}</div>
         <div>{}</div>
    </div>
  )
}

export default App
