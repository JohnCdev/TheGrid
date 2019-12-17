import React, { useEffect } from 'react';
import FeedCard from '../'

const Feed = ({ feed }) => {

    useEffect(() => {
        console.log(feed)
    });

    return (
        <div>
            <h1>Your Feed Goes Here</h1>
            <FeedCard />
        </div>
    );
}

export default Feed;