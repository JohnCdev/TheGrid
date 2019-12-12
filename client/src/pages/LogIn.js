import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Input, TextArea, FormBtn, InputPassword } from "../components/Form/Form";
import API from "../utils/API";
import { Container } from "../components/Grid/Grid";
import Jumbotron from "../components/Jumbotron/Jumbotron";

export default class LogIn extends Component {
    state = {
        userName: "",
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
        if (this.state.userName && this.state.password) {

            API.userLogIn({
                userName: this.state.userName,
                password: this.state.password
            })
                .then((res) => {
                    const resObj = {
                        user: res.data.data[0],
                        token: res.data.data[1]
                    }
                    console.log(resObj)
                })
                .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <Container>
                <Jumbotron> <h1>Log In</h1></Jumbotron>
                <form>
                    <Input
                        value={this.state.userName}
                        onChange={this.handleInputChange}
                        name="userName"
                        placeholder="User Name"
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