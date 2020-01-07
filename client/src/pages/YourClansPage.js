import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Container, Row, Col } from "../components/Grid/Grid";
import Header from '../components/Header/Header';
import Nav from '../components/Nav/Nav';
import ProfileIcon from '../components/ProfileIcon/ProfileIcon';
import { Link } from "react-router-dom";
import API from '../utils/API';
import Spinner from '../components/Spinner/Spinner';

const YourClansPage = () => {
    const { userData } = useContext(AuthContext)
    const [yourClans, setYourClans] = useState([])
    const [isLoading, setIsLoading] = useState(false)


    useEffect(() => {
        getClans()
    }, []);

    useEffect(() => {
        getClans()
    }, [userData]);

    const getClans = () => {
        setIsLoading(true)
        API.getClanList({ userName: userData.userName, clans: userData.clans })
            .then(response => {
                setYourClans(response.data)
                setIsLoading(false)
            })
    }

    return (
        <>
            <Nav />
            <main style={{ "height": "100%", "marginTop": "100px" }}>
                <Container>
                    <Row>
                        <div className="col-sm-12 col-md-6 offset-md-3">
                            <Header headerText="Your Clans" display={false} />
                            <section className="rounded">
                                <div className="discoverList">
                                    {isLoading ?
                                        <Spinner />
                                        :
                                        null
                                    }
                                    {yourClans.length > 0 && !isLoading ?
                                        yourClans.map((clan) => {
                                            return (
                                                <div className="discoverListItem rounded" key={clan._id}>
                                                    <div style={{ 'textAlign': 'right', 'marginRight': '1em' }}>
                                                        <Link to={`/clans/${clan.clanReferenceName}`}>
                                                           <ProfileIcon large={true} profileImg={clan.clanProfileImage} />
                                                        </Link>
                                                    </div>
                                                    <div style={{ 'textAlign': 'left' }}>
                                                        <span>{clan.clanName}</span>
                                                    </div>
                                                    <div style={{ 'textAlign': 'left' }}>
                                                        <Link to={`/clans/${clan.clanReferenceName}`}>
                                                            <button className="btn btn-primary">Go to Profile</button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            );
                                        })
                                        :
                                        null
                                    }
                                    {yourClans.length === 0 && !isLoading ?
                                        <>
                                            <h3 className="mt-5" style={{ 'backgroundColor': '#3c4042' }}>You're not a member of any clans.</h3>
                                            <Link to="/discover">
                                                <button type="button" className="btn btn-primary"><i className="fa fa-search"></i> Find One</button>
                                            </Link>
                                        </>
                                        :
                                        null}
                                    <h3 className="mt-5" style={{ 'backgroundColor': '#3c4042' }}>Want to Make a New Clan?</h3>
                                    <Link to="/create-clan">
                                        <button type="button" className="btn btn-primary"><i className="fa fa-users"></i> Click Here</button> 
                                    </Link>
                                </div>
                            </section>
                        </div>
                    </Row>
                </Container>
            </main>
        </>
    )
}

export default YourClansPage;  