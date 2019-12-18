import React, { Component, createContext } from "react";

export const AuthContext = createContext();

class AuthContextProvider extends Component {
  state = {
    logInFunction: userObject => {
      console.log(userObject.user.user);
      const client = userObject.user;
      this.setState({
        isAuthenticated: true,
        userData: {
          userName: client.user,
          firstName: client.firstName,
          lastName: client.lastName,
          age: client.age,
          friendList: client.friendList,
          sentFriendRequests: client.sentFriendRequests,
          receivedFriendRequests: client.receivedFriendRequests,
          token: client.token
        }
      });
    },
    isAuthenticated: false
  };

  toggleAuth = () => {
    console.log("auth toggle");
    this.setState({ isAuthenticated: !this.state.isAuthenticated });
  };

  render() {
    if (!this.state.isAuthenticated) {
      const user = JSON.parse(sessionStorage.getItem("project3user"));

      if (user !== undefined && user !== null) {
        const userObject = {
          user: {
            user: user.user,
            firstName: user.firstName,
            lastName: user.lastName,
            age: user.age,
            friendList: user.friendList,
            sentFriendRequests: user.sentFriendRequests,
            receivedFriendRequests: user.receivedFriendRequests,
            token: user.token
          }
        };
        this.state.logInFunction(userObject);
      }
    }
    return (
      <AuthContext.Provider
        value={{ ...this.state, toggleAuth: this.toggleAuth }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default AuthContextProvider;
