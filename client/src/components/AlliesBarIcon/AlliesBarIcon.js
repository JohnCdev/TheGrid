import React from "react";
import './alliesBarIcon.css';
import ProfileIcon from "../ProfileIcon/ProfileIcon";

const AlliesBarIcon = ({ name, status, profileImg }) => {
    return (
        <div className="allies-icon">
            <ProfileIcon/>
            <p>{name}</p>
        </div>
    );
}

export default AlliesBarIcon;