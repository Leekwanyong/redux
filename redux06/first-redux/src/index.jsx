import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import store, { persistor } from "./rudux/store.js";
import TodoAppContainer from "./rudux/containers/TodoAppContainer.js";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <TodoAppContainer />
            </PersistGate>
        </Provider>
    </React.StrictMode>
);
