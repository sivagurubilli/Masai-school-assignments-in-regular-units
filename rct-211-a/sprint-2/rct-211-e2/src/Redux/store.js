// NOTE: use this store variable to create a store.


import {legacy_createStore,applyMiddleware,compose,combineReducers} from "redux"
import {reducer as appreducer} from "./AppReducer/reducer"
import {reducer as authreducer} from "./AuthReducer/reducer"

import thunk from "redux-thunk"

const rootreducer = combineReducers({appreducer,authreducer})

const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE|| compose


const store = legacy_createStore(rootreducer,composeEnhancers(applyMiddleware(thunk)))

export { store };

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}
