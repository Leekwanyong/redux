import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "./reducers";
import thunkMiddleware from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import { persistStore, persistReducer } from "redux-persist";
import sessionStorage from "redux-persist/lib/storage/session";
import { version } from "react";
import createMigrate from "redux-persist/es/createMigrate";
// import storage from "redux-persist/lib/storage";
// import asyncFunctionMiddleware from "../middlewares/asyncFunctionMiddleware";

// local
// const persistContig = {
//     key: "root",
//     storage: storage,
// };

const migration = {
    1: (state) => {
        return {
            ...state,
            fetchTodos: {
                ...state.fetchTodos,
                extraData: undefined,
            },
        };
    },
    2: (state) => {
        return {
            ...state,
            fetchTodos: {
                ...state.fetchTodos,
                extraData: null,
            },
        };
    },
};

// session
const persistContig = {
    key: "root",
    storage: sessionStorage,
    // Migration
    version: 1,
    migration: createMigrate(migration, { done: false }),
};

const persistedReducer = persistReducer(persistContig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(persistedReducer, composeEnhancers(thunkMiddleware, sagaMiddleware));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
export default store;
