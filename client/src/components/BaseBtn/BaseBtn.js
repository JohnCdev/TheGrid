import React from 'react';
import { Link } from 'react-router-dom';
import './BaseBtn.css';


export default function BaseBtn(props) {
    if (!props.athenticated) {
        //This button will render if no user is logged in and go to landing-page
        //we will use an Icon for the button
        return (
            <a className="navbar-brand">
                {/* <img className="img-responsive" src=""></img> */}
                <Link to="/landing-page">BaseIcon</Link>
            </a>
        )
    }
    return (
        //This button will render If Logged in and go to user-feed
        //we will use an Icon for the button
        <a className="navbar-brand">
            {/* <img className="img-responsive" src=""></img> */}
            <Link to="/user-feed">Base</Link>
        </a>

    )

}