import {compose, legacy_createStore} from "redux"
import { reducer } from "./reducer"


const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
const store = legacy_createStore(reducer,composeEnhancers())

export {store}
