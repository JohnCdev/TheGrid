import React, { useState } from 'react';
import Jumbotron from '../Jumbotron/Jumbotron';
import { Input, FormBtn } from '../Form/Form'; 




const FindClansSearch= () => {
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        const sessionName = sessionStorage.getItem('project3username')
        
    }

    return (
        <Jumbotron>
            <h1>Find CLan</h1>
           <section>
            <form onSubmit={handleSearchSubmit}>
                <label htmlFor="clanSearch"></label>
                <Input
                    id="clanSearch"
                    name="clanSearch"
                />
                <FormBtn type="submit">Search</FormBtn>
            </form>
            </section>
        </Jumbotron>

    )
}
export default FindClansSearch;