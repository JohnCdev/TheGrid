import React from "react";
import './alliesBarIcon.css';

const AlliesBarIcon = ({ key, name, status }) => {
    return (
        <div className="allies-icon">
            <ul>
                <li>{key}</li>
                <li>{name}</li>
                <li>{status}</li>
            </ul>
        </div>
    );
}

export default AlliesBarIcon;