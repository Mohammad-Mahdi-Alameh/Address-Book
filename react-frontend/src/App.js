import logo from './logo.svg';
import './App.css';

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
  
  return (
<></>
  );
}

export default App;
