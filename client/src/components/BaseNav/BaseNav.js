import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function BaseNav() {
  const { isAuthenticated } = useContext(AuthContext);
  const authenticationStatus = !isAuthenticated ? (
        //not logged in
        <Link className="navbar-brand" to="/new-user">
        Sign Up
        </Link>
  ) : (
        //logged in
        <Link className="navbar-brand" to="/">
        Base
        </Link>
    );

  return authenticationStatus;
}
