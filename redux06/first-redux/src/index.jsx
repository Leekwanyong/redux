import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import store, { persistor } from "./rudux/store.js";
import { PersistGate } from "redux-persist/integration/react";
import TodoApp from "./components/TodoApp.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <TodoApp />
            </PersistGate>
        </Provider>
    </React.StrictMode>
);
