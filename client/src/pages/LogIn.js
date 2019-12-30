import React, { Component, useEffect, useState, useContext } from "react";
import { Input, TextArea, FormBtn, InputPassword } from "../components/Form/Form";
import API from "../utils/API";
import { Container } from "../components/Grid/Grid";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import { Redirect } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import Header from '../components/Header/Header';

export default function LogIn() {
    const { isAuthenticated, logInFunction, userData } = useContext(AuthContext);
    const [formData, setFormData] = useState(
        { userName: '', password: '' }
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
        const alphanumeric = inputtxt => {
            const letterNumber = /^[0-9a-zA-Z]+$/;
            if (inputtxt.match(letterNumber)) {
              return true;
            } else {
        
              return false;
            }
          };
        if (formData.userName && formData.password && alphanumeric(formData.userName) && alphanumeric(formData.password)) {

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
                    sessionStorage.setItem('project3username', resObj.userName);
                    logInFunction({ user: resObj })
                })
                .catch(err => console.log(err));
        }
    };

    if (isAuthenticated) {
        return <Redirect to='/feed' />
    }

    return (
        <Container>
            <Jumbotron>
                <Header headerText={'Log In'}/>
            </Jumbotron>
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
        </Container >
    )
}