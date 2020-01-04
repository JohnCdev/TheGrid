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
                <Nav />
                <Container>
                    <Row>
                        <Col size="md-6">
                            <img src={Brand} className="brand" />

                            <Header headerText="">
                                <h3>Discover the Grid</h3>
                                <p>Recruit Allies<br></br> 
                                Add your closest friends and find new ones. Share your strats, builds, wins , memes, and all things worthy. Use your profile to show off your favorite games, and various gaming usernames to join up!</p>
                                <p>Clans!<br></br>
                                Create or find clans with popular game interest with close allies or vast war parties to share everything !</p>
                                <p>Info Board<br></br>
                                See what your allies are posting about and use them as your source to find new paths to glory!</p>
                                <Link to="/new-user">
                                    <button type="button" className="btn btn-primary">
                                        Sign Up!
                    </button>
                                </Link>
                                <Link to="/log-in">
                                    <button type="button" className="btn btn-primary">
                                        Log In
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