import React, { useContext } from 'react';
import { AuthContext } from "../../context/AuthContext";
import { Link } from 'react-router-dom';
import './Notification.css';
import '../../utils/API';

const btnStyle = {
    position: "absolute",
    right: '3px',
    bottom: '20px',
    background: 'transparent',
    color: '',
    border: "none",
    padding: '0px 10px',
    marginLeft: '10px',
    borderRadius: '',
    cursor: 'pointer'
}

const aStyle = {
    marginRight: '10px',
    cursor: 'pointer'

}

export default function Notification(props) {
    const clickHandler = props.notificationClickHandler ? props.notificationClickHandler : () => { '' }
    const { userData } = useContext(AuthContext);
    return (
         <div 
         clickHandler onClick={()=> {clickHandler(props.userInvolved) }} style={{ position: 'relative', marginTop: '10px', width: '400px' }}>
            <Link to={`/user-profile/${props.userInvolved}`} className="dropdown-item" style={aStyle}
            >
                {`${props.update}`}
            </Link>
            <button onClick={() => { props.markNoteAsRead({ user: userData.userName, notification: props.id }) }} style={btnStyle}><i class="fa fa-trash"></i></button>
            <hr />
        </div>
    )
}
