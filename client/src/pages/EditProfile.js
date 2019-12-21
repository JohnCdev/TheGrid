import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Input, TextArea, FormBtn, InputPassword, InputEmail } from "../components/Form/Form";
import API from "../utils/API";
import { Container } from "../components/Grid/Grid";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import { Redirect } from 'react-router';
import AddFriend from '../components/AddFriend/AddFriend';

export default class EditProfile extends Component {
    state = {
        userName: "",
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
        this.state.userName = sessionStorage.getItem("project3username")
        API.getProfile({
            userName: this.state.userName
        })
            .then(res => {
                const user = res.data.data[0]
                this.setState({
                    userName: user.userName,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    age: user.age,
                    currentCity: user.currentCity
                })
            })
            .catch(err => console.log(err))
    }

    handleFormSubmit = event => {
        event.preventDefault();
        API.updateProfile({
            userName: this.state.userName,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            age: this.state.age,
            currentCity: this.state.currentCity,
            lastUpdated: Date.now()
        }).then(res => console.log(res))
            .catch(err => console.log(err))
    };

    render() {
        return (
            <Container>
                <Jumbotron> <h1>Profile</h1></Jumbotron>
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
