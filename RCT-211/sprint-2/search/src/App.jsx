import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Searchbar from './component/Searchbar'

function App() {
  const [count, setCount] = useState(0)
const [query,setquery] = useState()
const [loading,setloading] = useState(false)
 const [suggetions,setsuggetions]= useState() 


return (
    <div className="App">
      <Searchbar />
    </div>
  )
}

export default App
