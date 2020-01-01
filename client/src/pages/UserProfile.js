import React, { Component } from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
import API from "../utils/API";
import { Container } from "../components/Grid/Grid";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import ProfilePicture from "../components/ProfilePicture/ProfilePicture";
import AddFriend from "../components/AddFriend/AddFriend";
import Nav from "../components/Nav/Nav";
import Header from "../components/Header/Header";
import { AuthContext } from "../context/AuthContext";

class ViewUserProfile extends Component {
  static contextType = AuthContext;

  //initial state
  state = {
    _id: "",
    currentCity: "",
    firstName: "",
    lastName: "",
    userName: "",
    age: "",
    friendList: [],
    sentFriendRequests: [],
    receivedFriendRequests: [],
    friendContext: "",
    profileImg: "Default5"
  };

  componentDidMount() {
    const profile = this.props.match.params.userProfile;
    API.getUserProfile(profile).then(res => {
      const { userData } = this.context;
      let friendContext;
      const userProfile = res.data.data[0];
      userProfile.friendList.includes(userData.userName)
        ? friendContext = "friend"
        : userProfile.sentFriendRequests.includes(userData.userName)
        ? friendContext = "their-sent-request-pending"
        : userProfile.receivedFriendRequests.includes(userData.userName)
        ? friendContext = "their-received-request-pending"
        : friendContext = "not-a-friend";

      //if user profile is not returned, set id equal to null otherwise fill out the state
      userProfile === undefined
        ? this.setState({ _id: null })
        : this.setState({
            _id: userProfile._id,
            currentCity: userProfile.currentCity,
            firstName: userProfile.firstName,
            lastName: userProfile.lastName,
            userName: userProfile.userName,
            age: userProfile.age,
            friendList: userProfile.friendList,
            sentFriendRequests: userProfile.sentFriendRequests,
            receivedFriendRequests: userProfile.receivedFriendRequests,
            friendContext: friendContext
          });
    });
  }

  render() {

    // need links for it to work first (discover page)
    const { isAuthenticated } = this.context;
    // if (!isAuthenticated) {
    //   return <Redirect to='/log-in' />
    // }

    //this.setState({friendContext})
    const helloWorld = (command, value) => {
      console.log(this);
      switch (command) {
        case "request-friend":
          const receivedFriendRequests = [
            ...this.state.receivedFriendRequests,
            value
          ];
          return this.setState({
            receivedFriendRequests,
            friendContext: "their-received-request-pending"
          });

        case "accept-friend-request":
          const sentFriendRequests = this.state.sentFriendRequests.filter(
            friend => friend !== value
          );
          const newFriendList = this.state.friendList.push(value);
          return this.setState({
            sentFriendRequests,
            friendList: newFriendList,
            friendContext: "friend"
          });

        case "remove-friend":
          const updatedFriendList = this.state.friendList.filter(
            friend => friend !== value
          );
          return this.setState({
            friendList: updatedFriendList,
            friendContext: "not-a-friend"
          });
      }
    };

    //if no user returned say no user found, otherwise render the profile page.

    console.log(`this friendList: ${this.state.friendList}`);
    console.log(`this sentFriendRequests: ${this.state.sentFriendRequests}`);
    console.log(
      `this receivedFriendRequests: ${this.state.receivedFriendRequests}`
    );

    return this.state._id === null ? (
      <>
      <Nav />
        <Header headerText={404} />
        <Jumbotron>
          <h1>User Not Found</h1>
          <h1>
            <span role="img" aria-label="Face With Rolling Eyes Emoji">
              🙄
            </span>
          </h1>
        </Jumbotron>
      </>
    ) : (
      <>
      <Nav />
        <Header headerText={`${this.state.username}'s Profile`} />
        <Jumbotron>
          <h1>{this.state.userName}</h1>
          <h3>Latest Status Update?</h3>
          <h3>About? What clans/games they play?</h3>
          <h3>Last logged in?</h3>
          <ProfilePicture
            location={this.state.currentCity}
            age={this.state.age}
            profileImg={this.state.profileImg}
          />
          <AddFriend
            friendContext={this.state.friendContext}
            viewedProfile={this.state.userName}
            helloWorld={helloWorld}
          />
        </Jumbotron>
        <Container>{this.state.userName}</Container>
      </>
    );
  }
}

export default withRouter(ViewUserProfile);
