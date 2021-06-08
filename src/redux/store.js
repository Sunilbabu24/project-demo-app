import { combineReducers } from "redux";
import { applyMiddleware } from "redux";
import { createStore } from "redux";
import thunk from "redux-thunk";

import { LeaveReducer } from "./LeaveReducer";

const rootReducer = combineReducers({
  leave: LeaveReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export { store };
