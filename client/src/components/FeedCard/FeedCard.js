import React, { useEffect, useState, useContext } from 'react';
import ProfileIcon from '../ProfileIcon/ProfileIcon'
import Moment from 'react-moment';
import './feedCard.css'
import { Input, FormBtn } from '../Form/Form'
import { AuthContext } from '../../context/AuthContext'
import API from '../../utils/API';

const FeedCard = ({ id, userName, timeStamp, content, profileImg }) => {
    const { userData } = useContext(AuthContext)
    const [commentBody, setComment] = useState('')

    const onChangeHandler = (e) => {
        setComment(e.target.value)
    }
    const handleCommentSubmit = (e) => {
        e.preventDefault();
        API.createComment({
            userName: userData.userName,
            profileIMG: userData.profileImg,
            postID: id,
            body: commentBody
        })
        .then(response => console.log(response))
        .catch(err => console.log(err))
    }
    return (
        <div className="card mb-2">
            {/* <a className="card-text">{timeStamp}</a> */}
            <h5 className="card-header"><ProfileIcon profileImg={profileImg} /><span className="ml-2">{userName}</span><a className="timeStamp"><Moment fromNow>{timeStamp}</Moment></a></h5>
            <div className="card-body">
                <h5 className="card-title">{content}</h5>
            </div>
            <button href="#" className="btn btn-primary" style={{ "lineHeight": 1 }} data-id={id}>Comment</button>
            <form onSubmit={handleCommentSubmit}>
                <Input id={id}
                    name="commentInput"
                    onChange={onChangeHandler}
                    value={commentBody} />
                <FormBtn className="btn btn-success" type="submit">Submit</FormBtn>
            </form>
        </div>
    );
}

export default FeedCard;