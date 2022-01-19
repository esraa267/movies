import React, { useContext } from "react";
import {  useHistory } from "react-router-dom";
import { languagecontext } from "./Context/languagecontext";
import "./home.css";
function Home() {
  const { language, setlanguage } = useContext(languagecontext);
  const togglelanguage = () => {
    setlanguage(language == "en" ? "ar" : "en");
  };
  var history = useHistory();
  return (
    <>
      <div class="home" dir={language == "en" ? "ltr" : "rtl"}>
        <button
          className="btn btn-danger"
          onClick={() => {
            togglelanguage();
          }}
        >
          Change language
        </button>

        <h1>Welcom {history.location.state} in our movies website</h1>
      </div>
    </>
  );
}
export default Home;
