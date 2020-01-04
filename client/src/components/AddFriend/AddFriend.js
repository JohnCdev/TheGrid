import React, { useContext } from "react";
import { AuthContext, userData } from "../../context/AuthContext";
import "./AddFriend.css";
import API from "../../utils/API";

export default function AddFriend(props) {
  const { userData, updateFriendRequests } = useContext(AuthContext);
  if (props.viewedProfile && props.viewedProfile !== userData.userName) {
    let button;
    const removeFriendButton = (
      <button className="btn btn-primary addFriend"
        onClick={() => {
          API.friendRequest(
            "remove-friend",
            userData.userName,
            props.viewedProfile,
            userData.token
          ).then(res => {
            updateFriendRequests(res.data);
            props.helloWorld("remove-friend", props.viewedProfile);
          });
        }}
      >
        Remove Ally
      </button>
    );
    const requestSentButton = <button className="btn btn-primary">Request Sent</button>;
    const theirRequestPendingButton = (
      <button className="btn btn-primary addFriend"
        onClick={() => {
          API.friendRequest(
            "accept-friend-request",
            userData.userName,
            props.viewedProfile,
            userData.token
          ).then(res => {
            updateFriendRequests(res.data);
            props.helloWorld("accept-friend-request", props.viewedProfile);
          });
        }}
      >
        Accept Alliance Request
      </button>
    );

    const sendFriendRequestButton = (
      <button className="btn btn-primary addFriend"
        onClick={() => {
          API.friendRequest(
            "request-friend",
            userData.userName,
            props.viewedProfile,
            userData.token
          ).then(res => {
            updateFriendRequests(res.data);
            props.helloWorld("request-friend", props.viewedProfile);
          });
        }}
      >
        Send Alliance Request
      </button>
    );
    //render the button conditionally based on:
    button =
      //viewed profile is a friend
      props.friendContext === "friend"
        ? removeFriendButton
        : //viewed profile has a friend request pending
        props.friendContext === "their-received-request-pending"
        ? requestSentButton
        : //viewed profile sent client a friend request
        props.friendContext === "their-sent-request-pending"
        ? theirRequestPendingButton
        : //default: viewed profile is not a friend or a potential friend yet
          sendFriendRequestButton;
    return button;
  } else {
    return ""
  }
}
