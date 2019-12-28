import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Input, TextArea, FormBtn, InputPassword, InputEmail } from "../components/Form/Form";
import API from "../utils/API";
import { Container } from "../components/Grid/Grid";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import { Redirect } from 'react-router';
import AddFriend from '../components/AddFriend/AddFriend';
import Header from '../components/Header/Header';
import { AuthContext } from '../context/AuthContext';

export default class EditProfile extends Component {
    state = {
        userName: "",
        firstName: "",
        lastName: "",
        age: "",
        currentCity: "",
        friendList: []
    }
    static contextType = AuthContext;

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

        const { isAuthenticated } = this.context;
        if (!isAuthenticated) {
            return <Redirect to='/log-in' />
        }
        
        return (
            <main>
                <Container>
                    <Header headerText="Edit Profile" />
                    <Jumbotron> <h1>Profile</h1></Jumbotron>
                    <form onSubmit={this.handleFormSubmit}>
                        <label htmlFor="firstName">First Name</label>
                        <Input
                            value={this.state.firstName}
                            onChange={this.handleInputChange}
                            id="firstName"
                            name="firstName"
                        />
                        <label htmlFor="lastName">Last Name</label>
                        <Input
                            value={this.state.lastName}
                            onChange={this.handleInputChange}
                            id="lastName"
                            name="lastName"
                        />
                        <label htmlFor="age">Age</label>
                        <Input
                            value={this.state.age}
                            onChange={this.handleInputChange}
                            id="age"
                            name="age"
                        />
                        <label htmlFor="currentCity">City</label>
                        <Input
                            value={this.state.currentCity}
                            onChange={this.handleInputChange}
                            id="currentCity"
                            name="currentCity"
                        />
                        <FormBtn
                            className="btn btn-success"
                            type="submit"
                        >
                            Submit Changes
                        </FormBtn>
                    </form>
                </Container>
            </main>
        )
    }
}
