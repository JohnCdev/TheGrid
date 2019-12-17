import React, { useState } from 'react';
import AlliesBarIcon from '../AlliesBarIcon/AlliesBarIcon'

const AlliesBar = () => {
    const [allies, setAllies] = useState([
        { name: "John", status: "Active", profileimg: "http://fogucksouryelf" },
        { name: "Shawn", status: "Busy", profileimg: "http://fogucksouryelf" }
    ]);

    return (
        <div>
            <h1>Allies Bar</h1>
            {allies.map(ally => (
                <AlliesBarIcon
                    name={ally.name}
                    status={ally.status}
                    profileimg={ally.profileimg}
                />
            ))}
        </div>
    );
}

export default AlliesBar;