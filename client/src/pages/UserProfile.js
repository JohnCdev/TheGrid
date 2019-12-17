import React, { Component, useEffect, useState, useContext } from "react";
import { Link, withRouter } from "react-router-dom";
import API from "../utils/API";
import { Container } from "../components/Grid/Grid";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import { Redirect } from "react-router";
import { AuthContext } from "../context/AuthContext";
import Nav from "../components/Nav/Nav";




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
