import React, { useState, useContext } from 'react';
import { TextArea, FormBtn } from '../Form/Form';
import { AuthContext } from "../../context/AuthContext";
import API from '../../utils/API';
import "./PostForm.css";


const PostForm = ({ reloadPosts, clan = false, name }) => {
    const { userData } = useContext(AuthContext);
    const [post, setPost] = useState('');
    const [makePost, postSet] = useState(false);

    const handlePostSubmit = (e) => {
        e.preventDefault();
        if (!clan) {
            API.createPost({
                userName: userData.userName,
                profileImg: userData.profileImg,
                content: post,
                timeStamp: new Date(),
                clanName: "",
            }).then(data => {
                setPost('')
                reloadPosts()
            })
                .catch(err => console.log(err))
        } else {
            API.createPost({
                userName: userData.userName,
                profileImg: userData.profileImg,
                content: post,
                timeStamp: new Date(),
                clanName: name

            })
                .then(data => {
                    setPost('')
                    reloadPosts()
                })
                .catch(err => console.log(err))

        }
    }

    const handleClickCancel = () => {
        setPost('');
    }

    const onChangeHandler = (e) => {
        setPost(e.target.value);
    }


    const handleToggle = () => {
        handleClickCancel();
        postSet(makePost => !makePost)
    }

    return (
        <div style={{ 'marginBottom': '60px',  'marginTop': '60px'}}>
            {!makePost ?
        <button className="btn btn-success make-post" onClick={handleToggle}>{makePost ? "Send It!!" : "Make a Post"}</button>
            
            :
            <form id="postBackground" onSubmit={handlePostSubmit}>
                <label id="postTitle" htmlFor="postComment"><i className="fa fa-pencil"></i> Create Post</label>
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
                    onClick={handleToggle}
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
            }
        </div>
    );
}

export default PostForm;