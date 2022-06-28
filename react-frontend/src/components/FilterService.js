import React from "react";
import Contact from "./Contact";

const FilterService = ({ contacts, filterBy, filterMethod, filterValue }) => {
  if (!filterBy || !filterMethod){
    return (<>{contacts.map((contact) => (
      <Contact key={contact._id} contact={contact} />))}</>)
  }
  if (filterBy === "First Name") {
    if (filterMethod === "Includes") {

      return (
        <> {contacts.filter((contact) => contact.first_name.toLowerCase().includes(filterValue.toLowerCase())).map((contact) => (
          <Contact key={contact._id} contact={contact} />))} </>
      );

    }
    else if (filterMethod === "Starts With") {

      return (
        <> {contacts.filter((contact) => contact.first_name.toLowerCase().startsWith(filterValue.toLowerCase())).map((contact) => (
          <Contact key={contact._id} contact={contact} />))} </>
      );

    }
    else if (filterMethod === "Ends With") {

      return (
        <> {contacts.filter((contact) => contact.first_name.toLowerCase().endsWith(filterValue.toLowerCase())).map((contact) => (
          <Contact key={contact._id} contact={contact} />))} </>
      );

    }
  }
  if (filterBy === "Last Name") {
    if (filterMethod === "Includes") {

      return (
        <> {contacts.filter((contact) => contact.last_name.toLowerCase().includes(filterValue.toLowerCase())).map((contact) => (
          <Contact key={contact._id} contact={contact} />))} </>
      );

    }
    else if (filterMethod === "Starts With") {

      return (
        <> {contacts.filter((contact) => contact.last_name.toLowerCase().startsWith(filterValue.toLowerCase())).map((contact) => (
          <Contact key={contact._id} contact={contact} />))} </>
      );

    }
    else if (filterMethod === "Ends With") {

      return (
        <> {contacts.filter((contact) => contact.last_name.toLowerCase().endsWith(filterValue.toLowerCase())).map((contact) => (
          <Contact key={contact._id} contact={contact} />))} </>
      );

    }
  }
  if (filterBy === "Phone Number") {
    if (filterMethod === "Includes") {

      return (
        <> {contacts.filter((contact) => contact.phonenumber.toLowerCase().includes(filterValue.toLowerCase())).map((contact) => (
          <Contact key={contact._id} contact={contact} />))} </>
      );

    }
    else if (filterMethod === "Starts With") {

      return (
        <> {contacts.filter((contact) => contact.phonenumber.toLowerCase().startsWith(filterValue.toLowerCase())).map((contact) => (
          <Contact key={contact._id} contact={contact} />))} </>
      );

    }
    else if (filterMethod === "Ends With") {

      return (
        <> {contacts.filter((contact) => contact.phonenumber.toLowerCase().endsWith(filterValue.toLowerCase())).map((contact) => (
          <Contact key={contact._id} contact={contact} />))} </>
      );

    }
  }
  if (filterBy === "Email") {
    if (filterMethod === "Includes") {

      return (
        <> {contacts.filter((contact) => contact.email.toLowerCase().includes(filterValue.toLowerCase())).map((contact) => (
          <Contact key={contact._id} contact={contact} />))} </>
      );

    }
    else if (filterMethod === "Starts With") {

      return (
        <> {contacts.filter((contact) => contact.email.toLowerCase().startsWith(filterValue.toLowerCase())).map((contact) => (
          <Contact key={contact._id} contact={contact} />))} </>
      );

    }
    else if (filterMethod === "Ends With") {

      return (
        <> {contacts.filter((contact) => contact.email.toLowerCase().endsWith(filterValue.toLowerCase())).map((contact) => (
          <Contact key={contact._id} contact={contact} />))} </>
      );

    }
  }
  if (filterBy === "Relationship Status") {
    if (filterMethod === "Includes") {

      return (
        <> {contacts.filter((contact) => contact.relationship_status.toLowerCase().includes(filterValue.toLowerCase())).map((contact) => (
          <Contact key={contact._id} contact={contact} />))} </>
      );

    }
    else if (filterMethod === "Starts With") {

      return (
        <> {contacts.filter((contact) => contact.relationship_status.toLowerCase().startsWith(filterValue.toLowerCase())).map((contact) => (
          <Contact key={contact._id} contact={contact} />))} </>
      );

    }
    else if (filterMethod === "Ends With") {

      return (
        <> {contacts.filter((contact) => contact.relationship_status.toLowerCase().endsWith(filterValue.toLowerCase())).map((contact) => (
          <Contact key={contact._id} contact={contact} />))} </>
      );

    }
  }
  if (filterBy === "latitue") {
    if (filterMethod === "Includes") {

      return (
        <> {contacts.filter((contact) => contact.latitue.toLowerCase().includes(filterValue.toLowerCase())).map((contact) => (
          <Contact key={contact._id} contact={contact} />))} </>
      );

    }
    else if (filterMethod === "Starts With") {

      return (
        <> {contacts.filter((contact) => contact.latitue.toLowerCase().startsWith(filterValue.toLowerCase())).map((contact) => (
          <Contact key={contact._id} contact={contact} />))} </>
      );

    }
    else if (filterMethod === "Ends With") {

      return (
        <> {contacts.filter((contact) => contact.latitue.toLowerCase().endsWith(filterValue.toLowerCase())).map((contact) => (
          <Contact key={contact._id} contact={contact} />))} </>
      );

    }
  }
  if (filterBy === "longitude") {
    if (filterMethod === "Includes") {

      return (
        <> {contacts.filter((contact) => contact.longitude.toLowerCase().includes(filterValue.toLowerCase())).map((contact) => (
          <Contact key={contact._id} contact={contact} />))} </>
      );

    }
    else if (filterMethod === "Starts With") {

      return (
        <> {contacts.filter((contact) => contact.longitude.toLowerCase().startsWith(filterValue.toLowerCase())).map((contact) => (
          <Contact key={contact._id} contact={contact} />))} </>
      );

    }
    else if (filterMethod === "Ends With") {

      return (
        <> {contacts.filter((contact) => contact.longitude.toLowerCase().endsWith(filterValue.toLowerCase())).map((contact) => (
          <Contact key={contact._id} contact={contact} />))} </>
      );

    }
  }


  



};

export default FilterService;