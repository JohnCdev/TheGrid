import React, {useContext} from 'react'
import {AuthContext} from '../../context/AuthContext';
import './AddFriend.css';

export default function AddFriend(props) {
    const { userData } = useContext(AuthContext);
    console.log(props.viewedProfile)
    console.log(userData.friendList)
    if(props.viewedProfile){
        const button =
        userData.friendList.includes(props.viewedProfile)             ? <button>Fiend</button> :
        userData.sentFriendRequests.includes(props.viewedProfile)     ? <button>Request Sent</button> :
        userData.receivedFriendRequests.includes(props.viewedProfile) ? <button>Accept Friend Request</button> :
                                                                        <button>Send Friend Request</button>;
        return button
    } else {
        return <button>isn't working</button>
    }

    
}

