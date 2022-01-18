import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./home.css";
function Home() {
  var history = useHistory();
  return (
    <div class="home">
      <h1>Welcom {history.location.state}</h1>
    </div>
  );
}
export default Home;
