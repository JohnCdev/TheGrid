import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function DiscoverNav() {
    const { isAuthenticated } = useContext(AuthContext);
    const authenticationStatus = !isAuthenticated ? (
        //logged out
        <Link className="nav-link" to="/new-user">Discover</Link>
    ) : (
        //logged in
        <Link className="nav-link" to="/discover">Discover</Link>
        );

    return authenticationStatus;
}