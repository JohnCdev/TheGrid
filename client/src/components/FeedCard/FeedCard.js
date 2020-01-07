import React, { useEffect, useState, useContext } from 'react';
import ProfileIcon from '../ProfileIcon/ProfileIcon'
import Moment from 'react-moment';
import './feedCard.css'
import Comments from '../Comments/Comments';

const FeedCard = ({ id, userName, timeStamp, content, profileImg, numComments }) => {
    const [commentToggle, setCommentToggle] = useState(false)

    const handleCommentToggle = () => {
        setCommentToggle(commentToggle => !commentToggle)
    }

    return (
        <div className="card mb-3">
            {/* <a className="card-text">{timeStamp}</a> */}
            <h5 className="card-header">
                <ProfileIcon profileImg={profileImg} />
                <span className="ml-2">{userName}</span>
                <a className="timeStamp">
                    <Moment fromNow>{timeStamp}</Moment>
                </a>
            </h5>
            <div className="card-body">
                <h5 className="card-title">{content}</h5>
            </div>
            <button
                href="#"
                className="btn btn-success"
                style={{ "lineHeight": 1 }}
                data-id={id}
                onClick={handleCommentToggle}
            >
                {commentToggle ? "Close Comments" : `Comments ${numComments}`}
            </button>
            {commentToggle ?
                <Comments
                    handleToggle={handleCommentToggle}
                    postID={id}
                />
                :
                null}
        </div>
    );
}

export default FeedCard;