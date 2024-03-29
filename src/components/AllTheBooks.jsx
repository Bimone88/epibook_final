import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import books from "../data/fantasy.json"; // Assicurati che il percorso sia corretto per il tuo progetto

const AllTheBooks = () => {
  return (
    <Container>
      <Row>
        {books.map((book) => (
          <Col
            key={book.asin}
            xs={12}
            md={6}
            lg={4}
            xl={3}
            className="card-column"
          >
            {/*  Ogni Card ora ha un attributo data-testid="book-card" */}
            <Card className="mb-4 card-custom" data-testid="book-card">
              <Card.Img variant="top" src={book.img} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>Price: ${book.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AllTheBooks;
