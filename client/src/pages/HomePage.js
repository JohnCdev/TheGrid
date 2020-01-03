import React, { Component } from 'react';
import Header from '../components/Header/Header';
import { Link } from 'react-router-dom';
import Nav from "../components/Nav/Nav";
import { Grid, Container, Row, Col } from "../components/Grid/Grid";
import Logo from "../images/Logos/G.png";
import Brand from "../images/Logos/grid.png";









export default class HomePage extends Component {
    state = {
        // state stuff
    }

    render() {
        return (
            <>
            <Nav/>
                <Container>
                    <Row>
                        <Col size="md-6">
                            <img src={Brand} className="brand" />

                            <Header headerText="">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <Link to="/new-user">
                                    <button type="button" className="btn btn-primary">
                                        Sign Up!
                    </button>
                                </Link>
                                <Link to="/create-clan">
                                    <button type="button" className="btn btn-primary">
                                        Make Clan
                    </button>
                                </Link>
                            </Header>
                        </Col>
                        <Col size="md-6">

                            <img src={Logo} className="logo" />
                        </Col>

                    </Row>

                </Container>
            </>


        )
    }
}