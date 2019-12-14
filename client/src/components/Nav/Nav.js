import React, { useContext } from 'react';
import "./Nav.css";
import LogInOutBtn from "../LogInOutBtn/LogInOutBtn";
import { AuthContext } from "../../context/AuthContext";

export default function Nav() {
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
    
        return (
            <div>
                <nav className="navbar navbar-expand navbar-dark bg-primary">
                    <a className="navbar-brand" href="/">
                        Base
                    </a>
                    {/* add "active" to the nav-item className for what is active */}
                    <ul class="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Allies<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">nav item</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"></a>
                        </li>
                    </ul>
                    <LogInOutBtn />

                </nav>
            </div>
        )
    
}
