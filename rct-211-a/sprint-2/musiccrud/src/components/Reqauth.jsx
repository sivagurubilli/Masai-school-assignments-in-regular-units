

import React from 'react'
import { useNavigate ,Navigate,useLocation } from 'react-router-dom'
import {useSelector} from "react-redux"
const Reqauth = ({children}) => {
   const location = useLocation()

    const auth = useSelector(store=>store.Authreducer.isAuth)
 
    if(!auth){
        return <Navigate 
        to ="/login" state ={{from:location}} replace />
    }
   return children;
}

export default Reqauth