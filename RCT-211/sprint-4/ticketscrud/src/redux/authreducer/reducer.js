import { getlocaldata, savelocaldata } from "../../utils/localstorage";
import * as types from "./actiontypes"


const initilState ={
    isAuth:getlocaldata("token")?true: false,
    token: getlocaldata("token") || "",
    isLoading:false,
    isError:false
}

 export const  reducer =(state= initilState,action)=>{
const {type,payload} = action;

switch(type){
case types.REGISTER_REQUEST:
    return {...state,isLoading:true};
    case types.REGISTER_SUCCESS:
        return {...state,isLoading:false};
        case types.RREGISTER_FAILURE:
            return {...state,isLoading:false,isError:true};
            case types.LOGIN_REQUEST:
    return {...state,isLoading:true};
    case types.LOGIN_SUCCESS:
        savelocaldata("token",payload)
        return {...state,isLoading:false,isAuth:true,token:payload};
        case types.LOGIN_FAILURE:
            return {...state,isLoading:false,isError:true,isAuth:false};
            
    default:
        return state
}

   
}

