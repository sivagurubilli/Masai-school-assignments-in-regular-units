

import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate,useLocation } from 'react-router-dom'

const Requiredauth = ({children}) => {
    const location = useLocation()

    const isAuth = useSelector(state=>state.Authreducer.isAuth)
  
    if( !isAuth){
  return <Navigate to="/login" state={{from:location}} />
  }
  
    return children;
}

export default Requiredauth