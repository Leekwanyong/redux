import { addTodoActionCreator, removeTodoActionCreator } from "../ducks/todoDuck";

const TODO_MAX_COUNT = 3;

function addTodoThunkActionCreator(text) {
    return async function addTodoThunk(dispatch, getState) {
        const state = getState();

        if (state.todo.length < TODO_MAX_COUNT) {
            dispatch(addTodoThunkActionCreator("아이템 추가중..."));
            setTimeout(() => {
                dispatch(removeTodoActionCreator());
                dispatch(addTodoActionCreator(text));
            }, 3000);
        } else {
            dispatch(addTodoActionCreator("최대 개수 초과!"));
            setTimeout(() => {
                dispatch(removeTodoActionCreator());
            }, 3000);
        }
    };
}

export default addTodoThunkActionCreator;
