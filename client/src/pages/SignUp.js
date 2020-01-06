import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Input,
  FormBtn,
  InputPassword,
  InputEmail
} from "../components/Form/Form";
import API from "../utils/API";
import { Container, Row, Col } from "../components/Grid/Grid";
import { Redirect } from 'react-router';
import Header from '../components/Header/Header';
import Nav from "../components/Nav/Nav";
import { AuthContext } from '../context/AuthContext';
import Logo from "../images/Logos/G.png";
import SignUpTitle from "../images/Logos/signup.png";
import SuccessMessage from "../components/SuccessMessage/SuccessMessage";

export default class SignUp extends Component {
  state = {
    userName: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    age: "",
    currentCity: "",
    isNewAccount: false,
    isError: false
  }
  static contextType = AuthContext;

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
  }

  handleFormSubmit = event => {
    event.preventDefault();
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
      .then(res => {
        if (res.status === 400) {
          throw new Error('your error message here');
        } else {
          this.setState(() => ({
            isNewAccount: true
          }))
        }
      })
      .catch(err => {
        this.setState({
          isError: true
        })
      });
  };

  render() {
    if (this.state.isNewAccount) {
      return <Redirect to="/log-in" />;
    }

    const { isAuthenticated } = this.context;
    if (isAuthenticated) {
      return <Redirect to='/feed' />
    }

    return (
      <>
        <Nav />
        <main>
          <Header headerText="Sign Up" display={false} />
          <Container className="mt-4">
            <Row>
              <div className="col-sm-12 col-md-5">
                <Header headerText="Sign Up" display={false} />
                <img src={SignUpTitle} className="signuptitle" />
                <form onSubmit={this.handleFormSubmit}>
                  <h3>Account Information</h3>
                  <label htmlFor="userName">User Name</label>
                  <Input
                    value={this.state.userName}
                    onChange={this.handleInputChange}
                    id="userName"
                    name="userName"
                    placeholder="User Name"
                    required
                    pattern="^\w{3,15}$"
                    title="User name must be between 3 to 15 characters and contain no spaces."
                  />
                  <label htmlFor="email">Email</label>
                  <InputEmail
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    id="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                  <label htmlFor="password">Password</label>
                  <InputPassword
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    id="password"
                    name="password"
                    placeholder="Password"
                    required
                    pattern=".{5,20}"
                    title="Password must be at-least 5 characters long"
                  />
                  <hr />
                  <h3>Profile Information</h3>
                  <label htmlFor="firstName">First Name</label>
                  <Input
                    value={this.state.firstName}
                    onChange={this.handleInputChange}
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    required
                    pattern="^[A-Za-z -]+$"
                    title="Enter a valid value. Cannot contain numbers"
                  />
                  <label htmlFor="lastName">Last Name</label>
                  <Input
                    value={this.state.lastName}
                    onChange={this.handleInputChange}
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    required
                    pattern="^[A-Za-z -]+$"
                    title="Enter a valid value. Cannot contain numbers"
                  />
                  <label htmlFor="age">Age</label>
                  <Input
                    value={this.state.age}
                    onChange={this.handleInputChange}
                    id="age"
                    name="age"
                    placeholder="Age"
                    required
                    type="number"
                    min="1"
                  />
                  <label htmlFor="currentCity">City</label>
                  <Input
                    value={this.state.currentCity}
                    onChange={this.handleInputChange}
                    id="currentCity"
                    name="currentCity"
                    placeholder="City"
                    required
                    pattern="^[A-Za-z -]+$"
                    title="Enter a valid value. Cannot contain numbers"
                  />
                  <FormBtn
                    //  disabled={!(this.state.userName && this.state.email && this.state.password)}
                    className="btn btn-success"
                    type="submit"
                  >
                    Submit
                  </FormBtn>
                  {this.state.isError ?
                    <SuccessMessage errMessage="User Name Exists" success={false} />
                    :
                    null}
                </form>
              </div>
              <Col size="md-1">
              </Col>
              <Col size="md-5">

                <img src={Logo} className="logo" />
              </Col>
            </Row>
          </Container>
        </main>
      </>
    )
  }
}
