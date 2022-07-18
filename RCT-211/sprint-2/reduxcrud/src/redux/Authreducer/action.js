import * as types  from "./actionTypes"

import axios from "axios"

const login =(payload) => (dispatch)=>{
   dispatch({type:types.LOGIN_BOOKS_REQUEST})
  return axios({
 method:"post",
    url:"/api/login",
baseURL:"https://reqres.in",
data:payload,}
    ).then((r)=>dispatch({type:types.LOGIN_BOOKS_SUCCESS,payload:r.data}))
   .catch({type:types.LOGIN_BOOKS_FAILURE})
}

export {login}