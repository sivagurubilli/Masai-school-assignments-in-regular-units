import logo from './logo.svg'
import './App.css'
import useTimeout from './Hooks/useTimeout'

function App() {

const ready = useTimeout()


  return (
    <div className="App">
     <h3>timeout</h3>
<div>{ready ? "ready":"not-ready"}</div>
   
   
    </div>
  )
}

export default App
