import axios from "axios";
import { useParams } from "react-router-dom";
function ShowMovies(page, key) {
  return (dispatch) => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?`, {
        params: {
          page: page,
          api_key: key,
        },
      })
      .then((res) =>
        dispatch({ type: "SET_MOVIES", payload: res.data.results })
      )
      .catch((error) => console.log(error));
  };
}

export default ShowMovies;
