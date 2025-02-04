import { combineReducers } from "redux";
import todoReducer from "../actions/todoAction";
import fetchTodosSaga from "../sagas/fetchTodosSaga";

const rootReducer = combineReducers({
    todo: todoReducer,
    fetchTodos: fetchTodosSaga,
});

export default rootReducer;
