import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate,Navigate} from 'react-router-dom'
import {useSelector} from "react-redux"
import styled from 'styled-components'
import { login } from '../redux/Authreducer/action'

import {useEffect} from "react"
const Login = () => {

  const [email,setemail] = useState("eve.holt@reqres.in")
  const [password,setpassword] = useState("")
 
const dispatch = useDispatch()
const navigate = useNavigate()
const location = useLocation()
const comingFrom = location.state?.from?.pathname || "/"


const token = useSelector((store)=>store.Authreducer.token.token)

const token1 = localStorage.getItem("token")


useEffect(()=>{
    const token1 = localStorage.getItem("token")



},[])



  const handlesubmit=(e)=>{
e.preventDefault()

if(email && password){
 dispatch(login({email,password}))
 .then((r)=>{
   
    localStorage.setItem("token",r.payload.token)

    if(token1 === r.payload.token){
      navigate(comingFrom,{replace:true})
    }
  
  })

}
  }
  return (
    <LoginWrapper>

      <form onSubmit={handlesubmit}>
        <div>
<label>user email</label>
<input  type ="email"
value= {email} onChange={(e)=>setemail(e.target.value)}
/>
        </div>
        <div>
<label>user password</label>
<input type ="password"
value ={password} onChange={(e)=>setpassword(e.target.value)}
/>
        </div>
        <button>Login</button>
      </form>



      </LoginWrapper>
  )
}

export default Login

const LoginWrapper = styled.div`
display:flex;
width:300px;
flex-direction:column;
align-items:center;
margin:auto;


`;