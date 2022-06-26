import React from "react";
import Logo from "../assets/logo1.jpg";
import Button from "./Button";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const logout = async () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user_id");
        window.location.reload(false);
    };

    return (
        <header className="header">
            <div className="icon">
                <img src={Logo} alt="" />
                <h1>Address Book</h1>
            </div>

            <div className="icon">
                {/* {location.pathname === "/" && (
                    <Button
                        color={"green"}
                        text={"Add Contact"}
                        onClick={addContact}
                    />
                )} */}
                {location.pathname === "/" && (
                    <Button
                        color={"red"}
                        text={"Logout"}
                        onClick={logout}
                    />
                )}
            </div>

        </header >
    );
};

export default Navbar;
