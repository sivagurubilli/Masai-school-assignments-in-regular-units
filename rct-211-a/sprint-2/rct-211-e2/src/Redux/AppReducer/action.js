//Write the ActionCreator functions here



import * as types from "./actionType"
import axios from "axios"


export const getwatches=(params)=>(dispatch)=>{
   dispatch({type:types.GET_WATCHES_DATA_REQUEST})
 axios.get("http://localhost:8080/watches",params).then((r)=>{
    return dispatch({type:types.GET_WATCHES_DATA_SUCCESS,payload:r.data})
   }).catch((e)=>{
    dispatch({type:types.GET_WATCHES_DATA_FAILURE})
   })
}