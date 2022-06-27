import React from "react";
import Contact from "./Contact";
import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import FilterForm from "./FilterForm";
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



return(<>
{<FilterForm contacts={contacts}/>}
</>)
}
  export default Contacts;