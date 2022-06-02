import React,{useContext} from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../context/Authcontext'
import { useContext } from 'react'

const Feeds = () => {
const navigate = useNavigate()
  const {isauth} = useContext(AuthContext)
  

  if(isauth){
    return (
     children
    )
  }else{
    return <Navigate to ="/login" />
  }
  
  
  
}

export default Feeds