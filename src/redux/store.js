import { combineReducers } from "redux";
import { applyMiddleware } from "redux";
import { createStore } from "redux";
import thunk from "redux-thunk";

import { EmployeeReducer } from "./EmployeeReducer";

const rootReducer = combineReducers({
  employee: EmployeeReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export { store };
