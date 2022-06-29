

import * as types from "./actiontypes"
import axios from "axios"



const getTodos =()=> (dispatch) =>{
  dispatch({type:types.GET_TODO_LIST_REQUEST});
  axios.get("/todos").then((r)=>
  
  dispatch({type:types.GET_TODO_LIST_SUCCESS,payload:r.data})).
  catch((e)=>dispatch({type:types.GET_TODO_LIST_FAILURE}))

}


const addTodoRequest =()=>{
    return {type:types.ADD_TODO_REQUEST};

}

const addTodoSuccess =(payload)=>{
    return {type:types.ADD_TODO_SUCCESS,payload};
    
}

const addTodoFailure =()=>{
    return {type:types.ADD_TODO_FAILURE};
    
}









export {
addTodoRequest,addTodoFailure,addTodoSuccess,getTodos}