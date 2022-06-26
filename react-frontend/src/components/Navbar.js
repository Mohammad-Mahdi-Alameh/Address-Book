import React from "react";
import Logo from "../assets/logo1.jpg";
// import Button from "./Button";

const Navbar = () => {

  return (
    <header className="header">
        <div className="icon">
            <img src={Logo} alt=""/>
            <h1>Address Book</h1>
        </div>
        
      
    </header>
  );
};

export default Navbar;
