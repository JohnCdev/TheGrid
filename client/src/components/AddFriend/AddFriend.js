import React, {useContext} from 'react'
import {AuthContext} from '../../context/AuthContext';
import './AddFriend.css';
import API from "../../utils/API";

export default function AddFriend(props) {
    const { userData, updateFriendRequests } = useContext(AuthContext);
    console.log(props.viewedProfile)
    console.log(userData.friendList)
    if(props.viewedProfile){
        //render the button conditionally based on:
        const button =
        //viewed profile is a friend
        userData.friendList.includes(props.viewedProfile)             ? 
            <button onClick={() =>{API.friendRequest('remove-friend', userData.userName, props.viewedProfile, userData.token)
                                    .then(res => {updateFriendRequests(res.data)})}}>
                Remove Ally</button> :
        
        //viewed profile has a friend request pending
        userData.sentFriendRequests.includes(props.viewedProfile)     ? 
            <button>Request Sent</button> :
        
        //viewed profile sent client a friend request
        userData.receivedFriendRequests.includes(props.viewedProfile) ? 
            <button onClick={() =>{API.friendRequest('accept-friend-request', userData.userName, props.viewedProfile, userData.token)
                                    .then(res => {updateFriendRequests(res.data)})}}>Accept Alliance Request</button> :
        
        //default: viewed profile is not a friend or a potential friend yet    
            <button onClick={() =>{API.friendRequest('request-friend', userData.userName, props.viewedProfile, userData.token)
                                    .then(res =>  {updateFriendRequests(res.data)})}}>Send Alliance Request</button>;
        return button
    } else {
        return <button>isn't working</button>
    }

    
}

