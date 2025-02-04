import { combineReducers } from "redux";
// import todoReducer from "../actions/todoAction";
import fetchTodosSaga from "../sagas/fetchTodosSaga";
import todoReducer from "../slices/todoSlice";
const rootReducer = combineReducers({
    todo: todoReducer,
    fetchTodos: fetchTodosSaga,
});

export default rootReducer;
