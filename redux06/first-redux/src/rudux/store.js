import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "./reducers";
import thunkMiddleware from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
// import asyncFunctionMiddleware from "../middlewares/asyncFunctionMiddleware";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeEnhancers(thunkMiddleware, sagaMiddleware));

sagaMiddleware.run(rootSaga);
export default store;
