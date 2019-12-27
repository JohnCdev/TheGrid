import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import API from "../utils/API";
import { Container } from "../components/Grid/Grid";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import ProfilePicture from "../components/ProfilePicture/ProfilePicture";
import AddFriend from '../components/AddFriend/AddFriend';
import Header from "../components/Header/Header";

class ViewUserProfile extends Component {
  //initial state
  state = {
    _id: "",
    currentCity: "",
    firstName: "",
    lastName: "",
    userName: "",
    age: ""
  };

  componentDidMount() {
    const profile = this.props.match.params.userProfile;
    API.getUserProfile(profile).then(res => {
      const userProfile = res.data.data[0];
      //if user profile is not returned, set id equal to null otherwise fill out the state
      userProfile === undefined
        ? this.setState({ id: null })
        : this.setState({
          _id: userProfile._id,
          currentCity: userProfile.currentCity,
          firstName: userProfile.firstName,
          lastName: userProfile.lastName,
          userName: userProfile.userName,
          age: userProfile.age
        });
    });
  }

  render() {
    //if no user returned say no user found, otherwise render the profile page.
    return this.state.id === null ? (
      <>
        <Header headerText={404}/>
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
          <Header headerText={`${this.state.username}'s Profile`}/>
          <Jumbotron>
            <h1>{this.state.userName}</h1>
            <h3>Latest Status Update?</h3>
            <h3>About? What clans/games they play?</h3>
            <h3>Last logged in?</h3>
            <ProfilePicture
              location={this.state.currentCity}
              age={this.state.age}
            />
            <AddFriend
              viewedProfile={this.state.userName}
            />
          </Jumbotron>
          <Container>{this.state.userName}</Container>
        </>
      );
  }
}

export default withRouter(ViewUserProfile);
