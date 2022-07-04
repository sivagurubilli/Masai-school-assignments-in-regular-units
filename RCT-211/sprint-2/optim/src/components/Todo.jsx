


import React from 'react'
import { useState } from 'react'
import Todoitem from './Todoitem'
import { v4 as uuid } from 'uuid';
import { useCallback } from 'react';
const initialState = [
{id:1,state:false,title:"Task1"},
{id:2,state:false,title:"Task2"},

{id:3,state:false,title:"Task3"}

]

const Todo = () => {

    const [todos,settodos] = useState(initialState)
  
  
  
   const [currenttodo,setcurrenttodo] = useState("")
     
   const todoHandler =(e)=>{
    setcurrenttodo(e.target.value)
   }
   const addtodo =()=>{
  const payload={id:uuid(),status:false,title:currenttodo}
  settodos([...todos,payload])
  setcurrenttodo("")

}
  const togglestatus=useCallback((id)=>{
    let newtodolist = todos.map((e)=>
        e.id===id ? {...e,status:!e.status}:e
    )
    settodos(newtodolist)
  },[todos])

   const deletetodo = useCallback((id)=>{
      let newtodos1 =  todos.filter((e)=>
        e.id  !==id
      )
      settodos(newtodos1)
   },[todos])
   
   return (
    <div>Todo
<input  value={currenttodo} onChange={todoHandler}/>
<button onClick={addtodo}>add</button>
{todos.length && todos.map((e)=>(
    <Todoitem key ={e.id} {...e}
    togglestatus={togglestatus} 
    deletetodo={deletetodo}  />
))}
    </div>
  )
}

export default Todo