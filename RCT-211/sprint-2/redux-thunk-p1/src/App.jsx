import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Addtodo from './components/Addtodo'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Todos />

       
    </div>
  )
}

export default App
