import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import { Redirect } from "react-router";
import { Input, TextArea, FormBtn } from "../components/Form/Form";
import { Container } from "../components/Grid/Grid";
import API from "../utils/API";

const CreateClan = () => {
    const { isAuthenticated, userData } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        clanMade: false,
        clanName: "",
        clanTimeZone: "",
        clanDescription: "",
        clanDiscord: "",
        addedGame: "",
        clanGames: []
    });

    // if (!isAuthenticated) {
    //     return <Redirect to='/log-in' />
    // }

    const handleFormSubmit = e => {
        e.preventDefault();
        const payLoad = { ...formData, clanFounder: userData.userName };
        const token = userData.token;

        API.createClan(payLoad, token).then((res) => {
            setFormData({
                ...formData,
                clanMade: true
            })
        });
    };

    const handleFormChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const addGame = () => {
        if (formData.addedGame.length > 0) {
            setFormData({
                ...formData,
                clanGames: [...formData.clanGames, formData.addedGame],
                addedGame: ""
            })
        }
    }

    const deleteGame = e => {
        const tempGames = formData.clanGames
        tempGames.splice(e.target.id, 1)
        setFormData({
            ...formData,
            clanGames: tempGames
        })
    }

    return (
      <>
      <Nav />
        <main>
            <Container>
                <Jumbotron>
                    <Header headerText="Create a New Clan" />
                </Jumbotron>
                <form onSubmit={handleFormSubmit}>
                    <label htmlFor="clanName">Clan Name</label>
                    <Input
                        id="clanName"
                        name="clanName"
                        placeholder="Clan Name"
                        onChange={handleFormChange}
                        value={formData.clanName}
                        required
                        pattern=".{3,15}"
                        title="Name must be 3 to 15 characters long"
                    />
                    <label htmlFor="clanTimeZone">Active Time Zone</label>
                    <Input
                        id="clanTimeZone"
                        name="clanTimeZone"
                        placeholder="Time Zone"
                        onChange={handleFormChange}
                        value={formData.clanTimeZone}
                        required
                    />
                    <label htmlFor="clanDescription">Clan Description</label>
                    <TextArea
                        id="clanDescription"
                        name="clanDescription"
                        placeholder="Clan Description"
                        onChange={handleFormChange}
                        value={formData.clanDescription}
                        rows="5"
                        required
                    />
                    <label htmlFor="clanDiscord">Clan Discord</label>
                    <Input
                        id="clanDiscord"
                        name="clanDiscord"
                        placeholder="Discord Link"
                        onChange={handleFormChange}
                        value={formData.clanDiscord}
                    />
                    <label htmlFor="addedGame">Clan's Active Games</label>
                    <Input
                        id="addedGame"
                        name="addedGame"
                        onChange={handleFormChange}
                        value={formData.addedGame}
                    />
                    <button className="btn btn-primary" type="button" onClick={addGame}>Add Game</button>
                    <ul>
                        {formData.clanGames.map((game, i) => {
                            return (
                                <li key={i}>
                                    {game}
                                    <button className="btn btn-primary" type="button" id={i} onClick={deleteGame}>
                                        X
                                    </button>
                                </li>
                            );
                        })}
                    </ul>

                    <FormBtn
                        className="btn btn-success"
                        type="submit"
                    >
                        Create Clan
                    </FormBtn>
                </form>
            </Container>
        </main>
        </>
    );
}

export default CreateClan;
