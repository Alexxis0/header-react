import React from "react";
import { NavLink } from "react-router-dom";

const Head = () => {
    return (
        <ul className="head">
            <NavLink to={"/"}>
                <li>Home</li>
            </NavLink>
            <NavLink to={"/about"}>
                <li>About</li>
            </NavLink>
        </ul>
    );
};

export default Head;
