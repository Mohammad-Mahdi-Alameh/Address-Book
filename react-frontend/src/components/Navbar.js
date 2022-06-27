import React from "react";
import Logo from "../assets/logo1.jpg";
import Button from "./Button";
import { useLocation, useNavigate,Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [visible,setVisible]=useState(true)
    const logout = async () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user_id");
        navigate("/");
    };
    let token;
    let checkToken=localStorage.getItem("token");
    if (checkToken) 
        token=true;
    else
        token=false;

    return (
        <header className="header">
            <div className="icon">
                <img src={Logo} alt="" />
                <h1>Address Book</h1>
            </div>
            <div className="icon">
              
                <>{token &&(
                 
                 <Link to={"/add_contact"}><Button
                 color={"green"}
                 text={"Add Contact"}
             /></Link>
             )}
             {token &&(
                    <Button
                        color={"red"}
                        text={"Logout"}
                        onClick={logout}
                    />
                )}</>
            </div>

        </header >
    );
};

export default Navbar;
