import React, { useState, useEffect } from 'react';
import AlliesBarIcon from '../AlliesBarIcon/AlliesBarIcon';
import './alliesBar.css';
import API from "../../utils/API";

const AlliesBar = () => {
    const [allies, setAllies] = useState([
        {userName: "userName", firstName: "firstName" }
    ]);

    /*useEffect(() => {
        API.getAllyList({ userName: sessionStorage.getItem('project3username') })
            .then(data => {
                var allies = data.data
                var allyList = []
                for(var i = 0; i < allies.length; i++){
                    API.getProfile({userName: allies[i]})
                        .then(data => {
                            console.log(data.data.data[0])
                            //FIX THIS, user information not being submitted
                            var ally = {
                                userName: data.data.data[0],
                                firstName: data.data.data[0],
                            }
                            allyList.push(ally)
                        })
                        .catch(err => console.log(err))
                }
                setAllies(allyList)
            })
            .catch(err => console.log(err))
    }, [])*/


    return (
        <div id="allies-bar">
            <h1>Allies Bar</h1>
            {allies.map(ally => (
                <AlliesBarIcon
                    key={ally.userName}
                    name={ally.firstName}
                   //status={ally.status}
                   //profileImg={ally.profileImg}
                />
            ))}
        </div>
    );
}

export default AlliesBar;