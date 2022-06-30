

import * as types from './actionTypes'


const initialstate ={
    isAuth :false,
    token:"",
    isLoading:false,
    isError:false
}


const reducer =(state = initialstate,action) =>{
    const {type,payload} = action;
    switch(type){

        case types.LOGIN_BOOKS_REQUEST:
            return {
                ...state,
                isLoading:true,
                isError:false
            }

            case types.LOGIN_BOOKS_SUCCESS:
                return{
                    ...state,
                    isLoading:false,
                    isAuth:true,
                    token:payload,
                }

                case types.LOGIN_BOOKS_FAILURE:
                    return{
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