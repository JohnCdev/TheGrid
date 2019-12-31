import React from 'react'
import './Notification.css'

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
    return (
        <div style={{position: 'relative', marginTop:'10px', width: '400px'}}>
        <a className="dropdown-item" style={aStyle}
        >
            {`${props.update}`}
        </a>
        <button style={btnStyle}>x</button>
        <hr />
    </div>
    )
}
