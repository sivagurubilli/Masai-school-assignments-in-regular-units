import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {


  const [counter,setcounter] = useState(0)
   


 const incrementhandler =()=>{
  axios.post("http://localhost:8080/counter",{value:counter+1}).then(r =>{
    setcounter(r.data.value)
  })
 }
  return (
    <div className="App">
      <h2>count is {counter}</h2>
      <button   className='increment_count' onClick={()=> setcounter(prev=>prev+1)}>incr</button>
      <button className='decrement_count' onClick=
      {incrementhandler}>decr</button>

    </div>
  );
}

export default App;
