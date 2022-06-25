import './App.css';
import LoginForm from "./components/LoginForm";
import ViewContacts from "./components/ViewContacts";
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {

     //Checking if the token exists
     const checkToken =  () => {
      try {
        let token = localStorage.getItem("token");
        if ( token )
            return true;
        else
            return false; 
      } catch (err) {
        console.log(err);
      }
    };

  if(checkToken)
    
    return (<><LoginForm/></>);

  else

    return(<>
    <BrowserRouter>
      {/* Nav */}
      <Routes>
           <Route path="/" element={<ViewContacts user_id={localStorage.getItem("user_id")}/>}></Route>
      </Routes>
      {/* <Routes>
           <Route path="/get_info" element={<GetInfo />}></Route>
      </Routes> */}

    </BrowserRouter></>);

    

}

export default App;
