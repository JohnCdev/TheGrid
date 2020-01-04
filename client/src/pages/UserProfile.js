import React, { Component } from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
import API from "../utils/API";
import { Container, Row } from "../components/Grid/Grid";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import ProfilePicture from "../components/ProfilePicture/ProfilePicture";
import AddFriend from "../components/AddFriend/AddFriend";
import Nav from "../components/Nav/Nav";
import Header from "../components/Header/Header";
import { AuthContext } from "../context/AuthContext";
import PostForm from "../components/PostForm/PostForm";
import Feed from "../components/Feed/Feed";

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
    profileImg: "",
    battleNetIGN: "",
    discordIGN: "",
    epicIGN: "",
    originIGN: "",
    steamIGN: "",
    favGames: [],
    userFeed: []
  };

  componentDidMount = event => {
    const profile = this.props.match.params.userProfile;
    API.getUserProfile(profile).then(res => {
      const { userData } = this.context;
      let friendContext;
      const userProfile = res.data.data[0];
      if (userProfile) {
        userProfile.friendList.includes(userData.userName)
          ? friendContext = "friend"
          : userProfile.sentFriendRequests.includes(userData.userName)
            ? friendContext = "their-sent-request-pending"
            : userProfile.receivedFriendRequests.includes(userData.userName)
              ? friendContext = "their-received-request-pending"
              : friendContext = "not-a-friend";
      }

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
          friendContext: friendContext,
          profileImg: userProfile.profileIMG,
          favGames: userProfile.favGames,
          steamIGN: userProfile.steamIGN,
          discordIGN: userProfile.discordIGN,
          battleNetIGN: userProfile.battleNetIGN,
          epicIGN: userProfile.epicIGN,
          originIGN: userProfile.originIGN,
        });
      this.reloadPosts();
    });
  }

  reloadPosts = () => {
    console.log("API to reload posts");
    API.getUserPosts({
      userName: this.state.userName,
      clanName: ""
    })
      .then(response => {
        this.setState({
          userFeed: response.data
        })
      })
      .catch(err => console.log(err))
  };


  render() {

    // need links for it to work first (discover page)
    const { isAuthenticated } = this.context;
    // if (!isAuthenticated) {
    //   return <Redirect to='/log-in' />
    // }

    // console.log(this.state)

    //this.setState({friendContext})
    const helloWorld = (command, value) => {
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
          <main>
            <Container className="mt-4">
              <Row>
                <div className="cold-sm-12 col-md-3">
                  <div style={{ 'width': '100%', 'height': '300px' }}>
                    <Header headerText={`${this.state.userName}`} />
                    <ProfilePicture
                      location={this.state.currentCity}
                      age={this.state.age}
                      profileImg={this.state.profileImg}
                    />
                  </div>
                  <div>
                    {/* <h3>Latest Status Update?</h3> */}
                    {/* <h3>Last logged in?</h3> */}
                    <hr />
                    <h4>{`Steam: ${this.state.steamIGN}`}</h4>
                    <hr />
                    <h4>{`Discord: ${this.state.discordIGN}`}</h4>
                    <hr />
                    <h4>{`Epic: ${this.state.epicIGN}`}</h4>
                    <hr />
                    <h4>{`BattleNet: ${this.state.battleNetIGN}`}</h4>
                    <hr />
                    <h4>{`Origin: ${this.state.originIGN}`}</h4>
                    <hr />
                    <h4>{`${this.state.userName}'s Favorite Games:`}</h4>
                    <ol>
                      {this.state.favGames.map((game, i) => <li key={i}>{game}</li>)}
                    </ol>
                  </div>
                  <AddFriend
                    friendContext={this.state.friendContext}
                    viewedProfile={this.state.userName}
                    helloWorld={helloWorld}
                  />
                </div>
                <div className="col-sm-12 col-md-9">
                  <section className="rounded pt-3 pl-1 pr-1 pb-1">
                    {this.state.userFeed.length > 0 ? (
                      <Feed feed={this.state.userFeed} reloadPosts={this.reloadPosts} name={this.state.userName} />
                    ) : (
                        <h2 style={{'backgroundColor':'#3c4042','textAlign':'center'}}>{`${this.state.userName} has no feed. (Yet!)`}</h2>
                      )}
                  </section>
                </div>
              </Row>
            </Container>
          </main>
        </>
      );
  }
}

export default withRouter(ViewUserProfile);
