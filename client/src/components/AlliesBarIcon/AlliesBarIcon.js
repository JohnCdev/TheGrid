import React from "react";

const AlliesBarIcon = ({ name, status, profileimg }) => {
    return (
        <ul>
            <li>{name}</li>
            <li>{status}</li>
            <li>{profileimg}</li>
        </ul>
    );
}

export default AlliesBarIcon;