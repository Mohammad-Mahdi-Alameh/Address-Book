import React from "react";
import Logo from "../assets/logo1.jpg";
import Button from "./Button";
import { useLocation } from "react-router-dom";

const Navbar = (Logout, AddContact) => {
    const location = useLocation();
    return (
        <header className="header">
            <div className="icon">
                <img src={Logo} alt="" />
                <h1>Address Book</h1>
            </div>

            <div className="icon">
                {location.pathname === "/" && (
                    <Button
                        color={"green"}
                        text={"Add Contact"}
                        onClick={AddContact}
                    />
                )}
                {location.pathname === "/" && (
                    <Button
                        color={"red"}
                        text={"Logout"}
                        onClick={Logout}
                    />
                )}
            </div>

        </header >
    );
};

export default Navbar;
