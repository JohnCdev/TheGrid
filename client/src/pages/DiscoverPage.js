import React, { useState, useEffect, useContext } from "react";
import { Container } from "../components/Grid/Grid";
import AlliesBar from "../components/AlliesBar/AlliesBar";
import API from "../utils/API";
import Nav from "../components/Nav/Nav";
import Header from "../components/Header/Header";
import FindAlliesSearch from "../components/FindAlliesSearch/FindAlliesSearch";
import FindClansSearch from "../components/FindClansSearch/FindClansSearch";
import { AuthContext } from '../context/AuthContext';
import { Redirect } from 'react-router';


const DiscoverPage = () => {
    const { isAuthenticated } = useContext(AuthContext);

    if (!isAuthenticated) {
        return <Redirect to='/log-in' />
    }
    
    return (
        <>
        <Nav />
        <main style={{ "height": "100%", "marginBottom": "200px" }}>
            <Header headerText="Discover"/>
            <AlliesBar />
            <Container>
                <FindAlliesSearch />
                <FindClansSearch />
            </Container>
        </main>
        </>
    )
}

export default DiscoverPage;