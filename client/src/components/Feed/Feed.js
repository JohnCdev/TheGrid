import React, { useEffect } from 'react';
import FeedCard from '../FeedCard/FeedCard';

const Feed = ({ feed }) => {

    useEffect(() => {
        console.log(feed)
    });

    return (
        <div>
            <h1>Your Feed Goes Here</h1>
            {feed.map(post => (
                <FeedCard
                    key={post._id}
                    id={post._id}
                    userName={post.userName}
                    timeStamp={post.timeStamp}
                    content={post.content}
                    profileImg={post.profileImg}
                />
            ))}
        </div>
    );
}

export default Feed;