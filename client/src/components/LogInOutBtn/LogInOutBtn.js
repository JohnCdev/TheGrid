import React from 'react';
import { Link } from 'react-router-dom';

export default function LogInOutBtn(props) {
    if (!props.athenticated) {
        //This button will render if no user is logged in
        return (
            <button
                className="btn my-2 my-sm-0"
                onClick={props.handleClick}>
                <Link to="/log-in">Log In</Link>
            </button>
        )
    }
    return (
        //This button will render If Logged in and will Log user out
        <button
            className="btn my-2 my-sm-0"
            onClick={props.handleClick}>
            <Link to="log-out">Log Out</Link>
        </button>

    )

}
