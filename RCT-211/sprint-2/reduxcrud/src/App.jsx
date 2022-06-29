import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from './components/Navbar'
import Mainroutes from './pages/Mainroutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Navbar />
     <Mainroutes />
    </div>
  )
}

export default App
