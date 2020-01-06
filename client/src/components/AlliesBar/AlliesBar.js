import React, { useState, useEffect } from 'react';
import AlliesBarIcon from '../AlliesBarIcon/AlliesBarIcon';
import './alliesBar.css';
import API from "../../utils/API";
import Spinner from '../Spinner/Spinner';



const AlliesBar = () => {
    const [allies, setAllies] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
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
                                profileImg: data.data.data[0].profileIMG
                            }
                            allyList.push(ally)
                        })
                        .catch(err => console.log(err))
                }
                setAllies(allyList)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div id="allies-bar">
           
           {/* <div class="card-header allies-header"><i class="fa fa-users"></i> Allies</div> */}
           
            {/* <hr /> */}
                {isLoading ?
                    <Spinner />
                    :
                    allies.map(ally => (
                        <AlliesBarIcon
                            key={ally.key}
                            userName={ally.userName}
                            profileImg={ally.profileImg}
                        />
                    ))}
            </div>
            );
        }
        
export default AlliesBar;