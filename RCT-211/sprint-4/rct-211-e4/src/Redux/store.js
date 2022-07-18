// NOTE: use this store variable to create a store.

import {compose,legacy_createStore,applyMiddleware,combineReducers} from "redux"
import thunk from "redux-thunk"

import {reducer as countryreducer} from "./reducer"
const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE_||compose;
const rootreducer = combineReducers({countryreducer})

export const store = legacy_createStore(rootreducer,composeEnhancers(applyMiddleware(thunk)));

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}
