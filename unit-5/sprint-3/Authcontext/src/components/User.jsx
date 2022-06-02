import React, { useContext } from 'react'
import {Authcontext} from '../context/Authcontext'
import { useState } from 'react'
import axios from 'axios'


const User = () => {

const {isauth,toggleauth} = useContext(Authcontext)
const [ reguser,setuser] = useState({})

const handlechange =(e)=>{
  const {name,value} = e.target
setuser({
  ...reguser,
  [name] :value
})

}

const handlesubmit =async(e)=>{
  e.preventDefault()
  const {data} = await axios.post('https://reqres.in/api/register',
  reguser
  );
  if(data.token) {
    setuser(data)
    toggleauth()
  }
}

  return (
    <div>
        


        <h3>login user</h3>
          <form onSubmit ={handlesubmit}>

 <input  
 
    type ="text"
    name="email"
    placeholder='email'
    onChange={handlechange}

/>
<input type="password"
 name="password"
 placeholder='password'
 onChange={handlechange} />


<button>login</button>
{isauth ?(
  <>
  <p>Login sttus: yes</p>
  <p> token :{reguser.token}</p>
  </>
    


):(
  <p>login staus:no</p>
)}

          </form>



    </div>
  )
}

export default User