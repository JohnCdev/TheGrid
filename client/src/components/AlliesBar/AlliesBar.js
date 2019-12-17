import React, { useState } from 'react';
import AlliesBarIcon from '../AlliesBarIcon/AlliesBarIcon';
import './alliesBar.css';

const AlliesBar = () => {
    const [allies, setAllies] = useState([
        { id: 1, name: "John", status: "Active", profileimg: "http://fogucksouryelf" },
        { id: 2, name: "Shawn", status: "Busy", profileimg: "http://fogucksouryelf" }
    ]);

    return (
        <div id="allies-bar">
            <h1>Allies Bar</h1>
            {allies.map(ally => (
                <AlliesBarIcon
                    key={ally.id}
                    name={ally.name}
                    status={ally.status}
                    profileimg={ally.profileimg}
                />
            ))}
        </div>
    );
}

export default AlliesBar;