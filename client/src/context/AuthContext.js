import React, { Component, createContext } from "react";

export const AuthContext = createContext();

class AuthContextProvider extends Component {
  state = {
    logInFunction: (userObject) => {
        this.setState({
            isAuthenticated: true,
            userData: userObject
        })
    },
    isAuthenticated: false
  };

  logOut = () => {
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
