import React, {useContext} from 'react'
import {AuthContext} from '../../context/AuthContext';
import './AddFriend.css';
import API from "../../utils/API";

export default function AddFriend(props) {
    const { userData } = useContext(AuthContext);
    console.log(props.viewedProfile)
    console.log(userData.friendList)
    if(props.viewedProfile){
        const button =
        userData.friendList.includes(props.viewedProfile)             ? 
            <button onClick={() =>{API.friendRequest('remove-friend', userData.user, props.viewedProfile, userData.token)}}>Remove Ally</button> :
        userData.sentFriendRequests.includes(props.viewedProfile)     ? 
            <button>Request Sent</button> :
        userData.receivedFriendRequests.includes(props.viewedProfile) ? 
            <button onClick={() =>{API.friendRequest('accept-friend-request', userData.user, props.viewedProfile, userData.token)}}>Accept Alliance Request</button> :
            <button onClick={() =>{API.friendRequest('request-friend', userData.user, props.viewedProfile, userData.token)}}>Send Alliance Request</button>;
        return button
    } else {
        return <button>isn't working</button>
    }

    
}

