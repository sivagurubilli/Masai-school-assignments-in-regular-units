
import * as types from "./actiontypes"
import axios from "axios"


 export const getmusicrec = (params)=>(dispatch)=>{
    dispatch({type:types.GET_MUSIC_REC_REQUEST})
 axios.get("http://localhost:8080/albums",params)
.then((r)=>{
    
    return dispatch({type:types.GET_MUSIC_REC_SUCCESS,payload:r.data})
}).catch((e)=>{
   return  dispatch({type:types.GET_MUSIC_REC_FAILURE,payload:e})
})


}


export const updatemusicrec =(id,payload)=>(dispatch)=>{
   dispatch({type:types.UPDATE_MUSIC_REC_REQUEST});
   return axios.patch(`http://localhost:8080/albums/${id}`,payload).then(r=>{
      dispatch({type:types.UPDATE_MUSIC_REC_SUCCESS})
   }).catch(e=>dispatch({type:types.UPDATE_MUSIC_REC_FAILURE}))
}