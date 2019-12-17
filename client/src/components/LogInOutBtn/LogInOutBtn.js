import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function LogInOutBtn(props) {
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  const authenticationStatus = !isAuthenticated ? (
    <button className="btn my-2 my-sm-0">
      <Link to="/log-in">Log In</Link>
    </button>
  ) : (
      <button type="button" className="btn my-2 my-sm-0">
        <Link to="/log-in">Log Out</Link>
      </button>
    );

  return authenticationStatus;
}
