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
        { _id: 1, userName: "Expo", profileImage: "Clan1" },
        { _id: 2, userName: "Shawn", profileImage: "Clan2" },
        { _id: 3, userName: "Charles", profileImage: "Clan3" },
        { _id: 4, userName: "John", profileImage: "Clan1" },
        { _id: 5, userName: "Shawn", profileImage: "Clan2" },
        { _id: 6, userName: "Charles", profileImage: "Clan3" },
        { _id: 7, userName: "John", profileImage: "Clan1" },
        { _id: 8, userName: "Shawn", profileImage: "Clan2" },
        { _id: 9, userName: "Charles", profileImage: "Clan3" }
    ]);
    const [isLoading, setIsLoading] = useState(false);

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true)
        API.searchForClans(clanSearch)
            .then(response => {
                console.log(response.data)
                // setIsLoading(false)
                // setAllyResult(response.data)
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
                                    <ProfileIcon large={true} profileImg={result.profileImage} />
                                </div>
                                <div style={{ 'textAlign': 'left' }}>
                                    <span>{result.userName}</span>
                                </div>
                                <div style={{ 'textAlign': 'left' }}>
                                    <Link to={`/clans/${result.userName}`}>
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
                        <FormBtn type="submit">Search</FormBtn>
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