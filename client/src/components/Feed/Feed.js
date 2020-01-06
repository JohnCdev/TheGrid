import React, { useEffect } from 'react';
import FeedCard from '../FeedCard/FeedCard';
import './feed.css'

const Feed = ({ feed, name}) => {

    useEffect(() => {
        console.log(feed)
    });

    return (
        <div>
            {feed.map(post => (
                <FeedCard
                    key={post._id}
                    id={post._id}
                    userName={post.userName}
                    timeStamp={post.timeStamp}
                    content={post.content}
                    profileImg={post.profileImg}
                    numComments={post.numComments}
                />
            ))}
        </div>
    );
}

export default Feed;