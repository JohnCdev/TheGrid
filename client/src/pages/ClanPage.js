import React, { Component } from 'react';
import API from '../utils/API';
import { Container, Row, Col } from '../components/Grid/Grid';
import Jumbotron from '../components/Jumbotron/Jumbotron';
import Header from '../components/Header/Header';
import Feed from '../components/Feed/Feed'
import ProfileIcon from '../components/ProfileIcon/ProfileIcon';
import { AuthContext } from '../context/AuthContext';
import { Redirect, Link } from 'react-router-dom';
import PostForm from '../components/PostForm/PostForm';

export default class ClanPage extends Component {
    state = {
        clanName: 'That Clan',
        clanImg: '',
        clanTimeZone: 'EST',
        clanFeed: [
            { id: 1, userName: "John", timeStamp: "12:12:12", content: "Yo, this is an awesome post.", profileImg: "https://pbs.twimg.com/profile_images/897250392022540288/W1T-QjML_400x400.jpg" },
            { id: 2, userName: "Shawn", timeStamp: "12:12:12", content: "Yo, this is an awesome post.", profileImg: "https://pbs.twimg.com/profile_images/897250392022540288/W1T-QjML_400x400.jpg" },
            { id: 3, userName: "Charles", timeStamp: "12:12:12", content: "Yo, this is an awesome post.", profileImg: "https://pbs.twimg.com/profile_images/897250392022540288/W1T-QjML_400x400.jpg" },
            { id: 4, userName: "Tripp", timeStamp: "12:12:12", content: "Yo, this is an awesome post.", profileImg: "https://pbs.twimg.com/profile_images/897250392022540288/W1T-QjML_400x400.jpg" }
        ]
    }
    static contextType = AuthContext;

    componentDidMount = event => {
        // api call to get clan feed
        this.reloadPosts();
        // this.setState({
        //     clanFeed: []
        // })
    }

    reloadPosts = () => {
        console.log('API to reload posts');
    }

    render() {
        const { isAuthenticated } = this.context;
        if (!isAuthenticated) {
            return <Redirect to='/log-in' />
        }

        return (

            <Container className="mt-4">
                <Row>
                    <div className="col-sm-12 col-md-3">
                        <Jumbotron>
                            <Header headerText={`${this.state.clanName}`} />
                            <ProfileIcon large={false} />
                            <p>
                                Clan Description wodinadown wdowidn d owaidhjaodiha wdoih oh awdoihdw.
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
                            {this.state.clanFeed.length > 0 ?
                                <Feed feed={this.state.clanFeed} name={this.state.clanName} /> :
                                <h2>This clan has no feed.(Yet!)</h2>}
                        </section>
                    </div>
                </Row>
            </Container>

        );
    }
}