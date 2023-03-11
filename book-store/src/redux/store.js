import { combineReducers, createStore } from "redux";
import DashboardReducer from './DashboardReducer';
import CartReducer from "./CartReducer";
import AddressReducer from "./AddressReducer";

const reducer = combineReducers({
    DashboardReducer,
    CartReducer,
    AddressReducer
});

const store = createStore(reducer);

export default store;