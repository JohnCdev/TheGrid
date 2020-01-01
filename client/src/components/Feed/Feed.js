import React, { useEffect } from 'react';
import FeedCard from '../FeedCard/FeedCard';
import './Feed.css'

const Feed = ({ feed, name}) => {

    useEffect(() => {
        console.log(feed)
    });

    return (
        <div>
            <h1 className="feedTitle">{`${name}'s sources`}</h1>
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