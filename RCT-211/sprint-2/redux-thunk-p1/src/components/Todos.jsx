import React from 'react'
import { useEffect } from 'react'

import { useDispatch,useSelector } from 'react-redux'
import { getTodos } from '../redux/action'
import axios from 'axios'
import Addtodo from './Addtodo'
import Todolist from './Todolist'


const Todos = () => {

const dispatch = useDispatch();
  const todos = useSelector(state=>state.todos)
    


    useEffect(()=>{
      if(todos.length === 0|| todos == "undefined"){

      
      dispatch(getTodos())
      }
    },[])
  
  return (
    <div>Todos

     
      <br />
      <Addtodo />
      <Todolist todos={todos} />
    </div>
  )
}

export default Todos