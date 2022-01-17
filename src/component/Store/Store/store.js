import { createStore } from "redux";
import combineReducers from '../combine';
const store = createStore(combineReducers)

    
export default store;