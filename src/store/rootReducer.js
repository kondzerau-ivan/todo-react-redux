import { combineReducers } from "redux";

import { todos } from "./todos/todos-reduces";

export const rootReducer = combineReducers({
  todos,
});