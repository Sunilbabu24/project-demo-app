import { combineReducers } from "redux";
import { createStore } from "redux";

import { EmployeeReducer } from "./EmployeeReducer";

const rootReducer = combineReducers({
  employee: EmployeeReducer,
});

const store = createStore(rootReducer);
export { store };
