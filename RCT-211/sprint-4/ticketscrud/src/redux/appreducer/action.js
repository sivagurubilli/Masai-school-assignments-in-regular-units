
import * as types from "./actiontypes";
import axios from "axios"

export const gettasks=dispatch=>{
    dispatch({type:types.GET_TASKS_REQUEST})
    return axios.get("http://localhost:5000/tasks").then(r=>{
        dispatch({
            type:types.GET_TASKS_SUCCESS,payload:r.data})
         } ).catch(e=>{
        dispatch({type:types.GET_TASKS_FAILURE,payload:e})


})
}
