import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getTodoListFailure, getTodoListRequest, getTodoListSuccess } from '../redux/todoreducer/action'
import axios from 'axios'
import Addtodo from './Addtodo'
import Todolist from './Todolist'


const Todos = () => {

const dispatch = useDispatch();
const todos = useSelector((store)=>store.todoreducer.todos)
    const getTodos=()=>{
        dispatch(getTodoListRequest())
      axios.get("/todos").then((r)=>{
      
dispatch(getTodoListSuccess(r.data))
    }).catch((e) =>dispatch(getTodoListFailure(e)))
    
    
    
    }


    useEffect(()=>{
      if(todos?.length ===0){
        getTodos()
      }
        
    },[])
   console.log(todos)
  return (
    <div>Todos

     
      <br />
      <Addtodo />
      <Todolist todolists={todos} />
    </div>
  )
}

export default Todos