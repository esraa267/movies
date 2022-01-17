import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';


const Details = () => {
  const params = useParams();
  const [movie, setmovie] = useState({});

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=f680c31171e9ae5ac360c64f3bc0110b
   `)
      .then((res) => setmovie(res.data))
      .catch((err) => console.log(err));
  }, []);


  return (
    <>
    <div className="container">
    <div className="card">
  <div className="row g-0">
    <div className="col-md-4 mt-3">
      <img src ={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
       className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8 p-5">
      <div classNameName="card-body ">
        <h1 className="card-title">{movie.original_title}</h1>
        <p className="card-text">{movie.overview}</p>
       <button className="btn btn-warning">Watch Movie</button>
      </div>
    </div>
  </div>
</div>
</div>
    </>

  );
};

export default Details;