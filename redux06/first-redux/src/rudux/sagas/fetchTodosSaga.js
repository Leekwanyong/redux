import { put, delay, takeEvery, teatLatest } from "redux-saga/effects";
import { fetchTodosFailed, fetchTodosRequested, fetchTodosSucceeded } from "../actions/fetchTodosAction";
function* fetchTodos() {
    try {
        const data = yield delay(3000, [`서버로부터 받아온 할 일 ${new Date().toLocaleString()}`]);
        yield put(fetchTodosSucceeded(data));
    } catch (error) {
        yield put(fetchTodosFailed(error));
    }
}

function* fetchTodosSaga() {
    // yield takeEvery(fetchTodosRequested, fetchTodos);
    yield teatLatest(fetchTodosRequested, fetchTodos);
}

export default fetchTodosSaga;
