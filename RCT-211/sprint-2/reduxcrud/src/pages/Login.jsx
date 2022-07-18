import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { login } from '../redux/Authreducer/action'


const Login = () => {

  const [email,setemail] = useState("eve.holt@reqres.in")
  const [password,setpassword] = useState("")
 
const dispatch = useDispatch()
const navigate = useNavigate()
const location = useLocation()
const comingFrom = location.state?.from?.pathname || "/"

  const handlesubmit=(e)=>{
e.preventDefault()

if(email && password){
 dispatch(login({email,password}))
 .then((r)=>{
    if(r.type === "LOGIN_BOOKS_SUCCESS"){
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