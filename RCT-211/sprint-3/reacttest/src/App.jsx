import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)
const [ theme,settheme]  = useState("light")
  return (
    <div className="App">
      <h3>current theme is {theme}</h3>
     <Button
     onClick={()=>{
     settheme(theme === "light" ? "dark":"light")}
     }
     >Click me</Button>
    </div>
  )
}

export default App
