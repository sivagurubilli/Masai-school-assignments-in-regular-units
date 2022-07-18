import {compose ,legacy_createStore,applyMiddleware, combineReducers } from "redux"

import thunk from "redux-thunk"
import { reducer  as Appreducer} from "./Appreducer/reducer"
import {reducer as Authreducer}  from "./Authreducer/reducer"

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
const rootReducer = combineReducers({Appreducer,Authreducer})
const store =legacy_createStore(rootReducer,
    
    composeEnhancers(applyMiddleware(thunk)));

export {store}