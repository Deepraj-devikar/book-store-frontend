import { combineReducers, createStore } from "redux";
import BookReducer from './BookReducer';
import CartReducer from "./CartReducer";

const reducer = combineReducers({
    BookReducer,
    CartReducer
});

const store = createStore(reducer);

export default store;