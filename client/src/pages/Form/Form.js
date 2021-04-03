import React, { useState } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";

function Arks() {
  const [formObject, setFormObject] = useState({})

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
              <h3>Complete Form & Submit</h3>
              <Input
                onChange={handleInputChange}
                name="userFirst"
                placeholder="First Name"
              />
              <Input
                onChange={handleInputChange}
                name="userLast"
                placeholder="Last Name"
              />
              <Input
                onChange={handleInputChange}
                name="userPhone"
                placeholder="Phone Number"
              />
              <Input
                onChange={handleInputChange}
                name="userEmail"
                placeholder="Email"
                type="email"
              />
              <Input
                onChange={handleInputChange}
                name="userLocation"
                placeholder="City, State"
              />
              <TextArea
                onChange={handleInputChange}
                name="serviceSynopsis"
                placeholder="How Can Others Help You?"
              />
              <FormBtn
                disabled={!(formObject.userFirst && formObject.userLast && formObject.userPhone && formObject.userEmail && formObject.userLocation)}
                onClick={handleFormSubmit}
              />
            </form>
          </Col>
        </Row>
      </Container>
    );
  }


export default Arks;
