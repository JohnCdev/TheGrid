import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Input, TextArea, FormBtn, InputPassword, InputEmail } from "../components/Form/Form";
import API from "../utils/API";
import { Container } from "../components/Grid/Grid";
import Jumbotron from "../components/Jumbotron/Jumbotron";

export default class SignUp extends Component {
    state= {
        userName: "",
        email: "",
        password: ""
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };
    
      handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.userName && this.state.email && this.state.password) {
          
          API.saveUser({
            userName: this.state.userName,
            email: this.state.email,
            password: this.state.password
          })
            .then(res => console.log(res))
            .catch(err => console.log(err));
        }
      };

    render() {
        return (
            <Container>
                <Jumbotron> <h1>Sign up</h1></Jumbotron>
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
                    <FormBtn
                      //  disabled={!(this.state.userName && this.state.email && this.state.password)}
                        onClick={this.handleFormSubmit}
                    >
                        Submit
                    </FormBtn>
                </form>
            </Container>
        )
    }
}
