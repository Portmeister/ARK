import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

function Arks() {
  const [arks, setArks] = useState([])
  const [formObject, setFormObject] = useState({})

  useEffect(() => {
    loadArks()
  }, [])

  function loadArks() {
    API.getArks()
      .then(res => 
        setArks(res.data)
      )
      .catch(err => console.log(err));
  };

  function deleteArk(id) {
    API.deleteArk(id)
      .then(res => loadArks())
      .catch(err => console.log(err));
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.userFirst && formObject.userLast && formObject.userPhone && formObject.userEmail && formObject.userLocation) {
      API.saveArk({
        userFirst: formObject.userFirst,
        userLast: formObject.userLast,
        userPhone: formObject.userPhone,
        userEmail: formObject.userEmail,
        userLocation: formObject.userLocation,
        serviceSynopsis: formObject.serviceSynopsis,
        providerSynopsis: formObject.providerSynopsis
      })
        .then(res => loadArks())
        .catch(err => console.log(err));
    }
  };

    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What ARKs Might You Need?</h1>
            </Jumbotron>
            <form>
              <Input
                onChange={handleInputChange}
                name="userFirst"
                placeholder="First Name (required)"
              />
              <Input
                onChange={handleInputChange}
                name="userLast"
                placeholder="Last Name (required)"
              />
              <Input
                onChange={handleInputChange}
                name="userPhone"
                placeholder="Phone Number (required)"
              />
              <Input
                onChange={handleInputChange}
                name="userEmail"
                placeholder="Email (required)"
              />
              <Input
                onChange={handleInputChange}
                name="userLocation"
                placeholder="City, State (required)"
              />
              <TextArea
                onChange={handleInputChange}
                name="serviceSynopsis"
                placeholder="Needed ARK (Optional)"
              />
              <TextArea
                onChange={handleInputChange}
                name="providerSynopsis"
                placeholder="How you can help (Optional)"
              />
              <FormBtn
                disabled={!(formObject.userFirst && formObject.userLast && formObject.userPhone && formObject.userEmail && formObject.userLocation)}
                onClick={handleFormSubmit}
              >
                Submit ARK
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Current ARKs Needing Providers</h1>
            </Jumbotron>
            {arks.length ? (
              <List>
                {arks.map(ark => (
                  <ListItem key={ark._id}>
                    <Link to={"/arks/" + ark._id}>
                      <strong>
                        {ark.userFirst} {ark.userLast}
                        {ark.userPhone}
                        {ark.userEmail}
                        {ark.userLocation}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => deleteArk(ark._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }


export default Arks;
