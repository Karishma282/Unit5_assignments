import { legacy_createStore,
    combineReducers,
    applyMiddleware,
    compose,
 } from "redux";
import thunk from 'redux-thunk';
import CompanyReducer from './company/reducer'
const rootReducer=combineReducers({company:CompanyReducer})
const composeEnhancers=window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store=legacy_createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);
