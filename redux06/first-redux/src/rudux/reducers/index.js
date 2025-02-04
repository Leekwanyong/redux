import { combineReducers } from "redux";
import todoReducer from "../actions/todoAction";

const rootReducer = combineReducers({
    todo: todoReducer,
});

export default rootReducer;
