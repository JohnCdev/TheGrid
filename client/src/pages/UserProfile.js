import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import API from "../utils/API";
import { Container } from "../components/Grid/Grid";

class ViewUserProfile extends Component {
  state = {
    id: "",
    currentCity: "",
    firstName: "",
    lastName: "",
    userName: "",
    age: ""
  };

  componentDidMount() {
    const profile = this.props.match.params.userProfile;
    console.log(profile);
    API.getUserProfile(profile).then(res => {
      console.log(res.data.data[0]);
      const userProfile = res.data.data[0];
      userProfile === undefined
        ? this.setState({ id: null })
        : this.setState({
            id: userProfile._id,
            currentCity: userProfile.currentCity,
            firstName: userProfile.firstName,
            lastName: userProfile.lastName,
            userName: userProfile.userName,
            age: userProfile.age
          });

      //update state and get the components to update
    });
  }

  render() {
    return this.state.id === null ? (
      <Container>No Profile Found</Container>
    ) : (
      <Container>{this.state.userName}</Container>
    );
  }
}

export default withRouter(ViewUserProfile);
