

import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { addTodosSuccess,addTodosFailure,addTodosRequest, getTodosFailure } from '../redux/action'
import axios from "axios"
const Todoinput = () => {
   const dispatch = useDispatch()
  
  const [task,settask] = useState("")
  const handleadd =()=>{
    const payload ={
      task:task,status:false
    }
    dispatch(addTodosRequest())
    axios.post("/todos",payload)
    .then(r=>dispatch(addTodosSuccess(r.data)))
   
.catch(e=>dispatch(addTodosFailure(e)))

  }
  
  
    return (
    <div>Todoinput
<input  value ={task} onChange={(e)=>settask(e.target.value)}  />
<button onClick={handleadd}  >add todos</button>



    </div>
  )
}

export default Todoinput