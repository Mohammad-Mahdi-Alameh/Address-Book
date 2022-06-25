import './App.css';
import LoginForm from "./components/LoginForm";
import ViewContacts from "./components/ViewContacts";

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

    return(<><ViewContacts user_id={user_id}/></>);

    

}

export default App;
