

import * as types from "./actiontypes";

const getTodosRequest =()=>{
  return {
    type:types.GET_TODOS_REQUEST,

  }
}

const getTodosSuccess =(payload)=>{
    return {
      type:types.GET_TODOS_SUCCESS,
      payload
      
    }
  }
  const getTodosFailure =()=>{
    return {
      type:types.GET_TODOS_FAILURE,
    }
    }

    const addTodosRequest =()=>{
      return {
        type:types.ADD_TODOS_REQUEST,
    
      }
    }
    
    const addTodosSuccess =(payload)=>{
        return {
          type:types.ADD_TODOS_SUCCESS,
          payload
          
        }
      }
      const addTodosFailure =()=>{
        return {
          type:types.ADD_TODOS_FAILURE,
          
        }
  }
  
  export {getTodosFailure,getTodosRequest,getTodosSuccess,addTodosFailure,addTodosRequest,addTodosSuccess}