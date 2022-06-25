import React from "react";
import input from "./Input";
const LoginForm = ({  }) => {
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