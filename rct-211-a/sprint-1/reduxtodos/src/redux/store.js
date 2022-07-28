import {compose ,legacy_createStore,applyMiddleware, combineReducers } from "redux"

import thunk from "redux-thunk"
import { reducer  as todoreducer} from "./todoreducer/reducer"
import {reducer as Authreducer}  from "./Authreducer/reducer"

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
const rootReducer = combineReducers({todoreducer,Authreducer})
const store =legacy_createStore(rootReducer,
    
    composeEnhancers(applyMiddleware(thunk)));

export {store}