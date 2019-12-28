import React, { useContext, useState } from 'react';
import AuthContext from "../context/AuthContext";
import Jumbotron from '../components/Jumbotron/Jumbotron';
import Header from '../components/Header/Header';
import { Redirect } from 'react-router';

const CreateClan = () => {
    const { isAuthenticated } = useContext(AuthContext);

    if (!isAuthenticated) {
        return <Redirect to='/log-in' />
    }

    return (
        <main>
            <Jumbotron>
                <Header headerText="Create a New Clan" />
            </Jumbotron>
        </main>
    );
}

export default CreateClan;