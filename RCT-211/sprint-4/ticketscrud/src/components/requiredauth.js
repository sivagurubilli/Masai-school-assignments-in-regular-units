import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom";

const ReqAuth =({children})=>{
    let location = useLocation();
    let isAuth = useSelector(state=>state.Authreducer.isAuth)
   
   const navigate = useNavigate()
    if(!isAuth){
 navigate("/login")

}
return children

}


export default ReqAuth

