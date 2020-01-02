import React, { useState } from 'react';
import Jumbotron from '../Jumbotron/Jumbotron';
import { Input, FormBtn } from '../Form/Form';
import './discoverListSearch.css';
import ProfileIcon from '../ProfileIcon/ProfileIcon';
import { Link } from 'react-router-dom';
import API from '../../utils/API';

const FindClansSearch = () => {
    const [clanSearch, setSearch] = useState('');
    const [clanResult, setClanResult] = useState([
        // { _id: 1, userName: "John", profileImage: "Default1" },
        // { _id: 2, userName: "Shawn", profileImage: "Default2" },
        // { _id: 3, userName: "Charles", profileImage: "Default3" },
        // { _id: 4, userName: "John", profileImage: "Default1" },
        // { _id: 5, userName: "Shawn", profileImage: "Default2" },
        // { _id: 6, userName: "Charles", profileImage: "Default3" },
        // { _id: 7, userName: "John", profileImage: "Default1" },
        // { _id: 8, userName: "Shawn", profileImage: "Default2" },
        // { _id: 9, userName: "Charles", profileImage: "Default3" }
    ]);
    const [isLoading, setIsLoading] = useState(false);

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        
    }

    const onChangeHandler = (e) => {
        setSearch(e.target.value);
    }

    return (
        <Jumbotron>
            <h1>Find Clan</h1>
            <section>
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
            </section>
        </Jumbotron>

    )
}
export default FindClansSearch;