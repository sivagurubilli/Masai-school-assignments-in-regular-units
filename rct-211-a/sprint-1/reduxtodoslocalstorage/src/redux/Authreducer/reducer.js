

import * as types from './actionTypes'

import { savedata,loaddata } from '../../utils/Localstor';
const initialstate ={
    isAuth :loaddata("isauth")||false,
    token:loaddata("token")||"",
    isLoading:false,
    isError:false
}


const reducer =(state = initialstate,action) =>{
    const {type,payload} = action;
    switch(type){

        case types.LOGIN_USER_REQUEST:
            return {
                ...state,
                isLoading:true,
                isError:false
            }

            case types.LOGIN_USER_SUCCESS:
                let newtoken =payload
                savedata("token",newtoken)
                savedata("isauth",true)
                return{
                    ...state,
                    isLoading:false,
                    isAuth:true,
                    token:payload,
                }

                case types.LOGIN_USER_FAILURE:
                    return{
                        ...state,
                        isLoading:false,
                        isError:true,
                        isAuth:false,
                        token:""

                    }
        default:
            return state
    }
}

export {reducer}