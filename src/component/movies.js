import React, { useEffect, useReducer, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import AddFavoriteMovie from "./Store/Action/actionfavorite";
import FavIcon from "./favicon";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
function Movies() {
  const [movies, setmovies] = useState([]);
  const selector= useSelector((state) => state.favorite);
  const [favmovie, setfavmovie] = useState([]);
  var param = useParams();
  useEffect(() => {
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
  }, []);
 
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
  };
  const dispatch = useDispatch();
  const FavoriteMovie = (movie) => {
    dispatch(AddFavoriteMovie(movie));
    
  };
  
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
           {console.log("second"+selector)}
          return ( 
            <div className="card col-3 m-5" key={movie.id}>
             <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{movie.original_title}</h5>
                <Link to={`/details/${movie.id}`}> GO To</Link>
                {(selector.indexOf(movie)>=0)
                ?<FavIcon color="text-warning" movie={movie} addtofav={FavoriteMovie}/>
                :<FavIcon color="" movie={movie} addtofav={FavoriteMovie}/> }
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Movies;
