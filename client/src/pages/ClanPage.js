import React, { Component } from "react";
import API from "../utils/API";
import { Container, Row, Col } from "../components/Grid/Grid";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import Header from "../components/Header/Header";
import Feed from "../components/Feed/Feed";
import Nav from "../components/Nav/Nav";
import ProfileIcon from "../components/ProfileIcon/ProfileIcon";
import { AuthContext } from "../context/AuthContext";
import { Redirect, Link, withRouter } from "react-router-dom";
import PostForm from "../components/PostForm/PostForm";
import ClanPicture from '../components/ClanPicture/ClanPicture';
import './clanPage.css';

class ClanPage extends Component {
  state = {
    _id: "",
    clanName: "",
    clanReferenceName: "",
    clanDescription: "",
    clanFeed: "",
    clanFounder: "",
    clanMembers: "",
    clanTimeZone: "",
    clanFounded: "",
    clanImg: "Clan5"
  };
  static contextType = AuthContext;

  componentDidMount = event => {
    const clan = this.props.match.params.clanName;
    API.getClan(clan).then(response => {
      console.log(response);
      const clan = response.data.data[0];
      clan === undefined
        ? this.setState({ _id: null })
        : this.setState({
          _id: clan._id,
          clanName: clan.clanName,
          clanReferenceName: clan.clanReferenceName,
          clanDescription: clan.clanDescription,
          clanFeed: clan.clanFeed,
          clanFounder: clan.clanFounder,
          clanMembers: clan.clanMembers,
          clanTimeZone: clan.clanTimeZone,
          clanFounded: clan.clanFounded
        });
    });
    // api call to get clan feed
    this.reloadPosts();
    // this.setState({
    //     clanFeed: []
    // })
  };

  reloadPosts = () => {
    console.log("API to reload posts");
  };

  render() {
    const { isAuthenticated } = this.context;
    // if (!isAuthenticated) {
    //     return <Redirect to='/log-in' />
    // }

    return this.state._id === null ? (
      <>
      <Nav />
        <Header headerText={404} />
        <Jumbotron>
          <h1>User Not Found</h1>
          <h1>
            <span role="img" aria-label="Face With Rolling Eyes Emoji">
              🙄
            </span>
          </h1>
        </Jumbotron>
      </>
    ) : (
      <Container className="mt-4">
        <Nav />
        <Row>
          <div className="col-sm-12 col-md-3">
            <Jumbotron>
              <Header headerText={`${this.state.clanName}`} />
              <ProfileIcon large={false} />
              <p>
                {this.state.clanDescription}
              </p>
            </Jumbotron>
            <section>
              <h3>{`${this.state.clanName}'s Active Timezone: ${this.state.clanTimeZone}`}</h3>
              <h3>{`${this.state.clanName}'s Active Games:`}</h3>
              <ol>
                <li>Halo</li>
                <li>Pokemans</li>
                <li>CS</li>
                <li>Halo</li>
                <li>Pokemans</li>
                <li>CS</li>
                <li>Halo</li>
                <li>Pokemans</li>
                <li>CS</li>
              </ol>
            </section>
            <Link to="/create-clan">
              <button type="button" className="btn btn-primary">
                Create a Clan
              </button>
            </Link>
          </div>
          <div className="col-sm-12 col-md-9">
            <section>
              <PostForm reloadPosts={this.reloadPosts} clan={true} />
              {this.state.clanFeed.length > 0 ? (
                <Feed feed={this.state.clanFeed} name={this.state.clanName} />
              ) : (
                <h2>This clan has no feed.(Yet!)</h2>
              )}
            </section>
          </div>
        </Row>
      </Container>
    );
  }
}

export default withRouter(ClanPage);
