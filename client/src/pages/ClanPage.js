import React, { Component } from 'react';
import API from '../utils/API';
import {Container} from '../components/Grid/Grid';
import Jumbotron from '../components/Jumbotron/Jumbotron';
import Header from '../components/Header/Header';

export default class ClanPage extends Component {
    state = {
        clanName: 'That Clan',
    }

    componentDidMount = event => {

    }

    render() {
        return (
            <>
                <Container>
                    <Jumbotron>
                        <Header headerText={`${this.state.clanName}`} />
                    </Jumbotron>
                </Container>
            </>
        );
    }
}