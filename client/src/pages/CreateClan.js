import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import { Redirect } from "react-router";
import { Input, TextArea, FormBtn } from "../components/Form/Form";
import { Container } from "../components/Grid/Grid";
import SuccessMessage from '../components/SuccessMessage/SuccessMessage';
import API from "../utils/API";
import Clan1 from '../images/clanImages/Clan1.jpg';
import Clan2 from '../images/clanImages/Clan2.jpg';
import Clan3 from '../images/clanImages/Clan3.jpg';
import Clan4 from '../images/clanImages/Clan4.jpg';
import Clan5 from '../images/clanImages/Clan5.jpg';

const imgArray = [
    { name: "Clan1", src: Clan1 },
    { name: "Clan2", src: Clan2 },
    { name: "Clan3", src: Clan3 },
    { name: "Clan4", src: Clan4 },
    { name: "Clan5", src: Clan5 },
]

const CreateClan = () => {
    const { isAuthenticated, userData, joinedClan } = useContext(AuthContext);
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
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleFormSubmit = e => {
        e.preventDefault();
        const payLoad = { ...formData, clanFounder: userData.userName };
        const token = userData.token;

        API.createClan(payLoad, token).then((res) => {
            setFormData({
                ...formData,
                clanMade: true
            })
            joinedClan(formData.clanName)
            setSubmitSuccess(true)     
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
            case "Clan1":
                return setFormData({ ...formData, clanPic: name, selectedPic: Clan1 })
            case "Clan2":
                return setFormData({ ...formData, clanPic: name, selectedPic: Clan2 })
            case "Clan3":
                return setFormData({ ...formData, clanPic: name, selectedPic: Clan3 })
            case "Clan4":
                return setFormData({ ...formData, clanPic: name, selectedPic: Clan4 })
            case "Clan5":
                return setFormData({ ...formData, clanPic: name, selectedPic: Clan5 })
            default:
                return setFormData({ selectedPic: '' })
        }
    }

    if (submitSuccess) {
        return <Redirect to="/clan" />;
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
                        <div className="selectedPic mb-2">
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
                {submitSuccess ? <SuccessMessage success={true}/>: null}
            </Container>
        </main>
        </>
    );
}

export default CreateClan;
