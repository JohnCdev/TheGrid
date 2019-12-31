import React from "react";
import './alliesBarIcon.css';
import ProfileIcon from "../ProfileIcon/ProfileIcon";
import { Link } from "react-router-dom";


const AlliesBarIcon = ({ key, name, status }) => {
    return (
        <Link to={`/user-profile/${name}`}>
        <div className="allies-icon">
            <ProfileIcon/>
            <p>{name}</p>
        </div>
        </Link>
    );
}

export default AlliesBarIcon;