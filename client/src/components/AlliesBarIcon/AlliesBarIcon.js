import React from "react";
import './alliesBarIcon.css';

const AlliesBarIcon = ({ name, status, profileImg }) => {
    return (
        <div className="allies-icon">
            <ul>
                <li>{name}</li>
                <li>{status}</li>
                <li>{profileImg}</li>
            </ul>
        </div>
    );
}

export default AlliesBarIcon;