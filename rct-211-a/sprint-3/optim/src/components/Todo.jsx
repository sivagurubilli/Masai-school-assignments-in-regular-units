import React from 'react'
import Todoitems from './Todoitems'
import { useState } from 'react'



const initstate =[
    {id:1,status:false,title:"Task 1"},
    {id:2,status:false,title:"Task 2"},
    {id:3,status:false,title:"Task 3"}
  ];

const Todo = () => {
const [todo,settodo] = useState(initstate)
   const [currenttodo,setcurrenttodo] = useState("")
  

   const handlechange=(e)=>{
  setcurrenttodo(e.target.value)
   }
  
   const handleaddtask =()=>{
    if(currenttodo){
        const payload ={
            id:todo.length+1,
            status:false,
          title:currenttodo
        }
        settodo([...todo,payload])
        setcurrenttodo("")
    }
   }
  
   return (
    <div>
        <h1>todo application</h1>
        <input value ={currenttodo} onChange={handlechange} />
        <button onClick={handleaddtask} >add</button>

{todo.length && todo.map((e)=>{
  return  <Todoitems key ={e.id} {...e} />
})}

    </div>
  )
}

export default Todo