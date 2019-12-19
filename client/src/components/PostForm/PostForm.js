import React, { useState, useContext } from 'react';
import { TextArea, FormBtn } from '../Form/Form';
import { AuthContext } from "../../context/AuthContext";

const PostForm = () => {
    const { userData } = useContext(AuthContext);
    const [post, setPost] = useState('');

    const handlePostSubmit = (e) => {
        e.preventDefault();
        console.log(post)
        console.log(sessionStorage.getItem('userName'))
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