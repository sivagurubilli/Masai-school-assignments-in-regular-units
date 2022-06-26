

import React,{useEffect, useState} from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodoFailure, removeTodoRequest, removeTodoSuccess, toggleTodoFailure, toggleTodoRequest, toggleTodoSuccess } from '../redux/action'
import axios from 'axios'
const Singletodo = () => {
const navigate = useNavigate()
    const todos = useSelector(state=>state.todos)
const dispatch = useDispatch()
  
    const {id} = useParams()
  const [currenttodo,setcurrenttodo] = useState({})


  const toggleStatus = (id,newStatus)=>{
   dispatch(toggleTodoRequest());
   axios.patch(`/todos/${id}`,{status:newStatus})
  .then(r=>dispatch(toggleTodoSuccess(r.data)))
.catch(e=>dispatch(toggleTodoFailure(e)))

};

const removetodo=(id)=>{
    dispatch(removeTodoRequest())
    axios.delete(`/todos/${id}`).then(r=>
       
{

       dispatch(removeTodoSuccess(id))
    navigate("/")
    })
       
.catch((e)=>dispatch(removeTodoFailure(e)))

    }

useEffect(()=>{
    let currenttodo = todos.find((e)=>e.id===Number(id));

currenttodo && setcurrenttodo(currenttodo)

},[todos,id])


console.log(todos)
    return (
    <div>
        
       <h3>{currenttodo.task} {"    "}
       {currenttodo?.status ? "true" : "false"}
       </h3>

       <button onClick={()=>toggleStatus(currenttodo.id,!currenttodo.status)}>Toggle</button>
       
       <button onClick={()=>removetodo(currenttodo.id)}>Remove</button> </div>
  )
}

export default Singletodo