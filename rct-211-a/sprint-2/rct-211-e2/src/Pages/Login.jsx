import React from "react";
import { useState } from "react";

const Login = () => {
const [email,setemail]= useState("")
const [password,setpassword] = useState("")

const handlesubmit=(e)=>{
e.preventDefault()
if(email && password){
  dispatch(login({email,password})).then((r)=>{
    if(r.type===)
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
          Loading
        </button>
      </form>
    </div>
  );
};

export default Login;
