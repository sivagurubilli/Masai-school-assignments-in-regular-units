import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Tasks from './components/Tasks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Tasks />
    </div>
  )
}

export default App
