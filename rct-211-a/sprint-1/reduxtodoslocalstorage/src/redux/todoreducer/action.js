

import * as types from "./actiontypes"


const getTodoListRequest =()=>{
    return {type:types.GET_TODO_LIST_REQUEST};

}

const getTodoListSuccess =(payload)=>{
    return {type:types.GET_TODO_LIST_SUCCESS,payload};
    
}

const getTodoListFailure =()=>{
    return {type:types.GET_TODO_LIST_FAILURE};
    
}

const addTodoRequest =()=>{
    return {type:types.ADD_TODO_REQUEST};

}

const addTodoSuccess =(payload)=>{
    return {type:types.ADD_TODO_SUCCESS,payload};
    
}

const addTodoFailure =()=>{
    return {type:types.ADD_TODO_FAILURE};
    
}



const toggleTodoRequest =()=>{
    return {type:types.TOGGLE_TODO_REQUEST};

}

const toggleTodoSuccess =(payload)=>{
    return {type:types.TOGGLE_TODO_SUCCESS,payload};
    
}

const toggleTodoFailure =()=>{
    return {type:types.TOGGLE_TODO_FAILURE};
    
}




const removeTodoRequest =()=>{
    return {type:types.REMOVE_TODO_REQUEST};

}

const removeTodoSuccess =(payload)=>{
    return {type:types.REMOVE_TODO_SUCCESS,payload};
    
}

const removeTodoFailure =()=>{
    return {type:types.REMOVE_TODO_FAILURE};
    
}


const editTodorequest =()=>{
    return {type:types.EDIT_TODO_REQUEST};
    
}

const editTodosuccess =(payload)=>{
    return {type:types.EDIT_TODO_SUCCESS,payload};
    
}
const editTodofailure =()=>{
    return {type:types.EDIT_TODO_FAILURE};
    
}


export {getTodoListFailure,getTodoListRequest,getTodoListSuccess,editTodofailure,editTodorequest,editTodosuccess,
addTodoRequest,removeTodoRequest,removeTodoSuccess,removeTodoFailure,addTodoSuccess,addTodoFailure,toggleTodoRequest,toggleTodoSuccess,toggleTodoFailure}