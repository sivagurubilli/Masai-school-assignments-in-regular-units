import React from 'react'
import {useState} from "react"
import { useContext } from 'react'
import { AuthContext } from '../context/Authcontext'
import { useNavigate } from 'react-router-dom'

const Login = () => {
const [logincreds,setlogincreds] = useState({})
const {login} = useContext(AuthContext)
const navigate= useNavigate()
const handleChange =(e)=>{
  
const {name,value} = e.target;
setlogincreds({
  ...logincreds,
[name]:value
})
}


const handlesubmit =(e)=>{
  e.preventDefault()
  login()
}
  return (
    <div>Login


      <form 
      onSubmit={handlesubmit}
      style={{
        display:"flex",
        flexDirection:"column",
        margin:"auto",
        width:"200px",
        gap:"10px"
      }}>
        <input onChange ={handleChange} name="email" type ="text" palceolder ="email"  />
<input onChange ={handleChange} name="pass" type ="password"  placehlder ="enter password" />
<button type="submit">login</button>

      </form>
    </div>
  )
}

export default Login