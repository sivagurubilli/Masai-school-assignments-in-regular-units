

import * as types from "./actiontypes";

const getTodosRequest =()=>{
  return {
    type:types.GET_TODOS_REQUEST,

  }
}

const getTodosSuccess =(payload)=>{
    return {
      type:types.GET_TODOS_REQUEST,
      payload
      
    }
  }
  const getTodosFailure =()=>{
    return {
      type:types.GET_TODOS_REQUEST,
    }
    }

    const addTodosRequest =()=>{
      return {
        type:types.GET_TODOS_REQUEST,
    
      }
    }
    
    const addTodosSuccess =(payload)=>{
        return {
          type:types.GET_TODOS_REQUEST,
          
        }
      }
      const addTodosFailure =()=>{
        return {
          type:types.GET_TODOS_REQUEST,
          
        }
  }
  
  export {getTodosFailure,getTodosRequest,getTodosSuccess,addTodosFailure,addTodosRequest,addTodosSuccess}