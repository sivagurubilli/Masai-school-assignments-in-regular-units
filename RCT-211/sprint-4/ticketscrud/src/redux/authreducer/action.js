import * as types from "./actiontypes"

import axios from "axios"
export const register =(payload)=>(dispatch)=>{
  dispatch({type:types.REGISTER_REQUEST})

    return axios.post("https://masai-api-mocker.herokuapp.com/auth/register",
    payload).then(r=>
      
      {
      dispatch({type:types.REGISTER_SUCCESS,payload:r.data})
    return types.REGISTER_SUCCESS;
    }
      ).
      catch(e=>{
        dispatch({type:types.RREGISTER_FAILURE,payload:e})
       return types.RREGISTER_FAILURE; 
      })




}


export const login=(params)=>(dispatch)=>{
console.log(params)
  dispatch({type:types.LOGIN_REQUEST});
  return axios.post("https://masai-api-mocker.herokuapp.com/auth/login",params)
  .then((r)=>
  {dispatch({
    type:types.LOGIN_SUCCESS,
    payload:r.data.token })
  return types.LOGIN_SUCCESS;
  }
    ).catch((e)=>
    {dispatch({type:types.LOGIN_FAILURE,
    payload:e})
    return types.LOGIN_FAILURE;
});
    




}