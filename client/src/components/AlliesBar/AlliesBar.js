import React, { useState, useEffect } from 'react';
import AlliesBarIcon from '../AlliesBarIcon/AlliesBarIcon';
import './alliesBar.css';
import API from "../../utils/API";


const AlliesBar = () => {
    const [allies, setAllies] = useState([
        { key: "1", userName: "userName", firstName: "firstName", profileImg: "Default3" },
        { key: "2", userName: "userName", firstName: "firstName", profileImg: "Default2" }
    ]);

    useEffect(() => {
        API.getAllyList({ userName: sessionStorage.getItem('project3username') })
            .then(data => {
                var allies = data.data
                var allyList = []
                for (var i = 0; i < allies.length; i++) {
                    API.getProfile({ userName: allies[i] })
                        .then(data => {
                            var ally = {
                                key: data.data.data[0]._id,
                                userName: data.data.data[0].userName,
                                firstName: data.data.data[0].firstName,
                            }
                            allyList.push(ally)
                        })
                        .catch(err => console.log(err))
                }
                setAllies(allyList)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div id="allies-bar">
            {allies.map(ally => (
                <AlliesBarIcon
                    key={ally.key}
                    name={ally.userName}
                    status={ally.firstName}
                    profileImg={ally.profileImg}
                />
            ))}
        </div>
    );
}

export default AlliesBar;