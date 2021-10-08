import {createStore, combineReducers} from "redux";
import {tasksReducer} from "./reducers/taskReducer";
import {userReducer} from "./reducers/userReducer";
import {composeWithDevTools} from "redux-devtools-extension";

export const store = createStore(combineReducers({
    tasks: tasksReducer,
    user: userReducer
}), composeWithDevTools())