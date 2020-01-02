import React, { useState, useEffect, useContext } from "react";
import { Container } from "../components/Grid/Grid";
import API from "../utils/API";
import Nav from "../components/Nav/Nav";
import Header from "../components/Header/Header";
import FindAlliesSearch from "../components/FindAlliesSearch/FindAlliesSearch";
import FindClansSearch from "../components/FindClansSearch/FindClansSearch";
import { AuthContext } from '../context/AuthContext';
import { Redirect } from 'react-router';


const DiscoverPage = () => {
    const { isAuthenticated } = useContext(AuthContext);
    const [pickSearch, setPickSearch] = useState(false);

    if (!isAuthenticated) {
        return <Redirect to='/log-in' />
    }

    const handleToggle = () => {
        setPickSearch(pickSearch => !pickSearch)
    }

    return (
        <>
            <Nav />
            <main style={{ "height": "100%", "marginBottom": "200px" }}>
                <Container>
                    <Header headerText="Discover" />
                    <button className="btn btn-success" onClick={handleToggle}>{pickSearch ? "Switch to Allies Switch" : "Switch to Clan Search"}</button>
                    {!pickSearch ?
                        <FindAlliesSearch />
                        :
                        <FindClansSearch />
                    }
                </Container>
            </main>
        </>
    )
}

export default DiscoverPage;