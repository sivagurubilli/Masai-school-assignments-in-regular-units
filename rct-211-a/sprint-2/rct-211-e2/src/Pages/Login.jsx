import React from "react";
import { useState } from "react";
import { login } from "../Redux/AuthReducer/action";
import { LOGIN_SUCCESS } from "../Redux/AuthReducer/actionTypes";
import {useDispatch} from "react-redux"
import {useLocation,useNavigate} from "react-router-dom"

const Login = () => {
const [email,setemail]= useState("eve.holt@reqres.in")
const [password,setpassword] = useState("")
const dispatch = useDispatch()
const location = useLocation()
const coming = location.state?.from?.pathname|| "/"
const navigate = useNavigate()
const handlesubmit=(e)=>{
e.preventDefault()
if(email && password){
  dispatch(login({email,password})).then((r)=>{
    if(r.type===LOGIN_SUCCESS){
      navigate(coming,{replace:true})
    }
  })
}
}
  return (
    <div>
      <h2>LOGIN</h2>
      <form onSubmit={handlesubmit}>
        <div>
          <label>User Email</label>
          <br />
          <input data-testid="login-email" value={email}
          onChange ={(e)=>setemail(e.target.value)}/>
        </div>
        <div>
          <label>User Password</label>
          <br />
          <input data-testid="login-password" value ={password}
          onChange={(e)=>setpassword(e.target.value)}
          />
        </div>
        <button type="submit" data-testid="login-submit" 
        
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
