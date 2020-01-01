import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import Header from "../components/Header/Header";
import { Redirect } from "react-router";
import { Input, TextArea, FormBtn } from "../components/Form/Form";
import { Container } from "../components/Grid/Grid";
import API from "../utils/API";
import Default1 from '../images/profileImages/Default1.jpg';
import Default2 from '../images/profileImages/Default2.jpg';
import Default3 from '../images/profileImages/Default3.jpg';
import Default4 from '../images/profileImages/Default4.jpg';
import Default5 from '../images/profileImages/Default5.jpg';
import Default6 from '../images/profileImages/Default6.jpg';
import Default7 from '../images/profileImages/Default7.jpg';
import Default8 from '../images/profileImages/Default8.jpg';
import Default9 from '../images/profileImages/Default9.jpg';
import Default10 from '../images/profileImages/Default10.jpg';

const imgArray = [
    { name: "Default1", src: Default1 },
    { name: "Default2", src: Default2 },
    { name: "Default3", src: Default3 },
    { name: "Default4", src: Default4 },
    { name: "Default5", src: Default5 },
    { name: "Default6", src: Default6 },
    { name: "Default7", src: Default7 },
    { name: "Default8", src: Default8 },
    { name: "Default9", src: Default9 },
    { name: "Default10", src: Default10 }
]

const CreateClan = () => {
    const { isAuthenticated, userData } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        clanMade: false,
        clanName: "",
        clanTimeZone: "",
        clanDescription: "",
        clanDiscord: "",
        addedGame: "",
        clanGames: [],
        clanPic: '',
        selectedPic: ''
    });

    // if (!isAuthenticated) {
    //     return <Redirect to='/log-in' />
    // }

    const handleFormSubmit = e => {
        e.preventDefault();
        console.log(formData)
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

    const clearPic = () => {
        setFormData({
            ...formData,
            selectedPic: ''
        })
    }

    const updatePicHandler = e => {
        const name = e.target.name ? e.target.name : formData.clanPic;
        switch (name) {
            case "Default1":
                return setFormData({ ...formData, clanPic: name, selectedPic: Default1 })
            case "Default2":
                return setFormData({ ...formData, clanPic: name, selectedPic: Default2 })
            case "Default3":
                return setFormData({ ...formData, clanPic: name, selectedPic: Default3 })
            case "Default4":
                return setFormData({ ...formData, clanPic: name, selectedPic: Default4 })
            case "Default5":
                return setFormData({ ...formData, clanPic: name, selectedPic: Default5 })
            case "Default6":
                return setFormData({ ...formData, clanPic: name, selectedPic: Default6 })
            case "Default7":
                return setFormData({ ...formData, clanPic: name, selectedPic: Default7 })
            case "Default8":
                return setFormData({ ...formData, clanPic: name, selectedPic: Default8 })
            case "Default9":
                return setFormData({ ...formData, clanPic: name, selectedPic: Default9 })
            case "Default10":
                return setFormData({ ...formData, clanPic: name, selectedPic: Default10 })
            default:
                return setFormData({ selectedPic: '' })
        }
    }

    return (
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
                    <button className="btn btn-primary mb-3" type="button" onClick={addGame}>Add Game</button>
                    <ul>
                        {formData.clanGames ? formData.clanGames.map((game, i) => {
                            return (
                                <li key={i} className="mb-2">
                                    {game}
                                    <button className="btn btn-primary" type="button" id={i} onClick={deleteGame}>
                                        X
                                    </button>
                                </li>
                            );
                        }) : null}
                    </ul>
                    <hr />

                    <h3>Select Your Clan ProfileImage</h3>
                    <div className="picSelector">
                        <div className="selectedPic mb-3">
                            {formData.selectedPic ?
                                <>
                                    <img src={formData.selectedPic} />
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        onClick={clearPic}
                                    >
                                        X
                                        </button>
                                </> :
                                <span>Select a Picture</span>
                            }
                        </div>
                        <div className="picGrid">
                            {imgArray.map((img, i) => {
                                return (
                                    <img
                                        key={i}
                                        className="img-thumbnail"
                                        name={img.name}
                                        src={img.src}
                                        onClick={updatePicHandler}
                                    />
                                );
                            })}
                        </div>
                    </div>

                    <FormBtn
                        className="btn btn-success mt-3"
                        type="submit"
                    >
                        Create Clan
                    </FormBtn>
                </form>
            </Container>
        </main>
    );
}

export default CreateClan;
