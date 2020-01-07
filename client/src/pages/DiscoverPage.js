import React, { useState, useContext } from "react";
import { Container, Row, Col } from "../components/Grid/Grid";
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
            <main style={{ "height": "100%", "marginTop": "50px" }}>
                <Container>
                    <Row>
                        <div className="col-sm-12 col-md-6 offset-md-3">
                            <Header headerText="Discover" display={false} />
                            <button className="btn btn-success" onClick={handleToggle}>{pickSearch ? "Switch to Allies Switch" : "Switch to Clan Search"}</button>
                            {!pickSearch ?
                                <FindAlliesSearch />
                                :
                                <FindClansSearch />
                            }
                        </div>


                    </Row>
                </Container>
            </main>
        </>
    )
}

export default DiscoverPage;