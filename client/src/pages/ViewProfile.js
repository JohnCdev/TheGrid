import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Input, TextArea, FormBtn, InputPassword, InputEmail } from "../components/Form/Form";
import API from "../utils/API";
import { Container } from "../components/Grid/Grid";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import { Redirect } from 'react-router';

export default class ViewProfile extends Component {
    state= {
        id: "",
        firstName: "",
        lastName: "",
        age: "",
        currentCity: "",
        friendList: []
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };
    componentDidMount = event => {
        this.state.id = sessionStorage.getItem("userObj")
        API.getProfile({
            id: this.state.id
        })
        .then(res => {
           // this.state.firstName = res[0].profile.firstName
            console.log(res)
        })
        .catch(err => console.log(err))
    }
    
      handleFormSubmit = event => {
        event.preventDefault();
        
      };

    render() {
        return (
            <Container>
                <Jumbotron> <h1>Sign up</h1></Jumbotron>
                <form>
                    <Input
                        value={this.state.firstName}
                        onChange={this.handleInputChange}
                        name="firstName"
                    />
                    <Input
                        value={this.state.lastName}
                        onChange={this.handleInputChange}
                        name="lastName"
                    />
                    <Input
                        value={this.state.age}
                        onChange={this.handleInputChange}
                        name="age"
                    />
                    <Input
                        value={this.state.currentCity}
                        onChange={this.handleInputChange}
                        name="currentCity"
                    />
                    <FormBtn
                        onClick={this.handleFormSubmit}
                    >
                        Submit Changes
                    </FormBtn>
                </form>
            </Container>
        )
    }
}
