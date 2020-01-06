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
import Brand from "../images/Logos/grid.png";




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
    userFeed: [],
    friendRenderContext: ""
  };

  componentDidMount = event => {
    const { userData } = this.context;
    const profile = this.props.match.params.userProfile;
    API.getUserProfile(profile, { client: userData.userName }).then(res => {
      let friendContext;
      const userProfile = res.data.data[0];

      const setTheState = (obj, friendContextValue) => {

        //if(friendContextValue === 'friend' || profile === userData.userName){
        this.setState({
          _id: obj._id,
          currentCity: obj.currentCity,
          firstName: obj.firstName,
          lastName: obj.lastName,
          userName: obj.userName,
          age: obj.age,
          friendList: obj.friendList,
          sentFriendRequests: obj.sentFriendRequests,
          receivedFriendRequests: obj.receivedFriendRequests,
          friendContext: friendContext,
          profileImg: obj.profileIMG,
          favGames: obj.favGames,
          steamIGN: obj.steamIGN,
          discordIGN: obj.discordIGN,
          battleNetIGN: obj.battleNetIGN,
          epicIGN: obj.epicIGN,
          originIGN: obj.originIGN,
          friendRenderContext: friendContextValue
        });

      };

      if (userProfile) {
        const { userData } = this.context;
        const profile = this.props.match.params.userProfile;

        switch (true) {
          case userProfile.friendList.includes(userData.userName) || profile === userData.userName:
            friendContext = "friend";
            setTheState(userProfile, "friend");
            return this.reloadPosts();

          case userProfile.sentFriendRequests.includes(userData.userName):
            friendContext = "their-sent-request-pending";
            return setTheState(userProfile, "not-friend");

          case userProfile.receivedFriendRequests.includes(userData.userName):
            friendContext = "their-received-request-pending";
            return setTheState(userProfile, "not-friend");

          default:
            friendContext = "not-a-friend";
            return setTheState(userProfile, "not-friend");
        }
      } else {
        this.setState({ _id: null });
      }
    });
  };

  reloadPosts = () => {
    console.log("API to reload posts");
    API.getUserPosts({
      userName: this.state.userName,
      clanName: ""
    })
      .then(response => {
        this.setState({
          userFeed: response.data
        });
      })
      .catch(err => console.log(err));
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
            friendContext: "friend",
            friendRenderContext: 'friend'
          });

        case "remove-friend":
          const updatedFriendList = this.state.friendList.filter(
            friend => friend !== value
          );
          return this.setState({
            friendList: updatedFriendList,
            friendContext: "not-a-friend",
            friendRenderContext: 'not-friend'
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
    ) : this.state.friendRenderContext === "friend" ? (
      <>
        <Nav />
        <main>
          <Container className="mt-4">
            <Row>
              <div className="cold-sm-12 col-md-3">
                <div style={{ width: "100%", height: "200px", textAlign: "center" }}
                >
                  <ProfilePicture
                    location={this.state.currentCity}
                    age={this.state.age}
                    profileImg={this.state.profileImg}
                  />

                </div>
                <div style={{ width: "100%", height: "10", textAlign: "center" }}
                >
                  <Header headingLevel={3} headerText={`${this.state.userName}`}
                  />
                </div>
                <hr />


                <div style={{ 'wordWrap': 'break-word' }}>
                  {/* <h3>Latest Status Update?</h3> */}
                  {/* <h3>Last logged in?</h3> */}
                  {this.state.steamIGN !== "" ? (
                    <>
                      <h4>{`Steam: ${this.state.steamIGN}`}</h4>
                      <hr />
                    </>
                  ) : null}
                  {this.state.discordIGN !== "" ? (
                    <>
                      <h4>{`Discord: ${this.state.discordIGN}`}</h4>
                      <hr />
                    </>
                  ) : null}
                  {this.state.epicIGN !== "" ? (
                    <>
                      <h4>{`Epic: ${this.state.epicIGN}`}</h4>
                      <hr />
                    </>
                  ) : null}
                  {this.state.battleNetIGN !== "" ? (
                    <>
                      <h4>{`BattleNet: ${this.state.battleNetIGN}`}</h4>
                      <hr />
                    </>
                  ) : null}
                  {this.state.originIGN !== "" ? (
                    <>
                      <h4>{`Origin: ${this.state.originIGN}`}</h4>
                      <hr />
                    </>
                  ) : null}
                  {this.state.favGames.length !== 0 ? (
                    <>
                      <h4>{`${this.state.userName}'s Favorite Games:`}</h4>
                      <ol>
                        {this.state.favGames.map((game, i) => (
                          <li key={i}>{game}</li>
                        ))}
                      </ol>
                    </>
                  ) : null}
                </div>
                <AddFriend
                  friendContext={this.state.friendContext}
                  viewedProfile={this.state.userName}
                  helloWorld={helloWorld}
                />
              </div>
              <div className="col-sm-12 col-md-9">
                <img src={Brand} className="brand" alignment="center" />
                <hr />

                <section className="rounded pt-3 pl-1 pr-1 pb-1">
                  {this.state.userFeed.length > 0 ? (
                    <Feed
                      feed={this.state.userFeed}
                      reloadPosts={this.reloadPosts}
                      name={this.state.userName}
                    />
                  ) : (
                      <p
                        style={{
                          backgroundColor: "#3c4042",
                          textAlign: "center"
                        }}
                      >{`${this.state.userName} has no feed. (Yet!)`}</p>
                    )}
                </section>
              </div>
            </Row>
          </Container>
        </main>
      </>
    ) : (
          <>
            <Nav />
            <main>
              <Container className="mt-4">
                <Row>
                  <div className="cold-sm-12 col-md-3">
                    <div
                      style={{ width: "100%", height: "250px", textAlign: "left" }}
                    >
                      <Header headerText={`${this.state.userName}`} />
                      <ProfilePicture
                        location={this.state.currentCity}
                        age={this.state.age}
                        profileImg={this.state.profileImg}
                      />
                    </div>
                    <AddFriend
                      friendContext={this.state.friendContext}
                      viewedProfile={this.state.userName}
                      helloWorld={helloWorld}
                    />
                  </div>
                </Row>
              </Container>
            </main>
          </>
        );
  }
}

export default withRouter(ViewUserProfile);
