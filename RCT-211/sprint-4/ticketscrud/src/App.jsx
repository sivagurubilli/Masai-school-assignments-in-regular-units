import { useState } from 'react'
import './App.css'
import { Container } from '@chakra-ui/react'
import Mainroutes from './pages/Mainroutes'
 // https://masai-api-mocker.herokuapp.com/
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Container minWidth ={"6xl"}>
     <Mainroutes />
     </Container>
      
      </div>
  )
}

export default App
