import React, { useContext } from "react";
import "./Nav.css";
import LogInOutBtn from "../LogInOutBtn/LogInOutBtn";
import { AuthContext } from "../../context/AuthContext";
import { BrowserRouter as Router, Link } from "react-router-dom";
import BaseNav from "../BaseNav/BaseNav";
import AlliesNav from "../AlliesNav/AlliesNav";
import DiscoverNav from "../DiscoverNav/DiscoverNav";

export default function Nav() {
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-primary">
        <BaseNav />

        {/* add "active" to the nav-item className for what is active */}
        <ul class="navbar-nav mr-auto">
          <li className="nav-item">
            <AlliesNav />
          </li>
          <li className="nav-item">
            <DiscoverNav />
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"></a>
          </li>
        </ul>
        <LogInOutBtn />
      </nav>
    </div>
  );
}
