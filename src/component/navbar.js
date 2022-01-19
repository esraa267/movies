import React, { useContext } from "react";
import { Link } from "react-router-dom";
import{ countercontext} from "./Context/countercontext"
const Navbar = () => {
  //const setQuery = (e) => {};
const {counter,setcounter} = useContext(countercontext)
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fs-4 py-3 fixed-top">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarColor02">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link text-white " to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white " to={`/movies/${1}`}>
                Movies
              </Link>
            </li>
            <li className="nav-item position-relative">
              <Link className="nav-link text-white " to="/favorites">
                Favorites
              </Link>
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {counter}
              </span>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-sm-2"
              type="text"
              placeholder="Search"
              onChange={(e) => {}}
            />
            <button className="btn btn-secondary m-2 my-sm-0" type="submit">
              Login
            </button>
            <button className="btn btn-secondary m-2 my-sm-0 " type="submit">
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
