import React, { Component, useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Input, TextArea, FormBtn, InputPassword } from "../components/Form/Form";
import API from "../utils/API";
import { Container } from "../components/Grid/Grid";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import { Redirect } from 'react-router';
import {AuthContext} from '../context/AuthContext';


export default function LogIn() {
    const { isAuthenticated, logInFunction } = useContext(AuthContext);
    const [formData, setFormData] = useState(
        {userName: '', password: ''}
    )
    
        const apiTest = (e) => {
            e.preventDefault()
            API.authTest()
            .then(console.log('hello'))
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
        console.log(logInFunction)
        event.preventDefault();
        if (formData.userName && formData.password) {

            API.userLogIn({
                userName: formData.userName,
                password: formData.password
            })
                .then((res) => {
                    const resObj = {
                        user: res.data.data[0],
                        token: res.data.data[1]
                    }
                    console.log(logInFunction)
                    console.log(resObj);
                    logInFunction({ resObj })
                })
                .catch(err => console.log(err));
        }
    };

        if (isAuthenticated) {
            return <Redirect to='/' />
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