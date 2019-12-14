import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function LogInOutBtn() {
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  const authenticationStatus = !isAuthenticated ? (
    <button className="btn my-2 my-sm-0" onClick={toggleAuth}>
      <Link to="/log-in">Log In</Link>
    </button>
  ) : (
    <button className="btn my-2 my-sm-0" onClick={toggleAuth}>
      Log Out
    </button>
  );

  return authenticationStatus;
}
