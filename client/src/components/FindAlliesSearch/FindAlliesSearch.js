import React, { useState } from 'react';
import Jumbotron from '../Jumbotron/Jumbotron';
import { Input, FormBtn } from '../Form/Form';
import { List, ListItem } from '../List/List';
import './discoverListSearch.css';
import ProfileIcon from '../ProfileIcon/ProfileIcon';
import { Link } from 'react-router-dom';

const FindAlliesSearch = () => {
    const [allySearch, setSearch] = useState('');
    const [allyResult, setAllyResult] = useState([
        { id: 1, name: "John", pic: "Default1" },
        { id: 2, name: "Shawn", pic: "Default2" },
        { id: 3, name: "Charles", pic: "Default3" },
        { id: 4, name: "John", pic: "Default1" },
        { id: 5, name: "Shawn", pic: "Default2" },
        { id: 6, name: "Charles", pic: "Default3" },
        { id: 7, name: "John", pic: "Default1" },
        { id: 8, name: "Shawn", pic: "Default2" },
        { id: 9, name: "Charles", pic: "Default3" }
    ]);
    const [isLoading, setIsLoading] = useState(false);

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        console.log(allySearch);
        const sessionName = sessionStorage.getItem('project3username');
    }
    const onChangeHandler = (e) => {
        setSearch(e.target.value);
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
                        <FormBtn type="submit">Search</FormBtn>
                    </form>
                </div>
            </Jumbotron>
            <div className="discoverList">
                {allyResult.length > 0 ?
                    allyResult.map((result) => {
                        return (
                            <div className="discoverListItem rounded" key={result.id}>
                                <div style={{'textAlign': 'right', 'marginRight':'1em'}}>
                                    <ProfileIcon large={true} profileImg={result.pic} />
                                </div>
                                <div style={{'textAlign': 'left'}}>
                                    <span>{result.name}</span>
                                </div>
                                <div style={{'textAlign': 'left'}}>
                                    <Link to={`/user-profile/${result.name}`}>
                                        <button className="btn btn-primary">Go to Profile</button>
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                    :
                    <h3>No Results</h3>
                }
            </div>
        </section>
    )
}
export default FindAlliesSearch;