import { connect } from "react-redux";
// import { addTodoActionCreator, removeAllActionCreator, removeTodoActionCreator } from "../actions";
// import { addTodoActionCreator, removeAllActionCreator, removeTodoActionCreator } from "../ducks/todoDuck";
// import {
//     addTodo as addTodoActionCreator,
//     removeTodo as removeAllActionCreator,
//     removeAll as removeTodoActionCreator,
// } from "../actions/todoAction";
import {
    addTodo as addTodoActionCreator,
    removeTodo as removeAllActionCreator,
    removeAll as removeTodoActionCreator,
} from "../slices/todoSlice";
import TodoApp from "../../components/TodoApp";
import addTodoThunkActionCreator from "../thunks/addTodoThunk";
import { fetchTodosRequested as fetchTodosRequestedActionCreator } from "../actions/fetchTodosAction";

function mapStateToProps(state, ownProps) {
    return {
        todoItems: [...state.todo, ...state.fetchTodo.data],
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        addTodo: (text) => {
            // dispatch(addTodoActionCreator(text));
            // dispatch(addTodoThunkActionCreator(text));
            dispatch(addTodoActionCreator(text));
        },
        removeTodo: () => {
            dispatch(removeTodoActionCreator());
        },
        removeAll: () => {
            dispatch(removeAllActionCreator());
        },
        triggerAsyncFunction: (asyncFunction) => {
            dispatch(asyncFunction);
        },
        fetchTodo: () => {
            dispatch(fetchTodosRequestedActionCreator());
        },
    };
}

const TodoAppContainer = connect(mapStateToProps, mapDispatchToProps)(TodoApp);

export default TodoAppContainer;
