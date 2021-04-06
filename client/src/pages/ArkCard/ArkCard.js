import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";

function Detail() {
  const [ark, setArk] = useState({})

  const { id } = useParams();
  
  // Add code to get the book with an _id equal to the id in the route param
  // e.g. http://localhost:3000/books/:id
  // The book id for this route can be accessed using the useParams hook
  // from react-router-dom.
  useEffect(() => {
    API.getArk(id)
      .then(res => setArk(res.data))
      .catch(err => console.log(err));
  }, [])

  return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>{ark.userFirst} {ark.userLast}</h1>
              <h4>Telephone: {ark.userPhone}</h4>
              <h4>Email: {ark.userEmail}</h4>
              <h4>Location: {ark.userLocation}</h4>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>ARK Description</h1>
              <h4>{ark.serviceSynopsis}</h4>
              <br />
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link style={{fontSize: 20}} to="/arkview">← Back to ARKs</Link>
          </Col>
        </Row>
      </Container>
    );
  }

export default Detail;
