// TODO: use this store variable to create a store.

import {legacy_createStore} from "redux"
import { reducer1 } from "../Redux/reducer"

 export const store = legacy_createStore(reducer1);



// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}