//Create the HOC for protected Routes

import {useSelector} from "react-redux"
import {useNavigate,useLocation,Navigate} from "react-router-dom"


const ReqAuth = ({children}) => {
   const location = useLocation()
   const auth = useSelector((store)=>store.authreducer.isAuth)
   if(!auth){
    return <Navigate to ="/login"
    state = {{from :location}} replace />
   }
   return children
};

export default ReqAuth;
