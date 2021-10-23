import {combineReducers, createStore} from "redux";
import shopReducer from "./shop-reducer";

const reducers = combineReducers({
    shop: shopReducer
})

const store = createStore(reducers)

export default store