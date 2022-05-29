import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import RegisterForm from './components/Registration'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <RegisterForm />
    </div>
  )
}

export default App
