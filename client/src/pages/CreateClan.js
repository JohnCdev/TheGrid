import React, { useContext, useState } from 'react';
import { AuthContext } from "../context/AuthContext";
import Jumbotron from '../components/Jumbotron/Jumbotron';
import Header from '../components/Header/Header';
import { Redirect } from 'react-router';
import { Input, TextArea, FormBtn } from '../components/Form/Form';
import { Container } from '../components/Grid/Grid';

const CreateClan = () => {
    const { isAuthenticated } = useContext(AuthContext);
    const { formData, setFormData } = useState({
        clanName: '',
        clanTimeZone: '',
        clanDescription: ''
    });

    if (!isAuthenticated) {
        return <Redirect to='/log-in' />
    }

    const handleFormSubmit = e => {
        e.preventDefault();
        console.log(`${formData} Submitted`)
    }

    const handleFormChange = e => {
        setFormData(e.target.value);
    }

    return (
        <main>
            <Container>
                <Jumbotron>
                    <Header headerText="Create a New Clan" />
                </Jumbotron>
                <section>
                    <form onSubmit={handleFormSubmit}>
                        <label htmlFor="clanName">Clan Name</label>
                        <Input
                            id="clanName"
                            name="clanName"
                            placeholder="Clan Name"
                            onChange={handleFormChange}
                            value={formData}
                        />
                        <label htmlFor="clanTimeZone">Active Time Zone</label>
                        <Input
                            id="clanTimeZone"
                            name="clanTimeZone"
                            placeholder="Time Zone"
                            onChange={handleFormChange}
                            value={formData}
                        />
                        <label htmlFor="clanDescription">Clan Description</label>
                        <TextArea
                            id="clanDescription"
                            name="clanDescription"
                            placeholder="Clan Description"
                            onChange={handleFormChange}
                            value={formData}
                            rows="5"
                        />
                        <FormBtn
                            className="btn btn-success"
                            type="submit"
                        >
                            Create Clan
                    </FormBtn>
                    </form>
                </section>
            </Container>
        </main>
    );
}

export default CreateClan;