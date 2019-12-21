import React, { useState, useEffect } from "react";
import { Container } from "../components/Grid/Grid";
import AlliesBar from "../components/AlliesBar/AlliesBar";
import API from "../utils/API";
import Header from "../components/Header/Header";
import FindAlliesSearch from "../components/FindAlliesSearch/FindAlliesSearch";
import FindClansSearch from "../components/FindClansSearch/FindClansSearch";

const DiscoverPage = () => {

    return (
        <main style={{ "height": "100%", "marginBottom": "200px" }}>
            <Header headerText="Discover"/>
            <AlliesBar />
            <Container>
                <FindAlliesSearch />
                <FindClansSearch />
            </Container>
        </main>
    )
}

export default DiscoverPage;