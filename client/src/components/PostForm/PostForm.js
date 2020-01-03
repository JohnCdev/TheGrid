import React, { useState, useContext } from 'react';
import { TextArea, FormBtn } from '../Form/Form';
import { AuthContext } from "../../context/AuthContext";
import API from '../../utils/API';
import "./PostForm.css";


const PostForm = ({ reloadPosts, clan = false, name }) => {
    const { userData } = useContext(AuthContext);
    const [post, setPost] = useState('');

    const handlePostSubmit = (e) => {
        e.preventDefault();
        if (!clan) {
            const sessionName = sessionStorage.getItem('project3username')
            API.createPost({
                userName: sessionName,
                content: post,
                timeStamp: Date.now(),
                clanName: ""
            }).then(data => {
                console.log(data)
                setPost('')
                reloadPosts()
            })
                .catch(err => console.log(err))
        } else {
            const sessionName = sessionStorage.getItem('project3username')
            API.createPost({
                userName: sessionName,
                content: post,
                timeStamp: Date.now(),
                clanName: name

            })
                .then(data => {
                    console.log(name)
                    console.log(data)
                    setPost('')
                    reloadPosts()
                })
                .catch(err => console.log(err))

        }
    }

    const handleClickCancel = (e) => {
        setPost('');
    }

    const onChangeHandler = (e) => {
        setPost(e.target.value);
    }

    return (
        <section style={{ 'marginBottom': '50px' }}>
            <form id="postBackground" onSubmit={handlePostSubmit}>
                <label id="postTitle" htmlFor="postComment">Create Post</label>
                <TextArea
                    id="postComment"
                    name="postComment"
                    onChange={onChangeHandler}
                    value={post}
                    rows="5"
                    required
                />
                <FormBtn
                    className="btn btn-danger ml-2"
                    type="button"
                    onClick={handleClickCancel}
                >
                    Cancel Post
                </FormBtn>
                <FormBtn
                    className="btn btn-success"
                    type="submit"
                >
                    Submit Post
                </FormBtn>
            </form>
        </section>
    );
}

export default PostForm;