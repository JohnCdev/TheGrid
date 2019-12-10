import React, { Component } from 'react';
import API from '../utils/API';
import { Link } from 'react-router-dom';
import { Col, Row, Container } from '../components/Grid';

 
export default class HomePage extends Component {
    state = {
        // state stuff
    }

    render() {
        return (
            <div>
                <h2>Hello World</h2>
            </div>
        )
    }
}