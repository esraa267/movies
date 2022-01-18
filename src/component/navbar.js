import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  //const setQuery = (e) => {};
  
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarColor02">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <Link class="nav-link text-white " to="/home">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link text-white " to={`/movies/${1}`}>
                Movies
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link text-white " to="/favorites">
                Favorites
              </Link>
            </li>
            
          </ul>
          <form class="d-flex">
            <input
              class="form-control me-sm-2"
              type="text"
              placeholder="Search"
              onChange={(e) => {
               
              }}
            />
            <button class="btn btn-secondary m-2 my-sm-0" type="submit">
              Login
            </button>
            <button class="btn btn-secondary m-2 my-sm-0 " type="submit">
              <Link className="text-white text-decoration-none" to="/form">
                Signin
              </Link>
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
