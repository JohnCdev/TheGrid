import React from 'react';
import { Link } from 'react-router-dom';

export default function LogInOutBtn(props) {
    if (props.authenticated) {
        return (
            //This button will render If Logged in and will Log user out
            <button
                id="logout_button"
                className="btn my-2 my-sm-0"
                onClick={props.handleClick}>
                <Link to="log-out">Log Out</Link>
            </button>
        );
    }

    //This button will render if no user is logged in  
    return (
        <button
            id="login_button"
            className="btn my-2 my-sm-0"
            onClick={props.handleClick}>
            <Link to="/log-in">Log In</Link>
        </button>
    );
}
