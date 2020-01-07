import React, { useState } from 'react';
import Jumbotron from '../Jumbotron/Jumbotron';
import { Input, FormBtn } from '../Form/Form';
import './discoverListSearch.css';
import ProfileIcon from '../ProfileIcon/ProfileIcon';
import { Link } from 'react-router-dom';
import API from '../../utils/API';
import Spinner from '../Spinner/Spinner';

const FindAlliesSearch = () => {
    const [allySearch, setSearch] = useState('');
    const [allyResult, setAllyResult] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleSearchSubmit = (e) => {
        setIsLoading(true)
        e.preventDefault();
        API.searchForUsers(allySearch)
            .then(response => {
                setIsLoading(false)
                setAllyResult(response.data)
            })
            .catch(er => setIsLoading(false))
    }

    const onChangeHandler = (e) => {
        setSearch(e.target.value);
    }

    const searchResult = () => {
        return (
            <>
                {allyResult.length > 0 ?
                    allyResult.map((result) => {
                        return (
                            <div className="discoverListItem rounded" key={result._id}>
                                <div style={{ 'textAlign': 'right', 'marginRight': '1em' }}>
                                    <ProfileIcon large={true} profileImg={result.profileImage} />
                                </div>
                                <div style={{ 'textAlign': 'left' }}>
                                    <span>{result.userName}</span>
                                </div>
                                <div style={{ 'textAlign': 'left' }}>
                                    <Link to={`/user-profile/${result.userName}`}>
                                        <button className="btn btn-primary">Go to Profile</button>
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
        <section>
            <Jumbotron>
                <h1>Recruit Allies</h1>
                <div>
                    <form onSubmit={handleSearchSubmit}>
                        <label htmlFor="findAllies"></label>
                        <Input
                            id="postComment"
                            name="postComment"
                            onChange={onChangeHandler}
                            value={allySearch}
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
        </section>
    )
}
export default FindAlliesSearch;