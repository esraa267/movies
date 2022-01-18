import { combineReducers } from "redux";
import reducerfavorite from "../Store/Reducer/reducerfavorite";
import reducermovies from "../Store/Reducer/reducermovies";

export default combineReducers({
  favorite: reducerfavorite,
  movies: reducermovies,
});
