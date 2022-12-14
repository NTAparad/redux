import hobbyReducer from "./hobby";
import {combineReducers} from "@reduxjs/toolkit";
import userReducer from "./user"
import {Type} from "../types/Type";


const rootReducer = combineReducers<Type>({
    hobby: hobbyReducer,
    user: userReducer,
})

export default rootReducer