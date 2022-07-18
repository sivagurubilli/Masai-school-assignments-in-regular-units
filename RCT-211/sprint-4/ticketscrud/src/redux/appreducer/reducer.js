import * as types from "./actiontypes"


const initilState ={
   tasks:[],
    isLoading:false,
    isError:false
}

export const  reducer =(state= initilState,action)=>{
const {type,payload} = action

switch(type){
 
    case types.GET_TASKS_REQUEST:
        return {...state,isLoading:true}
        case types.GET_TASKS_SUCCESS:
            return {...state,isLoading:false,tasks:payload}
            case types.GET_TASKS_FAILURE:
                return {...state,isLoading:false,isError:true}
    default:
        return state
}

   
}
