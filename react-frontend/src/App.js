import './App.css';
import LoginForm from "./components/LoginForm";
import Contacts from "./components/Contacts";
import SignupForm from './components/SignupForm';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './components/Contact';
import { useState, useEffect } from 'react';

function App() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);

  //Checking if the token exists
  const checkToken = () => {
    try {
      let token = localStorage.getItem("token");
      if (token)
        return true;
      else
        return false;
    } catch (err) {
      console.log(err);
    }
  };
  const fetchContacts = async () => {
    if (checkToken()) {
      try {
        const res = await fetch("http://localhost:8080/api/contact/get?user="+localStorage.getItem("user_id"));
        const data = await res.json();
        console.log(data);
        return data;
      } catch (err) {
        console.log(err);
      }
    } else {
      return [];
    }
  };

  useEffect(() => {
    const getContacts = async () => {
      const serverContacts = await fetchContacts();
      setContacts(serverContacts);
    };
    getContacts();

  }, []);


  return (<><BrowserRouter>
   <div className="container">
  <Navbar/>
    <Routes>
      <Route path="/" element={<>
        {

          contacts.length > 0 ? (
            <Contacts contacts={contacts} />
          ) : (
            <LoginForm />
          )
        }</>}>
      </Route>
    </Routes>
    <Routes>
      <Route path="/signup" element={<SignupForm />}></Route>
    </Routes>
    </div>
  </BrowserRouter></>);
}
// else

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




export default App;
