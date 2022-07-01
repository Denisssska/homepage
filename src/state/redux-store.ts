import {applyMiddleware, combineReducers, legacy_createStore} from "redux";

import  thunk  from "redux-thunk";


export type StoreType= typeof legacy_createStore;
export type StateAppType = ReturnType<typeof reducersBox>
let reducersBox = combineReducers({


})

let store = legacy_createStore(reducersBox,applyMiddleware(thunk))


export default store