import React from "react";
import './alliesBarIcon.css';

const AlliesBarIcon = ({ name, status, profileimg }) => {
    return (
        <div className="allies-icon">
            <ul>
                <li>{name}</li>
                <li>{status}</li>
                <li>{profileimg}</li>
            </ul>
        </div>
    );
}

export default AlliesBarIcon;