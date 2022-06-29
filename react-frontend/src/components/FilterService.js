import React from "react";
import Contact from "./Contact";
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";


const FilterService = ({ contacts, filterBy, filterMethod, filterValue }) => {
  let navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  let filtered;

  filtered=contacts;
  
  // if (localStorage.getItem("filtered"))
  //     filtered = localStorage.getItem("filtered");
  // else
  // filtered=contacts;



  // const [token, setToken] = useState(false);
  // const [backup, setBackup] = useState([]);
  // const [filtered, setFiltered] = useState([]);
  // for(let i=0;i<contacts.length;i++){
  //   setFiltered([...filtered, `${contacts[i]}`])
  // }
  // const checkToken = () => {
  //   try {
  //     let token = localStorage.getItem("token");
  //     if (token) {
  //       setToken(true);
  //       return true;
  //     } else {
  //       setToken(false);
  //       return false;
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // const fetchContacts = async () => {
  //   if (checkToken()) {
  //     try {
  //       const res = await fetch("http://localhost:8080/api/contact/get?user=" + localStorage.getItem("user_id"));
  //       const data = await res.json();
  //       // console.log(data);
  //       return data;
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   } else {
  //     alert("Please Login !!!")
  //     navigate("/");

  //   }
  // };

  // useEffect(() => {
  //   const getContacts = async () => {
  //     const serverContacts = await fetchContacts();
  //     setContacts(serverContacts);
  //   };
  //   getContacts();
  //   setBackup(contacts);
  //   setFiltered(contacts);
  //   console.log(filtered);
  //   setLoading(true);
  // }, []);


  if (contacts.length === 0) {
    return (<>{!loading && <div className="loading"><h1>Loading ...</h1></div>}
      {loading && <div className="loading">You have no contacts yet !</div>}
    </>
    )
  }
  else if (!filterBy || !filterMethod) {
    return (<>{!loading && <div className="loading"><h1>Loading ...</h1></div>}{loading && <div>{filtered.map((contact) => (
      <Contact key={contact._id} contact={contact} />))}</div>}</>)
  }
  if (filterBy === "First Name") {
    if (filterMethod === "Includes") {
      filtered = (contacts.filter((contact) => contact.first_name.toLowerCase().includes(filterValue.toLowerCase())));

      localStorage.setItem("filtered",JSON.stringify(filtered));
      

      return (
        <> {localStorage.setItem("filtered", JSON.stringify(filtered))}{!loading && <div className="loading"><h1>Loading ...</h1></div>}{loading && <div>{filtered.map((contact) => (
          <Contact key={contact._id} contact={contact} />))}</div>}
        </>
      );

    }
    else if (filterMethod === "Starts With") {
      filtered = contacts.filter((contact) => contact.first_name.toLowerCase().startsWith(filterValue.toLowerCase())); 
      localStorage.setItem("filtered",JSON.stringify(filtered));
      
      return (
        <> {!loading && <div className="loading"><h1>Loading ...</h1></div>}{loading && <div>{filtered.map((contact) => (
          <Contact key={contact._id} contact={contact} />))}</div>} </>
      );

    }
    else if (filterMethod === "Ends With") {
      filtered = contacts.filter((contact) => contact.first_name.toLowerCase().endsWith(filterValue.toLowerCase())); 
      localStorage.setItem("filtered",JSON.stringify(filtered));
      
      return (
        <> {!loading && <div className="loading"><h1>Loading ...</h1></div>}{loading && <div>{filtered.map((contact) => (
          <Contact key={contact._id} contact={contact} />))}</div>} </>
      );

    }
  }
  if (filterBy === "Last Name") {
    if (filterMethod === "Includes") {

      filtered = contacts.filter((contact) => contact.last_name.toLowerCase().includes(filterValue.toLowerCase())); 
      localStorage.setItem("filtered",JSON.stringify(filtered));
      
      return (
        <> {!loading && <div className="loading"><h1>Loading ...</h1></div>}{loading && <div>{filtered.map((contact) => (
          <Contact key={contact._id} contact={contact} />))}</div>} </>
      );

    }
    else if (filterMethod === "Starts With") {

      filtered = contacts.filter((contact) => contact.last_name.toLowerCase().startsWith(filterValue.toLowerCase())); 
      localStorage.setItem("filtered",JSON.stringify(filtered));
      
      return (
        <> {!loading && <div className="loading"><h1>Loading ...</h1></div>}{loading && <div>{filtered.map((contact) => (
          <Contact key={contact._id} contact={contact} />))}</div>} </>
      );

    }
    else if (filterMethod === "Ends With") {

      filtered = contacts.filter((contact) => contact.last_name.toLowerCase().endsWith(filterValue.toLowerCase())); 
      localStorage.setItem("filtered",JSON.stringify(filtered));
      
      return (
        <> {!loading && <div className="loading"><h1>Loading ...</h1></div>}{loading && <div>{filtered.map((contact) => (
          <Contact key={contact._id} contact={contact} />))}</div>} </>
      );

    }
  }
  if (filterBy === "Phone Number") {
    if (filterMethod === "Includes") {

      filtered = contacts.filter((contact) => contact.phonenumber.toLowerCase().includes(filterValue.toLowerCase())); 
      localStorage.setItem("filtered",JSON.stringify(filtered));
      
      return (
        <> {!loading && <div className="loading"><h1>Loading ...</h1></div>}{loading && <div>{filtered.map((contact) => (
          <Contact key={contact._id} contact={contact} />))}</div>} </>
      );

    }
    else if (filterMethod === "Starts With") {

      filtered = contacts.filter((contact) => contact.phonenumber.toLowerCase().startsWith(filterValue.toLowerCase())); 
      localStorage.setItem("filtered",JSON.stringify(filtered));
      
      return (
        <> {!loading && <div className="loading"><h1>Loading ...</h1></div>}{loading && <div>{filtered.map((contact) => (
          <Contact key={contact._id} contact={contact} />))}</div>} </>
      );

    }
    else if (filterMethod === "Ends With") {

      filtered = contacts.filter((contact) => contact.phonenumber.toLowerCase().endsWith(filterValue.toLowerCase())); 
      localStorage.setItem("filtered",JSON.stringify(filtered));
      
      return (
        <> {!loading && <div className="loading"><h1>Loading ...</h1></div>}{loading && <div>{filtered.map((contact) => (
          <Contact key={contact._id} contact={contact} />))}</div>} </>
      );

    }
  }
  if (filterBy === "Email") {
    if (filterMethod === "Includes") {

      filtered = contacts.filter((contact) => contact.email.toLowerCase().includes(filterValue.toLowerCase())); 
      localStorage.setItem("filtered",JSON.stringify(filtered));
      
      return (
        <> {!loading && <div className="loading"><h1>Loading ...</h1></div>}{loading && <div>{filtered.map((contact) => (
          <Contact key={contact._id} contact={contact} />))}</div>} </>
      );

    }
    else if (filterMethod === "Starts With") {

      filtered = contacts.filter((contact) => contact.email.toLowerCase().startsWith(filterValue.toLowerCase())); 
      localStorage.setItem("filtered",JSON.stringify(filtered));
      
      return (
        <> {!loading && <div className="loading"><h1>Loading ...</h1></div>}{loading && <div>{filtered.map((contact) => (
          <Contact key={contact._id} contact={contact} />))}</div>} </>
      );

    }
    else if (filterMethod === "Ends With") {

      filtered = contacts.filter((contact) => contact.email.toLowerCase().endsWith(filterValue.toLowerCase())); 
      localStorage.setItem("filtered",JSON.stringify(filtered));
      
      return (
        <> {!loading && <div className="loading"><h1>Loading ...</h1></div>}{loading && <div>{filtered.map((contact) => (
          <Contact key={contact._id} contact={contact} />))}</div>} </>
      );

    }
  }
  if (filterBy === "Relationship Status") {
    if (filterMethod === "Includes") {

      filtered = contacts.filter((contact) => contact.relationship_status.toLowerCase().includes(filterValue.toLowerCase())); 
      localStorage.setItem("filtered",JSON.stringify(filtered));
      
      return (
        <> {!loading && <div className="loading"><h1>Loading ...</h1></div>}{loading && <div>{filtered.map((contact) => (
          <Contact key={contact._id} contact={contact} />))}</div>} </>
      );

    }
    else if (filterMethod === "Starts With") {

      filtered = contacts.filter((contact) => contact.relationship_status.toLowerCase().startsWith(filterValue.toLowerCase())); 
      localStorage.setItem("filtered",JSON.stringify(filtered));
      
      return (
        <> {!loading && <div className="loading"><h1>Loading ...</h1></div>}{loading && <div>{filtered.map((contact) => (
          <Contact key={contact._id} contact={contact} />))}</div>} </>
      );

    }
    else if (filterMethod === "Ends With") {

      filtered = contacts.filter((contact) => contact.relationship_status.toLowerCase().endsWith(filterValue.toLowerCase())); 
      localStorage.setItem("filtered",JSON.stringify(filtered));
       return (
        <> {!loading && <div className="loading"><h1>Loading ...</h1></div>}{loading && <div>{filtered.map((contact) => (
          <Contact key={contact._id} contact={contact} />))}</div>} </>
      );

    }
  }
  if (filterBy === "latitue") {
    if (filterMethod === "Includes") {

      filtered = contacts.filter((contact) => contact.latitude.toLowerCase().includes(filterValue.toLowerCase())); 
      localStorage.setItem("filtered",JSON.stringify(filtered));
      
      return (
        <> {
          <div>{filtered.map((contact) => (
            <Contact key={contact._id} contact={contact} />))}</div>} </>
      );

    }
    else if (filterMethod === "Starts With") {
      filtered = contacts.filter((contact) => contact.latitude.toLowerCase().startsWith(filterValue.toLowerCase())); 
      localStorage.setItem("filtered",JSON.stringify(filtered));
      
      return (
        <> {!loading && <div className="loading"><h1>Loading ...</h1></div>}{loading && <div>{filtered.map((contact) => (
          <Contact key={contact._id} contact={contact} />))}</div>} </>
      );

    }
    else if (filterMethod === "Ends With") {
      filtered = contacts.filter((contact) => contact.latitude.toLowerCase().endsWith(filterValue.toLowerCase())); 
      localStorage.setItem("filtered",JSON.stringify(filtered));
      
      return (
        <> {!loading && <div className="loading"><h1>Loading ...</h1></div>}{loading && <div>{filtered.map((contact) => (
          <Contact key={contact._id} contact={contact} />))}</div>} </>
      );

    }
  }
  if (filterBy === "longitude") {
    if (filterMethod === "Includes") {
      filtered = contacts.filter((contact) => contact.longitude.toLowerCase().includes(filterValue.toLowerCase())); 
      localStorage.setItem("filtered",JSON.stringify(filtered));
      
      return (
        <> {!loading && <div className="loading"><h1>Loading ...</h1></div>}{loading && <div>{filtered.map((contact) => (
          <Contact key={contact._id} contact={contact} />))}</div>} </>
      );

    }
    else if (filterMethod === "Starts With") {
      filtered = contacts.filter((contact) => contact.longitude.toLowerCase().startsWith(filterValue.toLowerCase())); 
      localStorage.setItem("filtered",JSON.stringify(filtered));
      
      return (
        <> {!loading && <div className="loading"><h1>Loading ...</h1></div>}{loading && <div>{filtered.map((contact) => (
          <Contact key={contact._id} contact={contact} />))}</div>} </>
      );

    }
    else if (filterMethod === "Ends With") {
      filtered = contacts.filter((contact) => contact.longitude.toLowerCase().endsWith(filterValue.toLowerCase())); 
      localStorage.setItem("filtered",JSON.stringify(filtered));
      
      return (
        <> {!loading && <div className="loading"><h1>Loading ...</h1></div>}{loading && <div>{filtered.map((contact) => (
          <Contact key={contact._id} contact={contact} />))}</div>} </>
      );

    }
  }




};

export default FilterService;