import React, { useEffect } from 'react';
import ProfileIcon from '../ProfileIcon/ProfileIcon'

const FeedCard = ({ key, id, userName, timeStamp, content, profileImg}) => {
    return (
        <div className="card mb-2" key={key}>
            <h5 className="card-header"><ProfileIcon profileImg={profileImg}/>{userName}</h5>
            <div className="card-body">
                <h5 className="card-title">{content}</h5>
                <p className="card-text">{timeStamp}</p>
                <button href="#" className="btn btn-primary" data-id={id}>Comment</button>
            </div>
        </div>
    );
}

export default FeedCard;