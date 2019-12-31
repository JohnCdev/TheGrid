import React, { useState } from 'react';
import AlliesBarIcon from '../AlliesBarIcon/AlliesBarIcon';
import './alliesBar.css';


const AlliesBar = () => {
    const [allies, setAllies] = useState([
        { id: 1, name: "testing", status: "Active", profileImg: "http://imagegoeshere" },
        { id: 2, name: "Shawn", status: "Busy", profileImg: "http://imagegoeshere" },
        { id: 2, name: "Shawn", status: "Busy", profileImg: "http://imagegoeshere" },
        { id: 2, name: "Shawn", status: "Busy", profileImg: "http://imagegoeshere" },
        { id: 2, name: "Shawn", status: "Busy", profileImg: "http://imagegoeshere" },
        { id: 2, name: "Shawn", status: "Busy", profileImg: "http://imagegoeshere" },
        { id: 2, name: "Shawn", status: "Busy", profileImg: "http://imagegoeshere" },
        { id: 2, name: "Shawn", status: "Busy", profileImg: "http://imagegoeshere" },
        { id: 2, name: "Shawn", status: "Busy", profileImg: "http://imagegoeshere" },
        { id: 2, name: "Shawn", status: "Busy", profileImg: "http://imagegoeshere" },
        { id: 2, name: "Shawn", status: "Busy", profileImg: "http://imagegoeshere" },
        { id: 2, name: "Shawn", status: "Busy", profileImg: "http://imagegoeshere" },
        { id: 2, name: "Shawn", status: "Busy", profileImg: "http://imagegoeshere" },
        { id: 2, name: "Shawn", status: "Busy", profileImg: "http://imagegoeshere" },
        { id: 2, name: "Shawn", status: "Busy", profileImg: "http://imagegoeshere" },
        { id: 2, name: "Shawn", status: "Busy", profileImg: "http://imagegoeshere" },
        { id: 2, name: "Shawn", status: "Busy", profileImg: "http://imagegoeshere" },
        { id: 2, name: "Shawn", status: "Busy", profileImg: "http://imagegoeshere" },
        { id: 2, name: "Shawn", status: "Busy", profileImg: "http://imagegoeshere" },
        { id: 2, name: "Shawn", status: "Busy", profileImg: "http://imagegoeshere" },
        { id: 2, name: "Shawn", status: "Busy", profileImg: "http://imagegoeshere" },
        { id: 2, name: "Shawn", status: "Busy", profileImg: "http://imagegoeshere" },
        { id: 2, name: "Shawn", status: "Busy", profileImg: "http://imagegoeshere" },
        { id: 2, name: "Shawn", status: "Busy", profileImg: "http://imagegoeshere" },
        { id: 2, name: "Shawn", status: "Busy", profileImg: "http://imagegoeshere" },
        { id: 2, name: "Shawn", status: "Busy", profileImg: "http://imagegoeshere" },
        { id: 2, name: "Shawn", status: "Busy", profileImg: "http://imagegoeshere" },
        { id: 2, name: "Shawn", status: "Busy", profileImg: "http://imagegoeshere" },
        { id: 2, name: "Shawn", status: "Busy", profileImg: "http://imagegoeshere" },
        { id: 2, name: "Shawn", status: "Busy", profileImg: "http://imagegoeshere" },
        { id: 2, name: "Shawn", status: "Busy", profileImg: "http://imagegoeshere" },
        { id: 2, name: "wwwwwwwwwwwwwww", status: "Busy", profileImg: "http://imagegoeshere" },
        { id: 2, name: "Shawn", status: "Busy", profileImg: "http://imagegoeshere" },
        { id: 2, name: "Shawn", status: "Busy", profileImg: "http://imagegoeshere" },
        { id: 2, name: "Shawn", status: "Busy", profileImg: "http://imagegoeshere" }



    ]);

    return (
        <div id="allies-bar">
            {allies.map(ally => (
                <AlliesBarIcon
                    key={ally.id}
                    name={ally.name}
                    status={ally.status}
                    profileImg={ally.profileImg}
                />
            ))}
        </div>
    );
}

export default AlliesBar;