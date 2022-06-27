import Contacts from "./Contacts";
import SignupForm from './SignupForm';
import AddContact from './AddContact';
import Navbar from './Navbar';
import ViewContact from './ViewContact';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Contact from './Contact';
import { useState, useEffect } from 'react';

function GetContacts() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState(false);

  //Checking if the token exists
  const checkToken = () => {
    try {
      let token = localStorage.getItem("token");
      if (token) {
        setToken(true);
        return true;
      } else {
        setToken(false);
        return false;
      }
    } catch (err) {
      console.log(err);
    }
  };
  const fetchContacts = async () => {
    // if (checkToken()) {
      try {
        const res = await fetch("http://localhost:8080/api/contact/get?user=" + localStorage.getItem("user_id"));
        const data = await res.json();
        // console.log(data);
        return data;
      } catch (err) {
        console.log(err);
      }
    // } else {
    //   return [];
    // }
  };

  useEffect(() => {
    const getContacts = async () => {
      const serverContacts = await fetchContacts();
      setContacts(serverContacts);
    };
    getContacts();
    setLoading(true);


  }, []);

return(<>
{!loading && <div className="loading"><h1>Loading ...</h1></div>}
{loading && <div>{contacts.map((contact) => <Contact key={contact._id} contact={contact}/>)}</div>}




</>);


//   return (<>
//     <BrowserRouter>
//       {/* Nav */}
//       <Routes>
//         <Route path="/" element={<ViewContacts user_id={localStorage.getItem("user_id")} />}></Route>
//       </Routes>
//       <Routes>
//         <Route path="signup" element={<SignupForm />}></Route>
//       </Routes>
//       {/* <Routes>
//          <Route path="/get_info" element={<GetInfo />}></Route>
//     </Routes> */}


//     </BrowserRouter></>);


}

export default GetContacts;
