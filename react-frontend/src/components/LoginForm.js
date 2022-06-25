import React from "react";
const LoginForm = ({  }) => {
    return(
<form className="add-form" onSubmit={onLogin}>
    <div className="form-control">
      <label>Username</label>
      <input
        type="text"
        placeholder={"Enter Your Username"}
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        />
      <label>Password</label>
      <input
        type="password"
        placeholder={"Enter Your Password"}
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}/>
        
        <a href="">Create new Account</a>

    </div>
    <input type={"submit"} value="Login" className="btn btn-block" />
  </form>);


  }


  export default LoginForm;