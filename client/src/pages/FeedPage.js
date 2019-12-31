import React, { useState, useEffect, useContext } from "react";
import { Container } from "../components/Grid/Grid";
import AlliesBar from "../components/AlliesBar/AlliesBar";
import Feed from "../components/Feed/Feed";
import PostForm from "../components/PostForm/PostForm"
import API from "../utils/API";
import Header from "../components/Header/Header";
import {AuthContext} from '../context/AuthContext';
import {Redirect} from 'react-router';

const FeedPage = () => {
    const { isAuthenticated } = useContext(AuthContext);
    const [feed, setFeed] = useState([
        { id: 1, userName: "John", timeStamp: "12:12:12", content: "Yo, this is an awesome post.", profileImg: "https://pbs.twimg.com/profile_images/897250392022540288/W1T-QjML_400x400.jpg" },
        { id: 2, userName: "Shawn", timeStamp: "12:12:12", content: "Yo, this is an awesome post.", profileImg: "https://pbs.twimg.com/profile_images/897250392022540288/W1T-QjML_400x400.jpg" },
        { id: 3, userName: "Charles", timeStamp: "12:12:12", content: "Yo, this is an awesome post.", profileImg: "https://pbs.twimg.com/profile_images/897250392022540288/W1T-QjML_400x400.jpg" },
        { id: 4, userName: "Tripp", timeStamp: "12:12:12", content: "Yo, this is an awesome post.", profileImg: "https://pbs.twimg.com/profile_images/897250392022540288/W1T-QjML_400x400.jpg" }
    ]);

    useEffect(() => {
        API.getAllyList({ userName: sessionStorage.getItem('project3username') })
            .then(data => {
                API.getFeedPosts({friendList: data.data})
                .then(data => setFeed(data.data))
                .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    }, [])

    const reloadPosts = () => {
        API.getAllyList({ userName: sessionStorage.getItem('project3username') })
            .then(data => {
                API.getFeedPosts({friendList: data.data})
                .then(data => setFeed(data.data))
                .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    }

    if (!isAuthenticated) {
        return <Redirect to='/log-in' />
    }

    return (
        <main style={{ "height": "100%", "marginBottom": "200px" }}>
            <Header headerText="Your Feed" />
            <AlliesBar />
            <Container>
                <PostForm reloadPosts={reloadPosts} />
                {feed.length > 0 ?
                    <Feed feed={feed} /> :
                    <h1>You have no feed</h1>}
            </Container>
        </main>
    )
}

export default FeedPage;

