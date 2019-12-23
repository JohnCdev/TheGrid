import React, { useState } from 'react';
import Jumbotron from '../Jumbotron/Jumbotron';
import { Input, FormBtn } from '../Form/Form';





const FindAlliesSearch = () => {
    const [allieSearch, setSearch] = useState('');

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        const sessionName = sessionStorage.getItem('project3username')
        
    }
    const onChangeHandler = (e) => {
        setSearch(e.target.value);
    }

    return (
        <div>
            <Jumbotron>
            <h1>Recruit Allies</h1>
            <section>
            <form onSubmit={handleSearchSubmit}>
                <label htmlFor="findAllies"></label>
                <Input
                    id="postComment"
                    name="postComment"
                    onChange={onChangeHandler}
                    value={allieSearch}
                />
                <FormBtn type="submit">Search</FormBtn>
            </form>
            </section>
            </Jumbotron>

        </div>


    )
}
export default FindAlliesSearch;