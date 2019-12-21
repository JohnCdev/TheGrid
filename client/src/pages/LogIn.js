import React, { Component, useEffect, useState, useContext } from "react";
import { Input, TextArea, FormBtn, InputPassword } from "../components/Form/Form";
import API from "../utils/API";
import { Container } from "../components/Grid/Grid";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import { Redirect } from 'react-router';
import {AuthContext} from '../context/AuthContext';

export default function LogIn() {
    const { isAuthenticated, logInFunction, userData  } = useContext(AuthContext);
    const [formData, setFormData] = useState(
        {userName: '', password: ''}
    )

        const apiTest = (e) => {
            e.preventDefault()

            API.authTest(userData.token)
            .then(res => console.log(res))
        }

    const handleUserNameChange = event => {
        const { value } = event.target;
        setFormData({
            userName: value,
            password: formData.password
        });
    };

    const handlePasswordChange = event => {
        const { value } = event.target;
        setFormData({
            userName: formData.userName,
            password: value
        });
    };

    const handleFormSubmit = event => {
        event.preventDefault();
        if (formData.userName && formData.password) {

            API.userLogIn({
                userName: formData.userName,
                password: formData.password
            })
                .then((res) => {
                    console.log(res.data)
                    const client = res.data.data
                    const resObj = {
                        userName: client[0].userName,
                        firstName: client[0].firstName,
                        lastName: client[0].lastName,
                        age: client[0].age,
                        friendList: client[0].friendList,
                        sentFriendRequests: client[0].sentFriendRequests,
                        receivedFriendRequests: client[0].receivedFriendRequests,
                        token: client[1]
                    }
                    sessionStorage.setItem('project3user', JSON.stringify(resObj));
                    sessionStorage.setItem('project3username', resObj.user);
                    logInFunction({ user: resObj })
                })
                .catch(err => console.log(err));
        }
    };

        if (isAuthenticated) {
            return <Redirect to='/profile' />
        }
        
        return (
            <Container>
                <Jumbotron> <h1>Log In</h1></Jumbotron>
                <form>
                    <Input
                        value={formData.userName}
                        onChange={handleUserNameChange}
                        name="userName"
                        placeholder="User Name"
                    />
                    <InputPassword
                        value={formData.password}
                        onChange={handlePasswordChange}
                        name="password"
                        placeholder="Password"
                    />
                    <FormBtn
                        //  disabled={!(this.state.userName && this.state.email && this.state.password)}
                        onClick={handleFormSubmit}
                    >
                        Submit
                    </FormBtn>
                    <button onClick={apiTest}>api test</button>
                </form>
            </Container>
        )
}