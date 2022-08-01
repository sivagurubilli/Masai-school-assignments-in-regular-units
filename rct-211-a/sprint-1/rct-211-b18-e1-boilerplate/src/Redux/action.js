// Write the action object creators in this file


import * as types from "./actionTypes"

const getprofilereq=()=>{
    return {
        type:types.GET_PROFILE_DETAILS_REQUEST
    }
}

const getprofilesucc=(payload)=>{
    return {
        type:types.GET_PROFILE_DETAILS_SUCCESS,payload
    }
}
const getprofilrfailure=()=>{
    return {
        type: types.GET_PROFILE_DETAILS_FAILURE
    }
}

export {getprofilereq,getprofilesucc,getprofilrfailure}