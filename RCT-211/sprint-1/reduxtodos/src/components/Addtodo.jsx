

import axios from 'axios'
import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { addTodoFailure, addTodoRequest, addTodoSuccess } from '../redux/todoreducer/action'

const Addtodo = () => {
    const [todo,settodo] = useState("")
 const dispatch = useDispatch()
    const addtodo =(payload)=>{
dispatch(addTodoRequest())
axios.post("/todos",payload).then(r=>dispatch(addTodoSuccess(r.data)))
   .catch(e=>dispatch(addTodoFailure(e))) 


}
    const handleAdd =()=>{
    if(todo){
        const payload = {task:todo,status:false}
      addtodo(payload)
      settodo("")
   
    }
  }
  
    return (
    <div>
        
        <h2>Addtodo</h2>
        <input
        
        type="text"
        value={todo}
        onChange ={(e)=>settodo(e.target.value)}
        placeholder='add todo here...'/>
   <button onClick={handleAdd}>Add</button>
   
    </div>
  )
}

export default Addtodo