import { combineReducers } from "redux";
import reducerfavorite from '../Store/Reducer/reducerfavorite';
import reducercolor from '../Store/Reducer/reducercolor'



export default  combineReducers({
     
    favorite:reducerfavorite,
   

  })