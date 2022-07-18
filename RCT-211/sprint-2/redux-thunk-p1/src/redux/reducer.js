import * as types from "./actiontypes"
const initialstate ={
    todos1:[],
    isLoading:false,
    isError:false,
}


const reducer =(state = initialstate,action) =>{
    const {type,payload} = action;
    switch(type){

        case types.GET_TODO_LIST_REQUEST:
            return{
...state,
isLoading:true,
isError:false,

            }
            case types.GET_TODO_LIST_SUCCESS:
                return {
                    ...state,
                    todos1:payload,
                isLoading:false,
                isError:false,
                }
                case types.GET_TODO_LIST_FAILURE:
                    return{
                        ...state,
isLoading:false,
isError:true,
                    }


                    case types.ADD_TODO_REQUEST:
                        return{
            ...state,
            isLoading:true,
            isError:false,
            
                        }
                        case types.ADD_TODO_SUCCESS:
                            let newtodo = [...state.todos1,payload]
                            return {
                                ...state,
                                todos1:newtodo,
            isLoading:false,
            isError:false,
                            }
                            case types.ADD_TODO_FAILURE:
                                return{
                                    ...state,
            isLoading:false,
            isError:true,
                                }

 default :
 return state

                            }
                
}

export {reducer}