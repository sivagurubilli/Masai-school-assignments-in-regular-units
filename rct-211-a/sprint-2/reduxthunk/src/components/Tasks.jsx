
import React from 'react'
import { useEffect,useState } from 'react'
import { gettask } from '../redux/action'
import {useDispatch,useSelector} from "react-redux"
import Addtask from './Addtask'
const Tasks = () => {

 const dispatch = useDispatch()
 const dd = useSelector((store)=>store.todos)
 const il = useSelector((store)=>store.isLoading)

    useEffect(()=>{
 dispatch(gettask)
    },[])


  return (
    <div>
        <Addtask />
        
       { il === true ? "loading":     
<div>{dd.length>0 && dd?.map((e)=>(
    <h3 key = {e.id}>{e.title}</h3>
))}</div>
}

    </div>
  )
}

export default Tasks