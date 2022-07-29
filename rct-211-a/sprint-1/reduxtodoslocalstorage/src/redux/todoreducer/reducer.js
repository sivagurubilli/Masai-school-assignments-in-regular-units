import * as types from "./actiontypes"
import {loaddata,savedata} from "../../utils/Localstor"
const initialState ={
    todos:[],
    isLoading:false,
    isError:false,
}
const reducer =(state = initialState,action) =>{
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
                    todos:payload,
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
                            let newtodo = [...state.todos,payload]
                            return {
                                ...state,
                                todos:newtodo,
            isLoading:false,
            isError:false,
                            }
                            case types.ADD_TODO_FAILURE:
                                return{
                                    ...state,
            isLoading:false,
            isError:true,
                                }




                                case types.TOGGLE_TODO_REQUEST:
                                    return{
                        ...state,
                        isLoading:true,
                        isError:false,
                        
                                    }
                                    case types.TOGGLE_TODO_SUCCESS:
                                       let newtoggletodos = state.todos.map(item=>item.id ===payload.id ? payload :item)
                                    
                                    return {
                                            ...state,
                                            todos:newtoggletodos,
                        isLoading:false,
                        isError:false,
                                        }
                                        case types.TOGGLE_TODO_FAILURE:
                                            return{
                                                ...state,
                        isLoading:false,
                        isError:true,
                                            }



                                            case types.REMOVE_TODO_REQUEST:
                                                return{
                                    ...state,
                                    isLoading:true,
                                    isError:false,
                                    
                                                }
                                                case types.REMOVE_TODO_SUCCESS:
                                                   let lefttodos = state.todos.filter(item=>item.id !== payload)
                                                
                                                return {
                                                        ...state,
                                                        todos:lefttodos,
                                    isLoading:false,
                                    isError:false,
                                                    }
                                                    case types.REMOVE_TODO_FAILURE:
                                                        return{
                                                            ...state,
                                    isLoading:false,
                                    isError:true,
                                                        }
                                case types.EDIT_TODO_REQUEST:
                                    return{
                                        ...state,
                                        isLoading:true,
                                        isError:false,
                                    }
                          case types.EDIT_TODO_SUCCESS:
                            let newtodos1 = state.todos.map(item=>item.id ===payload.id ? payload :item)
                            return{
                                ...state,
                         todos:newtodos1,
                         isError:false,
                         isLoading:false
                            }     
                            
                       case types.EDIT_TODO_FAILURE:
                        return {
                            ...state,
                            isError:true,
                            isLoading:false
                        }     
        default:
return state
        
    }
}

export {reducer}