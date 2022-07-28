import React ,{useState,useEffect} from 'react'
import {useParams,useNavigate} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { editTodofailure, editTodorequest, editTodosuccess } from '../redux/todoreducer/action'
import axios from "axios"
const Editodo = () => {

const {id }= useParams()
const [currenttodo,setcurrenttodo] = useState({})
const [currtask,setcurrtask] = useState("")
const navigate = useNavigate()
    const todos = useSelector(state=>state.todoreducer.todos)
const dispatch = useDispatch()
const[ist,setist] = useState(false)


const editnow =()=>{
   setist(true)
}
const gotohome=()=>{
    navigate("/")
}
const handlesubmit =(e,g)=>{
     
dispatch(editTodorequest())
return axios.patch(`todos/${e.id}`,{task:g}).then(r=>{
   
    dispatch(editTodosuccess(r.data))})
.catch(e=>dispatch(editTodofailure(e)))




    


}




useEffect(()=>{
    let currenttodo = todos.find((e)=>e.id===Number(id));

currenttodo && setcurrenttodo(currenttodo)

},[todos,id])



  return (
    <div>


<button onClick={gotohome}>home</button>
<br />
{currenttodo.task}
<br />
{ist=== true ?
<div><input 

onChange={e=>setcurrtask(e.target.value)} />
<button onClick={()=>handlesubmit(currenttodo,currtask)}>submit</button>
</div>

:
<button onClick={editnow}>editnow</button>
}
    </div>
  )
}

export default Editodo