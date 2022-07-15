

import {legacy_createStore,combineReducers,composeEnhancers,compose, applyMiddleware
}from "redux"


import {reducer as Authreducer } from "./authreducer"
import {reducer as Appreducer} from "./appreducer"
import {thunk} from "redux-thunk"

const composeEnhancers =typeof
 window === "object" && window.

_REDUX_DEVTOOLS_EXTENSION_COMPOSE_ ?  window.

_REDUX_DEVTOOLS_EXTENSION_COMPOSE_({

}) :compose;
const rootreducer = combineReducers({Appreducer,Authreducer});
const store = legacy_createStore(rootreducer,composeEnhancers(applyMiddleware(thunk)))

export default store

