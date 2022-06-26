import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const AddContact = () => {
  let navigate = useNavigate();
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [relationship_status, setRelationshipStatus] = useState("");
  const [location, setLocation] = useState("");
  var axios = require('axios');
  var data = JSON.stringify({
    "first_name":firstname,
    "last_name":lastname,
    "phonenumber": phonenumber,
    "email": email,
    "relationship_status": relationship_status,
    "location": location,
    "user": localStorage.getItem("user_id")
  });

  var config = {
    method: 'post',
    url: 'http://localhost:8080/api/user/register',
    headers: {
      'Content-Type': 'application/json' ,
      'Authorization': 'Bearer '+localStorage.getItem("token")
    },
    data: data
  };

 
  
  const onAddContact = (e) => {
    e.preventDefault();
    if (!firstname || !lastname || !phonenumber || !email || !relationship_status || !location ) {
      alert("Please fill missing fields !");
      return;
    }
    axios(config)
      .then(function (response) {
        console.log(response.data);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user_id", response.data._id);
        navigate("/");
      })
      .catch(function (error) {
        alert("Failed to add user ! Try again !")
      });
    setFirstName("");  
    setLastName("");  
    setPhoneNumber("");
    setEmail("");
    setRelationshipStatus("");
    setLocation("");
  };
  return (
    <>
  <form className="login-form" onSubmit={onAddContact}>

      <div className="form-control">
        <label>First Name</label>
        <input
          type="text"
          placeholder={"Enter First Name"}
          value={firstname}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <label>Last Name</label>
        <input
          type="text"
          placeholder={"Enter Last Name"}
          value={lastname}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        <label>Phone Number</label>
        <input
          type="text"
          placeholder={"Enter Phone Number"}
          value={phonenumber}
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
        />
        <label>Email</label>
        <input
          type="text"
          placeholder={"Enter Email"}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
         <label>Relationship Status</label>
        <input
          type="text"
          placeholder={"Enter Relationship Status"}
          value={relationship_status}
          onChange={(e) => {
            setRelationshipStatus(e.target.value);
          }}
        />
        <label>Location</label>
        <input
          type="text"
          placeholder={"Enter Location"}
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        />
       
      </div>

      <input type={"submit"} value="Add" className="btn btn-block" />
    </form>
    </>);


}


export default AddContact;