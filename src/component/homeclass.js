/*import React, { useEffect, useReducer, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import AddFavoriteMovie from "./Store/Action/actionfavorite";
import FavIcon from "./favicon";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
class HomeClass extends React.Component(){
    constructor(){
super()
    }
    render(){
        console.log(this.props)
return(<>

<div className="container">
      <div className="row">
        <h4>Movies</h4>
        <div className="d-flex justify-content-between">
          <button
            className="btn btn-warning"
            name="prev"
            onClick={(e) => {
            }}
          >
            Prev
          </button>
          <button
            className="btn btn-warning"
            name="next"
            onClick={(e) => {
            }}
          >
            Next
          </button>
        </div>
        {this.props.movies.map((movie) => {
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


</>)
    }
    
}
const mapStateToProps=(state)=>{
    return{
        movies:state
    }
}
export default connect(mapStateToProps)(HomeClass)*/