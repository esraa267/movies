import { useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import axios from "axios";
function FavMovies() {
  const selector = useSelector((state) => state.favorite);
  return (
    <div>
       <div className="container">
      <div className="row">
        <div className="d-flex justify-content-between"></div>
      {selector.map((index) => {
         console.log(index);
        return (
              <div className="card col-3 m-5" key={index.id}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${index.poster_path}`}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{index.original_title}</h5>
                   
    
                  </div>
                  </div>
          
        );
      })}
    </div>
    </div>
    </div>
  );
}
export default FavMovies;
