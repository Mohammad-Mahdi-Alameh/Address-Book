import React from "react";
import Contact from "./Contact";
import { useState } from "react";
import Button from "./Button";
const Contacts = ({ contacts }) => {
  // const [filter, setFilter] = useState('All');
  // const FILTER_MAP = {
  //   All: () => true,
  //   ByName: contact => contact.last_name.startsWith('t2'),
  // };
  // const FILTER_NAMES = Object.keys(FILTER_MAP);
  // const filterList = FILTER_NAMES.map(name => (
  //   <Button key={name} text={name}/>
  // ));
function filterFirstName_start(value){
  return(
  contacts.filter(contact => contact.first_name.startsWith(value)).map(filteredContact => (
    <Contact
    key={filteredContact._id}
    contact={filteredContact}
    />)));
}
function filterFirstName_end(value){
  return(
  contacts.filter(contact => contact.first_name.endsWith(value)).map(filteredContact => (
    <Contact
    key={filteredContact._id}
    contact={filteredContact}
    />)));
}
function filterFirstName_includes(value){
  return(
  contacts.filter(contact => contact.first_name.includes(value)).map(filteredContact => (
    <Contact
    key={filteredContact._id}
    contact={filteredContact}
    />)));
}
function filterLastName_start(value){
  return(
  contacts.filter(contact => contact.last_name.startsWith(value)).map(filteredContact => (
    <Contact
    key={filteredContact._id}
    contact={filteredContact}
    />)));
}
function filterLastName_end(value){
  return(
  contacts.filter(contact => contact.last_name.endsWith(value)).map(filteredContact => (
    <Contact
    key={filteredContact._id}
    contact={filteredContact}
    />)));
}
function filterLastName_includes(value){
  return(
  contacts.filter(contact => contact.last_name.includes(value)).map(filteredContact => (
    <Contact
    key={filteredContact._id}
    contact={filteredContact}
    />)));
}
 
function filterhphonenumber_start(value){
  return(
  contacts.filter(contact => contact.phonenumber.startsWith(value)).map(filteredContact => (
    <Contact
    key={filteredContact._id}
    contact={filteredContact}
    />)));
}
function filterphonenumber_end(value){
  return(
  contacts.filter(contact => contact.phonenumber.endsWith(value)).map(filteredContact => (
    <Contact
    key={filteredContact._id}
    contact={filteredContact}
    />)));
}
function filterphonenumber_includes(value){
  return(
  contacts.filter(contact => contact.phonenumber.includes(value)).map(filteredContact => (
    <Contact
    key={filteredContact._id}
    contact={filteredContact}
    />)));
}
    return(<> 
     {filterFirstName_includes("t2")}
    
  
      </>
);
}
  export default Contacts;