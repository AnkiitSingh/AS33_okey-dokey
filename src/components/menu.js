import React from "react";
import Nav from "./nav";
import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <Nav />
            <br />
            <Link to="/">Home</Link>
            <Link to="/form">Form</Link>
        </div>
    )
}

export default Menu;
