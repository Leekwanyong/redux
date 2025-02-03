import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import store from "./rudux/store.js";
import TodoAppContainer from "./rudux/containers/TodoAppContainer.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <TodoAppContainer />
        </Provider>
    </React.StrictMode>
);
