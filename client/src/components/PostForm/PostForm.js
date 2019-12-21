import React, { useState, useContext } from 'react';
import { TextArea, FormBtn } from '../Form/Form';
import { AuthContext } from "../../context/AuthContext";
import API from '../../utils/API';

const PostForm = ({ reloadPosts }) => {
    const { userData } = useContext(AuthContext);
    const [post, setPost] = useState('');

    const handlePostSubmit = (e) => {
        e.preventDefault();
        const sessionName = sessionStorage.getItem('project3username')
        API.createPost({
            userName: sessionName,
            content: post,
            timeStamp: Date.now()
        }).then(data => {
            console.log(data)
            reloadPosts()
        })
            .catch(err => console.log(err))
    }

    const handleClickCancel = (e) => {
        setPost('');
    }

    const onChangeHandler = (e) => {
        setPost(e.target.value);
    }

    return (
        <section>
            <form onSubmit={handlePostSubmit}>
                <label htmlFor="postComment">Post</label>
                <TextArea
                    id="postComment"
                    name="postComment"
                    onChange={onChangeHandler}
                    value={post}
                />
                <FormBtn type="button" onClick={handleClickCancel}>Cancel Post</FormBtn>
                <FormBtn type="submit">Submit Post</FormBtn>
            </form>
        </section>
    );
}

export default PostForm;