import React, { useContext, useState, useEffect } from "react";
import './Footer.css';
import LogInOutBtn from "../LogInOutBtn/LogInOutBtn";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import ProfileIcon from "../ProfileIcon/ProfileIcon";
import Notifications from "../Notifications/Notifications";
import API from "../../utils/API";
import Media from 'react-media';

export default function Footer() {
    const { isAuthenticated, userData } = useContext(AuthContext);

    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        if (isAuthenticated) {
            API.getNotifications(userData.userName).then(response => {
                setNotifications(response.data.unReadNotifications)
            });
        }
    }, []);
    return (
        <footer className="footer">
            <Media queries={{ small: { maxWidth: 599 } }}>
                {matches =>
                    matches.small ? (
                        <nav className="navbar-expand navbar-dark bg-primary">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    {isAuthenticated ? (
                                        <Link to="/feed" className="nav-link">
                                            Feed
              </Link>
                                    ) : null}
                                </li>
                                <li className="nav-item">
                                    {isAuthenticated ? (
                                        <Link to="/clan" className="nav-link">
                                            Clans
              </Link>
                                    ) : null}
                                </li>
                                <li className="nav-item">
                                    {isAuthenticated ? (
                                        <Link to="/discover" className="nav-link">
                                            Discover
              </Link>
                                    ) : null}
                                </li>
                                <li className="nav-item">
                                <Link to="/profile">
                  {isAuthenticated && <ProfileIcon profileImg={userData.profileImg} large={true} />}
                </Link>
                                </li>
                            </ul>
                            </nav>
                    ) : (
                        <span className="text-center">The Grid</span>

                        )
                }
            </Media>
        </footer>
    )
}
