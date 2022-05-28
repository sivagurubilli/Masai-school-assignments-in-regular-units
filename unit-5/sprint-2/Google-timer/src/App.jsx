import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Stopwatch from './components/Stopwatch'
import Counter from './components/Counter'
import Timer from './components/Timer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Counter />
     <Timer />
    </div>
  )
}

export default App
