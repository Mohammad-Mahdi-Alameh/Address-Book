import React from "react";
import { useState, useEffect } from 'react';
import './App.css';
import { MapContainer, TileLayer, useMap } from 'react-leaflet'

import Contacts from "./components/Contacts";
import SignupForm from './components/SignupForm';
import AddContact from './components/AddContact';
import Navbar from './components/Navbar';
import ViewContact from './components/ViewContact';
import Contact from './components/Contact';
import { BrowserRouter, Routes, Route, useNavigate,Link } from "react-router-dom";
import GetContacts from "./components/GetContacts";
import Map from "./components/Map";
const App = () => {
  let navigate=useNavigate();
  let token=localStorage.getItem("token");
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
 
  const onLogin = (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert("Please fill missing fields !");
      return;
    }
    axios(config)
      .then(function (response) {
        // console.log(response.data);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user_id", response.data._id);
        navigate("/get_contacts");
      })
      .catch(function (error) {
        alert("Wrong Username or password !")
      });

    setUsername("");
    setPassword("");
    // setShowCreateSurvey(!showCreateSurvey);
  };
  return (
    <>
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<><form className="login-form" onSubmit={onLogin}>
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

      <Link to={"user/signup"}className="link">Create Account</Link>
      <input type={"submit"} value="Login" className="btn btn-block" />
    </form></> 
        }
          
        ></Route>
        <Route path="user/signup" element={<SignupForm />}></Route>
        <Route path="/add_contact" element={<AddContact />}></Route>
        <Route path="/get_info" element={<ViewContact />}></Route>
        <Route path="/get_contacts" element={<GetContacts />}></Route>
        <Route path="/Map" element={<Map/>}></Route>
        
      </Routes>
    </div>
  </>
);


}


export default App;