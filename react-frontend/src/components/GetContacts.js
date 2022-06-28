import Contacts from "./Contacts";
import SignupForm from './SignupForm';
import AddContact from './AddContact';
import Navbar from './Navbar';
import ViewContact from './ViewContact';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Contact from './Contact';
import FilterService from './FilterService';
import { useState, useEffect } from 'react';

function GetContacts() {
  let navigate=useNavigate();
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState(false);
  const [filterBy, setFilterBy] = useState("");
  const [filterMethod, setFilterMethod] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const onFilter = (e) => {
      e.preventDefault();
      console.log(filterBy);
      console.log(filterMethod);
      console.log(filterValue);
      if (!filterBy || !filterMethod || !filterValue) {
        alert("Please fill missing fields !");
      }
   
      
  
      setFilterBy("");
      setFilterMethod("");
      setFilterValue("");
    };
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
    if (checkToken()) {
      try {
        const res = await fetch("http://localhost:8080/api/contact/get?user=" + localStorage.getItem("user_id"));
        const data = await res.json();
        // console.log(data);
        return data;
      } catch (err) {
        console.log(err);
      }
    } else {
      alert("Please Login !!!")
      navigate("/");
      
    }
  };

  useEffect(() => {
    const getContacts = async () => {
      const serverContacts = await fetchContacts();
      setContacts(serverContacts);
    };
    getContacts();
    setLoading(true);


  }, []);

return(<>  {<form className="form" >
<div><h4>Filter By : </h4>
<select name="filterBy" value={filterBy} onChange={(e) => {
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
<h4>Criteria : </h4>
<select name="filterMethod" value={filterMethod} onChange={(e) => {
    setFilterMethod(e.target.value);
}}>
    <option value=" "></option>
    <option value="Includes">Includes</option>
    <option value="Starts With">Starts With</option>
    <option value="Ends With">Ends With</option>

</select>
<h4>Value : </h4>
<input type={"text"} placeholder={"Enter value "} name={"filterValue"} value={filterValue} onChange={(e) => {
    setFilterValue(e.target.value);
}}/></div>
<div className="filter"><input type={"submit"} onClick={onFilter} value="Filter" className="btn btn-block" />
<input type={"button"} value="Reset" className="btn btn-block" /></div>
</form>

}

{<FilterService contacts={contacts} filterBy={filterBy} filterMethod={filterMethod} filterValue={filterValue}/>}


{/* {!loading && <div className="loading"><h1>Loading ...</h1></div>}
{loading && <div>{contacts.map((contact) => <Contact key={contact._id} contact={contact}/>)}</div>} */}




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
