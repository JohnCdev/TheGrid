import React, { useState } from 'react';
import './notifications.css';

const initialNotifications = [
    { _id: 1, postType: "allyPost", userName: "John", timeStamp: '10:10:10' },
    { _id: 2, postType: "clanPost", userName: "Average", timeStamp: '10:10:10' }
]

const Notifications = () => {
    const [hasNotify, setHasNotify] = useState(true);

    const [notifications, setNotifications] = useState(initialNotifications);

    return (
        <>
            {hasNotify && <i className="material-icons mr-2">notifications_active</i>}
            <div className="dropdown mr-2">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Notifications
                </button>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                    {notifications.map(noti => {
                        return (
                            <div key={noti._id}>
                                <a className="dropdown-item"
                                    href={noti.postType === 'allyPost' ? "/feed" : "/clans"}
                                >
                                    {`${noti.userName} has made a post | ${noti.timeStamp}`}
                                </a>
                                <div className="dropdown-divider"></div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default Notifications;