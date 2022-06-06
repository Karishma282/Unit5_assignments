import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import {store} from "./Redux/store"
import React from "react";


import App from "./App";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    // <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
             <App />
            </Provider>
        </BrowserRouter>
    // </React.StrictMode>
    
);