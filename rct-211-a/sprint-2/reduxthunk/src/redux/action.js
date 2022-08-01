import * as types from "./acctiontypes"

import axios from "axios"

export const gettask =(dispatch)=>{


    dispatch({type:types.GET_TODOS_REQUEST})
   return axios.get("http://localhost:8080/todos").then((r)=>{
        dispatch({type:types.GET_TODOS_SUCCESS,payload:r.data})
    }).catch((e)=>{
        dispatch({type:types.GET_TODOS_FAILURE})
    })
}

export const addtask =(payload)=>(dispatch)=>{
    dispatch({type:types.ADD_TODOS_REQUEST})
    return axios.post("http://localhost:8080/todos",payload).then((r)=>{
        dispatch({type:types.ADD_TODOS_SUCCESS ,payload:r.data})
    }).then(()=>dispatch(gettask)).catch((e)=>{
        dispatch({type:types.ADD_TODOS_FAILURE})
    })
}