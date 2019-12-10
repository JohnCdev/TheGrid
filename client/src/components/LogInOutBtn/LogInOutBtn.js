import React from 'react';
import {Link} from 'react-router-dom';

export default function LogInOutBtn(props) {
    if (!props.athenticated) {
        return (
            <button
                className="btn my-2 my-sm-0"
                onClick={props.handleClick}>
                <Link to="/new-user">Log In</Link>
             </button>
        )
    }
    return (
        <button className="btn my-2 my-sm-0" onClick={props.handleClick} type="submit">Log Out</button>

    )

}
