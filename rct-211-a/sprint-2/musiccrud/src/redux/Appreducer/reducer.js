import * as types from './actiontypes'
const initstate = {
  musicrec :[],
isLoading:false,
isError:false
}


 export const reducer =(state = initstate,action)=>{
  const {type,payload}= action;

    switch(type){
       case types.GET_MUSIC_REC_REQUEST:
        return {
            ...state,
            isLoading:true,
            isError:false
        }
        case types.GET_MUSIC_REC_SUCCESS:
            return {
                ...state,
                musicrec:payload,
                isLoading:false,
                isError:false
            }
            case types.GET_MUSIC_REC_FAILURE:
                return{
                    ...state,
                    isLoading:false,
                    isError:true
                }
        default:
   return state
    }
}