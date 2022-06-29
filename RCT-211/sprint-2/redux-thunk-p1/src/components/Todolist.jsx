import React from 'react'
import { useDispatch,useSelector } from 'react-redux'

const Todolist = () => {
  
  const todos = useSelector(state=>state.todos1)

  return (
    <div>
{todos.map((e)=>{
 return <h2 key ={e.id}>{e.task}</h2>
})}

    </div>
  )
}

export default Todolist