import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Input, TextArea, FormBtn, InputPassword, InputEmail } from "../components/Form/Form";
import API from "../utils/API";
import { Container } from "../components/Grid/Grid";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import { Redirect } from 'react-router';
import AddFriend from '../components/AddFriend/AddFriend';
import Header from '../components/Header/Header';
import { AuthContext } from '../context/AuthContext';
import default1 from '../images/profileImages/default1.jpg';
import default2 from '../images/profileImages/default2.jpeg';
import default3 from '../images/profileImages/default3.jpg';
import default4 from '../images/profileImages/default4.jpg';
import default5 from '../images/profileImages/default5.jpg';
import default6 from '../images/profileImages/default6.jpeg';
import default7 from '../images/profileImages/default7.png';
import default8 from '../images/profileImages/default8.jpeg';
import default9 from '../images/profileImages/default9.jpg';
import default10 from '../images/profileImages/default10.webp';

const imgArray = [
    { name: "default1", src: default1 },
    { name: "default2", src: default2 },
    { name: "default3", src: default3 },
    { name: "default4", src: default4 },
    { name: "default5", src: default5 },
    { name: "default6", src: default6 },
    { name: "default7", src: default7 },
    { name: "default8", src: default8 },
    { name: "default9", src: default9 },
    { name: "default10", src: default10 }
]

export default class EditProfile extends Component {
    state = {
        userName: "",
        firstName: "",
        lastName: "",
        age: "",
        currentCity: "",
        friendList: [],
        steamIGN: "",
        discordIGN: "",
        battleNetIGN: "",
        epicIGN: "",
        originIGN: "",
        profileImg: "",
        addGame: "",
        favGames: [],
        profilePic: 'default1',
        selectedPic: ''
    }
    static contextType = AuthContext;

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    componentDidMount = event => {
        this.state.userName = sessionStorage.getItem("project3username")
        API.getProfile({
            userName: this.state.userName
        })
            .then(res => {
                const user = res.data.data[0]
                this.setState({
                    userName: user.userName,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    age: user.age,
                    currentCity: user.currentCity
                })
                this.updatePicHandler(this.state.profilePic);
            })
            .catch(err => console.log(err))
    }

    handleFormSubmit = event => {
        event.preventDefault();
        console.log(this.state)
        API.updateProfile({
            userName: this.state.userName,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            age: this.state.age,
            currentCity: this.state.currentCity,
            lastUpdated: Date.now()
        }).then(res => console.log(res))
            .catch(err => console.log(err))
    };

    onGameAdd = () => {
        if (this.state.addGame.length > 0) {
            this.setState({
                favGames: [...this.state.favGames, this.state.addGame],
                addGame: ""
            })
        }
    }

    deleteGame = e => {
        const tempGames = this.state.favGames;
        tempGames.splice(e.target.id, 1);
        this.setState({
            favGames: tempGames
        })
    }

    clearPic = () => {
        this.setState({
            selectedPic: ''
        })
    }

    updatePicHandler = e => {
        const name = e.target ? e.target.name : e;
        switch (name) {
            case "default1":
                return this.setState({ profilePic: name, selectedPic: default1 })
            case "default2":
                return this.setState({ profilePic: name, selectedPic: default2 })
            case "default3":
                return this.setState({ profilePic: name, selectedPic: default3 })
            case "default4":
                return this.setState({ profilePic: name, selectedPic: default4 })
            case "default5":
                return this.setState({ profilePic: name, selectedPic: default5 })
            case "default6":
                return this.setState({ profilePic: name, selectedPic: default6 })
            case "default7":
                return this.setState({ profilePic: name, selectedPic: default7 })
            case "default8":
                return this.setState({ profilePic: name, selectedPic: default8 })
            case "default9":
                return this.setState({ profilePic: name, selectedPic: default9 })
            case "default10":
                return this.setState({ profilePic: name, selectedPic: default10 })
            default:
                return this.setState({ selectedPic: '' })
        }
    }

    render() {

        const { isAuthenticated } = this.context;
        if (!isAuthenticated) {
            return <Redirect to='/log-in' />
        }

        return (
            <main>
                <Container>
                    <Jumbotron>
                        <Header headerText="Edit Profile" />
                    </Jumbotron>
                    <form onSubmit={this.handleFormSubmit}>
                        <h3>Profile Information</h3>
                        <label htmlFor="firstName">First Name</label>
                        <Input
                            value={this.state.firstName}
                            onChange={this.handleInputChange}
                            id="firstName"
                            name="firstName"
                            required
                            pattern=".{2,}"
                            title="Enter a valid value"
                        />
                        <label htmlFor="lastName">Last Name</label>
                        <Input
                            value={this.state.lastName}
                            onChange={this.handleInputChange}
                            id="lastName"
                            name="lastName"
                            required
                            pattern=".{2,}"
                            title="Enter a valid value"
                        />
                        <label htmlFor="age">Age</label>
                        <Input
                            value={this.state.age}
                            onChange={this.handleInputChange}
                            id="age"
                            name="age"
                            required
                            type="number"
                            min="1"
                        />
                        <label htmlFor="currentCity">City</label>
                        <Input
                            value={this.state.currentCity}
                            onChange={this.handleInputChange}
                            id="currentCity"
                            name="currentCity"
                            required
                            pattern=".{2,}"
                            title="Enter a valid value"
                        />
                        <label htmlFor="profileImg">Chose a Profile Image</label>
                        <Input
                            value={this.state.profileImg}
                            onChange={this.handleInputChange}
                            id="profileImg"
                            name="profileImg"
                        />
                        <hr style={{ 'borderColor': '#e2e2e2' }} />
                        <h3>Game Services User Names</h3>
                        <label htmlFor="steamIGN">Steam Name</label>
                        <Input
                            value={this.state.steamIGN}
                            onChange={this.handleInputChange}
                            id="steamIGN"
                            name="steamIGN"
                        />
                        <label htmlFor="discordIGN">Discord Name</label>
                        <Input
                            value={this.state.discordIGN}
                            onChange={this.handleInputChange}
                            id="discordIGN"
                            name="discordIGN"
                        />
                        <label htmlFor="battleNetIGN">Battle Net ID</label>
                        <Input
                            value={this.state.battleNetIGN}
                            onChange={this.handleInputChange}
                            id="battleNetIGN"
                            name="battleNetIGN"
                        />
                        <label htmlFor="epicIGN">Epic Games Name</label>
                        <Input
                            value={this.state.epicIGN}
                            onChange={this.handleInputChange}
                            id="epicIGN"
                            name="epicIGN"
                        />
                        <label htmlFor="originIGN">Origin Name</label>
                        <Input
                            value={this.state.originIGN}
                            onChange={this.handleInputChange}
                            id="originIGN"
                            name="originIGN"
                        />
                        <hr style={{ 'borderColor': '#e2e2e2' }} />

                        <h3>Your Top Games</h3>
                        <label htmlFor="addGame">Your Favorite Games</label>
                        <Input
                            value={this.state.addGame}
                            onChange={this.handleInputChange}
                            id="addGame"
                            name="addGame"
                        />
                        <button className="btn btn-primary mb-3" type="button" onClick={this.onGameAdd}>
                            Add Game
                        </button>
                        <ol>
                            {this.state.favGames.map((game, i) => {
                                return (
                                    <li key={i} className="mb-2">
                                        {game}
                                        <button className="btn btn-primary" type="button" id={i} onClick={this.deleteGame}>
                                            X
                                        </button>
                                    </li>
                                );
                            })}
                        </ol>
                        <hr />

                        <h3>Update Your Profile Picture</h3>
                        <div className="picSelector">
                            <div className="selectedPic mb-3">
                                {this.state.selectedPic ?
                                    <>
                                        <img src={this.state.selectedPic} />
                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                            onClick={this.clearPic}
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
                                            onClick={this.updatePicHandler}
                                        />
                                    );
                                })}
                            </div>
                        </div>

                        <FormBtn
                            className="btn btn-success mt-3"
                            type="submit"
                        >
                            Submit Changes
                        </FormBtn>
                    </form>
                </Container>
            </main>
        )
    }
}
