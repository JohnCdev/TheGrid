import React, { useState } from 'react';
import Jumbotron from '../Jumbotron/Jumbotron';
import { Input, FormBtn } from '../Form/Form';
import '../FindAlliesSearch/discoverListSearch.css';
import ProfileIcon from '../ProfileIcon/ProfileIcon';
import { Link } from 'react-router-dom';
import API from '../../utils/API';
import Spinner from '../Spinner/Spinner';

const FindClansSearch = () => {
    const [clanSearch, setSearch] = useState('');
    const [clanResult, setClanResult] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true)
        API.searchForClans(clanSearch)
            .then(response => {
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
                                    <Link to={`/clans/${result.clanReferenceName}`}>
                                        <ProfileIcon large={true} profileImg={result.profileImg} />
                                    </Link>
                                </div>
                                <div style={{ 'textAlign': 'left' }}>
                                    <span className="clanName">{result.clanName}</span>
                                </div>
                                <div style={{ 'textAlign': 'left' }}>
                                    <Link to={`/clans/${result.clanReferenceName}`}>
                                        <button className="btn btn-primary">Go to Page</button>
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                    :
                    <p>No Results</p>}
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
                    <Spinner />
                    :
                    searchResult()
                }
            </div>
        </section >
    )
}

export default FindClansSearch;