import React from 'react'
import { useEffect } from 'react'
import axios from "axios"

import { useDispatch,useSelector } from 'react-redux'
import { getTodosFailure, getTodosSuccess,getTodosRequest } from '../redux/action'
import Todoinput from './Todoinput'
const Todos = () => {
const dispatch = useDispatch()
const todos1  = useSelector(state=>state.todos)
    useEffect(()=>{
      if(todos1?.length==0){
        getTodos()
      }
    },[])
console.log(todos1)

    const getTodos=()=>{
        dispatch(getTodosRequest())
        axios.get("/todos").then((r)=>dispatch(getTodosSuccess(r.data)))
        .catch((e)=>dispatch(getTodosFailure(e)))
    }
  return (
    <div>Todos
<Todoinput getTodos ={getTodos}/>

      {todos1.map((e)=>{
        return <div>{e.task}</div>
      })}
    </div>
  )
}

export default Todos