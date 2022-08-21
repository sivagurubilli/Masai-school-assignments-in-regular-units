

import React from 'react'
import "./style.css"
import {Todo} from "../model"
import Singletodo from './Singletodo';

interface Props{
    todos:Todo[];
     settodos: React.Dispatch<React.SetStateAction<Todo[]>>

}


const Todolist:React.FC<Props> = ({todos,settodos}:Props) => {
  return (
    <div className='todos'>
     {todos.map((t)=>(
    <Singletodo  todo={t} key={t.id}
    todos={todos}
    settodos={settodos}
    />
     ))}
     </div>
  )
}

export default Todolist