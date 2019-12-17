import React, { useState, useEffect } from "react";
import { Container } from "../components/Grid/Grid";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import AlliesBar from "../components/AlliesBar/AlliesBar";
import Feed from "../components/Feed/Feed";

const FeedPage = () => {
    const [feed, setFeed] = useState([
        { id: 1, userName: "John", timeStamp: "xx:xx:xx", content: "awofinawfpaihninwfpainawinawolkinflokinaglnbedglknedgljkrsglknijgd;lkn" },
        { id: 1, userName: "John", timeStamp: "xx:xx:xx", content: "awofinawfpaihninwfpainawinawolkinflokinaglnbedglknedgljkrsglknijgd;lkn" },
        { id: 1, userName: "John", timeStamp: "xx:xx:xx", content: "awofinawfpaihninwfpainawinawolkinflokinaglnbedglknedgljkrsglknijgd;lkn" },
        { id: 1, userName: "John", timeStamp: "xx:xx:xx", content: "awofinawfpaihninwfpainawinawolkinflokinaglnbedglknedgljkrsglknijgd;lkn" }
    ]);

    return (
        <main>
            <AlliesBar />
            <Container>
                {feed.length > 0 ?
                    <Feed feed={{...feed}}/> :
                    <h1>You have no feed</h1>}
            </Container>
        </main>
    )
}

export default FeedPage;

