
import * as types from "./actionTypes"
import axios from "axios"

const getcountry =()=>(dispatch)=>{
     dispatch({type:types.GET_COUNTRIES_REQUEST})
    return axios.get("http://localhost:8080/countries").then((r)=>{
        
     dispatch({type:types.GET_COUNTRIES_SUCCESS,payload:r.data})})
    .catch((e)=>{
        dispatch({type:types.GET_COUNTRIES_FAILURE})})
}

const deletecountry=(id)=>(dispatch)=>{
   dispatch({type:types.DELETE_COUNTRY_REQUEST})

   return axios.delete(`http://localhost:8080/countries/${id}`).then((r)=>{
    dispatch({type:types.DELETE_COUNTRY_SUCCESS,payload:id})
   }).catch((e)=>{
    dispatch({type:types.DELETE_COUNTRY_FAILURE})
   })
}
const editcountry=(id)=>(dispatch)=>{
    
}
export {getcountry,deletecountry,editcountry}