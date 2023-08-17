import {combineReducers} from "@reduxjs/toolkit";
import thunkMiddleware from 'redux-thunk';
import commonReducer from "../reducer/slice/commonSlice"
import mapReducer from "./slice/mapSlice";
import mapDataReducer from '../reducer/slice/mapDataSlice';

const rootReducer  = combineReducers({
    common: commonReducer,
    map: mapReducer,
    mapData:mapDataReducer
})

export default rootReducer