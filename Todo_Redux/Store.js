import { legacy_createStore as createContext } from "redux";
import { rootReducers } from "./src/reducers/index";

export const store=createContext(
    rootReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)