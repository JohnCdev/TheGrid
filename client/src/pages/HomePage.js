import React, { Component } from 'react';
import Header from '../components/Header/Header'

export default class HomePage extends Component {
    state = {
        // state stuff
    }

    render() {
        return (
            <Header headerText="Landing Page">
                <div>
                    <h2>Hello World</h2>
                </div>
            </Header>


        )
    }
}