import React from "react";
import './alliesBarIcon.css';
import ProfileIcon from "../ProfileIcon/ProfileIcon";
import { Link } from "react-router-dom";


const AlliesBarIcon = ({ name, status, profileImg }) => {
    return (
        <Link to={`/user-profile/${name}`}>
            <div className="allies-icon">
                <ProfileIcon profileImg={profileImg}/>
                <p>{name}</p>
            </div>
        </Link>
    );
}

export default AlliesBarIcon;