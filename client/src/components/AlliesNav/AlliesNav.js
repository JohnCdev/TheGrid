import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function AlliesNav() {
    const { isAuthenticated } = useContext(AuthContext);
    const authenticationStatus = !isAuthenticated ? (
        //logged out
        <Link className="nav-link" to="/new-user">Allies</Link>
    ) : (
        //logged in
        <Link className="nav-link" to="/allies">Allies</Link>
        );

    return authenticationStatus;
}