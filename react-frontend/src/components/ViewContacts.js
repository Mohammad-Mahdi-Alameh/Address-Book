import React from "react";
import Contact from "./Contact";
const ViewContacts = ({ user_id }) => {
  const [contacts, setContacts] = useState([]);
  const fetchContacts  = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/contact/get");
      const data = await res.json();
      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const getContacts = async () => {
      const serverContacts = await fetchContacts();
      setContacts(serverContacts);
    };
    getContacts();
    
  }, []);
    return(<> {contacts.map((contact) => (
      <Contact
        key={contact.id}
        contact={contact}
        // getInfo={getInfo}
        />
    ))}
      </>
);
}

  export default ViewContacts;