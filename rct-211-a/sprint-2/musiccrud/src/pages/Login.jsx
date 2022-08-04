import React,{useState} from 'react'
import {useDispatch} from "react-redux"
import { Navigate, useNavigate,useLocation } from 'react-router-dom';
import { login } from '../redux/Authreducer/action';
import { LOGIN_SUCC } from '../redux/Authreducer/actiontypes';
const Login = () => {

const [email,setemail]= useState("eve.holt@reqres.in");
const [password,setpassword] = useState("")
const navigate = useNavigate()
const dispatch  = useDispatch()
const location = useLocation()
const comingfrom = location.state?.from?.pathname || "/"

const handlesubmit=(e)=>{
    e.preventDefault();
if(email && password){
   dispatch(login({email,password})).then((r)=>{
    if(r.type === LOGIN_SUCC){
        navigate(comingfrom,{replace:true})
    }
   })
}


}



  return (
    <div>Login
<form onSubmit={handlesubmit}>
<div>
    <label>user email</label>
    <input 
    type ="email"
    placeholder='email'
    value ={email}
    onChange ={(e)=>setemail(e.target.value)}
    />
</div>

<div>
    <label>user password</label>
    <input 
    type="password"
    placeholder='password'
    value={password}
    onChange={(e)=>setpassword(e.target.value)}
    />
</div>
<button type ="submit">login</button>
</form>


    </div>
  )
}

export default Login