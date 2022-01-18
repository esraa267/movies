import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
var emailExpresion = /^[a-zA-Z][a-zA-Z-0-9._-]+@(gmail)+.(com)$/;
var usernameexp = /^\S*$/;
var passwordexp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
export default function LOGIN() {
  let history = useHistory();

  const [user, setuser] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });
  const [error, seterror] = useState({
    nameerror: null,
    emailerror: null,
    usernameerror: null,
    passworderror: null,
    confirm: null,
  });
  const handelchange = function (e) {
    if (e.target.name == "name") {
      if (e.target.value.length == 0) {
        seterror({ ...error, nameerror: "required" });
        setuser({ ...user, name: "" });
      } else {
        seterror({ ...error, nameerror: "" });
        setuser({ ...user, name: e.target.value });
      }
    } else if (e.target.name == "email") {
      if (e.target.value < 1) {
        seterror({ ...error, emailerror: "required" });
        setuser({ ...user, email: "" });
      } else if (!emailExpresion.test(e.target.value)) {
        seterror({ ...error, emailerror: "Not valid" });
        setuser({ ...user, email: "" });
      } else {
        seterror({ ...error, emailerror: "" });
        setuser({ ...user, email: e.target.value });
      }
    } else if (e.target.name == "username") {
      if (!usernameexp.test(e.target.value)) {
        seterror({ ...error, usernameerror: "Not valid space" });
      } else if (e.target.value < 1) {
        seterror({ ...error, usernameerror: "required" });
      } else {
        seterror({ ...error, usernameerror: "" });
        setuser({ ...user, username: e.target.value });
      }
    } else if (e.target.name == "password") {
      if (e.target.value.length == 0) {
        console.log(e.target.value);
        seterror({ ...error, passworderror: "required" });
      } else if (!passwordexp.test(e.target.value)) {
        seterror({ ...error, passworderror: "Not valid" });
      } else {
        seterror({ ...error, passworderror: "" });
        setuser({ ...user, password: e.target.value });
      }
    } else if (e.target.name == "confirm") {
      if (e.target.value.length < 1) {
        seterror({ ...error, confirm: "required" });
      } else {
        if (user.password == e.target.value) {
          seterror({ ...error, confirm: "valid" });
        } else {
          seterror({ ...error, confirm: " not valid" });
          e.innertext = "";
        }
      }
    }
  };
  const toggle = function () {
    const password = document.querySelector("#password");
    const type =
      password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);

    // toggle the icon
    this.classList.toggle("bi-eye");
  };

  const handelsignin = (e) => {
    e.preventDefault();
    if (
      error.confirm == "valid" &&
      (error.usernameerror &&
        error.nameerror &&
        error.emailerror &&
        error.passworderror) == ""
    ) {
      history.push("/home", user.name);
      console.log(history);
    } else {
    }
  };
  return (
    <>
      <form
        onSubmit={(e) => {
          handelsignin(e);
        }}
      >
        <div className="container mt-5">
          <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-2 col-form-label">
              Name
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                value={user.name}
                name="name"
                className="form-control"
                onChange={(e) => {
                  handelchange(e);
                }}
              />
              <p className="text-danger">{error.nameerror}</p>
            </div>
          </div>
          <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input
                type="email"
                value={user.emaile}
                name="email"
                className="form-control"
                onChange={(e) => {
                  handelchange(e);
                }}
              />
              <p className="text-danger">{error.emailerror}</p>
            </div>
          </div>
          <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-2 col-form-label">
              Username
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                name="username"
                value={user.username}
                className="form-control"
                onChange={(e) => {
                  handelchange(e);
                }}
              />
              <p className="text-danger">{error.usernameerror}</p>
            </div>
          </div>
          <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-2 col-form-label">
              Password
            </label>
            <div class="col-sm-10">
              <input
                id="password"
                type="password"
                class="form-control"
                name="password"
                onChange={(e) => {
                  handelchange(e);
                }}
              />
              <i
                class="bi bi-eye-slash"
                onClick={toggle}
                id="togglePassword"
              ></i>
              <p className="text-danger">{error.passworderror}</p>
            </div>
          </div>
          <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-2 col-form-label">
              Confirm Password
            </label>
            <div class="col-sm-10">
              <input
                type="password"
                class="form-control"
                name="confirm"
                onChange={(e) => {
                  handelchange(e);
                }}
              />
              <p className="text-danger">{error.confirm}</p>
            </div>
          </div>
          <button type="submit" class="btn btn-success mb-3">
            Register
          </button>
        </div>
      </form>
    </>
  );
}
