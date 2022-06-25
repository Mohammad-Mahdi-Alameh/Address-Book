import React from "react";
import { useState } from "react";
import { findRenderedDOMComponentWithTag } from "react-dom/test-utils";
import input from "./Input";
const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  var axios = require('axios');
  var data = JSON.stringify({
    "username": username,
    "password": password
  });

  var config = {
    method: 'post',
    url: 'http://localhost:8080/api/user/login',
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };

  const signup = async (survey) => {
    const res = await fetch("http://localhost:8080/api/user/register", {
      method: "POST",
      body: survey,
    });
    console.log("hi");

    const data = await res.json();
    localStorage.setItem("token", data.token);
    localStorage.setItem("user_id", data.user_id);
  };

  const logout = async () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    // window.location.reload(false);
  };
  const onLogin = (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert("Please fill missing fields !");
      return;
    }
    axios(config)
      .then(function (response) {
        console.log(response.data);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user_id", response.data._id);
      })
      .catch(function (error) {
        alert("Wrong Username or password !")
      });

    setUsername("");
    setPassword("");
    // setShowCreateSurvey(!showCreateSurvey);
  };
  return (
    <form className="login-form" onSubmit={onLogin}>
      <div className="form-control">
        <label>Username</label>
        <input
          type="text"
          placeholder={"Enter Your Username"}
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder={"Enter Your Password"}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />


      </div>
      <a href="">Create new Account</a>

      <input type={"submit"} value="Login" className="btn btn-block" />
    </form>);


}


export default LoginForm;