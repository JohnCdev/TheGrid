import React, { useState, useEffect } from "react";
import { Container } from "../components/Grid/Grid";
import AlliesBar from "../components/AlliesBar/AlliesBar";
import Feed from "../components/Feed/Feed";
import PostForm from "../components/PostForm/PostForm"
import API from "../utils/API";

const FeedPage = () => {
    const [feed, setFeed] = useState([
        { _id: 1, userName: "John", timeStamp: "12:12:12", content: "Yo, this is an awesome post." },
        { _id: 2, userName: "Shawn", timeStamp: "12:12:12", content: "Yo, this is an awesome post." },
        { _id: 3, userName: "Charles", timeStamp: "12:12:12", content: "Yo, this is an awesome post." },
        { _id: 4, userName: "Tripp", timeStamp: "12:12:12", content: "Yo, this is an awesome post." }
    ]);

    useEffect(() => {
        API.getUserPosts({userName: "jastring"})
        .then(data => {
            setFeed(data)
            console.log(feed)
        })
        .catch(err => console.log(err))
    },[])

    return (
        <main style={{ "height": "100%", "marginBottom": "200px" }}>
            <AlliesBar />
            <Container>
                <PostForm />
                {feed.length > 0 ?
                    <Feed feed={feed} /> :
                    <h1>You have no feed</h1>}
            </Container>
        </main>
    )
}

export default FeedPage;

