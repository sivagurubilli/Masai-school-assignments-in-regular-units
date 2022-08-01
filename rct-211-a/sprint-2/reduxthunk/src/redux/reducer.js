import * as types from "./acctiontypes"


const initialstate ={
    todos:[],
    isLoading:false,
    isError:false
}

export const reducer =(state =initialstate,action)=>{
    const {type,payload} = action

    switch(type){
        case types.GET_TODOS_REQUEST:
            return{
                ...state,
                isLoading:true,
                isError:false
            }
            case types.GET_TODOS_SUCCESS:
                return {
                    ...state,
                    todos:payload,
                    isLoading:false,
                    isError:false
                }
                case types.GET_TODOS_FAILURE:
                    return{
      ...state,
      isLoading:false,
      isError:true
      
                    }
                    default:
                        return state
    }
}