import e from 'express'
import React from 'react'
import styled from 'styled-components'
import { login } from '../redux/Authreducer/action'

const Login = () => {

  const [email,setemail] = useStae()
  const [password,setpassword] = useState()
  

  const handlesubmit=(e)=>{
e.preventDefault()

if(email && password){
}
  }
  return (
    <LoginWrapper>

      <form onSubmit={handlesubmit}>
        <div>
<label>user email</label>
<input  type ="email"
value= "email"
/>
        </div>
        <div>
<label>user password</label>
<input type ="password"
value
/>
        </div>
        <button>Loogin</button>
      </form>



      </LoginWrapper>
  )
}

export default Login

const LoginWrapper = styled.div`
display:flex;
width:300px;
flex-direction:column;


`