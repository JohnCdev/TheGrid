import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Input, FormBtn } from "../components/Form/Form";
import API from "../utils/API";
import { Container, Row, Col } from "../components/Grid/Grid";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import Nav from "../components/Nav/Nav";
import { Redirect } from 'react-router';
import Header from '../components/Header/Header';
import { AuthContext } from '../context/AuthContext';
import Default2 from '../images/profileImages/Default2.jpg';
import Default3 from '../images/profileImages/Default3.jpg';
import Default4 from '../images/profileImages/Default4.jpg';
import Default5 from '../images/profileImages/Default5.jpg';
import Default1 from '../images/profileImages/Default1.jpg';
import Default6 from '../images/profileImages/Default6.jpg';
import Default7 from '../images/profileImages/Default7.jpg';
import Default8 from '../images/profileImages/Default8.jpg';
import Default9 from '../images/profileImages/Default9.jpg';
import Default10 from '../images/profileImages/Default10.jpg';
import SuccessMessage from '../components/SuccessMessage/SuccessMessage';

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

export default class EditProfile extends Component {
    static contextType = AuthContext;
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
        addGame: "",
        favGames: [],
        profileIMG: '',
        selectedPic: '',
        submitSuccess: false
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
                    currentCity: user.currentCity,
                    steamIGN: user.steamIGN,
                    discordIGN: user.discordIGN,
                    battleNetIGN: user.battleNetIGN,
                    epicIGN: user.epicIGN,
                    originIGN: user.originIGN,
                    profileIMG: user.profileIMG,
                    favGames: user.favGames,
                })
                this.updatePicHandler(this.state.profileIMG);
            })
            .catch(err => console.log(err))
    }

    handleFormSubmit = event => {
        const { userData,logInFunction } = this.context;
        event.preventDefault();
        API.updateProfile({
            userName: this.state.userName,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            age: this.state.age,
            currentCity: this.state.currentCity,
            steamIGN: this.state.steamIGN,
            discordIGN: this.state.discordIGN,
            battleNetIGN: this.state.battleNetIGN,
            epicIGN: this.state.epicIGN,
            originIGN: this.state.originIGN,
            profileIMG: this.state.profileIMG,
            favGames: this.state.favGames,
            lastUpdated: new Date()
        }).then(res => {

            const user = {
                user: userData
            }
            const client = user.user
            
            client.profileIMG = this.state.profileIMG;
            client.firstName = this.state.firstName;
            client.lastName = this.state.lastName;
            client.age = this.state.age;
            client.currentCity = this.state.currentCity;
            client.steamIGN = this.state.steamIGN;
            client.discordIGN = this.state.discordIGN;
            client.battleNetIGN = this.state.battleNetIGN;
            client.epicIGN = this.state.epicIGN;
            client.favGames = this.state.favGames

            logInFunction(user)

            this.setState({
                submitSuccess: true
            })
        })
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
            case "Default1":
                return this.setState({ profileIMG: name, selectedPic: Default1 })
            case "Default2":
                return this.setState({ profileIMG: name, selectedPic: Default2 })
            case "Default3":
                return this.setState({ profileIMG: name, selectedPic: Default3 })
            case "Default4":
                return this.setState({ profileIMG: name, selectedPic: Default4 })
            case "Default5":
                return this.setState({ profileIMG: name, selectedPic: Default5 })
            case "Default6":
                return this.setState({ profileIMG: name, selectedPic: Default6 })
            case "Default7":
                return this.setState({ profileIMG: name, selectedPic: Default7 })
            case "Default8":
                return this.setState({ profileIMG: name, selectedPic: Default8 })
            case "Default9":
                return this.setState({ profileIMG: name, selectedPic: Default9 })
            case "Default10":
                return this.setState({ profileIMG: name, selectedPic: Default10 })
            default:
                return this.setState({ selectedPic: '' })
        }
    }
    
    render() {
        
        const { isAuthenticated } = this.context;
        if (!isAuthenticated) {
            return <Redirect to='/log-in' />
        }
        if (this.state.submitSuccess) {
            return <Redirect to={`/user-profile/${this.state.userName}`} />
        }
        
        return (
            <>
            <Nav />
            <main>
            <Container className="mt-4">

                        <Header headerText="Edit Profile" display={false} />
                    <Row>
                    <div className="col-sm-12 col-md-6 offset-md-3">

                    <form onSubmit={this.handleFormSubmit}>
                        <h3><i className="fa fa-pencil"></i> Edit Profile</h3>
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
                        <hr style={{ 'borderColor': '#e2e2e2' }} />
                        <h3><i className="fa fa-pencil"></i> Game Services User Names</h3>
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

                        <h3><i className="fa fa-pencil"></i> Your Top Games</h3>
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
                    {this.state.submitSuccess ? <SuccessMessage success={true}/> : null}
                    </div>

                    </Row>

                    </Container>
            </main>
            </>
        )
    }
}
