import React from "react";
import './alliesBarIcon.css';
import ProfileIcon from "../ProfileIcon/ProfileIcon";
import { Link } from "react-router-dom";


const AlliesBarIcon = ({ userName, profileImg }) => {
    return (
        <Link to={`/user-profile/${userName}`}>
            <div className="allies-icon">
                <ProfileIcon profileImg={profileImg} />
                <p>{userName}</p>
            </div>
        </Link>
    );
}

export default AlliesBarIcon;