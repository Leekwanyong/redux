import { connect } from "react-redux";
// import { addTodoActionCreator, removeAllActionCreator, removeTodoActionCreator } from "../actions";
// import { addTodoActionCreator, removeAllActionCreator, removeTodoActionCreator } from "../ducks/todoDuck";
import {
    addTodo as addTodoActionCreator,
    removeTodo as removeAllActionCreator,
    removeAll as removeTodoActionCreator,
} from "../actions/todoAction";
import TodoApp from "../../components/TodoApp";

function mapStateToProps(state, ownProps) {
    return {
        todoItems: state.todo,
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        addTodo: (text) => {
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
    };
}

const TodoAppContainer = connect(mapStateToProps, mapDispatchToProps)(TodoApp);

export default TodoAppContainer;
