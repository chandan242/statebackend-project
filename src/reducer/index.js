import {combineReducers} from "@reduxjs/toolkit";

import commonReducer from "../reducer/slice/commonSlice"
import mapReducer from "./slice/mapSlice";

const rootReducer  = combineReducers({
    common: commonReducer,
    map: mapReducer,
})

export default rootReducer