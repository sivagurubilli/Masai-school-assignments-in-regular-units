// NOTE: use this store variable to create a store.

import {legacy_createStore,combineReducers,applyMiddleware,compose} from "redux"
import {reducer as appreducer} from "./reducer"
import thunk from "redux-thunk"


const rootreducer=combineReducers({appreducer})

const composeEnhancers = window.REDUX_DEVTOOLS_EXTESION_COMPOSE_ || compose;


export const store = legacy_createStore(rootreducer,composeEnhancers(applyMiddleware(thunk)))

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}
