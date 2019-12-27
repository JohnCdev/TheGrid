import React, { useState } from 'react';
import Jumbotron from '../Jumbotron/Jumbotron';
import { Input, FormBtn } from '../Form/Form'; 




const FindClansSearch= () => {
    const [clanSearch, setSearch] = useState('');

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        const sessionName = sessionStorage.getItem('project3username')
        
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