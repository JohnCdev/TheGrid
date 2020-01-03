import React, { useEffect } from 'react';
import ProfileIcon from '../ProfileIcon/ProfileIcon'
import Moment from 'react-moment';
import './feedCard.css'

const FeedCard = ({ id, userName, timeStamp, content, profileImg }) => {
    return (
        <div className="card mb-2">
            {/* <a className="card-text">{timeStamp}</a> */}
            <h5 className="card-header"><ProfileIcon profileImg={profileImg} />{userName}<a className="timeStamp"><Moment fromNow>{timeStamp}</Moment></a></h5>
        <div className="card-body">
            <h5 className="card-title">{content}</h5>
        </div>
            <button href="#" className="btn btn-primary" style={{ "lineHeight": 1 }} data-id={id}>Comment</button>
        </div>
    );
}

export default FeedCard;