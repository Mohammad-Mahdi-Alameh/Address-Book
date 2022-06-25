import React from "react";
import input from "./Input";
const LoginForm = () => {

    const login = async (username_pass) => {
        const res = await fetch("http://localhost:8080/api/user/login", {
          method: "POST",
       
          body: username_pass,
        });
        const data = await res.json();
        console.log(data.success);
        if(data.success === true){
            localStorage.setItem("token",data.token);
            localStorage.setItem("user_id",data.user_id);
            // alert("Hi Admin !");
            
        }else
            alert("Wrong username or Password !");
          
        }

        const signup = async (survey) => {
            const res = await fetch("http://localhost:8080/api/user/register", {
              method: "POST",
              body: survey,
            });
            const data = await res.json();
            localStorage.setItem("token",data.token);
            localStorage.setItem("user_id",data.user_id);
          };
    return(
<form className="login-form" >
    <div className="form-control">
      <label>Username</label>
      <input
        type="text"
        placeholder={"Enter Your Username"}
        // value={username}
        // onChange={(e) => {
        //   setUsername(e.target.value);
        // }}
        />
      <label>Password</label>
      <input
        type="password"
        placeholder={"Enter Your Password"}
        // value={password}
        // onChange={(e) => {
        //   setPassword(e.target.value);
        // }}
        />
        

    </div>
    <a href="">Create new Account</a>

    <input type={"submit"} value="Login" className="btn btn-block" />
  </form>);


  }


  export default LoginForm;