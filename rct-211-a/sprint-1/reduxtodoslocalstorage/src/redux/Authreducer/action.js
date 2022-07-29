import * as types  from "./actionTypes"

import axios from "axios"




const loginRequest =()=>{
   return {
      type: types.LOGIN_USER_REQUEST
   }
}
   const loginsuccess =(payload)=>{
      return{
         type: types.LOGIN_USER_SUCCESS,
         payload
      }
   }

   const loginfailure=()=>{
   return {
      type:types.LOGIN_USER_FAILURE
   }
   }


const login =(payload) => (dispatch)=>{
   dispatch({type:types.LOGIN_USER_REQUEST})
  return axios({
 method:"post",
    url:"/api/login",
baseURL:"https://reqres.in",
data:payload,}
    ).then((r)=>(
      
      
    dispatch({type:types.LOGIN_USER_SUCCESS,payload:r.data})))

   .catch({type:types.LOGIN_USER_FAILURE})
}

export {login,loginRequest,loginsuccess,loginfailure}