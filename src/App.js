import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MyNavBarCode from "./components/MyNavCode";
import MyFooterCode from "./components/MyFooterCode";
import WelcomePageCode from "./components/WelcomePageCode";
import BookList from "./components/BookList";
import CommentArea from "./components/CommentArea";
import books from "./data/fantasy.json";

function App() {
  return (
    <div className="main-content">
      <MyNavBarCode />
      <Container className="mt-3">
        <WelcomePageCode subtitle="Esplora la nostra vasta collezione di libri fantasy! E fatti due risate sulle mie cards" />
        <Row>
          <Col md={8}>
            <BookList books={books} />
          </Col>
          <Col md={4}>
            {/* CommentArea ora è gestito dentro BookList per mostrare i commenti del libro selezionato */}
          </Col>
        </Row>
      </Container>
      <MyFooterCode />
    </div>
  );
}

export default App;
