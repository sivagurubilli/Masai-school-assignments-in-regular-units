import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <Todos />
       
      </header>
    </div>
  )
}

export default App
