import React, { Component, createContext } from "react";

export const AuthContext = createContext();

class AuthContextProvider extends Component {
  state = {
    logInFunction: (userObject) => {
      console.log(userObject.user.user)
        this.setState({
            isAuthenticated: true,
            userData: {
              userName: userObject.user.user,
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
    if(!this.state.isAuthenticated){
      const user = JSON.parse(sessionStorage.getItem('project3user'))
      const userObject = {
        user: {
          user: user.user,
          token: user.token
        }
      }
      this.state.logInFunction(userObject)
    }
    return (
        <AuthContext.Provider value={{...this.state, toggleAuth: this.toggleAuth}}>
            { this.props.children }
        </AuthContext.Provider>
    )
  }
}

export default AuthContextProvider;
