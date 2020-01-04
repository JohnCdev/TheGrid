import React, { useContext } from 'react';
import { AuthContext } from "../../context/AuthContext";
import { Link } from 'react-router-dom';
import './Notification.css';
import '../../utils/API';

const btnStyle = {
    position: "absolute",
    right: '3px',
    bottom: '20px',
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    marginLeft: '10px',
    borderRadius: '50%',
    cursor: 'pointer'
}

const aStyle = {
    marginRight: '10px',
    cursor: 'pointer'

}

export default function Notification(props) {
    console.log(props)
    const { userData } = useContext(AuthContext);
    return (
        <div style={{ position: 'relative', marginTop: '10px', width: '400px' }}>
            <Link to={`/user-profile/${props.userInvolved}`} className="dropdown-item" style={aStyle}
            >
                {`${props.update}`}
            </Link>
            <button onClick={() => { props.markNoteAsRead({ user: userData.userName, notification: props.id }) }} style={btnStyle}>x</button>
            <hr />
        </div>
    )
}
