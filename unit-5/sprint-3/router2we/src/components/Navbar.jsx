import React, { useContext } from 'react'
import "../App.css"
import {Link,useNavigate} from "react-router-dom"
import Login from '../pages/Login'
import { AuthContext } from '../context/Authcontext'



const Navbar = () => {
const {isauth,logout} = useContext(AuthContext)
const navigate = useNavigate()


    const hnadlelog=()=>{

        if(isauth){
            logout()
            navigate('/')
          

        }else{
            navigate('/login')
        }

    };



  return (
      <>
    <div style={{display:"flex"}}>
        
        Navbar----

        <Link to ="">Home</Link>
 <Link to ="/feeds" >Feeds</Link>
 <button   onClick ={hnadlelog}>
     
     
     {isauth ?"logout" :"login"}</button>




    </div>
   
    </>

  )
}

export default Navbar