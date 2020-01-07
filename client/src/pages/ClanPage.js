import React, { Component } from "react";
import API from "../utils/API";
import { Container, Row, Col } from "../components/Grid/Grid";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import Header from "../components/Header/Header";
import Feed from "../components/Feed/Feed";
import Nav from "../components/Nav/Nav";
import { AuthContext } from "../context/AuthContext";
import { Redirect, Link, withRouter } from "react-router-dom";
import PostForm from "../components/PostForm/PostForm";
import ClanPicture from "../components/ClanPicture/ClanPicture";
import JoinClan from "../components/JoinClan/JoinClan";
import "./clanPage.css";
import Brand from "../images/Logos/grid.png";


class ClanPage extends Component {
  state = {
    _id: "",
    clanName: "",
    clanReferenceName: "",
    clanDescription: "",
    clanFeed: [],
    clanFounder: "",
    clanMembers: "",
    clanTimeZone: "",
    clanFounded: "",
    clanImg: "",
    clanGames: [],
    clanDiscord: "",
    clanRenderMemberContext: ""
  };
  static contextType = AuthContext;

  componentDidMount = event => {
    const clan = this.props.match.params.clanName;
    API.getClan(clan).then(response => {
      const clan = response.data.data[0];

      const setTheState = (obj, clanMemberContext) => {
        if (clanMemberContext === "member") {
          this.setState({
            _id: clan._id,
            clanName: obj.clanName,
            clanReferenceName: obj.clanReferenceName,
            clanDescription: obj.clanDescription,
            clanFeed: obj.clanFeed,
            clanFounder: obj.clanFounder,
            clanMembers: obj.clanMembers,
            clanTimeZone: obj.clanTimeZone,
            clanFounded: obj.clanFounded,
            clanImg: obj.clanProfileImage,
            clanGames: obj.clanActiveGame,
            clanDiscord: obj.clanDiscord,
            clanRenderMemberContext: clanMemberContext
          });
        } else {
          this.setState({
            _id: clan._id,
            clanName: clan.clanName,
            clanReferenceName: clan.clanReferenceName,
            clanDescription: clan.clanDescription,
            clanFeed: "",
            clanFounder: clan.clanFounder,
            clanMembers: clan.clanMembers,
            clanTimeZone: clan.clanTimeZone,
            clanFounded: clan.clanFounded,
            clanImg: clan.clanProfileImage,
            clanGames: clan.clanActiveGame,
            clanDiscord: ""
          });
        }
      };

      if (clan) {
        const { userData } = this.context;
        const clan = response.data.data[0];
        if (clan.clanMembers.includes(userData.userName)) {
          setTheState(clan, "member");
        } else {
          setTheState(clan, "not-member");
        }
      } else {
        this.setState({ _id: null });
      }

      // api call to get clan feed
      this.reloadPosts();
    });
    // this.setState({
    //     clanFeed: []
    // })
  };

  reloadPosts = () => {
    console.log(this.state.clanName)
    API.getClanPosts({ clanName: this.state.clanName })
      .then(response => {
        this.setState({
          clanFeed: response.data
        });
      })
      .catch(err => console.log(err));
  };

  joinClan = () => {
    const { userData, joinedClan } = this.context;

    const payLoad = {
      userName: userData.userName,
      clanName: this.state.clanName
    };
    API.joinClan(payLoad).then(response => {
      console.log(response.data);
      if (response.data.alreadyAMember) {
        console.log("already a member");
      } else if (response.data.nModified === 1) {
        console.log(this.state.clanName);
        joinedClan(this.state.clanName);
        this.setState({ clanRenderMemberContext: 'member' })
      } else {
        //error occured
      }
    });
  };

  leaveClan = () => {
    const { userData, leftClan } = this.context;
    const payLoad = {
      userName: userData.userName,
      clanName: this.state.clanName
    };
    API.leaveClan(payLoad).then(response => {
      console.log(response);
      leftClan(this.state.clanName);
      this.setState({ clanRenderMemberContext: 'not-member' })
    });
  };

  render() {
    const { isAuthenticated } = this.context;

    console.log(this.state)

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
    ) : this.state.clanRenderMemberContext === "member" ? (
      <>
        <Nav />
        <main>
          <Container className="mt-4">
            <Row>
              <div className="col-sm-12 col-md-3">
                <div>
                  <div style={{ width: "100%", height: "200px", textAlign: "center" }}
                  >
                    <ClanPicture clanImg={this.state.clanImg} />
                  </div>

                  <div style={{ width: "100%", height: "15", textAlign: "center" }}
                  >
                    <Header headingLevel={3} headerText={`${this.state.clanName}`} />
                  </div>
                  <hr />

                  <p>{this.state.clanDescription}</p>
                </div>
                <hr />
                <h4>{`Active Timezone: ${this.state.clanTimeZone}`}</h4>
                <hr />
                {!this.state.clanDiscord === "" ? (
                  <>
                    <h4>{`Discord: ${this.state.clanDiscord}`}</h4>
                    <hr />
                  </>
                ) : (
                    <>
                      <h4>No current Discord</h4>
                      <hr />
                    </>
                  )}
                {this.state.clanGames.length !== 0 ? (
                  <>
                    <h4>{`${this.state.clanName}'s Active Games:`}</h4>
                    <ul>
                      {this.state.clanGames.map((game, i) => (
                        <li key={i}>{game}</li>
                      ))}
                    </ul>
                    <hr />
                  </>
                ) : null}
                <h4>{`Clan Founder: ${this.state.clanFounder}`}</h4>
                <JoinClan
                  joinClan={this.joinClan}
                  clanName={this.state.clanName}
                  leaveClan={this.leaveClan}
                />
              </div>
              <div className="col-sm-12 col-md-9">
                <section>
                  <PostForm
                    reloadPosts={this.reloadPosts}
                    clan={true}
                    name={this.state.clanName}
                  />
                  {this.state.clanFeed.length > 0 ? (
                    <Feed
                      feed={this.state.clanFeed}
                      name={this.state.clanName}
                    />
                  ) : (
                      <p>This clan has no feed.(Yet!)</p>
                    )}
                </section>
              </div>
            </Row>
          </Container>
        </main>
      </>
    ) : (
          <>
            <Nav />
            <main>
              <Container className="mt-4">
                <Row>
                  <div className="col-sm-12 col-md-3">
                    <div>
                      <Header headerText={`${this.state.clanName}`} />
                      <ClanPicture clanImg={this.state.clanImg} />
                      <p>{this.state.clanDescription}</p>
                    </div>
                    <h4>{`Active Timezone: ${this.state.clanTimeZone}`}</h4>
                    <hr />
                    {this.state.clanGames.length !== 0 ? (
                      <>
                        <h4>{`${this.state.clanName}'s Active Games:`}</h4>
                        <ul>
                          {this.state.clanGames.map((game, i) => (
                            <li key={i}>{game}</li>
                          ))}
                        </ul>
                        <hr />
                      </>
                    ) : null}
                    <h4>{`Clan Founder: ${this.state.clanFounder}`}</h4>
                    <JoinClan
                      joinClan={this.joinClan}
                      clanName={this.state.clanName}
                      leaveClan={this.leaveClan}
                    />
                  </div>
                </Row>
              </Container>
            </main>
          </>
        );
  }
}

export default withRouter(ClanPage);
