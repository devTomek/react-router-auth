import { combineReducers } from "redux";
import simpleReducer from "./simpleReducer";
import apiReducer from "../api/reducer";

export default combineReducers({
	simpleReducer,
	apiReducer
});
