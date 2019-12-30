import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import Header from "../components/Header/Header";
import { Redirect } from "react-router";
import { Input, TextArea, FormBtn } from "../components/Form/Form";
import { Container } from "../components/Grid/Grid";
import API from "../utils/API";

const CreateClan = () => {
  const { isAuthenticated, userData } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    clanMade: false,
    clanName: "",
    clanTimeZone: "",
    clanDescription: ""
  });

  // if (!isAuthenticated) {
  //     return <Redirect to='/log-in' />
  // }

  const handleFormSubmit = e => {
    e.preventDefault();
    const payLoad = { ...formData, clanFounder: userData.userName };
    const token = userData.token;

    API.createClan(payLoad, token).then((res) => {
      setFormData({
          clanMade: true
      })
    });
  };

  const handleFormChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

    return (
        <main>
            <Container>
                <Jumbotron>
                    <Header headerText="Create a New Clan" />
                </Jumbotron>
                <form onSubmit={handleFormSubmit}>
                    <label htmlFor="clanName">Clan Name</label>
                    <Input
                        id="clanName"
                        name="clanName"
                        placeholder="Clan Name"
                        onChange={handleFormChange}
                        value={formData.clanName}
                        required
                        pattern=".{3,20}"
                        title="Name must be 3 to 20 characters long"
                    />
                    <label htmlFor="clanTimeZone">Active Time Zone</label>
                    <Input
                        id="clanTimeZone"
                        name="clanTimeZone"
                        placeholder="Time Zone"
                        onChange={handleFormChange}
                        value={formData.clanTimeZone}
                        required
                    />
                    <label htmlFor="clanDescription">Clan Description</label>
                    <TextArea
                        id="clanDescription"
                        name="clanDescription"
                        placeholder="Clan Description"
                        onChange={handleFormChange}
                        value={formData.clanDescription}
                        rows="5"
                        required
                    />
                    <FormBtn
                        className="btn btn-success"
                        type="submit"
                    >
                        Create Clan
                    </FormBtn>
                </form>
            </Container>
        </main>
    );
}

export default CreateClan;
