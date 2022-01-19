import React, { useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import AddFavoriteMovie from "./Store/Action/actionfavorite";
import ShowMovies from "./Store/Action/actionmovies";
import FavIcon from "./favicon";
import RemoveFavoriteMovie from "./Store/Action/actionremove";
import { useDispatch, useSelector } from "react-redux";
import {countercontext}from "./Context/countercontext"
function Movies() {
  const selector = useSelector((state) => state.favorite);
  const movies = useSelector((state) => state.movies);
  const {counter,setcounter} = useContext(countercontext)
  var param = useParams();
  const dispatch = useDispatch();
  /* useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?`, {
        params: {
          page: param.page,
          api_key: "f680c31171e9ae5ac360c64f3bc0110b",
        },
      })
      .then((res) => {
        setmovies(res.data.results);
      });
  }, []);*/
  useEffect(() => {
    dispatch(ShowMovies(param.page, "f680c31171e9ae5ac360c64f3bc0110b"));
  });
  const redirect = (e) => {
    if (param.page > 0) {
      if (e.target.name == "next") {
        ++param.page;
      } else {
        --param.page;
      }
    } else {
      param.page = 1;
    }
  };

  const FavoriteMovie = (movie) => {
    if (selector.length > 0) {
      selector.find((x) => x.id == movie.id)
        ? dispatch(RemoveFavoriteMovie(movie))
        : dispatch(AddFavoriteMovie(movie));
    } else {
      dispatch(AddFavoriteMovie(movie));
    }
    
  };
  setcounter(selector.length)
  return (
    <div className="container">
      <div className="row">
        <h4>Movies</h4>
        <div className="d-flex justify-content-between">
          <button
            className="btn btn-warning"
            name="prev"
            onClick={(e) => {
              redirect(e);
            }}
          >
            Prev
          </button>
          <button
            className="btn btn-warning"
            name="next"
            onClick={(e) => {
              redirect(e);
            }}
          >
            Next
          </button>
        </div>
        {movies.map((movie) => {
          return (
            <div className="card col-3 m-5" key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{movie.original_title}</h5>
                <Link to={`/details/${movie.id}`}> GO To</Link>
                {selector?.find((m) => m.id == movie.id) ? (
                  <FavIcon
                    color="text-warning"
                    movie={movie}
                    addtofav={FavoriteMovie}
                  />
                ) : (
                  <FavIcon color="" movie={movie} addtofav={FavoriteMovie} />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Movies;
