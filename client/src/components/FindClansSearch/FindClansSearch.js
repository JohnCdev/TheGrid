import React, { useState } from 'react';
import Jumbotron from '../Jumbotron/Jumbotron';
import { TextArea } from '../Form/Form';
import Header from '../Header/Header';




const FindClansSearch= () => {

    return (
        <Jumbotron>
            <h1>Find Clan</h1> 
                <form>
                    <label>
                        Name:
                    <input type="text" name="name" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
        </Jumbotron>

    )
}
export default FindClansSearch;