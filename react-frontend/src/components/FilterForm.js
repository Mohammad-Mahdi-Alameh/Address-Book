import React from "react";
import { useState } from "react";
import Contact from "./Contact";
import Input from "./Input";
const FilterForm = (contacts) => {
    const [filterBy, setFilterBy] = useState("");
    const [filterMethod, setFilterMethod] = useState("");
    const [filterValue, setFilterValue] = useState("");
    var filtered;

    function filterFirstName_start(value) {
        return (
            contacts.filter(contact => contact.first_name.startsWith(value)).map(filteredContact => (
                <Contact
                    key={filteredContact._id}
                    contact={filteredContact}
                />)));
    }
    function filterFirstName_end(value) {
        return (
            contacts.filter(contact => contact.first_name.endsWith(value)).map(filteredContact => (
                <Contact
                    key={filteredContact._id}
                    contact={filteredContact}
                />)));
    }
    function filterFirstName_includes(value) {
        return (
            contacts.filter(contact => contact.first_name.includes(value)).map(filteredContact => (
                <Contact
                    key={filteredContact._id}
                    contact={filteredContact}
                />)));
    }
    function filterLastName_start(value) {
        return (
            contacts.filter(contact => contact.last_name.startsWith(value)).map(filteredContact => (
                <Contact
                    key={filteredContact._id}
                    contact={filteredContact}
                />)));
    }
    function filterLastName_end(value) {
        return (
            contacts.filter(contact => contact.last_name.endsWith(value)).map(filteredContact => (
                <Contact
                    key={filteredContact._id}
                    contact={filteredContact}
                />)));
    }
    function filterLastName_includes(value) {
        return (
            contacts.filter(contact => contact.last_name.includes(value)).map(filteredContact => (
                <Contact
                    key={filteredContact._id}
                    contact={filteredContact}
                />)));
    }

    function filterhphonenumber_start(value) {
        return (
            contacts.filter(contact => contact.phonenumber.startsWith(value)).map(filteredContact => (
                <Contact
                    key={filteredContact._id}
                    contact={filteredContact}
                />)));
    }
    function filterphonenumber_end(value) {
        return (
            contacts.filter(contact => contact.phonenumber.endsWith(value)).map(filteredContact => (
                <Contact
                    key={filteredContact._id}
                    contact={filteredContact}
                />)));
    }
    function filterphonenumber_includes(value) {
        return (
            contacts.filter(contact => contact.phonenumber.includes(value)).map(filteredContact => (
                <Contact
                    key={filteredContact._id}
                    contact={filteredContact}
                />)));
    }
    function filteremail_start(value) {
        return (
            contacts.filter(contact => contact.email.startsWith(value)).map(filteredContact => (
                <Contact
                    key={filteredContact._id}
                    contact={filteredContact}
                />)));
    }
    function filteremail_end(value) {
        return (
            contacts.filter(contact => contact.email.endsWith(value)).map(filteredContact => (
                <Contact
                    key={filteredContact._id}
                    contact={filteredContact}
                />)));
    }
    function filteremail_includes(value) {
        return (
            contacts.filter(contact => contact.email.includes(value)).map(filteredContact => (
                <Contact
                    key={filteredContact._id}
                    contact={filteredContact}
                />)));
    }
    function filterrelationship_status_start(value) {
        return (
            contacts.filter(contact => contact.relationship_status.startsWith(value)).map(filteredContact => (
                <Contact
                    key={filteredContact._id}
                    contact={filteredContact}
                />)));
    }
    function filterrelationship_status_end(value) {
        return (
            contacts.filter(contact => contact.relationship_status.endsWith(value)).map(filteredContact => (
                <Contact
                    key={filteredContact._id}
                    contact={filteredContact}
                />)));
    }
    function filterrelationship_status_includes(value) {
        return (
            contacts.filter(contact => contact.relationship_status.includes(value)).map(filteredContact => (
                <Contact
                    key={filteredContact._id}
                    contact={filteredContact}
                />)));
    }
    function filterlatitude_start(value) {
        return (
            contacts.filter(contact => contact.latitude.startsWith(value)).map(filteredContact => (
                <Contact
                    key={filteredContact._id}
                    contact={filteredContact}
                />)));
    }
    function filterlatitude_end(value) {
        return (
            contacts.filter(contact => contact.latitude.endsWith(value)).map(filteredContact => (
                <Contact
                    key={filteredContact._id}
                    contact={filteredContact}
                />)));
    }
    function filterlatitude_includes(value) {
        return (
            contacts.filter(contact => contact.latitude.includes(value)).map(filteredContact => (
                <Contact
                    key={filteredContact._id}
                    contact={filteredContact}
                />)));
    }
    function filterlongitude_start(value) {
        return (
            contacts.filter(contact => contact.longitude.startsWith(value)).map(filteredContact => (
                <Contact
                    key={filteredContact._id}
                    contact={filteredContact}
                />)));
    }
    function filterlongitude_end(value) {
        return (
            contacts.filter(contact => contact.longitude.endsWith(value)).map(filteredContact => (
                <Contact
                    key={filteredContact._id}
                    contact={filteredContact}
                />)));
    }
    function filterlongitude_includes(value) {
        return (
            contacts.filter(contact => contact.longitude.includes(value)).map(filteredContact => (
                <Contact
                    key={filteredContact._id}
                    contact={filteredContact}
                />)));
    }
    const onFilter = (e) => {
        e.preventDefault();
        console.log(filterBy);
        console.log(filterMethod);
        console.log(filterValue);
        if (!filterBy || !filterMethod || !filterValue) {
          alert("Please fill missing fields !");
          return;
        }
        if (filterBy === "First Name"){
            if(filterMethod === "Starts With"){
                filtered= filterFirstName_start(filterValue);
                // console.log(x);
                
            }
        }
    
        setFilterBy("");
        setFilterMethod("");
        setFilterValue("");
      };

    return (<>
        <form className="login-form" onSubmit={onFilter}>
            <label>Filter By : </label>
            <select name="filterBy" onChange={(e) => {
                setFilterBy(e.target.value);
            }}>
                <option value=""></option>
                <option value="First Name">First Name</option>
                <option value="Last Name">Last Name</option>
                <option value="Phone  Number">Phone  Number</option>
                <option value="Email">Email</option>
                <option value="Relationship Status">Relationship Status</option>
                <option value="longitude">longitude</option>
                <option value="latitude">latitude</option>

            </select>
            <label>Criteria : </label>
            <select name="filterMethod" onChange={(e) => {
                setFilterMethod(e.target.value);
            }}>
                <option value=""></option>
                <option value="Includes">Includes</option>
                <option value="Starts With">Starts With</option>
                <option value="Ends With">Ends With</option>

            </select>
            <label>Value : </label>
            <input type={"text"} placeholder={"Enter value "} name={"filterValue"} onChange={(e) => {
                setFilterValue(e.target.value);
            }}/>
            <input type={"submit"} value="Filter" className="btn btn-block" />
            <input type={"button"} value="Reset" className="btn btn-block" />
        </form>


{filtered()}
    </>);
}
export default FilterForm;