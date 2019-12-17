import React, { Component } from "react";
import API from "../utils/API";
import { Container } from "../components/Grid/Grid";

class ViewUserProfile extends Component {

    componentDidMount(){
        const profile = this.props.match.params.userProfile
        console.log(profile)
        API.getUserProfile(profile)
        .then(res => {
            console.log(res)
            //update state and get the components to update
        })
    }
    
  render() {

    const profile = this.props.match.params.userProfile
    return (
      <Container>
         {profile}
      </Container>
    );
  }
}

export default withRouter(ViewUserProfile);
