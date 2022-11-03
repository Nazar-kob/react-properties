import { createStore, combineReducers } from "redux";
import reduserAmount from "./reducers";

const reduser = combineReducers({
    amount: reduserAmount,
});

const store = createStore(reduser)

export default store;
