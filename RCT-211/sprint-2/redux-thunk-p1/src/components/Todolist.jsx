import React from 'react'
import { useDispatch,useSelector } from 'react-redux'

const Todolist = ({todos}) => {
  


  return (
    <div>
{todos.map((e)=>{
  return<h1>{e.task}</h1>
})}


    </div>
  )
}

export default Todolist