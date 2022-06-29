import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const SignupForm = () => {
  const navigate=useNavigate();
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  var axios = require('axios');
  var data = JSON.stringify({
    "first_name":firstname,
    "last_name":lastname,
    "username": username,
    "password": password
  });

  var config = {
    method: 'post',
    url: 'http://localhost:8080/api/v1/user/register',
    headers: {
      'Content-Type': 'application/json'
      
    },
    data: data
  };

 
  
  const onSignUp = (e) => {
    e.preventDefault();
    if (!firstname || !lastname || !username || !password) {
      alert("Please fill missing fields !");
      return;
    }
    axios(config)
      .then(function (response) {
        console.log(response.data);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user_id", response.data._id);
        navigate("/get_contacts");
      })
      .catch(function (error) {
        alert("Username exist ! Please Login !")
      });
    setFirstName("");  
    setLastName("");  
    setUsername("");
    setPassword("");
  };
  return (
    <>
  <form className="signup-form" onSubmit={onSignUp}>

      <div className="form-control">
        <label>First Name</label>
        <input
          type="text"
          placeholder={"Enter Your First Name"}
          value={firstname}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <label>Last Name</label>
        <input
          type="text"
          placeholder={"Enter Your Last Name"}
          value={lastname}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
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

      <input type={"submit"} value="SignUp" className="btn btn-block" />
    </form>
    </>);


}


export default SignupForm;