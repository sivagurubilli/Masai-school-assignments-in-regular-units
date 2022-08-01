import {legacy_createStore,compose,applyMiddleware} from "redux"
import { reducer } from "./reducer"


const cmiddle =(store)=>(next)=>(action)=>{
    if( typeof action ==="function"){
        return action(store.dispatch)
    }else if(typeof action === "object"){
        return next(action)
    }
}


const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose
export const store = legacy_createStore(reducer,composeEnhancers(applyMiddleware(cmiddle)))