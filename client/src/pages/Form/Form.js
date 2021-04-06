import React, { useState } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";

function Form() {
  const [formObject, setFormObject] = useState({})

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.userFirst && formObject.userLast && formObject.userPhone && formObject.userEmail && formObject.userLocation) {
      console.log("about to save an ark");
      API.saveArk({
        userFirst: formObject.userFirst,
        userLast: formObject.userLast,
        userPhone: formObject.userPhone,
        userEmail: formObject.userEmail,
        userLocation: formObject.userLocation,
        serviceSynopsis: formObject.serviceSynopsis,
      })
        .catch(err => console.log(err));
    }
  };

    return (
      <Container fluid>
            <Jumbotron>
              <h1>What ARK Might You Need?</h1>
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
      </Container>
    );
  }


export default Form;
