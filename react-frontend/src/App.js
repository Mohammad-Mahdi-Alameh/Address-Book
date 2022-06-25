import './App.css';
import LoginForm from "./components/LoginForm";

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

    return(<></>);

    

}

export default App;
