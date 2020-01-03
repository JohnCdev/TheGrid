import React, { useState } from 'react';
import Jumbotron from '../Jumbotron/Jumbotron';
import { Input, FormBtn } from '../Form/Form';
import '../FindAlliesSearch/discoverListSearch.css';
import ProfileIcon from '../ProfileIcon/ProfileIcon';
import { Link } from 'react-router-dom';
import API from '../../utils/API';

const FindClansSearch = () => {
    const [clanSearch, setSearch] = useState('');
    const [clanResult, setClanResult] = useState([
        { _id: 1, clanName: "Expo", profileImg: "Clan1" },
        { _id: 2, clanName: "Shawn", profileImg: "Clan2" },
        { _id: 3, clanName: "Charles", profileImg: "Clan3" },
        { _id: 4, clanName: "John", profileImg: "Clan1" },
        { _id: 5, clanName: "Shawn", profileImg: "Clan2" },
        { _id: 6, clanName: "Charles", profileImg: "Clan3" },
        { _id: 7, clanName: "John", profileImg: "Clan1" },
        { _id: 8, clanName: "Shawn", profileImg: "Clan2" },
        { _id: 9, clanName: "Charles", profileImg: "Clan3" }
    ]);
    const [isLoading, setIsLoading] = useState(false);

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true)
        API.searchForClans(clanSearch)
            .then(response => {
                console.log(response.data)
                setIsLoading(false)
                setClanResult(response.data)
            })
            .catch(er => setIsLoading(false))
    }

    const onChangeHandler = (e) => {
        setSearch(e.target.value);
    }

    const searchResult = () => {
        return (
            <>
                {clanResult.length > 0 ?
                    clanResult.map((result) => {
                        return (
                            <div className="discoverListItem rounded" key={result._id}>
                                <div style={{ 'textAlign': 'right', 'marginRight': '1em' }}>
                                    <ProfileIcon large={true} profileImg={result.profileImg} />
                                </div>
                                <div style={{ 'textAlign': 'left' }}>
                                    <span>{result.clanName}</span>
                                </div>
                                <div style={{ 'textAlign': 'left' }}>
                                    <Link to={`/clans/${result.clanReferenceName}`}>
                                        <button className="btn btn-primary">Go to Clan's Page</button>
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                    :
                    <h3>No Results</h3>}
            </>
        );
    }

    return (
        <section >
            <Jumbotron>
                <h1>Find Clans</h1>
                <div>
                    <form onSubmit={handleSearchSubmit}>
                        <label htmlFor="clanSearch"></label>
                        <Input
                            id="clanSearch"
                            name="clanSearch"
                            onChange={onChangeHandler}
                            value={clanSearch}
                        />
                        <FormBtn className="btn btn-primary" type="submit">Search</FormBtn>
                    </form>
                </div>
            </Jumbotron>
            <div className="discoverList">
                {isLoading ?
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                    :
                    searchResult()
                }
            </div>
        </section >
    )
}

export default FindClansSearch;