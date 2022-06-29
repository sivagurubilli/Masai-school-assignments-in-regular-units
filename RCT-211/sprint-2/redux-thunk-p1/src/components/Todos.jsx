import React from 'react'
import { useEffect } from 'react'

import { useDispatch,useSelector } from 'react-redux'
import { getTodos } from '../redux/action'
import axios from 'axios'
import Addtodo from './Addtodo'
import Todolist from './Todolist'


const Todos = () => {

const dispatch = useDispatch();
 
    useEffect(()=>{
    
      
      dispatch(getTodos())
    
    },[])
  
  

  return (
    <div>Todos

     
     
      <Addtodo />
      <Todolist />
    </div>
  )
}

export default Todos