import React, { Component, createContext } from "react";

export const AuthContext = createContext();

class AuthContextProvider extends Component {
  state = {
    logInFunction: userObject => {
      const client = userObject.user;
      this.setState({
        isAuthenticated: true,
        userData: {
          userName: client.userName,
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
    updateFriendRequests: (payLoad) => {
      const userDataCopy = {...this.state.userData}
      console.log(payLoad)
          userDataCopy.sentFriendRequests = payLoad.sentFriendRequests;
          userDataCopy.friendList = payLoad.friendList;
          userDataCopy.receivedFriendRequests = payLoad.receivedFriendRequests
          sessionStorage.setItem('project3user', JSON.stringify(userDataCopy))
          this.setState({ userData: userDataCopy });
    },
    isAuthenticated: false,
    userData: {}
  };

  toggleAuth = () => {
    console.log("auth toggle");
    this.setState({ isAuthenticated: !this.state.isAuthenticated });
  };

  componentDidMount(){
    if (!this.state.isAuthenticated) {
      const user = JSON.parse(sessionStorage.getItem("project3user"));
      console.log(user)
  
      if (user !== undefined && user !== null) {
        const userObject = {
          user: {
            userName: user.userName,
            firstName: user.firstName,
            lastName: user.lastName,
            age: user.age,
            friendList: user.friendList,
            sentFriendRequests: user.sentFriendRequests,
            receivedFriendRequests: user.receivedFriendRequests,
            token: user.token,
          }
        };
        this.state.logInFunction(userObject);
      }
    }
  }

  render() {

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
