

import * as types from "./actiontypes"
import axios from "axios"

export const login =(payload  )=>(dispatch)=>{
  dispatch({type:types.LOGIN_REQ});
  return axios({
    method:"post",
    url:"/api/login",
    baseURL:'https://reqres.in',
    data:payload,

  }).then(r=>dispatch({type:types.LOGIN_SUCC,payload:r.data.token})).catch(e=>
    dispatch({type:types.LOGIN_ERR}))
}