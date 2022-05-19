import { createStore, combineReducers } from "redux";
import todoReducer from "./reducers/Todo.reducer";


const rootReducer = combineReducers({
  todoReducer,
});

export const store = createStore(rootReducer);