import React from "react";
import Contact from "./Contact";
const Contacts = ({ contacts }) => {
 
    return(<> {contacts.map((contact) => (
      <Contact
        key={contact._id}
        contact={contact}
        // getInfo={getInfo}
        />
    ))}
      </>
);
}

  export default Contacts;