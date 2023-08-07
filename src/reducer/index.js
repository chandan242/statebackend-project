import {combineReducers} from "@reduxjs/toolkit";

import commonReducer from "../reducer/slice/commonSlice"

const rootReducer  = combineReducers({
    common: commonReducer
})

export default rootReducer