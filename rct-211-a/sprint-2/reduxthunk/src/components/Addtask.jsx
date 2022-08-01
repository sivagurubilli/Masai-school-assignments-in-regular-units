

import React from 'react'
import { useState } from 'react'
import { addtask } from '../redux/action'
import {useDispatch} from "react-redux"
const Addtask = () => {
const dispatch = useDispatch()
    const [ctask,settask] = useState("")

    


    const addtask1=()=>{
        const payload ={
            title :ctask,
            status:false
        }
        settask("")
        dispatch(addtask(payload))
       
    }
  return (
    <div>
  <input type="text"
  placeholder='add todos'
  value ={ctask}
  onChange={(e)=>settask(e.target.value)}
   />
  <button onClick={addtask1}>add task</button>


    </div>
  )
}

export default Addtask