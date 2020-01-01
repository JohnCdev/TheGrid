import React, { Component } from "react";
import API from "../utils/API";
import { Container, Row, Col } from "../components/Grid/Grid";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import Header from "../components/Header/Header";
import Feed from "../components/Feed/Feed";
import { AuthContext } from "../context/AuthContext";
import { Redirect, Link, withRouter } from "react-router-dom";
import PostForm from "../components/PostForm/PostForm";
import ClanPicture from '../components/ClanPicture/ClanPicture';
import './clanPage.css';

class ClanPage extends Component {
  state = {
    _id: "",
    clanName: "",
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
        <main className="clanPage">
          <Container className="mt-4">
            <Row>
              <div className="clanSidebar rounded col-sm-12 col-md-3">
                <div className="clanHeader rounded pb-3">
                  <Header headerText={`${this.state.clanName}`} />
                  <ClanPicture clanImg={this.state.clanImg} large={false} />
                  <p>
                    {this.state.clanDescription}
                  </p>
                </div>
                <div className="clanSidebarInfo">
                  <h4>{`${this.state.clanName}'s Active Timezone: ${this.state.clanTimeZone}`}</h4>
                  <h4>{`${this.state.clanName}'s Active Games:`}</h4>
                  <ul>
                    <li>Halo</li>
                    <li>Pokemans</li>
                    <li>CS</li>
                    <li>Halo</li>
                    <li>Pokemans</li>
                    <li>CS</li>
                    <li>Halo</li>
                    <li>Pokemans</li>
                    <li>CS</li>
                  </ul>
                </div>
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
          </Container >
        </main>
      );
  }
}

export default withRouter(ClanPage);
