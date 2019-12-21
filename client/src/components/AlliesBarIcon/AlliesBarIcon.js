import React from "react";
import './alliesBarIcon.css';

const AlliesBarIcon = ({ userName, firstName}) => {
    return (
        <div className="allies-icon">
            <ul>
                <li>{userName}</li>
                <li>{firstName}</li>
            </ul>
        </div>
    );
}

export default AlliesBarIcon;