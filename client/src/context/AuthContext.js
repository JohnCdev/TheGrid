import React, { Component, createContext } from "react";

export const AuthContext = createContext();

class AuthContextProvider extends Component {
  state = {
    logInFunction: (userObject) => {
      console.log(userObject)
        this.setState({
            isAuthenticated: true,
            userData: {
              id: userObject.user.user.id,
              userName: userObject.user.user.userName,
              email: userObject.user.user.email,
              token: userObject.user.token
            }
        })
    },
    isAuthenticated: false
  };

  toggleAuth = () => {
    console.log("auth toggle")
    this.setState({ isAuthenticated: !this.state.isAuthenticated });
  };

  render() {
    return (
        <AuthContext.Provider value={{...this.state, toggleAuth: this.toggleAuth}}>
            { this.props.children }
        </AuthContext.Provider>
    )
  }
}

export default AuthContextProvider;
