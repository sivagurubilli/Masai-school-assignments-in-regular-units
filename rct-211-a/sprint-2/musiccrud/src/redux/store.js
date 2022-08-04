import {applyMiddleware,combineReducers, legacy_createStore,compose} from "redux"

import thunk from "redux-thunk"
import {reducer as Appreducer} from "./Appreducer/reducer"
import {reducer as Authreducer} from "./Authreducer/reducer"

const rootreducer = combineReducers({Appreducer,Authreducer})

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;


export const store =legacy_createStore(rootreducer,composeEnhancers(applyMiddleware(thunk)))