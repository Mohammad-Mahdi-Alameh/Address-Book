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
function filterFirstName_start(v){
  return(
  contacts.filter(contact => contact.last_name.startsWith(v)).map(filteredContact => (
    <Contact
    key={filteredContact._id}
    contact={filteredContact}
    />)));
}
function filterFirstName_end(v){
  return(
  contacts.filter(contact => contact.last_name.endsWith(v)).map(filteredContact => (
    <Contact
    key={filteredContact._id}
    contact={filteredContact}
    />)));
}
function filterFirstName_includes(v){
  return(
  contacts.filter(contact => contact.last_name.includes(v)).map(filteredContact => (
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