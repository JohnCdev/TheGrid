import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Input, TextArea, FormBtn, InputPassword, InputEmail } from "../components/Form/Form";
import API from "../utils/API";
import { Container } from "../components/Grid/Grid";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import { Redirect } from 'react-router';
import Header from '../components/Header/Header';
import { AuthContext } from '../context/AuthContext';

export default class SignUp extends Component {
  state = {
    userName: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    age: "",
    currentCity: "",
    isNewAccount: false
  }
  static contextType = AuthContext;

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.userName && this.state.email && this.state.password) {
      //add a blank profile element
      API.saveUser({
        userName: this.state.userName,
        email: this.state.email,
        password: this.state.password,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        age: this.state.age,
        currentCity: this.state.currentCity
      })
        .then(this.setState(() => ({
          isNewAccount: true
        })))
        .catch(err => console.log(err));
    }
  };

  render() {

    if (this.state.isNewAccount) {
      return <Redirect to='/log-in' />
    }

    const { isAuthenticated } = this.context;
    if (isAuthenticated) {
      return <Redirect to='/feed' />
    }

    return (
      <main>
        <Container>
          <Jumbotron>
            <Header headerText={'Sign Up'} />
          </Jumbotron>
          <form onSubmit={this.handleFormSubmit}>
            <h3>Account Information</h3>
            <label htmlFor="userName">User Name</label>
            <Input
              value={this.state.userName}
              onChange={this.handleInputChange}
              id="userName"
              name="userName"
              placeholder="User Name"
            />
            <label htmlFor="email">Email</label>
            <InputEmail
              value={this.state.email}
              onChange={this.handleInputChange}
              id="email"
              name="email"
              placeholder="Email"
            />
            <label htmlFor="password">Password</label>
            <InputPassword
              value={this.state.password}
              onChange={this.handleInputChange}
              id="password"
              name="password"
              placeholder="Password"
            />
            <hr />
            <h3>Profile information</h3>
            <label htmlFor="firstName">First Name</label>
            <Input
              value={this.state.firstName}
              onChange={this.handleInputChange}
              id="firstName"
              name="firstName"
              placeholder="First Name"
            />
            <label htmlFor="lastName">Last Name</label>
            <Input
              value={this.state.lastName}
              onChange={this.handleInputChange}
              id="lastName"
              name="lastName"
              placeholder="Last Name"
            />
            <label htmlFor="age">Age</label>
            <Input
              value={this.state.age}
              onChange={this.handleInputChange}
              id="age"
              name="age"
              placeholder="Age"
            />
            <label htmlFor="currentCity">City</label>
            <Input
              value={this.state.currentCity}
              onChange={this.handleInputChange}
              id="currentCity"
              name="currentCity"
              placeholder="City"
            />
            <FormBtn
              //  disabled={!(this.state.userName && this.state.email && this.state.password)}
              className="btn btn-success"
              type="submit"
            >
              Submit
            </FormBtn>
          </form>
        </Container>
      </main>
    )
  }
}
