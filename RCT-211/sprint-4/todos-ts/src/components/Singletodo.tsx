import React, { useState } from 'react'
import {Todo} from "../model"
import {AiFillEdit,AiFillDelete} from "react-icons/ai"

import {MdDone} from "react-icons/md"
import Todolist from './Todolist'
type Props ={
    todo:Todo;
    todos:Todo[];
    settodos:React.Dispatch<React.SetStateAction<Todo[]>>
}

const Singletodo = ({todo,todos,settodos}:Props) => {
  
  const [edit,setedit] = useState<boolean>(false);
  const [edittodo,setedittodo] = useState<string>(todo.todo);



  const handledone=(id:number)=>{
    settodos(todos.map((todo)=>todo.id===id?{...todo,isDone:!todo.isDone}:todo)
  )}

  

  const handledelete =(id:number)=>{
  settodos(todos.filter((todo)=>todo.id !==id))
  };
  
  const handleedit= (e:React.FormEvent,id:number)=>{
  e.preventDefault();
  settodos(todos.map((todo)=>(
    todo.id === id ?{...todo,todo:edittodo}:todo
  )))
  setedit(false)


  }
  
  
  return (
    <form className='todossingle' onSubmit={(e)=>handleedit(e,todo.id)}>
  {
    edit ?(
    <input value={edittodo} 
    onChange={(e)=>setedittodo(e.target.value)}
    className="todossingletext"
    />
    ):
        
            todo.isDone?(
                <s className='todossingletext'>{todo.todo}</s>

            ):
            (
                <span className='todossingletext'>{todo.todo}</span>

            )}
        
    
    <div>
        <span className='icon'  onClick={()=>{

            if(!edit && !todo.isDone){
                setedit(!edit)
            }
        }
        }>
            <AiFillEdit />
        </span>

        <span className='icon' onClick={()=>handledelete(todo.id)}>
            <AiFillDelete />
        </span>
        <span className='icon' onClick={()=>handledone(todo.id)}>
            <MdDone />
        </span>
    </div>
    
    </form>
  )
}

export default Singletodo