import React, { useState, useEffect } from 'react';
import { Container } from '../components/Grid/Grid';
import Header from '../components/Header/Header';
import Nav from '../components/Nav/Nav';
import ProfileIcon from '../components/ProfileIcon/ProfileIcon';
import { Link } from "react-router-dom";

const YourClansPage = () => {
    const [yourClans, setYourClans] = useState([
        { _id: "1", clanName: "Noob Slayers", clanReferenceName: "NoobSlayers", clanProfileImage: "Clan1" },
        { _id: "2", clanName: "Rekt", clanReferenceName: "Rekt", clanProfileImage: "Clan2" },
        { _id: "3", clanName: "Shawn Suxs", clanReferenceName: "ShawnSuxs", clanProfileImage: "Clan3" },
        { _id: "4", clanName: "Average", clanReferenceName: "Average", clanProfileImage: "Clan4" },
    ])

    useEffect(() => {
        console.log("api call goes here")
    }, []);

    return (
        <>
            <Nav />
            <main>
                <Container>
                    <Header headerText="Your Clans" />
                    <section className="box-shadow-dark rounded">
                        <div className="discoverList">
                            {yourClans.length > 0 ?
                                yourClans.map((clan) => {
                                    return (
                                        <div className="discoverListItem rounded" key={clan._id}>
                                            <div style={{ 'textAlign': 'right', 'marginRight': '1em' }}>
                                                <ProfileIcon large={true} profileImg={clan.clanProfileImage} />
                                            </div>
                                            <div style={{ 'textAlign': 'left' }}>
                                                <span>{clan.clanName}</span>
                                            </div>
                                            <div style={{ 'textAlign': 'left' }}>
                                                <Link to={`/user-profile/${clan.clanReferenceName}`}>
                                                    <button className="btn btn-primary">Go to Profile</button>
                                                </Link>
                                            </div>
                                        </div>
                                    );
                                })
                                :
                                <h3 className="mt-5" style={{ 'backgroundColor': '#3c4042' }}>You're not a member of any clans.</h3>}
                            <h3 className="mt-5" style={{ 'backgroundColor': '#3c4042' }}>Wanna Make a New Clan?</h3>
                            <Link to="/create-clan">
                                <button type="button" className="btn btn-primary">Click Here</button>
                            </Link>
                        </div>
                    </section>
                </Container>
            </main>
        </>
    )
}

export default YourClansPage;  