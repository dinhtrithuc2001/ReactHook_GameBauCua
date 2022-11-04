import { combineReducers, createStore } from "redux";
import BauCuaReducer from './BauCuaReducer'

const RootReducer = combineReducers({
    BauCuaReducer
})

export default createStore(RootReducer)