import React from "react";
import { useState } from "react";
import Map from "./Map";
import { useNavigate } from "react-router-dom";
const AddContact = () => {
  let navigate = useNavigate();
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [relationship_status, setRelationshipStatus] = useState("");
  const [location, setLocation] = useState("");
  const [visibleMap, setVisibleMap] = useState(false);
  var axios = require('axios');



  const onAddContact = (e) => {
    e.preventDefault();
    if (!firstname || !lastname || !phonenumber || !email || !relationship_status || !localStorage.getItem("lat") || !localStorage.getItem("lang")) {
      alert("Please fill missing fields !");
      return;
    }
    // var loc = location.split(",");
    // console.log(loc);
    var data = JSON.stringify({
      "first_name": firstname,
      "last_name": lastname,
      "phonenumber": phonenumber,
      "email": email,
      "relationship_status": relationship_status,
      "latitude": localStorage.getItem("lat"),
      "longitude":localStorage.getItem("lang"),
      "user": localStorage.getItem("user_id")
    });


    var config = {
      method: 'post',
      url: 'http://localhost:8080/api/v1/contact/add',
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization' : 'Bearer '+localStorage.getItem("token")
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        navigate("/get_contacts");
      })
      .catch(function (error) {
        alert("Failed to add contact ! Try again !")
      });
    setFirstName("");
    setLastName("");
    setPhoneNumber("");
    setEmail("");
    setRelationshipStatus("");
    localStorage.removeItem("lang");
    localStorage.removeItem("lat");
  };
  return (
    <>
      {<form className="signup-form" onSubmit={onAddContact}>

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
          {/* <input
            type="text"
            placeholder={"Enter Location"}
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
            onClick={(e)=>{
              
            }            
            }
          /> */}

      <Map/>
        </div>

        <input type={"submit"} value="Add" className="btn btn-block" />
      </form>}
    </>);


}


export default AddContact;