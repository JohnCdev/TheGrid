import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Input,
  TextArea,
  FormBtn,
  InputPassword,
  InputEmail
} from "../components/Form/Form";
import API from "../utils/API";
import { Container } from "../components/Grid/Grid";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import { Redirect } from "react-router";
import Header from "../components/Header/Header";

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
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  alphanumeric = inputtxt => {
    const letterNumber = /^[0-9a-zA-Z]+$/;
    if (inputtxt.match(letterNumber)) {
      return true;
    } else {

      return false;
    }
  };

  alphabet = inputtxt => {
    const letter = /^[a-zA-Z]+$/;
    if (inputtxt.match(letter)) {
      return true;
    } else {
      return false;
    }
  };
  
  numeric = inputtxt => {
    const letterNumber = /^[0-9]+$/;
    if (inputtxt.match(letterNumber)) {
      return true;
    } else {
      return false;
    }
  };

  emailValidator = inputtxt => {
    const email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (inputtxt.match(email)) {
      return true;
    } else {
      return false;
    }
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (
      this.state.userName &&
      this.alphanumeric(this.state.userName) &&
      this.state.email &&
      this.emailValidator(this.state.email) &&
      this.state.password &&
      this.alphanumeric(this.state.password) &&
      this.numeric(this.state.age) &&
      this.alphabet(this.state.firstName) &&
      this.alphabet(this.state.lastName) &&
      this.alphabet(this.state.currentCity)
    ) {
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
        .then(
          this.setState(() => ({
            isNewAccount: true
          }))
        )
        .catch(err => console.log(err));
    }
  };

  render() {
    if (this.state.isNewAccount) {
      return <Redirect to="/log-in" />;
    }
    return (
      <Container>
        <Jumbotron>
          <Header headerText={"Sign Up"} />
        </Jumbotron>
        <form>
          <Input
            value={this.state.userName}
            onChange={this.handleInputChange}
            name="userName"
            placeholder="User Name"
          />
          <InputEmail
            value={this.state.email}
            onChange={this.handleInputChange}
            name="email"
            placeholder="Email"
          />
          <InputPassword
            value={this.state.password}
            onChange={this.handleInputChange}
            name="password"
            placeholder="Password"
          />
          <hr />
          <Input
            value={this.state.firstName}
            onChange={this.handleInputChange}
            name="firstName"
            placeholder="First Name"
          />
          <Input
            value={this.state.lastName}
            onChange={this.handleInputChange}
            name="lastName"
            placeholder="Last Name"
          />
          <Input
            value={this.state.age}
            onChange={this.handleInputChange}
            name="age"
            placeholder="Age"
          />
          <Input
            value={this.state.currentCity}
            onChange={this.handleInputChange}
            name="currentCity"
            placeholder="City"
          />
          <FormBtn
            //  disabled={!(this.state.userName && this.state.email && this.state.password)}
            onClick={this.handleFormSubmit}
          >
            Submit
          </FormBtn>
        </form>
      </Container>
    );
  }
}
