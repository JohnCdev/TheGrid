import React, { useState, useContext, useEffect } from 'react';
import { Input, FormBtn } from '../Form/Form'
import { AuthContext } from '../../context/AuthContext'
import API from '../../utils/API';
import './comments.css';
import ProfileIcon from '../ProfileIcon/ProfileIcon';
import Moment from 'react-moment';

const Comments = ({ handleToggle, postID }) => {
    const { userData } = useContext(AuthContext)
    const [commentBody, setComment] = useState('')
    const [commentArray, setCommentArray] = useState([])

    useEffect(() => {
        loadCommments()
    }, []);

    const onChangeHandler = (e) => {
        setComment(e.target.value)
    }

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        API.createComment({
            userName: userData.userName,
            profileIMG: userData.profileImg,
            postID: postID,
            body: commentBody
        })
            .then(res => {
                loadCommments()
                setComment('')
            })
            .catch(err => console.log(err))
    }

    const loadCommments = () => {
        API.getComments({'postID': postID})
            .then(res => {
                console.log(res)
                setCommentArray(res.data)
            })
            .catch(err => console.log(err))
    }

    return (
        <section className="comments p-1">
            {commentArray.length > 0 ?
                <div className="commentList m-1 ml-4">
                    {commentArray.map((comment) => {
                        return (
                            <div className="card commentListItem rounded mb-2" key={comment._id}>
                                <div className="card-header">
                                    <ProfileIcon profileImg={comment.profileIMG} />
                                    <span className="ml-2">{comment.userName}</span>
                                    <a className="timeStamp">
                                        <Moment fromNow>{comment.timeStamp}</Moment>
                                    </a>
                                </div>
                                <div className="card-body p-2">
                                    <p>{comment.body}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                :
                <p color={{ 'color': '#e1e1e1' }}>Be the first</p>}
            <form onSubmit={handleCommentSubmit}>
                <label htmlFor="commentInput">Comment</label>
                <Input
                    id="commentInput"
                    name="commentInput"
                    onChange={onChangeHandler}
                    value={commentBody} 
                    required/>
                <FormBtn className="btn btn-success" type="submit">Submit</FormBtn>
            </form>
            <button className="btn btn-primary" onClick={handleToggle}>Close Comments</button>
        </section>
    );
}

export default Comments;