import React, { Component, useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Input, TextArea, FormBtn, InputPassword } from "../components/Form/Form";
import API from "../utils/API";
import { Container } from "../components/Grid/Grid";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import { Redirect } from 'react-router';
import {AuthContext} from '../context/AuthContext';
import Nav from '../components/Nav/Nav';

export default class ViewUserProfile extends Component {


        render() {
            return (
            
                <Container>
                    <div>Hello world</div>
                    
                </Container>
            )
        }

}