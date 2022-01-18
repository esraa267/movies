import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Movies from "./component/movies";
import Favorites from "./component/favorites";
import Details from "./component/details";
import Form from "./component/form";
import Home from "./component/home";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/movies/:page" exact component={Movies} />
          <Route path="/favorites" exact component={Favorites} />
          <Route path="/details/:id" exact component={Details} />
          <Route path="/details/:MovieName" exact component={Details} />
          <Route path="/form" exact component={Form} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
