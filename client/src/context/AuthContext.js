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
          clans: client.clans,
          friendList: client.friendList,
          sentFriendRequests: client.sentFriendRequests,
          receivedFriendRequests: client.receivedFriendRequests,
          token: client.token,
          profileImg: client.profileIMG,
          steamIGN: client.steamIGN,
          discordIGN: client.discordIGN,
          battleNetIGN: client.battleNetIGN,
          epicIGN: client.epicIGN,
          originIGN: client.originIGN,
          favGames: client.favGames
        }
      });
    },
    joinedClan: clanName => {
      const userDataCopy = {...this.state.userData}
      userDataCopy.clans = [...userDataCopy.clans, clanName]
      sessionStorage.setItem('project3user', JSON.stringify(userDataCopy))
      this.setState({ userData: userDataCopy });
    },
    updateFriendRequests: (payLoad) => {
      const userDataCopy = {...this.state.userData}
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
    sessionStorage.removeItem('project3user')
    sessionStorage.removeItem('project3username')
    this.setState({ 
      isAuthenticated: false,
      userData: {}
     });
  };

  componentDidMount(){
    if (!this.state.isAuthenticated) {
      const user = JSON.parse(sessionStorage.getItem("project3user"));
      if (user !== undefined && user !== null) {
        const userObject = { user };
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
